//	Simple example of using private variables
//
//	To start the stopwatch:
//		obj.start();
//
//	To get the duration in milliseconds without pausing / resuming:
//		var	x = obj.time();
//
//	To pause the stopwatch:
//		var	x = obj.stop();	// Result is duration in
//		milliseconds
//
//	To resume a paused stopwatch
//		var	x = obj.start();	// Result is duration in
//		milliseconds
//
//	To reset a paused stopwatch
//		obj.stop();
//
var	clsStopwatch = function() {
		// Private vars
		var	startAt	= 0;	// Time of last start / resume. (0 if not running)
		var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds

		var	now	= function() {
				return (new Date()).getTime(); 
			}; 
 
		// Public methods
		// Start or resume
		this.start = function() {
				startAt	= startAt ? startAt : now();
			};

		// Stop or pause
		this.stop = function() {
				// If running, update elapsed time
				// otherwise keep it
				lapTime	= startAt ? lapTime + now() - startAt : lapTime;
				startAt	= 0; // Paused
			};

		// Reset
		this.reset = function() {
				lapTime = startAt = 0;
			};

		// Duration
		this.time = function() {
				return lapTime + (startAt ? now() - startAt : 0); 
			};
	};


Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
};

var x = new clsStopwatch();
var $time;
var clocktimer;

var Seat1 = ["A01","A02","A03","A04","A05","A06","A07","A08","A09","A10",
            "A11","A12","A13","A14","A15","A16","A17","A18","A19","A20",
            "A21","A22",
            "B01","B02","B03","B04","B05","B06","B07","B08","B09","B10",
            "B11","B12","B13","B14","B15","B16","B17","B18","B19","B20",
			"B21","B22","B23","B24","B25","B26","B27",
            "C01","C02","C03","C04","C05","C06","C07","C08","C09","C10",
            "C11","C12","C13","C14","C15","C16","C17","C18","C19","C20",
            "C21","C22","C23","C24","C25","C26","C27",
            "D01","D02","D03","D04","D05","D06","D07","D08","D09","D10",
            "D11","D12","D13","D14","D15","D16","D17","D18","D19","D20",
            "D21","D22","D23","D24","D25","D26","D27","D28",
            "E01","E02","E03","E04","E05","E06","E07","E08","E09","E10",
            "E11","E12","E13","E14","E15","E16","E17","E18","E19","E20",
            "E21","E22","E23","E24","E25","E26","E27","E28"
           ];

var Seat2 = ["F01","F02","F03","F04","F05","F06","F07","F08","F09","F10",
            "F11","F12","F13","F14","F15","F16","F17","F18","F19","F20",
            "F21","F22","F23","F24","F25","F26","F27","F28",
            "G01","G02","G03","G04","G05","G06","G07","G08","G09","G10",
            "G11","G12","G13","G14","G15","G16","G17","G18","G19","G20",
            "G21","G22","G23","G24","G25","G26","G27","G28","G29",
            "H01","H02","H03","H04","H05","H06","H07","H08","H09","H10",
            "H11","H12","H13","H14","H15","H16","H17","H18","H19","H20",
            "H21","H22","H23","H24","H25","H26","H27","H28","H29",
            "J01","J02","J03","J04","J05","J06","J07","J08","J09","J10",
            "J11","J12","J13","J14","J15","J16","J17","J18","J19","J20",
            "J21","J22","J23","J24","J25","J26","J27","J28","J29"
           ];


var Seat = Seat1.concat(Seat2);
 
function pad(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}

function formatTime(time) {

	var newTime = '';
	newTime = Seat.randomElement()
	return newTime;
}

function show() {
	$time = document.getElementById('time');
	update();
}

function update() {
	$time.innerHTML = formatTime(x.time());
}

function start() {
	clocktimer = setInterval("update()", 1);
	x.start();
}

function stop() {
	x.stop();
	clearInterval(clocktimer);
}

function reset() {
	stop();
	x.reset();
	update();
}
