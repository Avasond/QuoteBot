// JavaScript Document
var philosopher = [
	"The will to win, the desire to succeed, the urge to reach your full potential...",
	"Our greatest glory is not in never failing,",
	"The superior man understands what is right; the inferior man",
	"Apply yourself both now and in the next life. Without effort, you cannot be prosperous. Though the land be good, you cannot have an abundant crop without",
	"Dignity does not consist in possessing honors, but",
	"It is just that we should be grateful, not only to those with whose views we may agree, but also to those who have expressed",
];
var celebrity = [
	"dying Is MainStream. #MONEY",
	"how can mirrors be real if our eyes aren't real?",
	"if newborn babies could speak they would be the most intelligent beings on planet Earth.",
	"school is the tool to brainwash the youth.",
	"don't worry Bae I'll talk to you about SpaceTime over FaceTime.",
	"what do I have to do to get a simple persian rug with cherub imagery uuuuugh",
	"fuck any game company that puts in-app purchases in kids games!!!",
	"you may be talented but you're not Kanye West.",
	"sometimes I get emotional over fonts.",
	"Every Ides of March, I order a Caesar Salad and stab it repeatedly with a knife.",
	"curling are you serious",
];
var bonus = [
	"#blessed",
	"#winning",
	"#humblebrag",
	"#quoteoftheday",
	"#deep",
	"#thinkaboutit",
];

function getphilosopher() {
	var randomNumber = Math.floor(Math.random() * (philosopher.length));
		var philo = philosopher[randomNumber]; 
		return philo;

	}
function getcelebrity() {
	var randomNumber = Math.floor(Math.random() * (celebrity.length));
		var celeb = celebrity[randomNumber]; 
		return celeb;

	}
function getBonus() {
	var randomNumber = Math.floor(Math.random() * (bonus.length));
		var bon = bonus[randomNumber]; 
		return bon;

	}

function getQuote() {
	var quote = getphilosopher() +" "+ getcelebrity();
	if(Math.random() > 0.60){
		quote = quote + " " +getBonus();
	}
	var div = document.getElementById('quoteDisplay').innerHTML = quote;
}



