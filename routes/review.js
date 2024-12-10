const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");


const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


//Review Route
router.post("/", 
    validateReview,isLoggedIn, wrapAsync(reviewController.createReview)
);

//Delete Review Route
router.delete("/:reviewId",isReviewAuthor, wrapAsync(reviewController.destroyReview)
);
module.exports = router;