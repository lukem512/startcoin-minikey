module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		combine: {
			single: {
				input: "./html/ui.html",
				output: "./app.html",
				tokens: [
					{ token: "//biginteger.js", file: "./js/biginteger.js" },
					{ token: "//bitcoinjs-lib.js", file: "./js/bitcoinjs-lib.js" },
					{ token: "//bitcoinjs-lib.address.js", file: "./js/bitcoinjs-lib.address.js" },
					{ token: "//bitcoinjs-lib.base58.js", file: "./js/bitcoinjs-lib.base58.js" },
					{ token: "//bitcoinjs-lib.ecdsa.js", file: "./js/bitcoinjs-lib.ecdsa.js" },
					{ token: "//bitcoinjs-lib.eckey.js", file: "./js/bitcoinjs-lib.eckey.js" },
					{ token: "//bitcoinjs-lib.util.js", file: "./js/bitcoinjs-lib.util.js" },
					{ token: "//ellipticcurve.js", file: "./js/ellipticcurve.js" },
					{ token: "//securerandom.js", file: "./js/securerandom.js" },
					{ token: "//cryptojs.js", file: "./js/cryptojs.js" },
					{ token: "//cryptojs.sha256.js", file: "./js/cryptojs.sha256.js" },
					{ token: "//cryptojs.ripemd160.js", file: "./js/cryptojs.ripemd160.js" },
				]
			}
		}
	});

	grunt.file.defaultEncoding = 'utf-8';
	grunt.loadNpmTasks("grunt-combine");
	grunt.registerTask("default", ["combine:single"]);
};