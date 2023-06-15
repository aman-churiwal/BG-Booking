import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors())

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})