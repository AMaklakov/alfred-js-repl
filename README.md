# Alfred JS repl

Allows evaluating JS in [Alfredapp](https://www.alfredapp.com/).

One can use [LoDash](https://lodash.com/) and [Underscore](https://underscorejs.org/) with this Workflow.

To use [LoDash](https://lodash.com/) use `_`:

```console
js> _.find([{ a: 1 }, { a: 2 }], (x) => x.a % 2 === 0)
# { a: 2 }
```

To use [Underscore](https://underscorejs.org/) use `__`:

```console
js> __.find([{ a: 1 }, { a: 2 }], (x) => x.a % 2 === 0)
# { a: 2 }
```
