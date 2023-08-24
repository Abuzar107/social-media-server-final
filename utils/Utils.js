// import { post } from "../router/authRouter"
// const timeago = require('time-ago')
var ta = require('time-ago')

const mapPostOutPut = (post, userId) => {
    return{
        _id: post._id,
        caption: post.caption,
        image: post.image,
        owner: {
            _id: post.owner._id,
            name: post.owner.name,
            avatar: post.owner.avatar
        },
        likeCount: post.likes.length,
        isLiked: post.likes.includes(userId),
        timeAgo: ta.ago(post.createdAt)
    }
}

module.exports = {
    mapPostOutPut
}