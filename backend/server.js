import express from 'express';
import bodyParser from 'body-parser';
import recipesRouter from './routes/recipes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/recipes', recipesRouter);

app.get('/', (req, res) => {
  res.send('Recipe API');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
