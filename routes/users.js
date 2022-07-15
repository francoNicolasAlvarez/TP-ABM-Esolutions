const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Model = require("../models/usersModels");



router.post("/users", async (req, res) => {
    const data = new Model({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        company:req.body.company

    });        
       
        try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


router.get("/users", async (req, res) => {
    try {
        const data = await Model.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


router.get("/users/:id", async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


router.put("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new : true };
        const data = await Model.findByIdAndUpdate(
            id, 
            updatedData, 
            options
        );
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


router.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
});


router.post("/example", (req, res) => {
    console.log(req.body);
    res.end();
});




let dataBaseUsr = [
    {company: "Romaguera-Crona",
    email: "Sincere@april.biz",
    name: "Leanne Graham",
    username: "Bret"},
    {company: 'Deckow-Crist',
    email: "Shanna@melissa.tv",
    name: "Ervin Howell",
    username: "Antonette"},
    {company: 'Romaguera-Jacobson',
    email: "Nathan@yesenia.net",
    name: "Clementine Bauch",
    username: "Samantha"},
    {company: 'Robel-Corkery',
    email: "Julianne.OConner@kory.org",
    name: "Patricia Lebsack",
    username: "Karianne"},
    {company: 'Keebler LLC',
    email: "Lucio_Hettinger@annie.ca",
    name: "Chelsey Dietrich",
    username: "Kamren"},
    {company: 'Considine-Lockman',
    email: "Karley_Dach@jasper.info",
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery"},
    {company: 'Johns Group',
    email: "Telly.Hoeger@billy.biz",
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles"},
    {company: 'Abernathy Group',
    email: "Sherwood@rosamond.me",
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow"},
    {company: 'Yost and Sons',
    email: "Chaim_McDermott@dana.io",
    name: "Glenna Reichert",
    username: "Delphine"},
    {company: 'Hoeger LLC',
    email: "Rey.Padberg@karina.biz",
    name: "Clementina DuBuque",
    username: "Moriah.Stanton"}    
]
module.exports = router;
