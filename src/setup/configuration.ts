import * as dotenv from "dotenv";
dotenv.config();

function loadRequiredEnvVariable(key: string): string {
    const value = process.env[key];

    if (value === null || typeof value === 'undefined') {
        throw new Error(`Add variable ${key} into the .env file`)
    }

    return value;
}

export const CurrencyAPI = {
    url: 'https://currency-api-mock.highbond-s3.com/live',
    apiKey: ''
}

export const PostgresConnection = {
    user: loadRequiredEnvVariable('PGUSER'),
    host: loadRequiredEnvVariable('PGHOST'),
    database: loadRequiredEnvVariable('PGDATABASE'),
    password: loadRequiredEnvVariable('PGPASSWORD'),
    port: Number(loadRequiredEnvVariable('PGPORT')),
}
