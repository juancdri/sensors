const { Router } = require("express")
const sensorEventSchema = require("../models/sensorEvent")
const router = Router();

router.post('/', async (req, res) => {
    try {
        const { id, value } = req.body
        const data = {
            sensorId: id,
            value: value
        }
        const newEvent = await new sensorEventSchema(data)
        newEvent.save()
        res.send(`Event ${newEvent._id} created`)
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