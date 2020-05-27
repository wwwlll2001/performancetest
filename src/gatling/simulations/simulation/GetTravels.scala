package simulation

import api.GETApiTravelsByCity
import base.SimulationBase
import io.gatling.core.Predef._

import scala.concurrent.duration._

class GetTravels extends SimulationBase {
  val feeder = csv(dirPath + "/data/city.csv").random

  val getTravel = scenario("Get Travels")
    .feed(feeder)
    .repeat(repeatTimes) {
      exec(GETApiTravelsByCity.send)
    }
    .pause(thinkTime)

  setUp(
    getTravel.inject(
      atOnceUsers(500)
    )
  ).maxDuration(maxUserDurationMinutes minutes).protocols(httpConf)

}
