require('dotenv').config();
let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ahmedHodhod:2512011@cluster0.vmnpfpx.mongodb.net/fcc-mongodb-and-mongoose?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

let Person;

let personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  let ahmed = new Person({name: "Ahmed", age: 22, favoriteFoods:["checken, pizza"]});
  ahmed.save((error, data) => {
    if (error) {
      console.log(error);
    } else {
      done(null, data);
    }
  })
};

let arrayOfPeople = [
 {name: "Mahmoud", age: 25,favoriteFoods: ["rice"]}, 
 {name: "mohamed", age: 18,favoriteFoods: ["beef"]}, 
 {name: "Ahmed", age: 22, favoriteFoods:["checken, pizza"]},
]
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (error, people) => {
    if (error) return console.log(error);
      done(null, people);
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, personFound) => {
    if (err) return console.log(err);
    done(null, personFound);
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, data) => {
    if (err) return console.log(err);
    done(null, data);
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    if (err) return console.log(err);
    done(null, data);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, person) => {
    if(err) return console.log(err);
    person.favoriteFoods.push(foodToAdd);
    person.save((err, updatedPerson) => {
      if(err) return console.log(err);
      done(null, updatedPerson);
    })
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedDoc) => {
    if(err) return console.log(err);
    done(null, updatedDoc);
  })
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedDoc) => {
      if(err) return console.log(err);
      done(null, removedDoc);
    }); 
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (err, res) => {
    if(err) return console.log(err);
    done(null, res);
  })
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods: foodToSearch})
  .sort({name: 1})
  .limit(2)
  .select({age: 0})
  .exec((err, data) => {
    if(err) return console.log(err);
    done(null, data);
  })
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
