const { Pool } = require("pg");

let db = null;

try {
    db = new Pool({
        connectionString: "postgres://gfxdzkas:rN0_Wte1S9l3vHBGMvId_mxywYQANUly@bubble.db.elephantsql.com/gfxdzkas",
    })
} catch(e) {
    console.log(e);
}

module.exports = db;