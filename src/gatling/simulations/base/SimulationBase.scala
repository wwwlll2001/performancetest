package base

import io.gatling.core.Predef._
import io.gatling.core.feeder.Record
import io.gatling.http.Predef.http
import io.gatling.http.protocol.HttpProtocolBuilder

class SimulationBase extends Simulation {

  val env: String = System.getProperty("env")

  val dirPath: String = env.toLowerCase()

  val conf: Record[Any] = jsonFile(dirPath + "/config.json").readRecords.head

  val host: String = conf("host").toString

  val httpConf: HttpProtocolBuilder = http.baseUrl(host)

  val virtualUsersNumbers: Int = 1

  val rampUpOverSeconds: Int = 5

  val repeatTimes: Int = 1

  val thinkTime: Int = 5

  val constantUserDurationMinutes : Int = 3

  val maxUserDurationMinutes : Int = 6
}
