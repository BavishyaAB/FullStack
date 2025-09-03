const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.qotvslt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const PhoneBookSchema = new mongoose.Schema({
  name: String,
  number: Number,
})

const PhoneBook = mongoose.model('PhoneBook', PhoneBookSchema)
if (process.argv.length === 3) {
  PhoneBook.find({}).then((result) => {
    result.forEach((entry) => {
      console.log(entry)
    })
    mongoose.connection.close()
  })
} else {
  const phoneBookEntry = new PhoneBook({
    name: process.argv[3],
    number: process.argv[4],
  })

  phoneBookEntry.save().then((result) => {
    console.log('phone book entry saved!', result)
    mongoose.connection.close()
  })
}
