// Update with your config settings.

module.exports = {

  development: {
    // client - database driver
    client: 'sqlite3',
    connection: {
      filename: './data/recipes.db3'  // << creates a db3 file for me
    },
    useNullAsDefault: true,
  },

/*
  We’ll need to update the location (or desired location) of the database(which
  is the filename:) as well as add the useNullAsDefault option. The latter option
  prevents crashes when working with sqlite3.
*/

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
