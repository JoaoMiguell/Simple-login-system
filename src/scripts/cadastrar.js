const Database = require('../db/config')

module.exports = {
    async criar(req, res) {
        const db = await Database()

        const username = String(req.body.username)
        const password = String(req.body.password)

        if (username.length == 0 || password.length == 0) {
            res.render('criarConta-main', {page: 'CriarConta-null'})
        } else if(username.length < 8 || password.length < 8) {
            res.render('criarConta-main', {page: 'CriarConta-short'})
        } else {
            const VerifyUser = await db.all(`SELECT * FROM login`);
            VerifyUser.forEach((row) => {
                if (row.user == username) {
                    res.render('criarConta-main', {page: 'CriarConta-fail'})
                }
            });
        }

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

