var gulp = require("gulp");

gulp.task("copy-html",async ()=>{
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\skw"));
});
gulp.task("copy-img",async ()=>{
	gulp.src("img/*.{jpg,png,web,webp}").pipe(gulp.dest("D:\\phpStudy\\WWW\\skw\\img"));
});

gulp.task("copy-js",async ()=>{
	gulp.src("js/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\skw\\js"));
});
//监听并更改所有css文件
gulp.task("copy-css",async ()=>{
	gulp.src("css/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\skw\\css"));
});
gulp.task("copy-php",async ()=>{
	gulp.src("php/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\skw\\php"));
});
//监听所有的文件的改变

gulp.task("watchall",async ()=>{
	gulp.watch("*.html",gulp.series("copy-html"));
	gulp.watch("img/*.{jpg,png,web,webp}",gulp.series("copy-img"));
	gulp.watch("js/*",gulp.series("copy-js"));
	gulp.watch("css/*",gulp.series("copy-css"));
	gulp.watch("php/*",gulp.series("copy-php"));
});
