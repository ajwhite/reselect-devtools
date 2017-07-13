## reselect-devtools

A set of devtools to help debug `reselect` selectors.

## Example

### Before
```js
import {createSelector} from 'reselect';

const selector = createSelector(
  selectorA,
  selectorB,
  // (a, b) => doSomethignWith(a, b) // have to comment out to log it
  (a, b) => {
    var out = doSomethingWith(a, b)
    console.log('My Selector', out)
    return out
  }
)
```

### After
```js
import {createDebuggableSelector} from 'reselect-devtools';

const selector = createDebuggableSelector(
  depA,
  depB,
  (a, b) => doSomethingWith(a, b)
).debug('My Selector') // remove when done
```

### Outputs
```
> Selector - My Selector
  {
    inputs: [a, b],
    output: {...}
  }
```
