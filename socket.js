const operations = require('./db/operations');
const mongoose = require('mongoose');

function initialize(server) {
    const io = require('socket.io')(server);
    io.on('connection', (socket) => {
        console.log('a user connected');

        socket.on('join', (data) => {
            socket.join(data.userId);
            console.log(`user joined at ${data.userId}`);
        });
    

    socket.on('request', async(eventData) => {
        const requestTime = new Date();
        const requestId = mongoose.Types.ObjectId();
        const location = {
            coordinates: [
                eventData.location.longitude, 
                eventData.location.latitude
            ],
            address: eventData.location.address
        };
        await operations.saveRequest(requestId, requestTime, location, eventData.customerId, 'pending');
        const nearestvendor = await operations.fetchNearestvendor(location.coordinates, 1000);
        eventData.requestId = requestId;
        for (let i = 0; i < nearestvendor.length; i++) {
            io.sockets.in(nearestvendor[i].userId).emit('request', eventData);
        }
    });
});

}

exports.initialize = initialize;
