package simulation

import api.GETApiTravels
import base.SimulationBase
import io.gatling.core.Predef._

import scala.concurrent.duration._

class GetTravelsByDuration extends SimulationBase {
  val feeder = csv(dirPath + "/data/city.csv").random

  val getTravel = scenario("Get Travels")
    .feed(feeder)
    .during(2 minutes) {
      exec(GETApiTravels.send)
    }
//    .pause(thinkTime)

  setUp(
    getTravel.inject(
      atOnceUsers(500)
    )
  ).maxDuration(maxUserDurationMinutes minutes).protocols(httpConf)

}
