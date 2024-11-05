module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'devWebpro',
      password: process.env.DB_PASSWORD || 'amixte123',
      database: process.env.DB_NAME || 'social_network_db',
      port: process.env.DB_PORT || 5432,
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST, // Variable de entorno para el host en Render
      user: process.env.DB_USER, // Variable de entorno para el usuario
      password: process.env.DB_PASSWORD, // Variable de entorno para la contraseña
      database: process.env.DB_NAME, // Variable de entorno para la base de datos
      port: process.env.DB_PORT || 5432,
      ssl: { rejectUnauthorized: false }, // SSL requerido en producción
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  }
};
