// tslint:disable:no-console
import * as _debug from 'debug';

/**
 * Create a namespaced debug function.
 * @param {String} namespace Usually a component name.
 * @example
 * import { makeDebugger } from 'app/lib'
 * const debug = makeDebugger('namespace')
 *
 * debug('Some message')
 * @returns {Function}
 */
export const makeDebugger = (namespace) => _debug(`pd:${namespace}`);

/**
 * Default debugger, simple log.
 * @example
 * import { debug } from 'app/lib'
 * debug('Some message')
 */
export const debug = makeDebugger('log');
