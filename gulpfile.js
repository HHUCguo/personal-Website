var gulp = require('gulp')
var uglify = require('gulp-uglify')
var connect   = require('gulp-connect')

// 默认任务
gulp.task('default',['server','auto']);

// 创建js代码压缩任务
gulp.task('jsUglify',function(){
    gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('github-personalWebsite/js'))
    .pipe(connect.reload())
})

// 创建文件修改监听任务
gulp.task('auto',function(){
    // 源码有改动就进行压缩以及热刷新
    gulp.watch('github-personalWebsite/js/*.js',['jsUglify'])
    gulp.watch('github-personalWebsite/css/*.css',['reload'])
    gulp.watch('github-personalWebsite/*.html',['reload'])
})

// 创建热加载任务
gulp.task('reload',function(){
    gulp.src('github-personalWebsite/*')
        .pipe(connect.reload())
})

// gulp服务器
gulp.task('server',function(){
    connect.server({
        root:'github-personalWebsite',
        livereload:true
    })
})
