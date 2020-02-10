
# karma-bail-fast

Report **Karma** failures as soon as they occur, exiting and reporting the
the first failure instead of waiting for all of the tests to run.

Multiple test failures can often be the result of a single piece of erroneous
code, therefore it is not always necessary to run and produce the results of
every single test.

Failing fast is an important concept of the Agile software development
methodology as it allows the learning process to begin as early as possible,
providing the shortest feedback loop available for the developer to begin fixing
a failing test.

## Installation

```
npm install --save-dev karma-bail-fast
```

## Configuration

Either pass the `bail-fast` reporter as a command line argument:

```
karma start --reporters bail-fast
```

Or add the reporter to your `karma.conf.js` file:

```javascript
// karma.conf.js
module.exports = function (config) {
  config.set({
    reporters: ['bail-fast']
  });
};
```
