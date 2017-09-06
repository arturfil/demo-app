const express = require('express');
const ParkModel = require('../models/park-model.js');
const router = express.Router();

router.get('/parks', (req, res, next) => {
  ParkModel.find((err, allParks) => {
    if(err) {
      next(err);
      return;

    }

    res.locals.listOfParks = allParks;

    res.render('park-views/park-list');
  });
});

router.get('/parks/new', (req, res, next) => {
  res.render('park-views/park-form.ejs');
})


router.post('/parks', (req, res, next) => {
  const thePark = new ParkModel({
    name: req.body.parkName,
    address: req.body.parkAddress,
    imageUrl: req.body.parkImage
  });

  thePark.save((err) => {
    if(err && thePark.errors) {
      res.locals.errorMessages = thePark.errors;
      res.render('park-views/park-form.ejs');

      return;
    }

    if(err && !thePark.errors) {
      res.locals.errorMessages = theProduct.errors;
      next(err);
      return;
    }
    res.redirect('/parks');
  });
});

router.get('/parks/:parkId', (req, res, next) => {
  ParkModel.findById(
    req.params.parkId,
    (err, parkFromDb) => {
      if(err) {
        next(err);
        return;
      }
      res.locals.parkInfo = parkFromDb;
      res.render('park-views/park-details.ejs');
    }
  )
});

router.get('/parks/:parkId/edit', (req, res, next) => {
  ParkModel.findById(
    req.params.parkId,
    (err, parkFromDb) => {
      if(err) {
        next(err);
        return;
      }
      res.locals.parkInfo = parkFromDb;
      res.render('park-views/edit-park.ejs');
    }
  )
});

router.post('/parks/:parkId', (req, res, next) => {
  ParkModel.findById(
    req.params.parkId,

    (err, parkFromDb) => {
      if(err) {
        next(err);
        return;
      }
      parkFromDb.name = req.body.parkName,
      parkFromDb.address = req.body.parkAddress,
      parkFromDb.imageUrl = req.body.parkImage
      parkFromDb.save((err) => {
        if(err) {
        next(err);
        return;
        }
        res.redirect('/parks');
      })
    }
  )
});

router.post('/parks/:parkId/delete', (req, res, next) => {
  ParkModel.findByIdAndRemove(
    req.params.parkId,
    (err, parkInfo) => {
      if(err) {
        next(err);
        return;
      }
      res.redirect("/parks");
    }
  );
});

module.exports = router;
