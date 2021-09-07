const { Router } = require("express")
const sensorSchema = require("../models/sensor")
const router = Router();
//Endpoint to add, remove, modify and list the sensors
router.post('/', async (req, res) => {
    try {
        const { name, latitude, longitude, active, minval, maxval } = req.body;
        const data = {
            name: name,
            latitude: latitude,
            longitude: longitude,
            active: active,
            minval: minval,
            maxval: maxval
        };
        const newSensor = await new sensorSchema(data);
        newSensor.save()
        res.status(200).send('post Ok');
    } catch (error) {
        res.status(404).send(error)
    }
})
router.delete('/', async (req, res) => {
    const { id } = req.body
    const deletedSensor = await sensorSchema.findByIdAndDelete({
        _id: id
    })
    res.send(`Se ha borrado el sensor ${deletedSensor.name}`);
})
router.put('/', async (req, res) => {
    const { id, name, latitude, longitude, active, minval, maxval } = req.body
    const update = {
        name: name,
        latitude: latitude,
        longitude: longitude,
        active: active,
        minval: minval,
        maxval: maxval
    }
    const sensor = await sensorSchema.findByIdAndUpdate(id, update)
    console.log(sensor)
    res.send(`El sensor ${sensor.name} se ha modficado exitosamente`)

})
router.get('/', async (req, res) => {
    const allSensors = await sensorSchema.find()
    res.json(allSensors)
})

module.exports = router;