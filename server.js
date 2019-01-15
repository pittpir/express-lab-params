let express = require('express');
let app = express();



app.get("/tip/:total/:tipPercentage", (request,response) => {
	let moo = (request.params.total * ((request.params.tipPercentage/100)+1));
	response.send(`Bill total = ${moo}`);	
});


app.get("/greetings/", (request,response) => {
	response.send("Hello Stranger\n");
});

app.get("/greetings/:name", (request,response) => {
	response.send(`Hello ${request.params.name}.  Nice to see you\n`);
});


app.get("/magic/:question", (request,response) => {
	array = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", 
			 "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", 
			 "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

	let rand = Math.floor(Math.random()*array.length); 
	let question = request.params.question.split('%20').join(" ");
	response.send(`Question: ${question} \n Answer: ${array[rand]} \n`);

});

app.get("/fib/:index", (request,response) => {

	let index = request.params.index;

	let t1 = 0;
	let t2 = 1;
	let next = 0;
	
	for (let i=2; i<=index; i++) {
		next = t1 + t2;
		t1 = t2;
		t2 = next;
	}
	response.send(`Fib number at index(${index}) is:  ${next} \n`);
});


app.listen(9000);