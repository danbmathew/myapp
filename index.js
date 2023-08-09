//Establishing a process listening on port 3000

const app = require("./app");
const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Sample app listening on port 3000");
})
