const express = require('express');
const router  = express.Router();

/* Get home page. */
router.get('/', (req, res, next) => {
  res.render('home');
});

router.get('/about', (req, res, next) => {
  res.render('about.ejs');
});

router.get('/services', (req, res, next) => {
  res.render('services.ejs');
})

// router.get('/goals', (req, res, next) => {
//   res.render('your-goals.ejs');
// })

// router.get('/profile', (req, res, next) => {
//   res.render('your-profile.ejs');
// })

router.get('/login', (req, res, next) => {
  res.render('login');
})

module.exports = router;
