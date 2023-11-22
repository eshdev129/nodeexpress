import express from "express"; 

const app = express();

app.use(express.json());

app.use(routes);

app.use((erro, req, res, next) => {
  console.error(erro.stack);
  res.status(500).send("Algo deu Errado👺💩👹👿");
});



