import { makeApp } from "./setup/app";

const PORT = 3000;

const server = makeApp({
    logger: true
});

server.listen(PORT, err => {
    if (err) console.log(err);
    console.log(`Server listening on port ${PORT}`);
});
