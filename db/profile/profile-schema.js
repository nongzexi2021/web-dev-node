const mongoose = require('mongoose')
const schema = mongoose.Schema(
    {


        name: String,
        handle: String,
        profilePicture: String,
        bannerPicture: String,
        bio: String,
        website: String,
        location: String,
        dateOfBirth: String,
        dateJoined: String,
        followingCount: {type: Number, defaultValue: 0},
        followersCount: {type: Number, defaultValue: 0},
        editSwitch : {type: Boolean, defaultValue: false}


    }, { collection: 'profile' }
)

module.exports = schema