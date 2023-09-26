const bookService = require('../service/bookService');
module.exports = {
    createBook: async function (req, res) {
        // console.log(req.user.user_type);
        if(req.userdata.user_type == admin){
        const data = req.body;
        const book = await bookService.createBook({
            id: data.id,
            // book_id: data.book_id,
            // user_id: data.user_id,
            category_id: data.category_id,
            name: data.name
        });
        res.json({ message: 'Book Created', data: book });
    }
    else{
        console.log("User cannot do any operations");
    }
}  ,
    getBook: async function (req, res) {
        
       console.log(req.userdata.user_type);
            try {
                const page = req.query.page || 1;
                const pageSize = req.query.pageSize || 2;
                const searchTerm = req.query.searchTerm || '';
                const sortBy = req.query.sortBy || 'name';
                const sortOrder = req.query.sortOrder || 'ASC';
                const books = await bookService.getBook({ page, pageSize, searchTerm, sortBy, sortOrder });
                res.json({
                    message: 'All books',
                    data: books
                });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Error fetching books' });
            }
    },
    deleteBook: async function (req, res) {
        if(req.userdata.user_type == admin){
        const uid = req.params.id;
        const bookDelete = await bookService.deleteBook({
            id: uid
        });
        res.json({ message: 'Book deleted', data: bookDelete })
    }
    else 
    console.log("User cannot do the operations");
}
}