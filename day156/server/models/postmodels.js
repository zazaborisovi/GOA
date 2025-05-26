import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
        title: String,
        comments: [{
            author: String,
            comment: String,
        }],
        author: String,
        img: String,
    },
    {
        timestamps: true,
    }
)

export const PostModel = mongoose.model("posts", postSchema)