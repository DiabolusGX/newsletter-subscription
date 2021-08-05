import express from 'express';
import cors from 'cors';
import db from './database/index.js';

import Subscription from './database/models/Subscription.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));


// get all subscriptions
app.get('/subscriptions', async (req, res) => {
    try {
        const subscriptions = await Subscription.find();
        res.status(200).json(subscriptions);
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
// add subscription
app.post('/create', async (req, res) => {
    const subscription = new Subscription(req.body);
    try {
        await subscription.save();
        res.status(201).json(subscription);
    }
    catch (err) {
        res.status(400).json({ msg: err.message });
    }
});
// delete subscription
app.delete('/delete/:id', async (req, res) => {
    try {
        const subscription = await Subscription.findOneAndDelete(req.params.id);
        res.status(200).json(subscription);
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});


// connect to db and start server
const PORT = process.env.PORT || 3001;
db.then(() => {
    console.log(`Connected to database`);
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});