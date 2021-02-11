import express from 'express'
import mongoose from 'mongoose'
import Persona from './dbPersona.js';
import Cors from 'cors'
//  JAVI ADIVINA QUIÉN ES LA SIGUIENTE PERSONA !!!!

// Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:GtjEAZB9vVAoW56z@cluster0.cgnjy.mongodb.net/pruebaJavi?retryWrites=true&w=majority'

// Midd
app.use(express.json())
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hola Javiii'));

app.post('/persona', (req, res) => {
  const dbPersona = req.body;

  Persona.create(dbPersona, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
});

app.get('/persona', (req, res) => {
  Persona.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

// Listener
app.listen(port, () => console.log(`escuchando en ${port}`));
