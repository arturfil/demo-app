const express = require('express');
const bcrypt = require('bcrypt');

const AccountModel = require('../models/account-model.js');

const router = express.Router();

router.get('/signup', (req, res, next) => {
  res.render('auth-views/login.ejs');
});

router.post('/process-signup', (req, res, next) => {
  if(req.body.signup === "" || req.bodysignupPassword === "") {
    res.locals.feedbackMessage = "We need both email and password";
    res.render('auth-views/login.ejs');
    return;
  }

  //check the database to see if there is a user with that email
  AccountModel.findOne(
    {email: req.body.emailInput},
    (err, accountFromDb) => {
      if(err) {
        next(err);
        return;
      }

      if(accountFromDb) {
        res.locals.feedbackMessage = 'Email Taken!';
        res.render('auth-views/login.ejs');
        return;
      }

      //if we get to this line, it means there's not a previous user with that email, now you salt their password.

      const salt = bcrypt.genSaltSync(10);
      const scrambledPass = bcrypt.hashSync(req.body.passwordInput, salt);

      const theAccount = new AccountModel({
        email: req.body.emailInput,
        encryptedPassword: scrambledPass
      });

      theAccount.save((err) => {
        if(err) {
          next(err);
          return;
        }
        res.redirect('/');
      });
    }
  );
});

module.exports = router;
