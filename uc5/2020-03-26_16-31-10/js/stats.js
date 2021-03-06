var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "836",
        "ok": "256",
        "ko": "580"
    },
    "minResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "21016"
    },
    "maxResponseTime": {
        "total": "21215",
        "ok": "457",
        "ko": "21215"
    },
    "meanResponseTime": {
        "total": "14654",
        "ok": "179",
        "ko": "21043"
    },
    "standardDeviation": {
        "total": "9617",
        "ok": "38",
        "ko": "14"
    },
    "percentiles1": {
        "total": "21035",
        "ok": "178",
        "ko": "21042"
    },
    "percentiles2": {
        "total": "21046",
        "ok": "196",
        "ko": "21049"
    },
    "percentiles3": {
        "total": "21059",
        "ok": "224",
        "ko": "21063"
    },
    "percentiles4": {
        "total": "21079",
        "ok": "305",
        "ko": "21090"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 256,
    "percentage": 31
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 580,
    "percentage": 69
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.019",
        "ok": "1.231",
        "ko": "2.788"
    }
},
contents: {
"req_get-messages-aa89a": {
        type: "REQUEST",
        name: "Get Messages",
path: "Get Messages",
pathFormatted: "req_get-messages-aa89a",
stats: {
    "name": "Get Messages",
    "numberOfRequests": {
        "total": "836",
        "ok": "256",
        "ko": "580"
    },
    "minResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "21016"
    },
    "maxResponseTime": {
        "total": "21215",
        "ok": "457",
        "ko": "21215"
    },
    "meanResponseTime": {
        "total": "14654",
        "ok": "179",
        "ko": "21043"
    },
    "standardDeviation": {
        "total": "9617",
        "ok": "38",
        "ko": "14"
    },
    "percentiles1": {
        "total": "21035",
        "ok": "178",
        "ko": "21042"
    },
    "percentiles2": {
        "total": "21046",
        "ok": "196",
        "ko": "21049"
    },
    "percentiles3": {
        "total": "21059",
        "ok": "224",
        "ko": "21063"
    },
    "percentiles4": {
        "total": "21079",
        "ok": "305",
        "ko": "21090"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 256,
    "percentage": 31
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 580,
    "percentage": 69
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.019",
        "ok": "1.231",
        "ko": "2.788"
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
