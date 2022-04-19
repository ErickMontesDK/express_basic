//Usando un objeto express
const express=require(`express`)
//App de Express
const app=express()
//Puerto en que vamos a ver nuestra app: localhost:300
const port=3000

//path inicial, responderá a la url localhost:300
app.get('/',(req,res)=>{
    res.send('Hello World!')
})

//Con esto inicializamos esta app
app.listen(port,()=>{
    console.log('Example app listening on port ${port}')
})