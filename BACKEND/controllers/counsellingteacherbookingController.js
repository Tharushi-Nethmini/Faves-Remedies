const CounsellingTeacherBooking = require('../models/counsellingteacherbooking');

//Add new booking
exports.addBooking = async(req, res) => {
    
    const childName = req.body.childName;
    const childAge = Number(req.body.childAge);
    const schoolGrade = Number(req.body.schoolGrade);
    const requirementsNeeds = req.body.requirementsNeeds;
    const diagnosedCondition = req.body.diagnosedCondition;
    const noOfsessionPerweek = Number(req.body.noOfsessionPerweek);
    const childCondition = req.body.childCondition;

        const newBooking = CounsellingTeacherBooking({
            childName,
            childAge,
            schoolGrade,
            requirementsNeeds,
            diagnosedCondition,
            noOfsessionPerweek,
            childCondition,
            //status
        });

        try {
            await newBooking.save();
            res.status(200).json("New Booking Added!");
        } catch(err) {
            res.status(500).json({ error: err.message});
        }
};

//View all booking 
exports.viewBooking = async(req, res) => {
    try{
        const bookings = await CounsellingTeacherBooking.find();
        res.status(200).json(bookings);
    } catch(err) {
        console.log(err);
        res.status(500).json({status: "Error with adding booking", error: err.message});
    }
};

//Update booking
exports.updateBooking = async(req, res) => {
    const bookingId = req.params.bookingid;
    const { childName, childAge, schoolGrade, 
         noOfsessionPerweek, requirementsNeeds, childCondition, diagnosedCondition, status} = req.body;
    
    const updatedBooking = { childName, childAge, schoolGrade, 
        noOfsessionPerweek, requirementsNeeds, childCondition, diagnosedCondition, status};

    
    try {
        await CounsellingTeacherBooking.findByIdAndUpdate(bookingId, updatedBooking);
        res.status(200).send({ status: "Booking updated!"});
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with updating booking!", error: err.message});
    }
};

//Delete booking
exports.deleteBooking = async (req, res) => {
    const bookingId = req.params.bookingid;

    try {
        await CounsellingTeacherBooking.findByIdAndDelete(bookingId);
        res.status(200).send({status: "Booking deleted!"});
    } catch (err) {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting booking", error: err.message});
    }
};

//Fetch a single booking
exports.getBooking = async(req, res) => {
    const bookingId = req.params.bookingid;

    try {
        const bookingteacher = await CounsellingTeacherBooking.findById(bookingId);
        res.status(200).send({status: "Booking fetched!"});
    } catch (err) {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching booking", error: err.message});
    }
};