module.exports =  () => {
	return {
		env: {
			type: 'node'
		},
		files: [
			'src/**/*.js'
		],

		tests: [
			'test/**/*Spec.js'
		]
	};
}