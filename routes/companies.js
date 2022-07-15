const express = require("express");
const Model = require("../models/model");
const router = express.Router();
const mongoose = require("mongoose");



const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    catchPhrase: {
        required: true,
        type: String
    },
    bs: {
        required: true,
        type: String
    }
});

mongoose.model("Data", dataSchema);

router.post("/companies", async (req, res) => {
    const data = new Model({
        name: req.body.name,
        catchPhrase: req.body.catchPhrase,
        bs: req.body.bs
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get("/companies", async (req, res) => {
    try {
        const data = await Model.name.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get("/companies/:id", async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.put("/companies/:id", async (req, res) => {
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

router.delete("/companies/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

let dataBaseComp = [
    {name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'},
{name: 'Deckow-Crist', catchPhrase: 'Proactive didactic contingency', bs: 'synergize scalable supply-chains'},
{name: 'Romaguera-Jacobson', catchPhrase: 'Face to face bifurcated interface', bs: 'e-enable strategic applications'},
{name: 'Robel-Corkery', catchPhrase: 'Multi-tiered zero tolerance productivity', bs: 'transition cutting-edge web services'},
{name: 'Keebler LLC', catchPhrase: 'User-centric fault-tolerant solution', bs: 'revolutionize end-to-end systems'},
{name: 'Considine-Lockman', catchPhrase: 'Synchronised bottom-line interface', bs: 'e-enable innovative applications'},
{name: 'Johns Group', catchPhrase: 'Configurable multimedia task-force', bs: 'generate enterprise e-tailers'},
{name: 'Abernathy Group', catchPhrase: 'Implemented secondary concept', bs: 'e-enable extensible e-tailers'},
{name: 'Yost and Sons', catchPhrase: 'Switchable contextually-based project', bs: 'aggregate real-time technologies'},
{name: 'Hoeger LLC', catchPhrase: 'Centralized empowering task-force', bs: 'target end-to-end models'}
]

module.exports = router;