function adminMiddelware(req, res, next) {
  users = ["Tim", "Ada", "Greta", "Vim"];
  if (users.includes(req.query.user)) {
    res.send(`Hola Admin: ${req.query.user}`);
  } else {
    res.send("No tienes privilegios para ingresar");
  }
}


module.exports = adminMiddelware;