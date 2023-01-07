/** @format */
import Category from '../model/category';
import Post from '../model/post';

export const createCategory = async (req, res) => {
  try {
    const category = await Category(req.body).save();
    res.json(category);
    res.status(200).json({ message: 'Lưu thành công!' }, category);
  } catch (error) {
    res.status(400).json({ message: 'Không thấy data' });
  }
};

export const updateCategory = async (request, response) => {
  try {
    const category = await Category.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    ).exec();
    response.json({ message: 'Sửa thành công!' }, category);
  } catch (error) {
    response.status(400).json({ message: 'Không sửa được!' });
  }
};

export const deleteCategory = async (request, response) => {
  try {
    const category = await Category.findOneAndDelete({
      _id: request.params.id,
    }).exec();
    response.json({ message: 'Xóa thành công!' }, category);
  } catch (error) {
    response.status(400).json({ message: 'Không thể xóa!' });
  }
};

export const listCategory = async (request, response) => {
  try {
    const category = await Category.find().exec();
    response.json({ message: 'Danh sách Category!' }, category);
  } catch (error) {
    response.status(400).json({ message: 'Không thấy data' });
  }
};

export const listCategoryDetail = async (request, response) => {
  try {
    const category = await Category.findOne({ _id: request.params.id }).exec();
    const post = await Post.find({ category }).exec();
    // const post = await Post.find({category}).populate("category").exec()
    // const post = await Post.find({category}).select("-category").exec()
    response.json({ category, post });
  } catch (error) {
    response.status(400).json({ message: 'Không thấy data' });
  }
};
