import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import Router from "./routes/routes.js"


const app = express()

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"))
    })
} else {
    app.get("/", (req, res) => {
        res.send("Api running")
    })
}



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use('/', Router)

mongoose.connect("mongodb+srv://v1s:admin@cluster0.wz14y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{


})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))
app.listen(8000, () => {
    console.log("Cервер запущен на порту 8000")
})
