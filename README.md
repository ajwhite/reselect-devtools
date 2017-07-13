## reselect-devtools

A set of devtools to help debug `reselect` selectors.

## Example

Before:
```js
import {createSelector} from 'reselect';

const selector = createSelector(
  depA,
  depB,
  // (a, b) => doSomethignWith(a, b) // have to comment out to log it
  (a, b) => {
    var out = doSomethingWith(a, b)
    console.log('TESTING', out)
    return out
  }
)
```

After:
```js
import {createSelector} from '@utils/selectors';

const selector = createSelector(
  depA,
  depB,
  (a, b) => doSomethingWith(a, b)
).debug('TESTING') // remove when done
```
