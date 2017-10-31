var scriptes = [];

function aa() {
	//$('.countryTree').attr('showHeader', true);
	console.log($('.countryTree').attr('showHeader'));
	//test = 5;
}



var _watch = window.treeStats;
var test = window.treeStats;
setInterval(function() {
    if ( _watch !== test ) {
        _watch = test;
        console.log('Variable changed.', test);
    }
}, 100);

function watch(def) {
	const _watchEl = def;
	var newEl = def;
	setInterval(function() {
	    if ( _watch !== newEl ) {
	        const _watchEl = newEl;
	        console.log('Variable changed.', newEL);
	    }
	}, 100);
}