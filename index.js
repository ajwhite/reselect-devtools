'use strict';

import * as Reselect from 'reselect';

export function createSelector (...args) {
  const selector = Reselect.createSelector(...args);
  const inputSelectors =  args.slice(0, args.length - 1);;
  var debug = false;
  var debugLabel = null;

  function debuggableSelector (...selectorArgs) {
    if (!__DEV__ || !debug) {
      return selector(...selectorArgs);
    }

    const output = selector(...selectorArgs);
    const inputs = inputSelectors.map(sel => sel(...selectorArgs));

    console.groupCollapsed(
      'Selector' + (debugLabel ? ` - ${debugLabel}` : '')
    );
    console.info({
      inputs,
      output
    })
    console.groupEnd();

    return output;
  }

  debuggableSelector.debug = (label) => {
    debug = true;
    debugLabel = label;

    return debuggableSelector;
  };

  return debuggableSelector;
}
