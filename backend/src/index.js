const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
* Rota / Recurso
*/

/**
* Metodos HTTP
*
* GET: Buscar / Listar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma infomração no back-end
* DELETE: Deletear uma informação no back-end
*/

/**
* Tipos de parâmetros:
*
* Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, couchDB, ETC..
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */


