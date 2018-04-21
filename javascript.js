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
var subjectL = [
	"a female",
	"Bushiroad Games",
	"a male",
	"a black poodle dog",
	"an interaction-focused facebooker",
	"30 pages of blocked facebookers",
	"my local game store",
	"the average person",
	"Darkside Games",
];
var suffixL = [
	"coming in the mail.",
	"at the kitchen table.",
	"in a lukewarm relationship.",
	"in an aggressive trade-war.",
	"in the furry community?",
	"and nothing more.",
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
function getSubject() {
	var randomNumber = Math.floor(Math.random() * (subjectL.length));
		var subject = subjectL[randomNumber]; 
		return subject;

	}
function getSuffix() {
	var randomNumber = Math.floor(Math.random() * (suffixL.length));
		var suffix = suffixL[randomNumber]; 
		return suffix;

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



