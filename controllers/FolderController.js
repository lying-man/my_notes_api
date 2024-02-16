const db = require("../db.js");

class FolderController {

    static async getAll(req, res) {

        try {

            let data = await db.query("select * from folders;");
            res.json(data.rows);

        } catch(e) {
            res.status(500).json({ error: "Ошибка получения данных" });
        }

    }

    static async deleteFolder(req, res) {

        const { id } = req.body;

        try {

            await db.query("delete from folders where id = $1;", [ id ]);
            res.json({ status: "successs" });

        } catch(e) {
            res.status(500).json({ error: "Ошибка получения данных" });
        }

    }

    static async addFolder(req, res) {

        const { title } = req.body;

        try {

            await db.query("insert into folders values ($1, $2);", [ title, 0 ]);
            res.json({ status: "successs" });

        } catch(e) {
            res.status(500).json({ error: "Ошибка получения данных" });
        }

    }

    static async renameFolder(req, res) {

        const { title, id } = req.body;

        try {

            await db.query("update folders set title = $1 where id = $2;", [ title, id ]);
            res.json({ status: "successs" });

        } catch(e) {
            res.status(500).json({ error: "Ошибка получения данных" });
        }

    }

}

module.exports = FolderController;