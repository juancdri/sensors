const {Schema, model}= require("mongoose")

const sensorSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        },
        active: {
            required: true,
            type: Boolean,
            default: false,
        },
        minval: {
            type: Number,
            required: true
        },
        maxval: {
            type: Number,
            required: true
        }

    }
)
sensorSchema.set('toJSON', {
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Sensor = model("Sensor", sensorSchema)

module.exports = Sensor