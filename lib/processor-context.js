/**
 * @fileoverview ProcessorContext utility for processors
 * See LICENSE file in root directory for full license.
 */
"use strict";

/**
 * @constructor
 * @param {string} filename The currently processed file name
 * @param {string} text The currently processed file content
 * @param {object} settings The configuration settings passed from the config file.
 */
function ProcessorContext(filename, text, settings) {

    /**
     * The read-only text of the currently processed file.
     */
    Object.defineProperty(this, "text", {
        value: text
    });

    /**
     * The read-only settings shared between all processors and rules
     */
    Object.defineProperty(this, "settings", {
        value: settings
    });

    /**
     * Gets the name for the currently processed file.
     * @returns {string} The currently processed file name.
     *
     * NOTE: this is a function, so it looks like the RuleContext getFilename method.
     */
    this.getFilename = function() {
        return filename;
    };

}

ProcessorContext.prototype = {
    constructor: ProcessorContext
};

module.exports = ProcessorContext;

