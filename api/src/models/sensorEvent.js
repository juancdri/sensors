const mongoose = require("mongoose")

const sensorEventSchema = new mongoose.Schema(
    {
       sensorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sensor",
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

const SensorEvent = mongoose.model("SensorEvent", sensorEventSchema)

module.exports = SensorEvent;