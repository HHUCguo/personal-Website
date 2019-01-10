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
    .pipe(gulp.dest('website/js'))
    .pipe(connect.reload())
})

// 创建文件修改监听任务,在这里写需要热刷新监听的文件
gulp.task('auto',function(){
    gulp.watch('website/js/*.js',['jsUglify'])
    gulp.watch('website/css/*.css',['reload'])
    gulp.watch('website/*.html',['reload'])
})

// 创建热加载任务
gulp.task('reload',function(){
    gulp.src('website/*')
        .pipe(connect.reload())
})

// gulp服务器
gulp.task('server',function(){
    connect.server({
        root:'website',
        livereload:true
    })
})
