# GClone 
A gyazo screenshot function clone program that allows you to take a screenshot and upload the screenshot to a remote server that you choose. You can even monitor a directory and it will automatically upload files to a remote point when a new file is added to the directory. It uses the screenshot feature of your native OS
## Dependencies 
[clipboardy](https://www.npmjs.com/package/clipboardy), [sftp-upload](https://www.npmjs.com/package/sftp-upload)
## Set up SSH Key to upload (Mandatory) 
Follow this guide if you need assistance: https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2
## Set up config 
Run `node setup e` or use text editor to edit `config.js`
## Run 
`node gclone.js` or use something like `pm2` (http://pm2.keymetrics.io/), since the app needs to be constantly monitoring the directory, and it'll reboot if it fails.
## Test 
It will output data to console. If using pm2, use `pm2 monit`, or just check your command line console for the outputs. 

## Note: Linux OS without desktop interfaces might have some issues with xsel/clipboard. I mainly developed this for UNIX/Windows OS with graphical interfaces. Please report any bugs and I'll try to work through them.
> The soltuion would be to comment out any clipboardy code, since there is no clipboard to directly copy to via SSH. Do this if you are using it to upload images to a remote server via FTP. (If you're the type of person to do something like that. I'm not judging. I'm that kinda person too.)

## TODO: 
~~Find a more secure way to SCP/FTP upload the image~~ __(Fixed)__  
~~Turn into package with dependencies for better UX~~ __(Fixed)__  
~~Find alternative to SSHPass for windows computers, or find a way to add SSH pass to windows PC~~ __(Fixed)__  
Turn into .exe for windows? not necessary but can be done.  
~~Apparently ssh key needs to be accepted before hand on the local server before successfully sending images. Need a workaround for this. Need to come up with solution for Windows OS. Only partially works with Cygwin~~ __(Removed)__  
Need to make sure most recent upload gets copied, not thumb.db  
Fix upload process with watch event listener.  
Fix to only upload as many files as are new. And ignore files that already exist. Need to upload files, not a whole directory.  
Fix error on MacOS because screenshots generate a ".Screen Shot" file before the final "Screen Shot" file is saved to the system. Need to find a method to ignore dot files.

## If you're using the .old files for legacy support, make sure to rename them and remove the .old. Only use the .old files with each other. i.e., config.js.old goes with gclone.js.old. Don't mix the new and old together, you might have a bad time. 
