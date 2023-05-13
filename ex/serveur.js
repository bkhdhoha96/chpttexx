//creat new express app ans savr t as app
const express = require ('express');
const app = express();
const port=4000;



const closed = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHour();
return (day !== 1 && day !== 5 && hour < 14 && hour > 9  );
}

//midelware faction ili bch tdmlifichier mta3i sous forme static
// close
app.use(function(req,res,next){
    if (closed()){
        next();
    }
    else {
        res.sendFile(__dirname+'/pages/Close.html')
        console.log('This App is not available !')
        app.get('/Close',(req,res) => {
            res.sendFile(__dirname+'/pages/Close.html');
        });
    }
});
app.use( express.static('pages'));
app.get('/',(req,res) => {
    res.sendFile(__dirname+'/pages/Home.html');
});
app.get('/Contact',(req,res) => {
    res.sendFile(__dirname+'/pages/Contact.html');
});
app.get('/Service',(req,res) => {
    res.sendFile(__dirname+'/pages/Service.html');
});


<link rel="stylesheet" href="/style.css"></link> //css
app.listen(port,(err)=>{
    err?console.log(err):console.log(`go to the port number ${port}`)
})