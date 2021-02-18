//Load Driver
const  MongoClient  = require('mongodb').MongoClient

//Crate MongoDB Client
const url = 'mongodb+srv://superadmin:-.-5xpXw@cluster0.lfmue.mongodb.net/sample_weatherdata?retryWrites=true&w=majority'
const client = new MongoClient(url, {useNewUrlParser: true})

async function run(){
    try{
        //Create Connection to MongoDB
        await client.connect()
    
        //Connect to database   
        const db = client.db('sample_weatherdata')

        //Retrieve collection
        const collection = db.collection('data')

        //Query data
        const query = {callLetters : "RIGG"}
        const Point = await collection.findOne(query)
        console.log(Point)
    }catch(e){
        console.log(e)
    }finally{
        await client.close()
    }
}

run().catch(console.dir)