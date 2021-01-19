const querystring = require('querystring');

const serverHandler = (req, res) => {
  if(req.method === "POST") {
    let postData = '';
    req.on('data', chunk => {
      postData+=chunk.toString();
    })

    req.on('end',() => {
      console.log('postData', postData);
      res.end('数据接收完毕')
    })
    console.log(`post data content type, ${req.headers['content-type']}`);
  }
}

module.exports = serverHandler