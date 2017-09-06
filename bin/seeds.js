const mongoose = require('mongoose');
const UserModel = require('../models/user-model.js');

mongoose.connect('mongodb://localhost/demo-app');

const userArray = [
  {
    name: "Arturo Filio",
    weight: 170,
    age: 25,
    gender: "male",
    activityLevel: "medium",
    goal: "gain muscle"
  },
  {
    name: "Fred Burton",
    weight: 190,
    age: 29,
    gender: "male",
    activityLevel: "medium",
    goal: "loose weight"
  },
  {
    name: "Francine Dumont",
    weight: 130,
    age: 18,
    gender: "female",
    activityLevel: "high",
    goal: "mantain physicallity"
  }
];

UserModel.create(
  userArray,
  (err, userAfterSave) => {
    if(err) {
      console.log('Creation Error');
      console.log(err);
      return;
    }

    userAfterSave.forEach((oneUser) => {
      console.log('Succes!');
      console.log('New User: ' + oneUser.name + " added");
    });
  }
);
