const Database = require("../db/config");

module.exports = {
  async logar(req, res) {
    const db = await Database();

    const username = String(req.body.username);
    const password = String(req.body.password);

    db.all(`SELECT user FROM login`, (error, rows) => {
      rows.forEach((row) => {
        if (row.user == username) {
          res.render("perfil", {username: username})
        }
          console.log('F');
      })
    });
  },
};
