// JavaScript Document
var prefixL = [
	"The will to win, the desire to succeed, the urge to reach your full potential...",
	"Our greatest glory is not in never failing,",
	"The superior man understands what is right; the inferior man",
	"Apply yourself both now and in the next life. Without effort, you cannot be prosperous. Though the land be good, you cannot have an abundant crop without",
	"Dignity does not consist in possessing honors, but",
	"It is just that we should be grateful, not only to those with whose views we may agree, but also to those who have expressed",
];
var phraseL = [
	"dying Is MainStream #MONEY",
	"How Can Mirrors Be Real If Our Eyes Aren't Real",
	"If Newborn Babies Could Speak They Would Be The Most Intelligent Beings On Planet Earth",
	"School Is The Tool To Brainwash The Youth",
	"don't Worry Bae I'll Talk To You About SpaceTime Over FaceTime",
	"What do I have to do to get a simpler persian rug with cherub imagery uuuuugh",
	"fuck any game company that puts in-app purchases in kids games!!!",
	"you may be talented but you're not kanye west",
	"sometimes I get emotional over fonts",
	"Every Ides of March, I order a Caesar Salad and stab it repeatedly with a knife",
	"Curling are you serious",
];
var bonusL = [
	"#blessed",
	"#winning",
	"#humblebrag",
	"#quoteoftheday",
	"#deep",
];

function getPrefix() {
	var randomNumber = Math.floor(Math.random() * (prefixL.length));
		var prefix = prefixL[randomNumber]; 
		return prefix;

	}
function getPhrase() {
	var randomNumber = Math.floor(Math.random() * (phraseL.length));
		var phrase = phraseL[randomNumber]; 
		return phrase;

	}
function getBonus() {
	var randomNumber = Math.floor(Math.random() * (bonusL.length));
		var bonus = bonusL[randomNumber]; 
		return bonus;

	}

function getQuote() {
	var quote = getPrefix() +" "+ getPhrase();
	if(Math.random() > 0.60){
		quote = quote + " " +getBonus();
	}
	var div = document.getElementById('quoteDisplay').innerHTML = quote;
}



