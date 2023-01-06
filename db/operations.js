const datamodel = require('./model');

const police = datamodel.vendor;

function fetchNearestvendor(coordinates, maxDistance) {
    return vendor.find({
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: coordinates
                },
                $maxDistance: maxDistance
            }
        }
    })
    .exec()
    .catch(error => {
        console.log(error);
    });
}

exports.fetchNearestvendor = fetchNearestvendor;

function fetchvendorDetails(userId) {
    return Cop.findOne({
        userId: userId
    }, {
        vendorId: 1,
        displayName: 1,
        phone: 1,
        location: 1
    })
    .exec()
    .catch(error => {
        console.log(error);
    });
}
function saveRequest(requestId, requestTime, location, customerId, status){
    const request = new request({
        "_id": requestId,
        requestTime: requestTime,
        location: location,
        customerId: customerId,
        status: status
    });

    return request.save()
        .catch(error => {
            console.log(error)
        });
}
exports.saveRequest = saveRequest;
exports.fetchvendorDetails = fetchvendorDetails;

