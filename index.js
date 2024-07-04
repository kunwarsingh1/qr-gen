const app = require('express')()
const qrcode = require('qrcode')

app.get('/',(req,res)=>{
    res.send('hello world').status(200)
})


app.get('/qr/',(req,res)=>{
    try {
        const url = req.query.url
    // var url = 'https://google.com'
    const qr = qrcode.toDataURL(url,(err,QRcode)=>{

    if(err){
        res.status(400).send('nope')
    }
    else{
        res.send(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR</title>
</head>
<body>
    <div>
       <img src=${QRcode} >
    </div>
</body>
</html>
            `).status(200)
    }    
})
    } catch (error) {
        res.send(error).status(400)
    }
})


app.listen(3000,console.log('listening at 3000'))