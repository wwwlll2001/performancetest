package api

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object GETApiTravels {

  val send = http("get travels")
    .get("/travels")
    .queryParam("city", "${city}")
    .queryParam("icao", "${icao}")
    .check(status.is(200))
}