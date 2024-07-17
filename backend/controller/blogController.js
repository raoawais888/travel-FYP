const Blog = require("../models/blogModel");


class BlogController {

    // / Create
 static store =  async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      description: req.body.description,
      featureImage: req.file.path
    });
    await blog.save();
    res.status(201).send( {blog , message:"blog add successfully created" , success:true });
  } catch (error) {
    res.status(400).send({ message: error , sucess:false });
  }
};

// Read all
static getALL = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).send({blogs , success:true});
  } catch (error) {
    res.status(500).send({error , success:true});
  }
};

// Read one
  static singleBlog =  async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).send();
    res.status(200).send(blog);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update
 static update = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      description: req.body.description,
    };
    if (req.file) {
      updateData.featureImage = req.file.path;
    }
    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });
    if (!blog) return res.status(404).send();
    res.status(200).send(blog);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete
  static delete =  async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).send();
    res.status(200).send({blog , success:true  ,message: "Blog Succussfully deleted"});
  } catch (error) {
    res.status(500).send({error , success:true });
  }
};

}

module.exports = BlogController;