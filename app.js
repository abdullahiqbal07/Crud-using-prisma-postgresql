const express = require("express");
require("dotenv").config();
const { PrismaClient } = require('@prisma/client')
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const prisma = new PrismaClient();

app.get("/", (req, res) => {
res.send("Welcome Tou Prisma, Express And PSQL Tutorial");
});


app.listen(port, () => {
console.log(`Server listening on ${port}`);
});