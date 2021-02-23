const mysql = require('mysql');

// 创建连接对象
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 3306,
  database: 'myblog'
});

// 开始连接
connection.connect();

// 执行sql语句
const sql = `select * from blogs`;
// const sql = `insert into blogs (title,content,author,createdAt) values ('333333', '333333','zhangsan', 1234567890123);`;
connection.query(sql,(error, result) => {
  if(error) {
    console.error('error', error);
    return;
  }
  console.log('result', result);
})

// 关闭连接
connection.end();