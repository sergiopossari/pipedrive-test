var Pipedrive = require('pipedrive');
console.log(Pipedrive);
console.log('Setting up the environment');

if (!process.argv[2]) {
	process.stderr.write('Please provide API token!' + "\n");
	process.exit();
}
