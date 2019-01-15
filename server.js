let express = require('express');



let app = express();



app.get("/greetings/", (request,response) => {
	response.send("Hello Stranger\n");
});

app.get("/greetings/:name", (request,response) => {
	response.send(`Hello ${request.params.name}.  Nice to see you\n`);
});

app.listen(9000);