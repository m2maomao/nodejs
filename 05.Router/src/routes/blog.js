const {SuccessModel, ErrorModel} = require('../model/responseModel');
const {getList, getDetail} = require('../controllers/blog');
// 处理博客相关的路由
const handleBlogRoute = (req, res) => {
  // 定义处理路由的逻辑
  const method = req.method;

  // 博客列表路由
  if (method === 'GET' && req.path === '/api/blog/list') {
    // /api/blog/list?author=michael&keyword=123
    // new SuccessModel()
    const author = req.query.author || '';
    const keyword = req.query.keywords || '';
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }

  // 博客详情路由
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id;
    const detailData = getDetail(id);
    return new SuccessModel(detailData)
  }

  // 新增路由
  if (method === 'POST' && req.path === '/api/blog/new') {
    const postData = req.body;
    const newBlogData = createNewBlog(postData);
    return {
      message: '新建博客的接口'
    }
  }

  // 更新路由
  if (method === 'POST' && req.path === '/api/blog/update') {
    console.log(req.body)
    return {
      message: '更新博客的接口'
    }
  }

  // 删除路由
  if (method === 'POST' && req.path === '/api/blog/delete') {
    return {
      message: '删除博客列表的接口'
    }
  }
}

module.exports = handleBlogRoute;