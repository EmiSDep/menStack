const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");

//Getting all hotels
router.get("/", async (req, res) => {
    try {
        const hotels = await hotel.find();
        res.json(hotels);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
} )

//Create new hotel
router.post("/", async (req, res) => {
    const{hotelName, hotelAddress, website}=req.body; 
    const hotel =new Hotel({
        hotelName,
        description,
        stars
    });

    try {
        const newHotels = await hotel.save();
        res.status(201).json(newHotels);
    } catch (err) {
        res.status(401).json({message: err.message});
    }

    //Update
    router.patch("/:hotel", getHotelByName, async (req, res) => {
        if (req.body.hotelName != null) {
          res.hotel.hotelName = req.body.hotelName;
        }
        if (req.body.hotelAddress != null) {
          res.hotel.hotelAddress = req.body.hotelAddress;
        }
        if (req.body.hotel != null) {
          res.hotel.hotelName = req.body.hotelName;
        }
        try {
          const updatedHotel = await res.hotel.save();
          res.json(updatedHotel);
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
      });
    
    //delete
      router.delete("/:hotel", getHotelByName, async (req, res) => {
        try {
          await res.hotel.remove();
          res.json({ message: "Deleted hotel" });
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      });
        
});

module.exports = router;