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
        res.send('Event crated')
    }
    catch (error) {
        res.status(404).send(error)
    }

})
router.get('/:id', async (req, res) => {
const{ id }= req.params
const allEvents = await sensorEventSchema.find({sensorId:id})
res.json(allEvents)

})

module.exports = router;