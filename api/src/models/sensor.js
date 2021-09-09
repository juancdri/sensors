const { Schema, model } = require("mongoose")

const sensorSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        location:{
            type:Object,
            required: true
        }, //latitude,longitude
        active: {
            required: true,
            type: String,
        },
        minval: {
            type: Number,
            required: true
        },
        maxval: {
            type: Number,
            required: true
        },
        events:[ {
            type: Schema.Types.ObjectId,
            ref: "SensorEvent"
        }]

    }
)
sensorSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Sensor = model("Sensor", sensorSchema)

module.exports = Sensor