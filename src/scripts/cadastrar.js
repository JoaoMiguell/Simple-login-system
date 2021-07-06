const Database = require('../db/config')

module.exports = {
    async criar(req, res) {
        const db = await Database()

        const username = req.body.username
        const password = req.body.password

        await db.run(`INSERT INTO login (
            user,
            password
        )VALUES (
            "${username}",
            "${password}"
        )`)

        res.render('perfil', {username: username})
    }
}

