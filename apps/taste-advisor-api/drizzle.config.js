const { defineConfig } = require('drizzle-kit');

require('dotenv').config();

exports.default = defineConfig({
  out: './drizzle',
  schema: './src/db/schema.js',
  dialect: 'postgresql',
  introspect: {
    casing: 'camel',
  },
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
