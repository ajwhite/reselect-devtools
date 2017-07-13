'use strict';

import * as Reselect from 'reselect';

export function createSelector (...args) {
  const selector = Reselect.createSelector(...args);
  var debug = false;
  var debugLabel = null;

  function debuggableSelector (...selectorArgs) {
    if (!__DEV__ || !debug) {
      return selector(...selectorArgs);
    }

    const out = selector(...selectorArgs);

    console.groupCollapsed(
      'Selector' + (debugLabel ? ` - ${debugLabel}` : '')
    );
    console.info(out);
    console.groupEnd();

    return out;
  }

  debuggableSelector.debug = (label) => {
    debug = true;
    debugLabel = label;

    return debuggableSelector;
  };

  return debuggableSelector;
}
