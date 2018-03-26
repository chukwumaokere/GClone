fs = require("fs");
var config = require('./config.js');
var exec = require('child_process').exec;
const clipboardy = require('clipboardy');

var dir = config.dir;
var urlbase = config.urlbase;
var sshuser = config.sshuser;
var sshpw = config.sshpw;
var hostname = config.hostname;
var port = config.port;
var sspath = config.sspath;

fs.watch(`${dir}`, (eventType, filename) => {
	//console.log(eventType); //uncomment for debugging
	//console.log(filename); //uncomment for debugging
	var filenamebase = filename;
	filename = filename.replace(/ /g, '\\ ');
	var path = dir + filename;
	var url = urlbase + filenamebase;
	//console.log(path); //uncomment for debugging
	//TODO: try to find a more secure method for uploading images
	if (port && port !== undefined && port != ''){
		var command = `sshpass -p '${sshpw}' scp -r -P ${port} ${path} ${sshuser}@${hostname}:${sspath}`;
	}else{
		var command = `sshpass -p '${sshpw}' scp -r ${path} ${sshuser}@${hostname}:${sspath}`;
	}
	//console.log(command); //uncomment for debugging
	var bash = exec(`${command}`, function(err, stdout, stderr){
		if (err){
			//do something	
		//	console.log(stderr);
		}
		//console.log(stdout);
	});
	bash.on('exit', function(code){
		console.log(code); //should print out 0 if no errors
	});
	clipboardy.writeSync(url); //writes URL to the clipboard for easy pasting. 
});
