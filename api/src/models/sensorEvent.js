const { Schema, model }  = require("mongoose")

const sensorEventSchema = new Schema(
    {
        sensorId: {
            type: Schema.Types.ObjectId,
            ref: "Sensor",
        },
        createdAt: {
            type: Date,
            required: false,
            default: Date.now
        },
        value: {
            type: Number,
            required: true
        }

    }
)
sensorEventSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const SensorEvent = model("SensorEvent", sensorEventSchema)

module.exports = SensorEvent;