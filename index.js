import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        res.render("index.ejs");
    } catch (error) {
        console.error("Failed to complete request:", error.message);
        res.render("index.ejs", {
            error: error.message,
        })
    }
});

app.post("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    res.render("submit.ejs");
});

app.post("/login", (req, res) => {
    res.render("login.ejs");
});

app.post("/profile", (req, res) => {
    res.render("profile.ejs");
});

app.post("/signup", (req, res) => {
    res.render("signup.ejs");
});

app.post("/about", (req, res) => {
    res.render("about.ejs");
});

app.post("/search", (req, res) => {
    res.render("search.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});