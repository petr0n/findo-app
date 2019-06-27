const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// const authRoutes = require("./auth");



// // to prevent CORS error
// router.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept,Authorization');
//   if (req.method === 'OPTIONS') {
//       res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
//       return res.status(200).json({});
//   }
//   next();
// });


// API Routes
router.use("/api", apiRoutes);
// router.use("/auth", authRoutes);

// If no API routes are hit, send the React app
router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});
module.exports = router;