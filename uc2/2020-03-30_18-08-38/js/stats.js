var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5119",
        "ok": "5119",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7330",
        "ok": "7330",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "941",
        "ok": "941",
        "ko": "-"
    },
    "percentiles1": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "percentiles2": {
        "total": "17",
        "ok": "17",
        "ko": "-"
    },
    "percentiles3": {
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6827",
        "ok": "6827",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5019,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 100,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "83.918",
        "ok": "83.918",
        "ko": "-"
    }
},
contents: {
"req_io---apigad-11c9e": {
        type: "REQUEST",
        name: "IO - apigad",
path: "IO - apigad",
pathFormatted: "req_io---apigad-11c9e",
stats: {
    "name": "IO - apigad",
    "numberOfRequests": {
        "total": "5119",
        "ok": "5119",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7330",
        "ok": "7330",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "941",
        "ok": "941",
        "ko": "-"
    },
    "percentiles1": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "percentiles2": {
        "total": "17",
        "ok": "17",
        "ko": "-"
    },
    "percentiles3": {
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6827",
        "ok": "6827",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5019,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 100,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "83.918",
        "ok": "83.918",
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
