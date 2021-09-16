const { Router } = require("express");
const sensorEventSchema = require("../models/sensorEvent")
const sensorSchema = require("../models/sensor")
const router = Router();

router.post('/', async (req, res) => {
    try {
        const { id, value } = req.body
        const data = {
            sensorId: id,
            value: value
        }
        const sensor = await sensorSchema.findById(id)
        const newEvent = await new sensorEventSchema(data)
        newEvent.save()
        !sensor.minval && !sensor.maxval
            ? sensorSchema.findByIdAndUpdate(id, { ...sensor, minval: value, maxval: value })
            : sensor.maxval < value
                ? sensorSchema.findByIdAndUpdate(id, { ...sensor, maxval: value })
                : sensor.minval > value
                    ? sensorSchema.findByIdAndUpdate(id, { ...sensor, minval: value })
                    : null
    
        return  res.send(`Event ${newEvent._id} created`)
    }
    catch (error) {
        res.status(404).send(error)
    }

})


router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        const allEvents = await sensorEventSchema
            .find({ sensorId: id })
            .populate('sensorId')
        res.json(allEvents)
    }
    catch (error) {
        next(error)
    }

})

module.exports = router;