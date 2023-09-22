const models = require('../models');

module.exports = {
    createBook: async function ({ book_id, user_id, category_id, name }) {
        return await models.Books.create({
            //id: id,
            book_id: book_id,
            user_id: user_id,
            category_id: category_id,
            name: name
        });
    },
    getBook: async function ({ page, pageSize, searchTerm, sortBy, sortOrder }) {
        try {
            const offset = (page - 1) * pageSize;
            const limit = pageSize;
            const where = {};
            if (searchTerm) {
                where.name = { [Op.like]: `%${searchTerm}%` };
            }
            const order = sortBy ? [[sortBy, sortOrder || 'ASC']] : [];
            const books = await models.Books.findAndCountAll({
                where: where,
                order: order,
                limit: parseInt(limit), // Ensure limit is an integer
                offset: parseInt(offset), // Ensure offset is an integer
            });
    
            return {
                totalItems: books.count,
                currentPage: page,
                pageSize: limit,
                data: books.rows,
            };
        } catch (error) {
            console.error(error);
            throw new Error('Error fetching books');
        }
    },
    
    deleteBook: async function ({ id }) {
        //console.log(id);
        return await models.Books.destroy({
            where: {
                id: id
            }
        });
    },
    // 
}