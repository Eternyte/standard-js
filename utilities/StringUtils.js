/**
 * @name		standard_library.utilities.StringUtils
 * @namespace 	Contains functions which manipulate strings.
 */
if ( typeof standard_library === "undefined")
	var standard_library = {};
if ( typeof standard_library.utilities === "undefined")
	standard_library.utilities = {};
if ( typeof standard_library.utilities.StringUtils === "undefined")
	standard_library.utilities.StringUtils = {};

/**
 * @param {String}
 * 			word	The string to check on.
 * @param {String}
 * 			str		The substring to check in the string.
 * @returns {Boolean} True if word starts with str, false otherwise.
 */
standard_library.utilities.StringUtils.startsWith = function(word, str) {
	"use strict";
	if ( typeof word !== "string" || typeof str !== "string")
		return undefined
	else
		return word.slice(0, str.length) === str;
};

/**
 * @param {String}
 * 			word	The string to check on.
 * @param {String}
 * 			pattern	The substring to check in the string.
 * @returns {Boolean} True if word ends with str, false otherwise.
 */
standard_library.utilities.StringUtils.endsWith = function(word, pattern) {
	"use strict";
	if ( typeof word !== "string" || typeof pattern !== "string")
		return undefined;
	else
		return !!word.match(pattern + '$');
};

/**
 * Splits a string by regexp without including capturing groups in the result.
 *
 * See the following for more context:
 * http://blog.getify.com/2010/11/to-capture-or-not/
 *
 * Why [\s\S] instead of .?: All common Perl-like regular expression flavors
 * except JavaScript include a flag that allows dot to match newlines. Without
 * this mode, matching any single character requires, e.g., [\s\S]
 *
 * @param {String}
 *            str
 * @param {Regex}
 *            split
 */
//String
standard_library.utilities.StringUtils.splitWithoutCapture = function(str, split) {
	var flags = (split.global ? "g" : "") + (split.ignoreCase ? "i" : "") + (split.multiline ? "m" : "");
	var newRegExp = new RegExp(split.source.replace(/\(([^?][\s\S]*?)\)/g, "(?:$1)"), flags);
	return str.split(newRegExp);
};

/**
 * While some Unicode characters can generally be translated into equivalent
 * ASCII code points, quite a few cannot. This creates an issue when dealing
 * with a subsystem that can't handle Unicode (for example, python-SpiderMonkey
 * in Linux).
 *
 * This function takes characters that wouldn't have the same code point in
 * ASCII, and removes or replaces them.
 *
 * @param {UnicodeString}
 *            str
 * @returns {ASCIIFriendlyString}
 */
standard_library.utilities.StringUtils.makeStringASCIIInvariant = function(str) {
	// http://www.fileformat.info/info/unicode/char/2019/index.htm
	return str.replace("’", "'");
}; 