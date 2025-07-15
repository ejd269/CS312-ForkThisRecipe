// index.js
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

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

// Routes
app.get("/", (req, res) => {
	res.render("index");
});

app.post("/", (req, res) => {
	res.render("index");
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

// Start server
app.listen(port, () => {
	console.log(`✅ ForkThisRecipe server running at http://localhost:${port}`);
});
