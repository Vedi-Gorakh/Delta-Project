const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");    
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const listingControllers = require("../controllers/listings.js");
const multer  = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });
//New Route
router.get("/new",isLoggedIn ,listingControllers.renderNewForm);
//Edit Route
router.get("/:id/edit",isLoggedIn,
    wrapAsync(listingControllers.renderEditForm)
);
router.route("/")
      //Index Route
      .get(wrapAsync(listingControllers.index))
      //Create Route
       .post(
        isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingControllers.createListing));
      

router.get("/search", wrapAsync(listingControllers.search));
router.route("/:id")
      //Show Route
      .get(wrapAsync(listingControllers.showListings))
      //Update Route
      .put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,
       wrapAsync(listingControllers.updateListing))
       //Delete Route
      .delete(isLoggedIn,
       wrapAsync(listingControllers.destroyListing)
);


module.exports = router;