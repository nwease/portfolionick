const mongoose = require('mongoose')

var myDB = 'mongodb://localhost/portfolio';

mongoose.connect(myDB, function () {
  if (mongoose.connection.readyState == 1) {
    console.log('connected to mongoDB')
    console.log('on' + myDB)
  } else {
    console.log('problems connecting to mongod mongoose connection is: ' + mongoose.connection.readyState)
  }
})

const carSchema = new mongoose.Schema({
  title: String,
  doors: String,
  company: String
})

const Car = mongoose.model("Car", carSchema)

//Create a new cone
//Car.create({title: 'Camry', company: 'Toyota', doors: '4', price: '25000'}, function(err, data) {
//  console.log(data)
//})

//Car.create({title: 'Civic', company: 'Honda', doors: '4', price: '25000'}, function(err, data) {
//  console.log(data)
//})

// Show all
Car.find({}, function(err, data) {
  console.log(data)
})

// Find one or many
//Car.find({title: 'Civic'}, function(err, data) {
//  console.log(data)
//})

//Car.update({title: 'Civic'}, {$set: {title: 'Civic', doors: 2}}, function(err, data){
//})

Car.findById('59f89efce42c1663992895d2', function (err, car) {

  car.set({ company: 'Honda' })
  car.save(function (err, updatedCar) {
    if (err) return handleError(err)
    console.log(updatedCar)
  })
})
