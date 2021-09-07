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

const Sensor = model("Sensor", sensorSchema)

module.exports = Sensor