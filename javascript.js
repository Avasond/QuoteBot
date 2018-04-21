// JavaScript Document
var prefixL = [
	"Would you shit your pants if I",
	"Guess I'm one of the minority. I",
	"Do you guys think I",
	"What if I told you guys I",
	"Just to clear the air for everyone, I",
	"Is it too harsh if I",
];
var phraseL = [
	"will always support",
	"have less than 3 miles to walk to",
	"am ready to forgive",
	"will accept",
	"am not as hyped about",
	"have to budget for",
	"limit myself to",
	"will sleep with",
	"will surpass",
	"want your honest thoughts about"
];
var bonusL = [
	"It's gross.",
	"It's impossible.",
	"Nope.",
	"Or whatever.",
	"Am I the only one?",
	"I hope that clears the air for everyone.",
	"Screw these prices!"
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
	var quote = getPrefix() +" "+ getPhrase() +" "+ getSubject() +" "+ getSuffix();
	if(Math.random() > 0.80){
		quote = quote + " " +getBonus();
	}
	var div = document.getElementById('quoteDisplay').innerHTML = quote;
}



