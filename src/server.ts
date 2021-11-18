import express from "express";
import './Config/Dotenv'

const app = express(); // Criamos uma instância do express

// Adicionamos uma rota de teste
app.get("/hello-world", (request: express.Request, response: express.Response) => {
  response.json({
    message: "Hello World",
  });
});

// Adicionamos uma rota de teste com parametros
app.get("/hello-world/:nome", (request: express.Request, response: express.Response) => {
  const { nome } = request.params;
  response.json({
    message: `Olá ${nome}!`,
  });
});

// Iniciamos o nosso servidor web
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.clear()
  // eslint-disable-next-line no-console
  console.log(`Aplicação escutando na porta '${process.env.PORT}' com NODE_ENV: '${process.env.NODE_ENV}'`);
  // eslint-disable-next-line no-console
  console.log(process.env.NODE_ENV)
});
