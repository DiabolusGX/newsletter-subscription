import mongoose from 'mongoose';

const Subscription = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
    }
},
    { timestamps: true });

export default mongoose.model('Subscription', Subscription);