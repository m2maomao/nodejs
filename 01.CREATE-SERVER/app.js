const serverHandler = (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const responseData = {
    name: 'Michael',
    age: 20
  }
  res.end(
    JSON.stringify(responseData)
  )
}

module.exports = serverHandler