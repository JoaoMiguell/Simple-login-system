const Database = require("../db/config");

module.exports = {
  async logar(req, res) {
    const db = await Database();

    const username = String(req.body.username);
    const password = String(req.body.password);

    if (username.length == 0 || password.length == 0) {
      res.render("login-main", { page: "login-fail" });
    } else if (username.length < 8 || password.length < 8) {
      res.render("login-main", { page: "login-fail-short" });
    }
    const VerifyUser = await db.all(`SELECT * FROM login`);
    VerifyUser.forEach((row) => {
      if (row.user == username && row.password == password) {
        if (row.user == 'administrador' || row.password == 'administrador') {
          res.render('Dashboard', {users: VerifyUser.length, infoUsers: VerifyUser})
        } else{
          res.render("perfil", { username: username });
        }
      }
    });
  },
};