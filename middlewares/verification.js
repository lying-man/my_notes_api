const db = require("../db.js");

const verification = async (req, res, next) => {

    const { authorization } = req.headers;

    try {

        let authData = await db.query("select * from pass;");
        if (authData.rows.passText !== authorization) res.status(500).json({ auth: false });
        next();

    } catch(e) {
        res.status(500).json({ auth: false });
    }

}

module.exports = verification;