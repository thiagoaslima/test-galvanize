import { postgresHelper } from "./infra/postgres/postgres-helper";
import { makeApp } from "./setup/app";
import { PostgresConnection } from "./setup/configuration";

const PORT = 3000;

const server = makeApp({
    logger: true
});

postgresHelper
    .connect(PostgresConnection)
    .then(() => {
        server.listen(PORT, err => {
            if (err) console.log(err);
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(`Unable to connect to the database.`);
        console.error(err);
    })
