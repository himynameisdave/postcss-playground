var gulp         = require('gulp'),
    plug         = require('gulp-load-plugins')(),
    autoprefixer = require('autoprefixer'),
    browserify   = require('browserify'),
    source       = require('vinyl-source-stream'),
    paths        = require('./package.json').paths;// what a great trick


gulp.task( 'default', [ 'server', 'watch' ]);
gulp.task( 'build', [ 'build-css', 'build-js', 'move-static-assets', 'html-replace' ] )


//  Starts the express server as defined in server.js
//gulp.task( 'server', plug.shell.task([ 'foreman start web' ]) );
gulp.task( 'server', plug.shell.task([ 'npm run start' ]) );
//  Watches files and compieles css
gulp.task( 'watch', function(){

  gulp.watch( 'src/css/**/*.less', ['compile-css'] );
  gulp.watch( ['src/js/**/*.js', '!src/js/bundle.js'], ['js-bundle'] );

});


///////////////////////////////////////////////////////////////
//    CSS TASKS
///////////////////////////////////////////////////////////////

//  Simply compiles the css
gulp.task( 'compile-css', function(){

  return gulp.src( paths.css.src+'exports/core.less' )
          .pipe( plug.less() )
          .pipe( gulp.dest( paths.css.src ) );

});

//  Everything beyond compiling the css
gulp.task( 'build-css', [ 'compile-css' ], function(){

  var postProcessors = [ autoprefixer({ browsers: [ 'last 4 versions', '> 2.5% in CA' ] }) ]

  return gulp.src( paths.css.src+'core.css' )
          .pipe(plug.postcss(postProcessors))
          .pipe(plug.cssnano())
          .pipe(gulp.dest( paths.css.dist ))

});

///////////////////////////////////////////////////////////////
//    JS TASKS
///////////////////////////////////////////////////////////////

//  
gulp.task( 'build-js', [ 'js-bundle' ], function(){

  return gulp.src( paths.js.src+'bundle.js' )
            .pipe( plug.uglify({ mangle: false }))
            .pipe( gulp.dest( paths.js.dist ) );

});


gulp.task( 'js-bundle', function(){

  return browserify( paths.js.src+'main.js' )
          .bundle()
          .on( 'error', function(e){ console.log(e) } )
          .pipe(source('bundle.js'))
          .pipe(gulp.dest( paths.js.src ));

});



///////////////////////////////////////////////////////////////
//    OTHER TASKS
///////////////////////////////////////////////////////////////

//  Moves some static assets (currently not used really)
gulp.task( 'move-static-assets', function(){

  gulp.src( './src/favicon.ico' )
    .pipe( gulp.dest('./dist/') );

  //  just moves SVG files now with svgmin
  return gulp.src( paths.img.src + "*.svg" )
          .pipe( plug.svgmin() )
          .pipe( gulp.dest( paths.img.dist ) );

});


//  fix some file refs in the HTML
gulp.task( 'html-replace', function(){

  return gulp.src( './src/index.html' )
          .pipe( plug.htmlReplace({
              css: {
                src: 'css/core.css',
                tpl: '<link rel="stylesheet" type="text/css" href="%s" />'
              },
              js: {
                src: 'js/bundle.js',
                tpl: '<script type="text/javascript" src="%s"></script>'
              }
            }) )
          .pipe( gulp.dest( './dist/' ) )

});
