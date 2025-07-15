# ForkThisRecipe

**A recipe sharing platform where users can discover, share, and "fork" recipes to create their own variations.**

---

## Features

- **Recipe Discovery**: Browse a collection of user-submitted recipes.
- **Recipe Sharing**: Upload and share your own creations.
- **Recipe Forking**: Create variations of existing recipes while maintaining attribution.
- **User Authentication**: Secure registration and login system.
- **Search & Filter**: Find recipes by ingredients, cuisine type, difficulty, or cooking time.
- **User Profiles**: View personal recipe collections and favorites.
- **Ratings & Reviews**: Leave feedback on recipes.
- **Responsive Design**: Fully functional on desktop and mobile devices.

---

## Technologies Used

### Frontend
- React.js
- HTML5/CSS3
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- PostgreSQL

### Tools & Libraries
- Axios
- Bcrypt
- JSON Web Tokens (JWT)
- dotenv
- EJS (if used server-side for rendering)
- Multer (for file uploads)
- [Include others as used]

---

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL database

### Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/ejd269/CS312-ForkThisRecipe.git
cd CS312-ForkThisRecipe
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Environment Configuration:**

Create a `.env` file in the root directory and add the following:

```
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

4. **Database Setup:**

```bash
# Add your database setup commands here
# Example:
npm run db:migrate
npm run db:seed
```

5. **Start the application:**

```bash
# Development mode
npm run dev

# Production mode
npm start
```

6. **Open your browser:**

Visit [http://localhost:3000](http://localhost:3000)

---

## Usage

### For Users

- **Sign Up / Login**: Access full platform features.
- **Browse Recipes**: Explore user-submitted dishes.
- **Search**: Quickly find recipes by ingredients or name.
- **Fork a Recipe**: Build on existing recipes.
- **Add a Recipe**: Share your own creations.
- **Rate & Review**: Leave feedback on others' recipes.

### For Developers

```bash
# Run tests
npm test

# Run linter
npm run lint

# Build frontend for production
npm run build
```

---

## API Documentation

### Authentication

| Method | Endpoint               | Description              |
|--------|------------------------|--------------------------|
| POST   | `/api/auth/register`   | Register a new user      |
| POST   | `/api/auth/login`      | Login user               |
| POST   | `/api/auth/logout`     | Logout user              |

### 🍽Recipes

| Method | Endpoint                  | Description                      |
|--------|---------------------------|----------------------------------|
| GET    | `/api/recipes`            | Get all recipes                  |
| GET    | `/api/recipes/:id`        | Get a specific recipe            |
| POST   | `/api/recipes`            | Create a new recipe *(auth)*     |
| PUT    | `/api/recipes/:id`        | Update recipe *(auth)*           |
| DELETE | `/api/recipes/:id`        | Delete recipe *(auth)*           |
| POST   | `/api/recipes/:id/fork`   | Fork a recipe *(auth)*           |

### Users

| Method | Endpoint                    | Description                  |
|--------|-----------------------------|------------------------------|
| GET    | `/api/users/:id`            | Get user profile             |
| PUT    | `/api/users/:id`            | Update user profile *(auth)* |
| GET    | `/api/users/:id/recipes`    | Get user’s recipes           |

> *Add additional endpoints as implemented.*

---

## Project Structure

```
CS312-ForkThisRecipe/
├── index.js                # Main server file
├── db.js                   # Database connection setup
├── routes/
│   └── recipes.js          # API routes for recipes
├── views/                  # EJS views (if used)
├── public/                 # Static frontend assets
├── schema.sql              # SQL schema definition
├── package.json
└── .env                    # Environment variables (not committed)
```

---

## Contributing

We welcome contributions to ForkThisRecipe! To contribute:

1. Fork the repo
2. Create your feature branch: `git checkout -b my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-feature`
5. Open a pull request

Please follow our code style and conventions.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- Thanks to the CS 312 teaching staff for guidance and support throughout the project.

