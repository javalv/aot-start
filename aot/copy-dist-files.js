var fs = require( 'fs' ),
    stat = fs.stat;

//删除
deleteFolderRecursive = function(path) {
  var files = [];
  if( fs.existsSync(path) ) {
    files = fs.readdirSync(path);
    files.forEach(function(file,index){
      var curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    // fs.rmdirSync(path);
  }
};

/*
 * 复制目录中的所有文件包括子目录
 * @param{ String } 需要复制的目录
 * @param{ String } 复制到指定的目录
 */
var copy = function( src, dst ){
  // 读取目录中的所有文件/目录
  fs.readdir( src, function( err, paths ){
    if( err ){
      throw err;
    }
    paths.forEach(function( path ){
      var _src = src + '/' + path,
          _dst = dst + '/' + path,
          readable, writable;
      stat( _src, function( err, st ){
        if( err ){
          throw err;
        }
        // 判断是否为文件
        if( st.isFile() ){
          // 创建读取流
          readable = fs.createReadStream( _src );
          // 创建写入流
          writable = fs.createWriteStream( _dst );
          // 通过管道来传输流
          readable.pipe( writable );
        }
        // 如果是目录则递归调用自身
        else if( st.isDirectory() ){
          exists( _src, _dst, copy );
        }
      });
    });
  });
};
// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
var exists = function( src, dst, callback ){
  fs.exists( dst, function( exists ){
    // 已存在
    if( exists ){
      callback( src, dst );
    }
    // 不存在
    else{
      fs.mkdir( dst, function(){
        callback( src, dst );
      });
    }
  });
};


var copyFiles = function (resources) {
  resources.map(function(f) {
    var path = f.split('/');
    var t = 'build/target/' + path[path.length-1];
    fs.createReadStream(f).pipe(fs.createWriteStream(t));
  });
}

var mkdir = function (dst) {
  fs.mkdir( dst);
}

//压缩
// var zip = function () {
//   var archiver = require('archiver');
//   var output = fs.createWriteStream('build/archiver-unzip.tar');
//   var archive = archiver('tar');
//   archive.on('error', function(err){
//     throw err;
//   });
//   archive.pipe(output);
//   archive.bulk([
//     { src: ['build/target/**']}
//   ]);
//   archive.finalize();
// }



deleteFolderRecursive('build');
// mkdir("./build/target");
//
// copyFiles([
//   'node_modules/core-js/client/shim.min.js',
//   'node_modules/zone.js/dist/zone.min.js',
//   'aot/index.html',
//   'aot/conf.js'
// ]);
// // 复制目录
// exists( './public', './build/target/public', copy );

// zip();

var fs = require('fs');

