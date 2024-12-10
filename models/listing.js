const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js")

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: String,
    image: {
        filename: {
            type: String,
            default: "default.jpg", // Default filename if not provided
        },
        url: {
            type: String,
            default: "https://i.pinimg.com/236x/58/75/c4/5875c44bd6a1d372d9be04f8c3425aac.jpg", // Default image URL
        },
        type: {
            type: String,
            default: "image/jpeg", // Default MIME type
        },
    },
    category:String,
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
             ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    
    
});
listingSchema.post("findOneAndDelete", async(listing) => {
   await Review.deleteMany({_id : {$in : listing.reviews}});
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
