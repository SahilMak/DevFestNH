var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pictureSchema = new Schema({
    image: {
        data: Buffer,
        type: String
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});