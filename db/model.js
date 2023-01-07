const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    userId: { type: String,  required: true, trim : true, sparse:true },
    displayname: { type: String, required: true, trim : true, sparse:true },
    phone : { type: String, required: true},
    email : { type: String, required: true, uniqie : true, sparse:true },
    earnedRating : { type: Number},
    totalRating : { type: Number},
    location : {
        type: { type: String, required: true,  default: "Point" },
        address : { type: String },
        coordinates : [Number]
    }
});

const requestSchema = mongoose.Schema({
	requestTime: { type: Date },
	location: {
		coordinates: [ Number ],
		adress: { type: String }
	},
	customerId: { type: String },
	vendorId: { type: String },
	status: { type: String },
    vegetables: { type: String }

});

Schema.index({"location" : "2dsphere", userId : 1});

/**
 * Represents a vendor.
 * @constructor
*/

const Request = mongoose.model('Request', requestSchema);
exports.Request = Request;
const vendor = mongoose.model('vendor', Schema);
exports.vendor = vendor;
