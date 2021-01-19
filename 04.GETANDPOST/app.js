const querystring = require('querystring');

const serverHandler = (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];
  const query = querystring.parse(url.split('?')[1]);
  const responseData = {
    method,
    url,
    path,
    query
  }

  res.setHeader('Content-Type', 'application/json');

  if(method === 'GET') {
    res.end(
      JSON.stringify(responseData)
    )
  }

  if(method === 'POST') {
    let postData = '';
    req.on('data', (chunk) => {
      postData+=chunk.toString();
    })
    req.on('end', () => {
      responseData.postData = postData;
      res.end(
        JSON.stringify(responseData)
      )
    }) 
  }
}

module.exports = serverHandler;