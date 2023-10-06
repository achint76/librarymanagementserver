const bookdetailService = require('../service/bookdetailService');
const inventoryService = require('../service/inventoryService');
const models = require('../models');

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
           // approved: false
           quantity: data.quantity
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
        const data = req.body;
        const date = new Date();
        
        // Pass user information to the service
        const updateoptions = {};
        if (req.query.approved == 'true') { 
            //calll inventory for decrease the quantity
            updateoptions.approved = true
            updateoptions.issued_date = date
        }
        if (req.query.approved == 'false') {
            updateoptions.approved = false
        }
        if (req.userdata.user_type == 'admin') {
            const result = await bookdetailService.userbookissue({
                bookdetailId: bookdetailId,
                //userreturndate: data.userreturndate,
                updateoptions: updateoptions
            });
            console.log(result, "RESULT OF BOOK DETAILS");
            console.log(result.data.book_id,"result of result_data_bookid");
             if(result.success) {
                const bookDetail = await bookdetailService.getBookDetailsById(bookdetailId); // Retrieve book details
        if (!bookDetail) {
            return res.status(404).json({ message: 'Book detail not found.' });
        }
                const inventoryResult = await inventoryService.decreasequantity(bookDetail.book_id, bookDetail.quantity);
                console.log(inventoryResult, "inventory result is:");
                //console.log(result.message);
                if(inventoryResult > 0)
                    res.json({ message: 'Book issue approved.' });
                else if(inventoryResult == 0)
                res.json({message: 'book out of stock'})
            else {
                res.status(500).json({ message: 'Error updating inventory.' });
            }
        } else {
            res.status(400).json({ message: result.message });
        }
        } else {
            res.status(403).json({
                message: `Only admin can update status`
            })
        }

       
    },

    userbookreturn: async function(req,res){
        const bookdetailId = req.query.id;
        const data = req.body;
        console.log(data.quantity,"DATA.QUANTITY ++++>")
            const updateoptions = {};
            // if(req.query.returnapproved == 'true'){
            //     updateoptions.returnapproved = true;
            //     updateoptions.userreturndate = data.userreturndate;
            // }
            // else if(req.query.returnapproved == 'false'){
            //     updateoptions.returnapproved = false;
            //    // updateoptions.userreturndate = date;
            // }
            // else if(req.userdata.user_type == 'admin'){
            //     const result = await bookdetailService.userbookreturn({
            //         bookdetailId: bookdetailId,
            //         userreturndate: data.userreturndate,
            //         updateoptions: updateoptions
            //     });
            //     if(result.success){
                // const result = await bookdetailService.userbookreturn({

                // })
                const bookDetail = await bookdetailService.getBookDetailsById(bookdetailId); // Retrieve book details
                if (!bookDetail) {
                    return res.status(404).json({ message: 'Book detail not found.' });
                }
                    const inventoryResult = await inventoryService.updateInventory(result.data.book_id, 1);
                    console.log(inventoryResult,"Result of inventory Result");
                    if(inventoryResult > 0)
                    res.json({ message: 'Book return approved.' });
                else if(inventoryResult == 0)
                res.json({message: 'book return not accepted'})
            else {
                res.status(500).json({ message: 'Error updating inventory.' });
            }
              //  }
                // else {
                //     res.status(400).json({ message: result.message });
                // }
          //  }
            // else {
            //     res.status(403).json({
            //         message: `Only admin can update status`
            //     })
            // }

        
    },
    // bookreturndate: async function(req,res){
    //     const bookdetailId = req.query.id;
    //     const data = req.body;
    //     const returndate = await bookdetailService.bookreturndate({
    //         bookdetailId: bookdetailId,
    //         userreturndate: data.userreturndate
    //     })
    //     console.log(returndate,"This is returndate---->>>>");
    //     if(returndate){
    //         const inventoryResult = await inventoryService.updateInventory(bookdetailId, 1);
    //         console.log(inventoryResult,"Result of inventory Result");
    //         if(inventoryResult > 0)
    //         res.json({ message: 'Book retured.' });
    //     else if(inventoryResult == 0)
    //     res.json({message: 'book return not accepted'})
    // else {
    //     res.status(500).json({ message: 'Error updating inventory.' });
    // }
    //     }
    //     res.json({message: 'return date updated', data: returndate})
    // }
    clearReturnDate: async function (req, res) {
        const bookdetailId = req.query.id;

        const result = await bookdetailService.bookreturndate({
            bookdetailId: bookdetailId
        });

        if (result.success) {
            res.json({ message: 'Return date cleared.' });
        } else {
            res.status(404).json({ message: 'Book detail not found or error clearing return date.' });
        }
    },

    
    updateReturnDate: async function (req, res) {
        const bookdetailId = req.query.id;
        //const userreturndate = req.body.userreturndate;
        const data = req.body;
        const bookdetail = await models.Bookdetails.findOne({
            where: {
                id: bookdetailId
            }
        });
        if(data.quantity > bookdetail.quantity)
        res.status(400).json("Quantity cannot be grerater than bookdetail.quantity, please check!!!");
    else{
        if (bookdetail) {
            const book_id = bookdetail.book_id;
        // console.log(data,"SOME DATA:::::");
        const result = await bookdetailService.updateReturnDate({
            bookdetailId: bookdetailId,
            userreturndate: data.userreturndate
        });
        //  console.log(result,",-----RESULT IS THIS%%%%%");
        //  console.log(bookdetailId,"BOOKDETAILIDIS@@@");
        if (result.success) {
            console.log(book_id,"BOOK_ID is??????");
            const inventoryResult = await inventoryService.updateInventory(book_id,data.quantity);
            console.log(inventoryResult,"<-------------Result of inventory Result");

            if(inventoryResult > 0)
            res.json({ message: 'Return date updated.' });
        else if(inventoryResult == 0)
        res.json({message: 'book return not approved'})
        } else {
            res.status(404).json({ message: result.message });
        }
        }
    }

    }
}