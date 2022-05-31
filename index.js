const express = require("express");
const app = express();
const axios = require('axios')

const api = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=70e61f779bb913976fed9eb537c26b69';


const PORT = 3000;

app.use(express.json());

const prime = (date) => {
    num = Math.sqrt(date)
    for (let i = 2; i <= num; i++)
        if (date % i === 0) return false;
    return date > 1;
}


app.get('/getData', async (req, res) => {
    let get_date = new Date();
    let today_date = get_date.getDate();
    //let today_date = 32;
    if (prime(today_date)) {
        let result = await axios.get(api);
        console.log(result)
        res.status(200).send(result.data)
    } else {
        res.status(422).send({ error: "Today's Date is not Prime" });
    }
})
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
