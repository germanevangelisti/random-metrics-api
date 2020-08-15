var Alert = require('../models/Alert')
module.exports = {
search: function (req, res) {
  var q = req.query.q
  Alert.find({ $text: { $search: q } }, function(err, alert) {
    if(err) {
      return res.status(500).json({
        message: 'Error en la búsqueda'
      })
    }
    return res.json(alert)
  })
},
list: function(req, res) {
  Alert.find(function(err, alert){
    if(err) {
      return res.status(500).json({
        message: 'Error obteniendo la alert'
      })
    }
    return res.json(alert)
  })
},
show: function(req, res) {
  var id = req.params.id
  Alert.findOne({_id: id}, function(err, alert){
    if(err) {
      return res.status(500).json({
        message: 'Se ha producido un error al obtener la alert'
      })
    }
    if(!alert) {
      return res.status(404).json( {
        message: 'No tenemos esta alert'
      })
    }
    return res.json(alert)
  })
},
create: function(req, res) {
  var alert = new Alert (req.body)
  alert.save(function(err, alert){
    if(err) {
      return res.status(500).json( {
        message: 'Error al guardar la alert',
        error: err
      })
    }
    return res.status(201).json({
      message: 'saved',
      _id: alert._id
    })
  })
},
update: function(req, res) {
  var id = req.params.id
  Alert.findOne({_id: id}, function(err, alert){
    if(err) {
      return res.status(500).json({
        message: 'Se ha producido un error al guardar la alert',
        error: err
      })
    }
    if(!alert) {
      return res.status(404).json({
        message: 'No hemos encontrado la alert'
      })
    }
    console.log(alert)
    console.log(req.body.name)
    alert.name = req.body.name
    alert.metricSource =  req.body.metricSource
    alert.metricUnit = req.body.metricUnit
    alert.conditional = req.body.conditional
    alert.value = req.body.value
    alert.state = req.body.state
    alert.save(function(err, alert){
      if(err) {
        return res.status(500).json({
          message: 'Error al guardar la alert'
        })
      }
      if(!alert) {
        return res.status(404).json({
          message: 'No hemos encontrado la alert'
        })
      }
      return res.json(alert)
    })
  })
},
remove: function(req, res) {
  var id = req.params.id
  Alert.findByIdAndRemove(id, function(err, alert){
    if(err) {
      return res.json(500, {
        message: 'No hemos encontrado la alert'
      })
    }
    return res.json(alert)
  })
}
}