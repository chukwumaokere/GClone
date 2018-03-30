fs = require("fs");
var config = require('./config.js');
var exec = require('child_process').exec;
const clipboardy = require('clipboardy');

//Variables from config
var dir = config.dir;
var urlbase = config.urlbase;
var sshuser = config.sshuser;
var sshpw = config.sshpw;
var hostname = config.hostname;
var port = config.port;
var sspath = config.sspath;
var rsa_key_path = config.rsa_key_path;

//For error processing
var errmsg;

//sftp protocol
var SftpUpload = require('sftp-upload'),
        fs = require('fs');
 
    var options = {
        host: hostname,
        username: sshuser,
	port: port,
        path: dir,
        remoteDir: sspath,
        privateKey: fs.readFileSync(rsa_key_path),
	passphrase: ''
    },
    sftp = new SftpUpload(options);

//Execute on file added to 
 fs.watch(`${dir}`, (eventType, filename) => { //Need to ignore Thumb.db and only upload as many files as are new.
	var filenamebase = filename;
    filename = filename.replace(/ /g, '\\ ');
	var url = urlbase + filenamebase;
	
    sftp.on('error', function(err) {
		var errmsg = 'There was an error pushing the file to the remote system, try uncommenting debug lines or view log.txt for more info.';
		clipboardy.writeSync(errmsg);
        throw err;
    })
    .on('uploading', function(progress) {
        console.log('Uploading', progress.file);
        console.log(progress.percent+'% completed');
    })
    .on('completed', function() {
        console.log('Upload Completed');
		clipboardy.writeSync(url); //writes URL to the clipboard for easy pasting.
    })
    .upload();
 });
