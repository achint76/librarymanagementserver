const bookService = require('../service/bookService');
module.exports = {
    createBook: async function(req,res){
        const data = req.body;
        const book = await bookService.createBook({
            id: data.id,
            book_id: data.book_id,
            user_id: data.user_id,
            category_id: data.category_id
        });
        res.json({message:'Book Created', data: book});
    },
    getBook: async function(req,res){
        const books = await bookService.getBook();
        res.json({
            message: 'All books',
            data: books
        });
    },
    deleteBook: async function(req,res){
        const uid = req.params.id;
        const bookDelete = await bookService.deleteBook({
            id: uid
        });
        res.json({message: 'Book deleted', data: bookDelete})
    }
}