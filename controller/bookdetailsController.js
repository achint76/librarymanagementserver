const bookdetailService = require('../service/bookdetailService');

module.exports = {
    createBookdetails: async function (req, res) {
        const data = req.body;
        const bookdetail = await bookdetailService.createBookdetails({
            //id: data.id,
            book_id: data.book_id,
            user_id: req.userdata.user_id,
            category_id: data.category_id,
            // issued_date: data.issued_date,
            submission_date: data.submission_date,
            approved: false
        });
        res.json({ message: 'bookdetail created', data: bookdetail });
    },
    getBookdetails: async function (req, res) {
        const bookdetails = await bookdetailService.getBookdetails();
        res.json({
            message: 'All bookdetails',
            data: bookdetails
        });
    },
    deleteBookdetails: async function (req, res) {
        const uid = req.params.id;
        const bookdetail = await bookdetailService.deleteBookdetails({
            id: uid
        });
        res.json({ message: 'book details deleted', data: bookdetail })
    },
    userbookissue: async function (req, res) {
        const bookdetailId = req.query.id; // Assuming you have the bookdetail ID in the URL
        const date = new Date();
        // Pass user information to the service
        const updateoptions = {};
        if (req.query.approved == 'true') {
            updateoptions.approved = true
            updateoptions.issued_date = date
        }
        if (req.query.approved == 'false') {
            updateoptions.approved = false
        }
        if (req.userdata.user_type == 'admin') {
            const result = await bookdetailService.userbookissue({
                bookdetailId: bookdetailId
                , updateoptions: updateoptions
            });
             if(result.success) {
            res.json({ message: 'Book issue approved.' });
        } else {
            res.status(400).json({ message: result.message });
        }
        } else {
            res.status(403).json({
                message: `Only admin can update status`
            })
        }

       
    }

}