const { prompt } = require('inquirer');
const program = require('commander');
var fs = require('fs');

const questions = [
  {
    type : 'input',
    name : 'dir',
    message : 'Enter the directory to monitor (example: "/path/example/here/") ...'
  },
  {
    type : 'input',
    name : 'urlbase',
    message : 'Enter the URL to the remote screenshots directory (example: "http://my.com/Screenshots/") ...'
  },
  {
    type : 'input',
    name : 'sshuser',
    message : 'Enter SSH Username ...'
  },
  {
    type : 'password',
    name : 'sshpw',
    message : 'Enter SSH Password ...'
  },
  {
    type : 'input',
    name : 'hostname',
    message: 'Enter host to SSH into (can be domain.com, subdomain.domain.com or IP) ...'
  },
  { 
    type : 'input',
    name : 'port',
    message : 'Enter port if there is one, or leave blank ...'
  },
  { 
    type : 'input',
    name : 'rsa_key_path',
    message : 'Enter rsa key file path+name (example "/Users/myuser/.ssh/id_rsa")  ...'
  },
  { 
    type : 'input',
    name : 'sspath',
    message : 'Enter the absolute path to the remote screenshots directory with trailing slash ...'
  }

];

program
.version('0.0.1')
  .description('Config file configurator');
program
  .alias('run')
  .description('Setting Up Config File')
  .action(() => {
    prompt(questions).then(answers =>
	fs.writeFile('./config.js', 
	`exports.dir = '${answers.dir}'; //The directory to monitor. Keep the trailing slash /
exports.urlbase = '${answers.urlbase}'; //The web directory you want to upload to

exports.sshuser = '${answers.sshuser}'; //User for ssh
exports.sshpw = '${answers.sshpw}'; //Password to SSH 
exports.hostname = '${answers.hostname}'; //Host to SSH into. Can take domainname.com, subdomain.domainname.com, or IP.
exports.port = '${answers.port}'; //Port for SSH IF you have a different port configured, otherwise leave blank.
exports.rsa_key_path = '${answers.rsa_key_path}'//path to your local id_rsa file 
exports.sspath = '${answers.sspath}'; //The path to the 'Screenshots/' directory after SSH. Please make it an absolute path, not relative. Keep the trailing slash /`, function(err){
		if (err){
			console.log(err);
		}
	})
	) 
  });

program.parse(process.argv);
