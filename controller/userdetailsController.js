const userdetailService = require('../service/userdetailService');
//const moment = require('moment')

module.exports = {
    createUserdetails: async function(req,res){
       const data = req.body;
       //const date = moment(data.submission_date).format("YYYY-MM-DD")
       //console.log(moment(req.body.submission_date).format("YYYY-MM-DD"),"date now");
       const userdetail = await userdetailService.createUserdetails({
        id: data.id,
        book_id: data.book_id,
        user_id: data.user_id,
        category_id: data.category_id,
        issued_date: data.issued_date,
        submission_date: data.submission_date
       }) ;
       res.json({message: 'userdetail created', data: userdetail});
    },
    getUserdetails: async function(req,res){
        const userdetails = await userdetailService.getUserdetails();
        res.json({
            message: 'All userdetails',
            data: userdetails
        });
    },
    deleteUserdetails: async function(req,res){
        const uid = req.params.id;
        const userdetail = await userdetailService.deleteUserdetails({
            id: uid
        });
        res.json({message: 'user details deleted', data: userdetail})
    },
    updateUserdetails: async function(req,res){
        const whereoptions = {};
        const updateoptions = {};
        if(req.query.book_id){
           updateoptions.book_id = req.query.book_id;
        }
        if(req.query.category_id){
            updateoptions.category_id = req.query.category_id;
         }
         if(req.query.issued_date){
            updateoptions.issued_date = req.query.issued_date;
         }
         if(req.query.submission_date){
            updateoptions.submission_date= req.query.submission_date;
         }
         whereoptions.id = req.query.id;
         const userdetail = await userdetailService.updateUserdetails({updateoptions,whereoptions}) 
         res.json({message: 'user details updated', data: userdetail});
        }
    }
