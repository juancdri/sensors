const { Router } = require("express")
const sensorEventSchema = require("../models/sensorEvent")
const router = Router();
//■ Endpoint to add events associated with a sensor
// ■ Endpoint to list all events associated with a
// sensor
router.post('/', async (req, res) => {
    try {
        const { id, value } = req.body
        const sensorId= id
        const data = {
            sensorId: id,
            value: value
        }
        const newEvent = await new sensorEventSchema(data)
        newEvent.save()
        res.send('Evento creado')
    }
    catch (error) {
        res.status(404).send(error)
    }

})
router.get('/', async (req, res) => {
const{ id }= req.body
const allEvents = await sensorEventSchema.find({sensorId:id})
res.json(allEvents)

})

module.exports = router;