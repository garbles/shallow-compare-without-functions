# shallow-compare-without-functions

[![Travis][build-badge]][build]

Just like [React addons `shallowCompare`](https://facebook.github.io/react/docs/shallow-compare.html) except it ignores functions.
It's not uncommon to want to bind to a instance function or wrap and action creator. The problem with doing this is that even
if the value props don't change, using a new function will trigger a re-render, making it a bad idea to use `shallowCompare` in that case.
Additionally, the actual behavior of those functions almost never changes.

See [this demo](shallow-compare-without-functions.surge.sh) for an example.

[build-badge]: https://img.shields.io/travis/garbles/shallow-compare-without-functions/master.svg?style=flat-square
[build]: https://travis-ci.org/garbles/shallow-compare-without-functions
