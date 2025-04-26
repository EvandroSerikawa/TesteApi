
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;


// Permitir requisições de outros domínios (CORS simples)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});


// Permitir acessar o index.html
app.use(express.static(__dirname));

// Rota para buscar posts
app.get('/posts', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar posts' });
  }
});


app.get('/comments', async (req, res) => {
    try {
      const response2 = await axios.get('https://jsonplaceholder.typicode.com/comments');
      res.json(response2.data);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar comments' });
    }
  });


  app.get('/photos', async (req, res) => {
    try {
      const response3 = await axios.get('https://jsonplaceholder.typicode.com/photos');
      res.json(response3.data);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar comments' });
    }
  }); 
  

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
