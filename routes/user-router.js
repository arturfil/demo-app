const express = require('express');
const UserModel = require('../models/user-model.js');
const router = express.Router();

router.get('/users', (req, res, next) => {
  UserModel.find((err, allUsers) => {
    if(err) {
      next(err);
      return;
    }

    res.locals.listOfUsers = allUsers;

    res.render('user-views/index.ejs');
  });
});

router.get('/users/new', (req, res, next) => {
  res.render('user-views/user-form.ejs');
});

router.post('/users', (req, res, next) => {
  const theUser = new UserModel({
    name: req.body.userName,
    weight: req.body.userWeight,
    age: req.body.userAge,
    gender: req.body.userGender,
    activityLevel: req.body.userActivityLevel,
    goal: req.body.userGoal
  });

  theUser.save((err) => {
    if(err) {
      next(err);
      return;
    }

    res.redirect('/users');
  });
});

router.get('/users/:id', (req, res, next) => {
  UserModel.findById(
    req.params.id,
    (err, userFromDb) => {
      if(err) {
        next(err);
        return;
      }
      res.locals.userInfo = userFromDb;
      res.render('user-views/user-detail.ejs');
    }
  )
});

router.get('/users/:id/edit', (req, res, next) => {
  UserModel.findById(
    req.params.id,
    (err, userFromDb) => {
      if(err) {
        next(err);
        return;
      }
      res.locals.userInfo = userFromDb;

      res.render('user-views/edit-users.ejs');
    }
  )
});

router.post('/users/:id', (req, res, next) => {
  UserModel.findById(
    req.params.id,
    (err, userFromDb) => {
      if(err) {
        next(err);
        return;
      }

      userFromDb.name = req.body.userName;
      userFromDb.weight = req.body.userWeight;
      userFromDb.age = req.body.userAge;
      userFromDb.gender = req.body.userGender;
      userFromDb.activityLevel = req.body.userActivityLevel;
      userFromDb.goal = req.body.userGoal;
      userFromDb.save((err) => {
        if(err) {
          next(err);
          return;
        }
        res.redirect('/users');
      });
    }
  )
})

router.post('/users/:id/delete', (req, res, next) => {
  UserModel.findByIdAndRemove(
    req.params.id,

    (err, userInfo) => {
      if(err) {
        next(err);
        return;
      };
      res.redirect('/users')
    }
  )
})

module.exports = router;
