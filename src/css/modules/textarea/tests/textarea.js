casper.test.begin('Visual regression test for the textarea module.', function(test) {

  casper.loadPath('modules/textarea')

  .loadFixture('textarea')

  .then(function () {
    phantomcss.screenshot('.textarea', 'textarea module');
  })

  .run(function () {
    test.done();
  });

});
