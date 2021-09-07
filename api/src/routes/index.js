const {Router} = require("express")
const sensorsRoute = require("./sensors")
const sensorEventsRoute = require("./sensorEvents")

const router = Router()

router.use("/sensors", sensorsRoute)
router.use("/sensorEvents", sensorEventsRoute)

module.exports = router;