//gulp本体の読み込み
var gulp = require('gulp');

//Sassコンパイル&ベンダープレフィックス追加&mq整理
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var postcss = require('gulp-postcss');
var mqpacker = require('css-mqpacker');

var sassPath = {
  src: 'develop/sass//*.scss',
  dest: 'release/contents/css',
  watch: 'develop/sass/'
};
var options = {
  outputStyle: 'compressed',
  sourceMap: true,
  sourceComments: false
};
var autoprefixerOptions = {
  browsers: ['last 3 version', 'ie >= 6', 'Android 4.0']
};

gulp.task('sass', function() {
  return gulp.src(sassPath.src)
    .pipe(sass(options).on('error', sass.logError))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss([mqpacker()]))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(sassPath.dest));
});

// EJS
var ejs = require('gulp-ejs');
    fs = require( 'fs' );
    rename = require('gulp-rename')

var ejsPath = {
  src: ['develop/ejs//*.ejs','!' + 'develop/ejs//_*.ejs'],
  dest: 'release/contents',
  watch: 'develop/ejs/'
};

gulp.task('ejs', function(){
  // JSONファイル読み込み
  var settingdata = JSON.parse(fs.readFileSync('develop/ejs/templates/setting.json'));
  return gulp.src(ejsPath.src, {base:'develop/ejs/'})
    .pipe(ejs(settingdata,{"ext": ".html"})) // EJS内でjsonをデータを当て込む
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest(ejsPath.dest))
});

//browserSync
var browserSync = require("browser-sync");

gulp.task("browserSyncTask", function () {
browserSync({
server: {
baseDir: "release/contents",
index: "index.html"
}
});
gulp.watch("release/contents/**", function() {
browserSync.reload(); // ファイルに変更があれば同期しているブラウザをリロード
});
});

gulp.task('browser-reload', function (done){
browserSync.reload();
done();
});

//監視タスクの設定
gulp.task('default', gulp.parallel( gulp.parallel('browserSyncTask'), function(){
gulp.watch([sassPath.watch], gulp.parallel('sass'));
gulp.watch([ejsPath.watch], gulp.parallel('ejs'));
gulp.watch("release/contents/**",gulp.task('browser-reload'));
}));
