const homeController = (req, res) => {
    console.log("test 2");
    res.render("home", { title: "Portail de Vie Scolaire" });
};

// module.exports = home;
export default homeController;
