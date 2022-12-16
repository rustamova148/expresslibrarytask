const express = require('express')
const app = express()
const fs = require('fs') 


fs.readFile('./data.json', 'utf8', (err, data) => {
    if (!err) {
        app.get('/',(req,res)=>{
            res.send(data)
        })
    } else {
      console.error(err);
    }
  });

const PORT = 3000

app.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server ${PORT}`)
    }
    else{
        console.log('Error')
    }
})
