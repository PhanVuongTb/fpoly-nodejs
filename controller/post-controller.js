/** @format */

import Post from '../model/post';

export const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body);
    post.save();

    res.status(200).json('Lưu thành công!');
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404).json({ msg: 'Không tìm thấy Post' });
    }

    await Post.findByIdAndUpdate(req.params.id, { $set: req.body });

    res.status(200).json('Sửa thành công!', post);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    await post.delete();

    res.status(200).json('Xóa thành công!');
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json('Thông tin Post: ', post);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllPosts = async (req, res) => {
  let username = req.query.username;
  let category = req.query.category;
  let posts;
  try {
    //lấy bài viết theo username
    if (username) posts = await Post.find({ username: username });
    //lấy bài viết theo category
    else if (category) posts = await Post.find({ categories: category });
    //lấy tất cả bài viết
    else posts = await Post.find({});

    res.status(200).json('Thông tin Posts: ', posts);
  } catch (error) {
    res.status(500).json(error);
  }
};
