/**
 * Part of the evias/nem-utils package.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under MIT License.
 *
 * This source file is subject to the MIT License that is
 * bundled with this package in the LICENSE file.
 *
 * @package    evias/nem-utils
 * @author     Grégory Saive <greg@evias.be> (https://github.com/evias)
 * @license    MIT License
 * @copyright  (c) 2017, Grégory Saive <greg@evias.be>
 * @link       https://github.com/evias/nem-utils
 */
"use strict";

class ConsoleInput {
    constructor(opts) {
        this.options_ = opts;
    }

    ask(question, format, callback, allowEmpty) {
        if (!allowEmpty) allowEmpty = false;

        var stdin = process.stdin,
            stdout = process.stdout;

        stdout.write(question + ": ");
        stdin.once('data', function(data) {
            data = data.toString().trim();

            if ((format && format.test(data)) || (allowEmpty && !data.length)) {
                // Input Valid
                callback(data);
            }
            else if (format) {
                stdout.write("It should match: " + format + "\n");
                self.ask(question, format, callback);
            }
        });
    }
}

exports.ConsoleInput = ConsoleInput;
