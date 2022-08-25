import tipsM from "../model/tipsModel.js";

const Tips = (app, db) => {
  app.get("/tips", (req, res) => {
    res.json({
      tip: db[Math.floor(Math.random() * db.length)],
    });
  });

  app.post("/create", (req, res) => {
    const body = req.body;
    const newTip = new tipsM (db.length, ...Object.values(body));
    db.push(newTip);
    res.json({
      message: "Dica inserida!",
      dica: newTip,
    });
  });
};

export default Tips;
