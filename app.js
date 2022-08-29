const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
//////////////////
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
//////////////////
app.get("/data", (req, res) => {
  let resData = [];
  //joining path of directory
  const directoryPath = path.join(__dirname, "data");
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, (err, files) => {
    //handling error
    if (err) {
      console.log(err);
    }
    files.forEach((file) => {
      fs.readFile(__dirname + "/data" + "/" + file, "utf-8", (err, data) =>
        resData.push(data)
      );
      console.log();
    });
  });
  setTimeout(() => {
    res.send(resData);
  }, 2000);
});
app.post("/data", (req, res) => {
  const {
    patroPatri,
    name,
    age,
    height,
    weight,
    gayerRong,
    boibahicObostha,
    sthaiThikana,
    bortomanThikana,
    pesha,
    monthSalary,
    clas,
    babarPesha,
    mayerPesha,
    namazPoreKina,
    quranPareKina,
    apniKiSontanAseEmonKawKBiyeKorteChan,
    sharirikOngohaniAseKina,
    dariAseKina,
    pordaKoreKina,
    jmonJannatiSathiChai,
    patroPatrirBoyos,
    patroPatrirHeight,
    patroPatrirGayerRong,
    patroPatrirLekhapora,
    extraKisuLekha,

    phoneNumber,
    FBIdLink,
    amaderShebatiKmnLaglo,
  } = req.body;
  fs.writeFile(
    __dirname + "/data" + "/" + phoneNumber + ".txt",
    patroPatri +
      ", " +
      name +
      ", " +
      age +
      ", " +
      height +
      ", " +
      ", " +
      weight +
      ", " +
      ", " +
      gayerRong +
      ", " +
      ", " +
      boibahicObostha +
      ", " +
      ", " +
      sthaiThikana +
      ", " +
      ", " +
      bortomanThikana +
      ", " +
      ", " +
      pesha +
      ", " +
      ", " +
      monthSalary +
      ", " +
      ", " +
      clas +
      ", " +
      ", " +
      babarPesha +
      ", " +
      ", " +
      mayerPesha +
      ", " +
      ", " +
      namazPoreKina +
      ", " +
      ", " +
      quranPareKina +
      ", " +
      ", " +
      apniKiSontanAseEmonKawKBiyeKorteChan +
      ", " +
      ", " +
      sharirikOngohaniAseKina +
      ", " +
      ", " +
      dariAseKina +
      ", " +
      ", " +
      pordaKoreKina +
      ", " +
      ", " +
      jmonJannatiSathiChai +
      ", " +
      ", " +
      patroPatrirBoyos +
      ", " +
      ", " +
      patroPatrirHeight +
      ", " +
      ", " +
      patroPatrirGayerRong +
      ", " +
      ", " +
      patroPatrirLekhapora +
      ", " +
      ", " +
      extraKisuLekha +
      ", " +
      ", " +
      phoneNumber +
      ", " +
      ", " +
      FBIdLink +
      ", " +
      ", " +
      amaderShebatiKmnLaglo,
    (err) => console.log(err)
  );
  res.end();
});
// route not found error
app.use((req, res, next) => {
  res.status(404).json({ message: "route not found" });
});

// server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: "something broke" });
});
module.exports = app;
