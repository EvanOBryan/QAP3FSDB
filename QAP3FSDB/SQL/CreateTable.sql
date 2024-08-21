CREATE TABLE items(
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	quantity INTEGER NOT NULL
);
INSERT INTO items (name, quantity) VALUES ('Item 1',10);
INSERT INTO items (name, quantity) VALUES ('Item 2',20);

