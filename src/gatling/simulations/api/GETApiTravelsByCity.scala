package api

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object GETApiTravelsByCity {

  val send = http("get travels by city")
    .get("/travels")
    .queryParam("city", "${city}")
    .check(status.is(200))
}