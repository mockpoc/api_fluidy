const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    data:{
        type:String,
        default:""
    },
    date : {
	type: Date,
	default: Date.now
    }
});

module.exports = mongoose.model('Event', EventSchema);
