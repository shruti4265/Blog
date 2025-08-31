import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port=3000;
const db = new pg.Client({
    user: "postgres",
    host:"localhost",
    database:"blog",
    password: "shruti",
    port: 5432,
});
db.connect();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",async (req,res)=>{
    try{
        let result = await db.query("SELECT * from posts");
        let posts = result.rows.map(row => ({title:row.title,content:row.content}));
        res.render("index.ejs",{posts:posts});
    }catch(err){
        console.log(err);
        res.status(500).send("Error fetching posts from the database.");
    }
});
app.get("/NewPost",(req,res)=>{
    res.render("NewPost.ejs");
});
app.get("/read-more/:post_index",async(req,res)=>{
    try{
        const id = parseInt(req.params.post_index) + 1;
        const result = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
        const { title, content } = result.rows[0];
        res.render("post.ejs", { title, content });
    }catch(err){
        console.log(err);
        res.status(500).send("Error fetching post from the database.");
    }
});
app.get("/delete/:post_index", async (req, res) => {
  try {
    const id = parseInt(req.params.post_index) + 1; 
    await db.query("DELETE FROM posts WHERE id = $1", [id]);
    await db.query(`
      WITH reordered AS (
        SELECT id, ROW_NUMBER() OVER (ORDER BY id) AS new_id
        FROM posts
      )
      UPDATE posts
      SET id = reordered.new_id
      FROM reordered
      WHERE posts.id = reordered.id;
    `);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting post");
  }
});
app.get("/about",(req,res)=>{
    res.render("about.ejs");
});
app.post ("/compose",async (req,res)=>{
    try{
        const title= req.body.title;
        const content= req.body.content;
        const result = await db.query("SELECT COALESCE(MAX(id), 0) + 1 AS new_id FROM posts");
        const newId = result.rows[0].new_id;
        await db.query("INSERT INTO posts (id,title,content) values ($1,$2,$3)",[newId,title,content]);
        res.redirect("/");
    }catch(err){
        console.log(err);
        res.status(500).send("Failed to add post.");
    }
});
app.listen(port,()=>{
    console.log(`Listining on port ${port}`);
});