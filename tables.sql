CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    username TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name TEXT,
    quantity TEXT,
    purchase_date TEXT,
    expiry_date TEXT,
    description TEXT,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);