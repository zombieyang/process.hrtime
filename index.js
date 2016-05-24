var OPTION = {
	's': [1, 10e-9],
	'ms': [10e3, 10e-6],
	'us': [10e6, 10e-3],
	'ns': [10e9, 1]
};

module.exports = function (hrtime, option) {
    if (hrtime) {
	    var time = process.hrtime(hrtime);
	    if (option && option in OPTION) {
		    time = time[0] * OPTION[option][0] + time[1] * OPTION[option][1]
	    }
	    return time
    } else {
	    return process.hrtime();
    }
};