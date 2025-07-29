// index.js
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import recipesRouter from "./backend/routes/recipes.js";
import pool from "./backend/db.js";

const app = express();
const port = 3000;

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Explicit in case it's needed
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use("/recipes", recipesRouter);

// Routes
app.get("/", async (req, res) => {
        try {
                const { rows } = await pool.query('SELECT * FROM recipes ORDER BY id DESC');
                res.render("index", { recipes: rows });
        } catch (err) {
                console.error(err);
                res.status(500).send("Database error");
        }
});

app.post("/", async (req, res) => {
        try {
                const { rows } = await pool.query('SELECT * FROM recipes ORDER BY id DESC');
                res.render("index", { recipes: rows });
        } catch (err) {
                console.error(err);
                res.status(500).send("Database error");
        }
});

app.post("/submit", (req, res) => {
        res.render("submit");
});

app.post("/login", (req, res) => {
	res.render("login");
});

app.post("/profile", (req, res) => {
	res.render("profile");
});

app.post("/signup", (req, res) => {
	res.render("signup");
});

app.post("/about", (req, res) => {
	res.render("about");
});

app.post("/search", (req, res) => {
        res.render("search");
});

app.get("/stats", async (req, res) => {
        try {
                const recipes = await pool.query('SELECT COUNT(*) FROM recipes');
                const comments = await pool.query('SELECT COUNT(*) FROM comments');
                res.render("stats", {
                        recipeCount: recipes.rows[0].count,
                        commentCount: comments.rows[0].count
                });
        } catch (err) {
                console.error(err);
                res.status(500).send("Database error");
        }
});

// Start server
app.listen(port, () => {
	console.log(`✅ ForkThisRecipe server running at http://localhost:${port}`);
});
