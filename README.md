# Install clipboardy 
npm install clipboardy
# Install sshpass 
npm install (apt-get install sshpass) or (brew install https://raw.githubusercontent.com/kadwanev/bigboybrew/master/Library/Formula/sshpass.rb)
# Edit 
config.js
# Run 
(preferrably using something like pm2, since the app needs to be constantly monitoring the directory)
# Test. 
It will output data to console. So use pm2 monit, or just check your command line console for the outputs. 0 means no errors. 1 means an error. You will get at least 2 1's initally, for the temp files created in the directory before the official file

## Note: linux systems might have some issues with xsel. I mainly developed this for macOS. Please report any bugs and I'll try to work through them. 

## TODO: 
Find a more secure way to SCP/FTP upload the image
Find a way to create .exe for windows systems
Turn into package with dependencies for better UX
Find alternative to SSHPass for windows computers, or find a way to add SSH pass to windows PC
Turn into .exe for windows? not necessary but can be done.
