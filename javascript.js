// JavaScript Document
var philosopher = [
	"The will to win, the desire to succeed, the urge to reach your full potential...", //"these are the keys that will unlock the door to personal excellence. " -Confucius
	"Our greatest glory is not in never failing, but", //"in rising every time we fall" -Confucius
	"The superior man understands what is right; the inferior man understands", //"what will sell." -Confucius
	"Apply yourself both now and in the next life. Without effort, you cannot be prosperous. Though the land be good,", //"you cannot have an abundant crop without cultivation." -Plato
	"Dignity does not consist in possessing honors, but", //"in deserving them" -Aristotle
	"It is just that we should be grateful, not only to those with whose views we may agree, but also to those who have expressed", //"more superficial views; for these also contributed something, by developing before us the powers of thought." -Aristotle
	"The only true wisdom is in knowing", //"you know nothing" -Socrates
	"Wisdom is not a product of schooling but", //"of the lifelong attempt to acquire it.'" -Albert Einstein
	"The first and greatest victory is to conquer yourself;", //"to be conquered by yourself is of all things most shameful and vile." -Plato
];
var celebrity = [
	"dying Is MainStream. #MONEY", //Jaden Smith
	"how can mirrors be real if our eyes aren't real?", //Jaden Smith
	"if newborn babies could speak they would be the most intelligent beings on planet Earth.", //Jaden Smith
	"school is the tool to brainwash the youth.", //Jaden Smith
	"what do I have to do to get a simple persian rug with cherub imagery uuuuugh", //Kanye West
	"fuck any game company that puts in-app purchases in kids games!!!", //Kanye West, this one isn't funny, fuck those guys.
	"you may be talented but you're not Kanye West.", //Kanye West
	"sometimes I get emotional over fonts.", //Kanye West
	"there's nothing like changes because nothing changes but changes.", //Gary Busey
	"when you come to a fork in the road, take it.", //Yogi Berra
	"you can observe a lot just by watching.", //Yogi Berra
];
var bonus = [
	"#blessed",
	"#winning",
	"#humblebrag",
	"#quoteoftheday",
	"#deep",
	"#thinkaboutit",
	"#GoogleIt"
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



