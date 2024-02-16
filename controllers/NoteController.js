const db = require("../db.js");

class NoteController {

    static async getAll(req, res) {

        const { id } = req.params;

        try {

            let data = await db.query("select * from note where folder_id = $1;", [ id ]);
            res.json(data.rows);

        } catch(e) {
            res.status(500).json({ error: "Ошибка получения данных" });
        }

    }

    static async deleteNote(req, res) {

        const { id } = req.body;

        try {

            let data = await db.query("delete from note where id = $1;", [ id ]);
            res.json({ status: "success" });

        } catch(e) {
            res.status(500).json({ error: "Ошибка получения данных" });
        }

    }

    static async addNote(req, res) {

        const { content, color, folder_id } = req.body;

        try {

            await db.query("insert into note values ($1, $2, $3);", [ content, color, folder_id ]);
            res.json({ status: "success" });

        } catch(e) {
            res.status(500).json({ error: "Ошибка получения данных" });
        }

    }

    static async editNote(req, res) {

        const { type, data, id } = req.body;

        const query = type === "content" ? "update note set content = $1 where id = $2;" : "update note set color = $1 where id = $2;"

        try {

            await db.query(query, [ data, id ]);
            res.json({ status: "success" });

        } catch(e) {
            res.status(500).json({ error: "Ошибка получения данных" });
        }

    }

}

module.exports = NoteController;