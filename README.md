# shallowCompare without functions

[![Travis][build-badge]][build]

Just like [React addons `shallowCompare`](https://facebook.github.io/react/docs/shallow-compare.html) except it ignores functions.
Have you ever found yourself doing the following?

```js
class MyComponent extends React.Component {
  shouldComponentUpdate (nextProps) {
    return (
      nextProps.check !== this.props.check ||
      nextProps.every !== this.props.every ||
      nextProps.single !== this.props.single ||
      nextProps.prop !== this.props.prop ||
      nextProps.that !== this.props.that ||
      nextProps.isnt !== this.props.isnt ||
      nextProps.a !== this.props.a ||
      nextProps.func !== this.props.func
    )
  }

  render () {
    const {
      check,
      every,
      single,
      prop,
      that,
      isnt,
      a,
      func,

      onClick,
      onBlur,
      onOtherStuff
    } = this.props

    // ...
  }
}
```

Grooooossssssssssss.  This is what `shallowCompareWithoutFunctions` solves for you.


```js
import {shallowCompareWithoutFunctions} from 'shallow-compare-without-functions'

class MyComponent extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompareWithoutFunctions(this, nextProps, nextState)
  }

  // ...
}
```

It's not uncommon to want to bind to an instance function or wrap an action creator before passing it to a child component; however, even if the value props of the child component didn't change,
`shallowCompare` will suggest a re-render because a function prop has changed. The actual behavior of those
functions almost never actually changes on their own, so a re-render is not necessary.

See [this demo](http://shallow-compare-without-functions.surge.sh) for an example.

[build-badge]: https://img.shields.io/travis/garbles/shallow-compare-without-functions/master.svg?style=flat-square
[build]: https://travis-ci.org/garbles/shallow-compare-without-functions
