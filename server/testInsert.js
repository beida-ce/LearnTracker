// testInsert.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/educationDB") // veya .env'den alın
  .then(() => {
    console.log("Mongo connected");
    const Education = mongoose.model("Education", new mongoose.Schema({
      title: String,
      notes: String,
      completed: Boolean,
    }));

    return Education.create({
      title: "Test",
      notes: "Sadece test verisi",
      completed: false
    });
  })
  .then((doc) => {
    console.log("Eklendi:", doc);
    process.exit();
  })
  .catch((err) => {
    console.error("Hata:", err);
    process.exit(1);
  });
