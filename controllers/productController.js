const db = require('../config/db');

// CREATE - Add a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    if (!name || price === undefined) {
      return res.status(400).json({ message: 'name and price are required' });
    }

    const [result] = await db.query(
      'INSERT INTO products (name, description, price) VALUES (?, ?, ?)',
      [name, description || null, price]
    );

    res.status(201).json({
      id: result.insertId,
      name,
      description,
      price
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error creating product' });
  }
};

// READ - Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error fetching products' });
  }
};

// READ - Get a single product by id
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error fetching product' });
  }
};

// UPDATE - Update a product by id
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const [existing] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await db.query(
      'UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?',
      [
        name ?? existing[0].name,
        description ?? existing[0].description,
        price ?? existing[0].price,
        id
      ]
    );

    res.json({ message: 'Product updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error updating product' });
  }
};

// DELETE - Remove a product by id
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const [existing] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await db.query('DELETE FROM products WHERE id = ?', [id]);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error deleting product' });
  }
};
