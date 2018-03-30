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

var error = 0;
var d = new Date();

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

	//Init variables for error logging
	var stdop;
	var stder;
	var code;
	var errmsg; 

	var bash = exec(`${command}`, function(err, stdout, stderr){
		if (err){
			//do something	
		//	console.log(stderr); //uncomment for debugging
			var stder = stderr;
		
		}
		//console.log(stdout); //uncomment for debugging
		var stdop = stdout;
	});
	bash.on('exit', function(code){
		//console.log(code); //should print out 0 if no errors
		var code = code;
	});

	//Added more user friendly error handling
	if (typeof code !== 'undefined'){
		if (code == 0){
			clipboardy.writeSync(url); //writes URL to the clipboard for easy pasting. 
		}else{
			console.log('returned error code was not 1');
			error = 1;
		}
	}else {
		console.log('code is undefined');
		error = 1;
	}

	//Check error state
	if (error > 0){
		console.log(error);
		var errmsg = 'There was an error pushing the file to the remote system, try uncommenting debug lines or view log.txt for more info.';
		clipboardy.writeSync(errmsg);
	}

	//Write to log file
	fs.appendFile('./log.txt', `${d}: ${errmsg} Program threw code ${code}. Tried to run command: ${command}. Output was ${stdop}. Error was ${stder}.`, function(err){
		if (err){
			console.log('Could not write to file, check permissions');
		}
		console.log('Wrote to log.txt');
	});
});

//nothing to see here. keep on moving
