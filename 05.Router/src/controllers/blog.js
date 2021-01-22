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
const createNewBlog = (blogData) => {
  console.log('blogData:', blogData);
  return {
    id: 1
  }
}

// 更新博客
const updateBlog = (id, blogData = {}) => {
  console.log('id', id);
  console.log('blogData', blogData);
  return true
}

// 删除博客
const deleteBlog = (id) => {
  console.log('id', id);
  return true;
}
module.exports = {
  getList,
  getDetail,
  createNewBlog,
  updateBlog,
  deleteBlog
}