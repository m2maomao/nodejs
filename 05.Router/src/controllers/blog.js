// 博客相关的方法
const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '标题1',
      content: '内容1',
      author: 'michael',
      createAt: 1611049160241
    },
    {
      id: 2,
      title: '标题2',
      content: '内容2',
      author: 'maomao',
      createAt: 1611049212323
    }
  ]
}
// 获取博客详情
const getDetail = (id) => {
  return {
    id: 1,
    title: '标题1',
    content: '内容1',
    author: 'michael',
    createAt: 1611049160241
  }
}

// 创建博客

module.exports = {
  getList,
  getDetail
}