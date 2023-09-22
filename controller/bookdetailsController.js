const bookdetailService = require('../service/bookdetailService');

module.exports = {
    createBookdetails: async function(req,res){
       const data = req.body;
       const bookdetail = await bookdetailService.createBookdetails({
        id: data.id,
        book_id: data.book_id,
        user_id: data.user_id,
        category_id: data.category_id,
        issued_date: data.issued_date,
        submission_date: data.submission_date
       }) ;
       res.json({message: 'bookdetail created', data: bookdetail});
    },
    getBookdetails: async function(req,res){
        const bookdetails = await bookdetailService.getBookdetails();
        res.json({
            message: 'All bookdetails',
            data: bookdetails
        });
    },
    deleteBookdetails: async function(req,res){
        const uid = req.params.id;
        const bookdetail = await bookdetailService.deleteBookdetails({
            id: uid
        });
        res.json({message: 'book details deleted', data: bookdetail})
    },
    
}