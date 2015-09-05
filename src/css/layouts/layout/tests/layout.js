casper.test.begin('Visual regression test for the layout layout.', function(test) {

  casper.loadPath('layouts/layout')

  .loadFixture('layout')

  .then(function () {
    phantomcss.screenshot('.layout', 'layout layout');
  })

  .run(function () {
    test.done();
  });

});
