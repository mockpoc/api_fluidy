const router = require("express").Router();
const Event = require("../models/Event");

router.get('/', async (req, res) => {
    res.status(200).send("on root");
});

router.post('/event', async (req, res) => {
    console.log(req.body);
    const event = new Event({   
        id:req.body.id,
        data:req.body.data
    });
    try {
        await event.save();
        res.status(200).send("ok");
    } catch(err) {
        console.log(err);
        res.status(400).send("error save");
    }
});

router.get("/event", async (req, res) => {
    try {
        const event = await Event.find({});
        if(event) {
            res.status(200).json(event);
        } else {
            res.status(400).json({message : "error: event not found"});
        }
    } catch(err) {
        res.status(400).json({message : err});
    }
});

module.exports = router;