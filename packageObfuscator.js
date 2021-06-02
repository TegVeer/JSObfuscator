const gulp = require("gulp");
const javascriptObfuscator = require("gulp-javascript-obfuscator");

gulp
  .src([
    "C:\\Users\\tegveer.singh\\Desktop\\Development\\Office\\neo-data-platform-backend/**/*.js",
  ])
  .pipe(javascriptObfuscator())
  .pipe(gulp.dest("../dist"));
