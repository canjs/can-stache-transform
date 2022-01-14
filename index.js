const parse = require("can-stache-ast").parse;

function makeRenderer(imports, intermediate, filename) {
	intermediate = JSON.stringify(intermediate);
	filename = JSON.stringify(filename);

	const requires = imports.map(function (imported) {
		return 'require(\'' + imported + '\');';
	}).join('\n');

	return `
		const stache = require('can-stache');
		const mustacheCore = require( "can-stache/src/mustache_core" );
		const parse = require("can-stache-ast").parse;
		//common deps
		require('can-view-import');
		require('can-stache-bindings');
	
		${requires}
		
		${
		filename ?
			`const renderer = stache(${filename}, ${intermediate})` :
			`const renderer = stache(${intermediate}) ;`
		}
		module.exports = function(scope, options, nodeList) {
			const moduleOptions = Object.assign({}, options);
			
			if(moduleOptions.helpers) {
				moduleOptions.helpers = Object.assign({ module: module }, moduleOptions.helpers);
			} else {
				moduleOptions.module = module;
			}
			return renderer( scope, moduleOptions, nodeList );
		};
	`;
}


module.exports = {
	process(src, filename, config, options) {
		const ast = parse(filename, src);
		const results = ast.dynamicImports
		const imports = results[0];
		ast.imports.unshift.apply(
			ast.imports, imports
		);
		return {
			code: makeRenderer(
				ast.imports,
				ast.intermediate,
				filename
			)
		}
	}
};