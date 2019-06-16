// Update with your config settings.
require("dotenv").config();
const pg = require("pg");
pg.defaults.ssl = true;

const localPGConnection = {
  host: "localhost", //change to postgres server
  database: "projects",
  user: "", // Need credentials from user
  password: ""
};

const prodDbConnection = process.env.DATABASE_URL || localPGConnection;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/folio.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds/development"
    }
  },

  production: {
    client: "pg",
    connection: prodDbConnection,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds/production"
    }
  }
};
