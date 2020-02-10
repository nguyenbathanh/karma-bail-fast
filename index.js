var BailFastReporter = function(baseReporterDecorator, config, logger, helper, formatError) {
  baseReporterDecorator(this);

  this.onSpecComplete = function(browser, result) {
    if (result.success === false) {
      this.specFailure(browser, result);
      process.exit(1);
    }
  };
};

module.exports = {
  'reporter:bail-fast': ['type', BailFastReporter]
};
