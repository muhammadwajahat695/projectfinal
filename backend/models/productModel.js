import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        brand: { type: String, required: false },
        category: { type: String, required: true },
        description: { type: String, required: false },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model('Product', productSchema);

export default Product;