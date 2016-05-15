# shallow-compare-without-functions

[![Travis][build-badge]][build]

Just like [React addons `shallowCompare`](https://facebook.github.io/react/docs/shallow-compare.html) except it ignores functions.

It's not uncommon to want to bind to a instance function or wrap an action creator; however, even if value props didn't change,
`shallowCompare` will suggest a re-render because function props have changed. Additionally, the actual behavior of those
functions almost never changes, so a re-render is not necessary.

See [this demo](http://shallow-compare-without-functions.surge.sh) for an example.

[build-badge]: https://img.shields.io/travis/garbles/shallow-compare-without-functions/master.svg?style=flat-square
[build]: https://travis-ci.org/garbles/shallow-compare-without-functions
