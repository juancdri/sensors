const { Router } = require("express")
const sensorSchema = require("../models/sensor")
const router = Router();

router.post('/', async (req, res) => {
    try {
        const { name, latitude, longitude, active } = req.body;
        const data = {
            name: name,
            location: { latitude: latitude, longitude: longitude },
            active: active,
        };
        const newSensor = await new sensorSchema(data);
        newSensor.save()
        res.status(200).send(newSensor._id);
    } catch (error) {
        res.status(404).send(error)
    }
})
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deletedSensor = await sensorSchema.findByIdAndDelete({
        _id: id
    })
    res.send(`Se ha borrado el sensor ${deletedSensor._id}`);
})
router.put('/', async (req, res) => {
    const { id, name, latitude, longitude, active, minval, maxval } = req.body
    const update = {
        name: name,
        location: { latitude: latitude, longitude: longitude },
        active: active,
        minval: minval,
        maxval: maxval
    }
    const sensor = await sensorSchema.findByIdAndUpdate(id, update)
    console.log(sensor)
    res.send(`El sensor ${sensor._id} se ha modficado exitosamente`)

})
router.get('/', async (req, res) => {
    const allSensors = await sensorSchema.find()
    res.json(allSensors)
})

module.exports = router;