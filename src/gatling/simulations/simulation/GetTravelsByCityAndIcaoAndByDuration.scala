package simulation

import api.GETApiTravels
import base.SimulationBase
import io.gatling.core.Predef._

import scala.concurrent.duration._

class GetTravelsByCityAndIcaoAndByDuration extends SimulationBase {
  val feederCity = csv(dirPath + "/data/city.csv").random
  val feederIcao = csv(dirPath + "/data/icao.csv").random

  val getTravel = scenario("Get Travels")
    .feed(feederCity)
    .feed(feederIcao)
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
