var Discord = require("../lib/index.js");
var Auth = require("./auth.json");
var mybot = new Discord.Client();

mybot.login(Auth.email, Auth.password)

	.then(function (token) {
		console.log("wooo!");
	}).catch(function (error) {
		console.log(error);
	});

mybot.on("ready", function () {
	console.log("Ready!");
})

mybot.on("message", function (msg) {
	
	if(msg.content === "pmme"){
		mybot.sendMessage(msg.channel, "You know what "+msg.sender+"? NO");
	}
	
});

mybot.on("messageDelete", function (channel, message) {

	console.log("MESSAGE WAS DELETED BY " + (message ? message.author.username : channel.name));

});

mybot.on("messageUpdate", function (message, formerMessage) {

	console.log(message.author.username, "changed", formerMessage.content, "to", message.content);

});

mybot.on("serverNewMember", function (user) {
	console.log("new user", user.username);
});
mybot.on("serverRemoveMember", function (user) {
	console.log("left user", user.username);
});
mybot.on("userUpdate", function (oldUser, newUser) {
	console.log(oldUser, "vs", newUser);
});

mybot.on("channelCreate", function(chann){
	console.log(chann);
})