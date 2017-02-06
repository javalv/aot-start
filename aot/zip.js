var fs = require( 'fs' );
var zip = require("node-native-zip");
var path = require("path");
//要压缩文件夹所在的父目录
var pathToZipDir = 'build/target';
//要压缩文件夹所在的最后一层目录
var dirToZip = '';
(function () {
  var zip = require("node-native-zip");

  var archive = new zip();
  (function addFile(filepath) {
    if(fs.lstatSync(filepath).isDirectory()) {
      var directory = fs.readdirSync(filepath);
      directory.forEach(function(subfilepath) {
        addFile(path.join(filepath,subfilepath));
      });
    } else {
      archive.add(path.relative(pathToZipDir, filepath), fs.readFileSync(filepath));
    }
  })(path.join(pathToZipDir, dirToZip));
  var buff = archive.toBuffer();

  fs.writeFile("build/build.zip", buff, function () {
    console.log("im finished");
  });
}())
