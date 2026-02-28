const {writePosts , readPosts} = require('../utils/file');

const uploadPost = (req, res) => {
  try {
    const {author , title, content } = req.body
    
    if (!author || !title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }
    const newPost = {
      id: Date.now().toString(),
      author,
      title,
      content,
      createdAt: new Date()
    }
    
    writePosts([...readPosts(), newPost])
    res.status(201).json({ message: 'Post created successfully'});
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

const getPosts = async (req, res) => {
  try {
    const posts = await readPosts()
    res.status(200).json({posts})
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

const deletePost = async (req, res) => {
  try {
    const { id } = req.body
    
    let posts = await readPosts()
    posts = posts.filter(post => post.id !== id)
    
    writePosts(posts)
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

const updatePost = async (req, res) => {
  try{
    const { id, title, content } = req.body
    
    const post = readPosts().filter(post => post.id === id)
    post.title = title
    post.content = content
    writePosts(post)
    res.status(200).json({ message: 'Post updated successfully' });
  }catch(err){
    res.status(500).json({ message: err });
  }
}

module.exports = { uploadPost , getPosts , deletePost , updatePost }