
const db = require('../dbConnection/elephantConnect');

const usersController = {};

usersController.getusers = async (req, res, next) => {

    const queryString = 'SELECT * FROM users';

    try {
        const reply = await db.query(queryString);

        let fullArrToReturn = []

        const usersOnly = reply.rows;
        for (let dev of usersOnly) {
            let newRow = dev;
            let query2 = `SELECT * FROM speaks JOIN users_speaks js ON js.speaks_id = speaks.id AND js.users_id = ${dev.id}; `;
            const speaksArray = await db.query(query2);
            newRow = { ...newRow, speaks: speaksArray.rows };
            fullArrToReturn.push(newRow);
        }

        res.locals.users = fullArrToReturn;
        return next();
    } catch (err) {
        console.log('There was a db error')
    }

};

usersController.createDev = async (req, res, next) => {
    const { id, title, company, salary } = req.body;
    console.log(id, title, company, salary)

    // const queryString = `INSERT INTO jobs values(22, 'Retrain all the .NET people', 'PNC Bank', 250000)`;
    try {

        let countusers = await db.query('SELECT COUNT(*) FROM users');
        console.log(countusers.rows);
        let newId = Number(countusers.rows[0].count) + 1;
        console.log(newId)
        const queryString = `INSERT INTO users values('${newId}', '${title}', '${company}', '${salary}')`;

        let response = await db.query(queryString);
        console.log(response)
    } catch (err) {
        console.log(err);
    }
}

module.exports = usersController;




