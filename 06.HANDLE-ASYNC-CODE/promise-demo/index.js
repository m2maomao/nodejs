const fs = require('fs');
const path = require('path');
const { callbackify } = require('util');

// function getFileContent(filename, callback) {
//   // 数据文件的绝对路径
//   const fullFilename = path.resolve(__dirname,'data',filename);

//   fs.readFile(fullFilename, (err, data) => {
//     if(err) {
//       console.error(err);
//       return;
//     }

//     callback(
//       JSON.parse(data.toString())
//     );
//   })
// }

// getFileContent('a.json', (aData) => {
//   console.log('aData', aData);
//   getFileContent(aData.next, (bData) => {
//     console.log('bData', bData);
//     getFileContent(bData.next, (cData) => {
//       console.log('cData', cData);
//     })
//   })
// });

// promise 实现
function getFileContent(filename) {
  const promise = new Promise((resolve, reject) => {
    const fullFilename = path.resolve(__dirname, 'data', filename);

    fs.readFile(fullFilename, (err, data) => {
      if(err) {
        reject(err);
        return;
      }

      resolve(
        JSON.parse(data.toString())
      );
    });
  });
  return promise;
}

getFileContent('a.json').then(a => {
  console.log(a);
  return getFileContent(a.next)
}).then((b) => {
  console.log(b);
  return getFileContent(b.next)
}).then((c) => {
  console.log(c);
})