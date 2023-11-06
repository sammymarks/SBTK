//For Artwork:
// add getbyID controller function here
// add getbyID route in server.js
// reference a to be defined Artwork schema


const { User, Artwork, Auction, Bid } = require('../models/index')

module.exports = {
    getAll,
    getByID,
    getSearch,
    getByUserID,
    postCreate,
    putUpdate,
    deleteDelete,
}

async function getAll (req,res) {
    try {
        const auctions = await Auction.find()
        res.status(201).send(auctions)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    } 
}

async function getByID (req,res) {
    try {
        // const auctions = await Auction.find()
        res.status(201).send(auctions)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    } 
}

async function getSearch (req,res) {
    try {
        // const auctions = await Auction.find()
        res.status(201).send(auctions)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    } 
}

async function getByUserID (req,res) {
    try {
        // const auction = await Auction.findById(req.params.id)
        res.status(201).send(auction)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function postCreate (req,res) {
    try {
        // const auction = await Auction.findById(req.params.id)
        res.status(201).send(auction)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function putUpdate (req,res) {
    try {
        // const auction = await Auction.findById(req.params.id)
        res.status(201).send(auction)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function deleteDelete (req,res) {
    try {
        // const auction = await Auction.findById(req.params.id)
        res.status(201).send(auction)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}