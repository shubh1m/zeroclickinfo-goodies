DDH.lowercase = DDH.lowercase || {};

(function(DDH) {
    "use strict";

	// var bail = DDH.failed;
	//
	// DDH.failed = function (id) {
	// 	console.log("IA FAILED: " + id);
	// 	bail(id);
	// }

	console.log("DDH.lowercase.build");


	DDH.lowercase.build = function(ops) {

		var lower = ops.data.input.toLowerCase();

		console.log(lower);

		if (lower == ops.data.input) {
			console.log("NOTHING TO LOWERCASE");
			ops.data = null;
			return DDH.failed('LowercaseJs');
		}

		console.log(ops);

        return {

            meta: {
                sourceName: "Source Domain",
                sourceUrl: "https://source.website.com"
            },

            data: {
				title: ops.data.input.toLowerCase(),
				subtitle: "Lowercase: "  + ops.data.input
            },

            templates: {
                group: 'text',
            }
        };
    };
})(DDH);
