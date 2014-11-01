ace.define("ace/mode/spl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var SplHighlightRules = function() {
    var keywords = "define";
    var supportType = exports.supportType = "aspect|dimension|duration|entropy|eternal|high|long|low|namespace|time|short|"+
    "static|begins|with|ends|context|table|icon|column|colsplit|colrep|coldrop|colcopy";

    var builtinConstants = (
        "true|false|null"
    );

    var builtinFunctions = (
        "constrain|add_context|colmap|colfill|count|min|max|avg|sum|rank|now|coalesce|main"
    );

    var keywordMapper = this.createKeywordMapper({
        "support.function": builtinFunctions,
        "support.type": supportType,
        "keyword": keywords,
        "constant.language": builtinConstants
    }, "identifier", true);

    this.$rules = {
        "start" : [ {
            token : "comment",
            regex : "--.*$"
        }, {
            token : "string",           // " string
            regex : '".*?"'
        }, {
            token : "string",           // ' string
            regex : "'.*?'"
        }, {
            token : "constant.numeric", // float
            regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        }, {
            token : keywordMapper,
            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }, {
            token : "keyword.operator",
            regex : "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
        }, {
            token : "paren.lparen",
            regex : "[\\(]"
        }, {
            token : "paren.rparen",
            regex : "[\\)]"
        }, {
            token : "text",
            regex : "\\s+"
        } ]
    };
};

oop.inherits(SplHighlightRules, TextHighlightRules);

exports.SplHighlightRules = SplHighlightRules;
});

ace.define("ace/mode/spl",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/spl_highlight_rules","ace/range"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var SplHighlightRules = require("./spl_highlight_rules").SplHighlightRules;
var Range = require("../range").Range;

var Mode = function() {
    this.HighlightRules = SplHighlightRules;
};
oop.inherits(Mode, TextMode);

(function() {

    this.lineCommentStart = "--";

    this.$id = "ace/mode/spl";
}).call(Mode.prototype);

exports.Mode = Mode;

});
