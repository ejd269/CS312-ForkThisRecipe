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

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});