DDH.json_validator = DDH.json_validator || {};

DDH.json_validator.build = function(ops) {
    "use strict";

    // Flag to make denote if IA has been shown or not
    var shown = false;

    ops.data.cols = is_mobile ? 8 : 20;

    return {
        onShow: function() {
            // Make sure this function is run only once, the first time
            // the IA is shown otherwise things will get initialized
            // more than once
            if (shown)
                return;

            // Set the flag to true so it doesn't get run again
            shown = true;

            var $dom = $('.zci--json_validator'),
                $validateButton = $dom.find('button'),
                $input = $dom.find('.json_validator--input'),
                $result = $dom.find('.json_validator--result');

            // Remove max-width restriction from container
            $dom.find(".zci__main").removeClass('c-base');

            // Load library when the IA is shown for the first time
            DDG.require('jsonlint', function () {
                $validateButton
                    .text('Validate JSON')
                    .prop('disabled', false)
                    .css('cursor', 'pointer')
                    .removeClass('btn--skeleton')
                    .addClass('btn--primary');
            });

            $validateButton.click(function () {
                $result.parent().removeClass('is-hidden');
                try {
                    var result = jsonlint.parse($input.val());
                    // JSON is valid
                    if (result) {
                        $result
                            .html("JSON is valid!")
                            .removeClass('tx-clr--red-dark')
                            .addClass('tx-clr--green');

                        // Prettyprint (beautify) JSON when it's valid
                        $input.val(JSON.stringify(result, null, "  "));
                    }
                } catch(e) {
                    // JSON is invalid, show the exception (error)
                    $result
                        .html(e)
                        .removeClass('tx-clr--green')
                        .addClass('tx-clr--red-dark')
                }
            })
        }
    };
};
