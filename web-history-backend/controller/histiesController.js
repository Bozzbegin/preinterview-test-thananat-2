const History = require('../models/History');

const inputURL = async (url) => {
    const newHistory = new History({ url });
    await newHistory.save();
    return 'URL added to history';
};

const previous = async (req, res) => {
    const previousHistory = await History.findOne().sort({ _id: -1 }).skip(1);
    return previousHistory ? previousHistory.url : 'No website to previous';
};

const next = async (req, res) => {
    const currentHistory = await History.findOne().sort({ _id: -1 });
    if (!currentHistory) {
        return 'No website to go';
    }

    const nextHistory = await History.findOne({ _id: { $gt: currentHistory._id } }).sort({ _id: 1 });
    return nextHistory ? nextHistory.url : 'No website to go';
};


const current = async (req, res) => {
    const currentHistory = await History.findOne().sort({ _id: -1 });
    return currentHistory ? `Now you are on `+currentHistory.url : 'No website in history';
};

const all = async () => {
    const history = await History.find({}, { _id: 0, url: 1 });
    return history.map(item => item.url);
  };

module.exports = { inputURL, previous, next, current, all };