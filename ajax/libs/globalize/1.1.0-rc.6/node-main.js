/*!
 * Globalize v1.1.0-rc.6
 *
 * http://github.com/jquery/globalize
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-11-18T10:38Z
 */

// Core
module.exports = require( "./globalize" );

// Extent core with the following modules
require( "./globalize/message" );
require( "./globalize/number" );
require( "./globalize/plural" );

// Load after globalize/number
require( "./globalize/currency" );
require( "./globalize/date" );

// Load after globalize/number and globalize/plural
require( "./globalize/relative-time" );
require( "./globalize/unit" );
