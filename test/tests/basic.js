module("API shape");

test("Global functions", 3, function() {
	equal(typeof window.$$, "function", "Defines a global '$$' function");
	equal(typeof window.tQuery, "function", "Defines a global 'tQuery' function");
	strictEqual(window.tQuery, window.$$, "$$ and tQuery are the same function");
});

test("Return value", 3, function() {
	var ret = $$("body");

	equal(typeof ret, "object", "Returns an object");
	equal(typeof ret.length, "number", "Returned object defines a `length` Number property");
	equal(typeof ret.forEach, "function", "Returned object defines a `forEach` method");
});


