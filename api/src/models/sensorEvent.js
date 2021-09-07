const mongoose = require("mongoose")

const sensorEventSchema = new mongoose.Schema(
    {
       sensorId:{
        type: String,
        required: true,
       },
        createdAt:{
            type: Date,
            required: false,
            default: Date.now
        },
        value:{
            type: Number,
            required: true
        }

    }
)
sensorEventSchema.set('toJSON', {
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const SensorEvent = mongoose.model("SensorEvent", sensorEventSchema)

module.exports = SensorEvent;