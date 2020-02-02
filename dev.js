#!/usr/bin/env node

'use strict';
const meow = require('meow');
const shell = require('shelljs');
const { exec } = require('child_process');

const cli = meow(
  `
	Usage
	  $ dev <command>

	Options
		--clean: Cleans up the React Native projects deeply: 
						 1. Cleans up node modules
						 2. Cleans up all temp directories
						 3. Cleans up iOS folders
						 4. Cleans up Android folders
						 5. Resets the package manager cache

		--simios: Displays the list of iOS simulators available. Selecting one will boot it with the app.
		--simand: Displays the list of Android emulators available. Selecting one will boot it.
		--relios: Build for release and run on attached iOS device.
		--reland: Build for release and run on attached Android device
		--deviceios: Run the RN app on attached iOS device.
		--deviceand: Run the RN app on attached Android device.
		--logios: Display native logs in the console from an attached iOS device.
		--logand: Display native logs in the console from an attached Android device.
		--update: Checks and displays the node modules needing update.
		
	Examples
	  $ dev clean	  
`,
  {
    flags: {
      clean: {
        type: 'boolean',
        alias: 'c'
      },
      simios: {
        type: 'boolean',
        alias: 'si'
      },
      simand: {
        type: 'boolean',
        alias: 'sa'
      },
      relios: {
        type: 'boolean',
        alias: 'ri'
      },
      reland: {
        type: 'boolean',
        alias: 'ra'
      },
      deviceios: {
        type: 'boolean',
        alias: 'di'
      },
      deviceand: {
        type: 'boolean',
        alias: 'da'
      },
      logios: {
        type: 'boolean',
        alias: 'li'
      },
      logand: {
        type: 'boolean',
        alias: 'la'
      },
      update: {
        type: 'boolean',
        alias: 'u'
      }
    }
  }
);

console.log('##########################');
console.log('# React Native Dev Tools #');
console.log('##########################\n');

if (cli.flags.clean) {
  shell.exec('./scripts/clean_build.sh');
  return;
}

if (cli.flags.simios) {
  shell.exec('./scripts/start_ios_simulator.sh');
  return;
}

if (cli.flags.simand) {
  shell.exec('./scripts/start_android_simulator.sh');
  return;
}

if (cli.flags.relios) {
  shell.exec('./scripts/run_release_ios.sh');
  return;
}

if (cli.flags.reland) {
  shell.exec('./scripts/run_release_android.sh');
  return;
}

if (cli.flags.update) {
  shell.exec('./scripts/update_modules.sh');
  return;
}

var command;
if (cli.flags.logios) {
  command = 'react-native log-ios';
}

if (cli.flags.logand) {
  command = 'react-native log-android';
}

if (cli.flags.deviceios) {
  command = 'react-native run-ios --device';
}

if (cli.flags.deviceand) {
  command = 'react-native run-android';
}

command &&
  exec(command, (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err);
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  });

if (!command) {
  console.log(cli.help);
}
return;
