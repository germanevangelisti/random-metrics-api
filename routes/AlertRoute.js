const webpush = require('../web-push');
let pushSubscripton;
var router = require('express').Router()
var AlertController = require ('../controllers/AlertController')

router.get('/search', function(req, res) {
  AlertController.search(req, res)
})
router.get('/', function(req, res) {
  AlertController.list(req, res)
})
router.get('/:id', function(req, res) {
  AlertController.show(req, res)
})
router.post('/', function(req, res) {
  AlertController.create(req, res)
})
router.put('/:id', function(req, res) {
  AlertController.update(req, res)
})
router.delete('/:id', function(req, res) {
  AlertController.remove(req, res)
})

router.post("/subscription", async (req, res) => {
  pushSubscripton = req.body;
  res.status(201).json();
});

router.post("/new-alert", async (req, res) => {
  const { alert } = req.body;
  console.log('message' + alert);
  // Payload Notification
  const payload = JSON.stringify({
    title: "My Custom Notification",
    message: alert.name
  });
  res.status(200).json();
  try {
    await webpush.sendNotification(pushSubscripton, payload);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router