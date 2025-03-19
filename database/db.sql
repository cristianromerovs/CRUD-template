CREATE DATABASE users;
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(20),
    apellido VARCHAR(20)
);

INSERT INTO usuarios (id, nombre, apellido) VALUES (1, 'Test1', 'User1');
INSERT INTO usuarios (id, nombre, apellido) VALUES (2, 'Test2', 'User2');
INSERT INTO usuarios (id, nombre, apellido) VALUES (3, 'Test3', 'User3');