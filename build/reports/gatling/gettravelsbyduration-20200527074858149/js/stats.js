var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "71194",
        "ok": "71194",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "45014",
        "ok": "45014",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "847",
        "ok": "847",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2019",
        "ok": "2019",
        "ko": "-"
    },
    "percentiles1": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1126",
        "ok": "1126",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3327",
        "ok": "3327",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9277",
        "ok": "9277",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 51963,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6458,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12773,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "578.813",
        "ok": "578.813",
        "ko": "-"
    }
},
contents: {
"req_get-travels-by--ada7c": {
        type: "REQUEST",
        name: "get travels by city",
path: "get travels by city",
pathFormatted: "req_get-travels-by--ada7c",
stats: {
    "name": "get travels by city",
    "numberOfRequests": {
        "total": "71194",
        "ok": "71194",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "45014",
        "ok": "45014",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "847",
        "ok": "847",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2019",
        "ok": "2019",
        "ko": "-"
    },
    "percentiles1": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1126",
        "ok": "1126",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3327",
        "ok": "3327",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9277",
        "ok": "9277",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 51963,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6458,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12773,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "578.813",
        "ok": "578.813",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
