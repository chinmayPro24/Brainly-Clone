const home = (req, res) => {
  res.render("index", { title: "Home" });
};

const login = (req, res) => {
  res.render("login", { title: "Login/Register" });
};

const newQuery = (req, res) => {
  res.render("newQuery", { title: "New Query" });
};

module.exports = {
  home,
  login,
  newQuery,
};
