import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        lastname: { type: String, required: true },
        firstname: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        cartData: { type: Object, default: {} }
    },
{minimize:false})

const userModel = mongoose.models.user || mongoose.model('clients',userSchema)

export default userModel;