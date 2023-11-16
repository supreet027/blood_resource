const mongoose = require("mongoose");

mongoose.connect(
    //paste url
)
    .then(
        () =>{
             console.log('MongoDB Connected...');
        }
    ).catch(
        () =>{
            console.error(`Error connecting to MongoDB`);
        }
    )

    module.exports= mongoose;