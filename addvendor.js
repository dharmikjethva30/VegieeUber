const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/uber",{useNewUrlParser: true, useUnifiedTopology: true})
.then( () => console.log("connected") )
.catch((err) => console.log(err));


const Schema = mongoose.Schema({
    userId: { type: String,  required: true, trim : true, sparse:true },
    displayName: { type: String, required: true, trim : true, sparse:true },
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

const vendor = new mongoose.model("vendor",Schema);


const createDocument = async() => {
    try {
        const dj = new vendor(
            {
                userId : "01",
                displayName : "Officer 001",
                phone : "01",
                email : "officer001@uberforx.com",
                earnedRatings : 21,
                totalRatings : 25,
                location : {
                    type : "Point",
                    address : "Kalyan Nagar, Bengaluru, Karnataka, India",
                    coordinates : [
                        77.63997110000003,
                        13.0280047
                    ]
                }
            }
        )
        const ej = new vendor(
            {
                userId : "02",
                displayName : "Officer 002",
                phone : "02",
                email : "officer002@uberforx.com",
                earnedRatings : 10,
                totalRatings : 25,
                location : {
                    type : "Point",
                    address : "Indiranagar, Bengaluru, Karnataka, India",
                    coordinates : [
                        77.64115449999997,
                        12.9718915
                    ]
                }
            
            }
        )
        const fj = new vendor(
            {
                userId : "03",
                displayName : "Officer 003",
                phone : "03",
                email : "officer003@uberforx.com",
                earnedRatings : 15,
                totalRatings : 25,
                location : {
                    type : "Point",
                    address : "Ulsoor, Bengaluru, Karnataka, India",
                    coordinates : [
                        77.62855850000005,
                        12.9817147
                    ]
                }
            
            }
        )
        const gj = new vendor(
            {
                userId : "04",
                displayName : "Officer 004",
                phone : "04",
                email : "officer004@uberforx.com",
                earnedRatings : 11,
                totalRatings : 25,
                location : {
                    type : "Point",
                    address : "Shivaji Nagar, Bengaluru, Karnataka, India",
                    coordinates : [
                        77.60547099999997,
                        12.975614
                    ]
                }
            
            }
        )
        const ij = new vendor(
            {
                userId : "05",
                displayName : "Officer 005",
                phone : "05",
                email : "officer005@uberforx.com",
                earnedRatings : 15,
                totalRatings : 25,
                location : {
                    type : "Point",
                    address : "Lido Mall, Bengaluru, Karnataka, India",
                    coordinates : [
                        77.62047400000006,
                        12.972814
                    ]
                }
            
            }
        )
        const kj = new vendor(
            {
                userId : "06",
                displayName : "Officer 006",
                phone : "06",
                email : "officer006@uberforx.com",
                earnedRatings : 21,
                totalRatings : 25,
                location : {
                    type : "Point",
                    address : "Koramangala, Bengaluru, Karnataka, India",
                    coordinates : [
                        77.62710779999998,
                        12.9279232
                    ]
                }
            
            }
        )
        const jj = new vendor(
            {
                userId : "07",
                displayName : "Officer 007",
                phone : "07",
                email : "officer007@uberforx.com",
                earnedRatings : 18,
                totalRatings : 25,
                location : {
                    type : "Point",
                    address : "Domlur, Bengaluru, Karnataka, India",
                    coordinates : [
                        77.63873160000003,
                        12.9609857
                    ]
                }
            
            }
        )
        const res = await vendor.insertMany([dj,ej,fj,gj,ij,kj,jj]);
        console.log(res);
    } 
    catch (error) {
        console.log(error)
    }
    
    
}

createDocument();
