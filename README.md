# GClone 
A gyazo screenshot function clone program that allows you to take a screenshot and upload the screenshot to a remote server that you choose. You can even monitor a directory and it will automatically upload files to a remote point when a new file is added to the directory. It uses the screenshot feature of your native OS
## Install clipboardy 
npm install clipboardy
## Install sftp-upload 
npm install sftp-upload (https://www.npmjs.com/package/sftp-upload) 
## Set up SSH Key to upload, (Mandatory) 
Follow this guide: https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2
## Edit 
config.js
## Run 
(preferrably using something like pm2, since the app needs to be constantly monitoring the directory)
## Test 
It will output data to console. So use pm2 monit, or just check your command line console for the outputs. 

## Note: linux systems might have some issues with xsel. I mainly developed this for macOS/Windows OS with graphical interfaces. Please report any bugs and I'll try to work through them. 

## TODO: 
Find a more secure way to SCP/FTP upload the image  
Find a way to create .exe for windows systems  
Turn into package with dependencies for better UX  
Find alternative to SSHPass for windows computers, or find a way to add SSH pass to windows PC  
Turn into .exe for windows? not necessary but can be done.  
Apparently ssh key needs to be accepted before hand on the local server before successfully sending images. Need a workaround for this. Need to come up with solution for Windows OS. Only partially works with Cygwin  
Need to make sure most recent upload gets copied, not thumb.db  
Fix upload process with watch event listener.  

## If you want to use the upload function without the clipboardy part, comment out the clipboardy code. This is a soltuion for UNIX systems that do not use desktop interface, and instead you are using it to upload images to a remote server via FTP. (If you're the type of person to do something like that. I'm not judging. I'm that kinda person too.) 
