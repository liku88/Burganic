const mongoose = require("mongoose");
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex : true
}).then(() => {
    console.log("Database Connection Succesfull...")
}).catch((error) => {
    console.log(error);
})