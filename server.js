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


app.listen(9000);