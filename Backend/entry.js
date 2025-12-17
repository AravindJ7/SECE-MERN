const express = require("express");
const app = express();
const PORT = 8001;

app.get("/", (req, res) => {
  res.send("Backend Server started  ");
});
app.get("/json", (req, res) => {
  res.json({
    "College": "Sece",
    "Dept": "CYS",
    "Students": 64,
  });
});
app.get('/admin',(req,res)=>{
    res.sendFile('/home/aravind/SECE-MERN/Backend/index.html');
})
app.listen(PORT, () => {
  console.log(`Server Started  Successfully in the port : ${PORT}`);
}); 
