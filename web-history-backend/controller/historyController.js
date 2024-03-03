// const History = require('../models/History');

// exports.inputurl = async (req, res) => {
//     const { url } = req.body;
//     const newHitory = new History({ url });
//     await newHitory.save();
//     re.send('URL added to history');
// };

// exports.prev = async (req, res) => {
//     const previouHistory = await History.findOne().sort({ _id: -1 }).skip(1);
//     if (previouHistory) {
//         res.send(previouHistory.url);
//     }
//     else {
//         res.send('No website to previous');
//     }
// };

// exports.next = async (req, res) => {
//     const nextHistory = await History.findOne().sort({ _id: 1 }).skip(1);
//     if (nextHistory) {
//         res.send(nextHistory.url);
//     }
//     else {
//         res.send('No website to go');
//     }
// };

// exports.current = async (req, res) => {
//     const currentHistory = await History.findOne().sort({ _id: -1 });
//     if (currentHistory) {
//         res.send('Now you are on'+currentHistory.url);
//     }
//     else {
//         res.send('No website in history');
//     }
// };

// exports.all = async (req, res) => {
//     const allHistory = await History.find();
//     res.json(allHistory);
// };