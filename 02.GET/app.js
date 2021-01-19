const querystring = require('querystring');

const serverHandler = (req, res) => {
  const method = req.method
  console.log('method:', method);

  let url = req.url
  console.log('url:', url);

  req.query = querystring.parse(url.split('?')[1]);
  console.log('query', req.query);
  
  res.end(
    JSON.stringify(req.query)
  )
  // method: GET
  // url: /?a=111&b=222
  // query [Object: null prototype] { a: '111', b: '222' }
}

module.exports = serverHandler