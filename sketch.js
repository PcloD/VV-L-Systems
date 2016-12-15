
var W = 800, H = 800;
var startTime;
var elapsedTime;
var stepsMade = 0;
var LS01;

function setup() {
	
	var rules = [];
	startTime = (new Date()).getTime();
	createCanvas(W,H);
	SetupLSystems();
	
	LS01.ApplyRules(5);
	console.log(LS01.GetAxiom());
	//LS01.ExecuteDebug();
	
}

function draw() {
	elapsedTime = ((new Date()).getTime() - startTime) * 0.001;
	background(40);
	LS01.Execute01(new p5.Vector(W*0.5-170, H*0.5-150), -45);
}

function SetupLSystems()
{
	//// https://www.facebook.com/steccar/media_set?set=a.10211724683219134.1073741857.1429668006&type=3&notif_t=like&notif_id=1479855936916942
	
	//LS01 = new LSystem("FBLRA", "F", [new Rule("F", "[FRFRFRFRRRFLFLFLFL]")], 13.8, 40);
	//LS01 = new LSystem("FBLRA", "F", [new Rule("F", "[FRFRFRFR][RFLFLFLFL]")], 45, 100);
	//LS01 = new LSystem("FBLR", "FLFR", [new Rule("F", "[FF]FL[FFRF][LF]")], 30, 50);
	//LS01 = new LSystem("FBLR", "FLFF", [new Rule("L", "[FF]FL[FFRF][LF]")], 70, 15); // LADDERS
	//LS01 = new LSystem("FBLR", "[LL]", [new Rule("L", "[FR]RR"), new Rule("R", "[L]F")], 30, 30);
	//LS01 = new LSystem("FBLRA", "FR", [new Rule("F", "FL[FR]")], 20, 60);
	//LS01 = new LSystem("FBLR", "FLLFLLF", [new Rule("F", "FRLLLFRF")], 80, 5.5);
	LS01 = new LSystem("FBLR", "FLLFLLF", [new Rule("F", "FRLRF")], 78.7, 60);
}