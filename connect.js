const mongoose = require("mongoose");
async function connecToMongoDB() {
  return mongoose.connect(
    "mongodb+srv://bhargavpatel6832:kKf7okjhUM18Zl4Q@urlshortener.w7dddig.mongodb.net/?retryWrites=true&w=majority&appName=URLshortener"
  ).then(()=>{
    console.log("MongoDB Connected");
  });
}

module.exports = {
    connecToMongoDB
};
