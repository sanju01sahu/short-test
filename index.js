const express = require("express");
const {firstUniqueChar} = require("./firstUniqueChar");
const {timeStampLog} = require("./middleware/timeStampLog");


const app = express();

app.use(express.json());
// app.use(timeStampLog());

app.get("/", (res, req)=>{
    req.send("API Working")
})

app.post("/first-unique-character", timeStampLog, function (req, res){
    try {
        const input = req[body['text_to_process']]
        console.log(req.body, input)
        let sol = firstUniqueChar(input);
        let date = new Date
        const result = {
            "first_unique_char":sol[0],
            "first_unique_char_index": sol[1],
            "timestamp": date,
        }

        res.status(200).send(result);
    } catch (error) {
        res.status(500).json({err:"internal server error"});
    }
})


app.listen(8080, ()=>{
    console.log("server running @port 8080")
})