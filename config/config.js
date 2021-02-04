const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const creds = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        dialect: "postgres"
    }
}

module.exports = creds;