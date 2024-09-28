const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
    
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,

        },
        phone_number:{
            type:Number,
    
        }
    },
);
const UserModel = mongoose.model("users", UserSchema);

module.exports = {
    UserModel,
};