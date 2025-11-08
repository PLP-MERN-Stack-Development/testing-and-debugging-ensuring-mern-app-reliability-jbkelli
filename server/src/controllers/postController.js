const Post = require('../models/Post');

exports.getAllPosts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 0;
    const skip = (page - 1) * limit;
    
    let query = Post.find();
    
    if (req.query.category) {
      query = query.where('category').equals(req.query.category);
    }
    
    if (limit > 0) {
      query = query.skip(skip).limit(limit);
    }
    
    const posts = await query.populate('author', 'username email');
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'username email');
    
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    
    res.json(post);
  } catch (error) {
    next(error);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { title, content, category, tags } = req.body;
    
    const post = await Post.create({
      title,
      content,
      author: req.user._id,
      category,
      tags
    });
    
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }
    
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.json(updatedPost);
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }
    
    await post.deleteOne();
    
    res.json({ message: 'Post deleted' });
  } catch (error) {
    next(error);
  }
};
