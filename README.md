# Product CRUD API (Node.js + Express + MySQL)

A simple REST API demonstrating Create, Read, Update, Delete on a `products` table.

## 1. Requirements
- Node.js installed (v18+ recommended)
- MySQL running (XAMPP's MySQL works fine)

## 2. Setup
```bash
npm install
cp .env.example .env
```
Open `.env` and fill in your database credentials (for XAMPP defaults, user is usually `root` with an empty password).

## 3. Create the database
- Open phpMyAdmin (via XAMPP control panel) and run the contents of `schema.sql`,
  OR from a terminal:
```bash
mysql -u root -p < schema.sql
```

## 4. Run the server
```bash
npm run dev   # auto-restarts on changes (uses nodemon)
# or
npm start
```
You should see: `Server running on http://localhost:5000`

## 5. Test the API
Use Postman, Insomnia, or curl.

| Action | Method | URL |
|---|---|---|
| Create product | POST | http://localhost:5000/api/products |
| Get all products | GET | http://localhost:5000/api/products |
| Get one product | GET | http://localhost:5000/api/products/:id |
| Update product | PUT | http://localhost:5000/api/products/:id |
| Delete product | DELETE | http://localhost:5000/api/products/:id |

Example create request body (JSON):
```json
{
  "name": "Wireless Mouse",
  "description": "Ergonomic wireless mouse",
  "price": 19.99
}
```

## Project structure
```
crud-app/
├── config/
│   └── db.js
├── controllers/
│   └── productController.js
├── routes/
│   └── productRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── schema.sql
└── server.js
```
