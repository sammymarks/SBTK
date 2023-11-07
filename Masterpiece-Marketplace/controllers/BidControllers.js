
const { User, Artwork, Auction, Bid } = require('../models/index')

module.exports = {
    getAll,
    getByID,
    getByBidID,
    getByAuctionID,
    postCreate,
    deleteDelete,
}

async function getAll (req,res) {
    try {
        const bids = await Bid.find()
        res.status(201).send(bids)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    } 
}

async function getByID (req,res) {
    try {
        const bids = await Bid.findById(req.params.id)
        res.status(201).send(bids)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getByBidID (req,res) {
    try {
        // const bid = await Bid.findById(req.params.id)
        res.status(201).send(bid)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getByAuctionID (req,res) {
    try {
        // const bid = await Bid.findById(req.params.id)
        res.status(201).send(bid)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function postCreate (req,res) {
    try {
        const bid = await Bid.create(req.body)
        res.status(201).send(bid)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function deleteDelete (req,res) {
    try {
        const bidID = req.params.id; 
        const deletedBid = await Bid.findByIdAndDelete(bidID);

        if (!deletedBid) {
            return res.status(404).json({ message: 'Bid not found for deletion' });
        }

        res.status(200).json({ message: 'Bid deleted successfully' });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}