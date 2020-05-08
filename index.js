const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

morgan.token('body', function (req, res) { return JSON.stringify(req.body) })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
    }
    else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const newPerson = {...req.body}

    if (!newPerson.name) {
        return res.status(400).json({
            error: 'name missing'
        })
    }

    if (!newPerson.number) {
        return res.status(400).json({
            error: 'number missing'
        })
    }

    if (persons.find(person => person.name === newPerson.name)) {
        return res.status(400).json({
            error: 'name already exists'
        })
    }

    newPerson.id = Math.floor(Math.random() * 1000000)
    persons = persons.concat(newPerson)

    res.json(newPerson)
})

app.get('/info', (req, res) => {
    res.send(`
Phonebook has info for ${persons.length} people<br>
<br>
${new Date().toString()}
    `)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
