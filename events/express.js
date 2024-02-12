const express = require("express")
const app = express();

const server = app.listen(5000, () => {
  //console.clear()
  console.log(" _______________________________")
  console.log("")
  console.log("| WEB-WINDOW POWERED BY EXPRESS |")
  console.log(" _______________________________")
  console.log("")
  console.log("| /./\\//? Booting Client ...... |")
  console.log("| Please be patient ........... |")
  console.log(" _______________________________")
  console.log("")
  console.log("| Use \"kill 1\" in shell if stuck|")
  console.log(" _______________________________")
  

})
app.get("/", (req, res) => res.send(`Fuego is Running and Ready to Receive Requests`))
