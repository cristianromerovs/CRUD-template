# Template CRUD Nodejs + Express + PostgresSQL
## Descargar template
Para descargar este template se debe clonar este repositorio en su carpeta de desarrollo.
```sh
git clone https://github.com/cristianromerovs/CRUD-template.git
```
## Requisitos
[Node.js](https://nodejs.org/en/download).
[PostgreSQL](https://www.postgresql.org/download/).
## Instalación proyecto
Una vez descargado el proyecto se deben instalar las dependencias utilizando las siguientes instrucciones.
```sh
cd template-crud
npm i
```
## Inicialización DDBB
Después de instalar las dependencias del proyecto debemos crear la base de datos correspondiente para el template utilizando SQL.
```sql
CREATE DATABASE postgres;
\c postgres;
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(20),
    apellido VARCHAR(20)
);

INSERT INTO usuarios (id, nombre, apellido) VALUES (1, 'Test1', 'User1');
INSERT INTO usuarios (id, nombre, apellido) VALUES (2, 'Test2', 'User2');
INSERT INTO usuarios (id, nombre, apellido) VALUES (3, 'Test3', 'User3');
```
## Creación de .env
Se debe crear un archivo .env en la raíz del proyecto, debes utilizar los valores que creaste en la DDBB de Postgres.
```sh
DB_USER = *******
DB_HOST = *******
DB_NAME = *******
DB_PASSWORD = *******
DB_PORT = *******
```
## Iniciar el proyecto
Una vez instalado todo, para iniciar el modo de desarrollo debemos ejecutar lo siguiente en el terminal:
```sh
npm run dev
```