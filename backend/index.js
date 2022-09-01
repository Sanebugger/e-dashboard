const express = require('express');     // Set express as Node.js web application
                                                                                            const cors = require('cors');     
const app = express();
require('./DB/config');                 //db connected
const user = require('./DB/users');     

app.use(express.json());
                                                                                            app.use(cors());

app.post('/register', async (req,resp)=>{
   let data = new user(req.body);
   const result = await data.save();       //this ll save data(dt ll come through req), to our database in expected collection which we hv mentioned in schema file
   console.log(result);
   resp.send(result);
});      

app.listen(4000); 