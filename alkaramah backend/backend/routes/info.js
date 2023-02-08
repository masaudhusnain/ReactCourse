const express = require('express');
const Information = require('../models/Information');
const router = express.Router();
const {body,validationResult} = require('express-validator')


//Route 1 : Get all information using :Get"/api/info/fetchallinformation"
router.get('/fetchallinformation', async(req, res) => {
    const information = await Information.find()
    res.json(information)
})
//Route 2 : Add new information using :POST"/api/info/addinformation"
router.post('/addinformation', [
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isLength({min:3})],async(req, res) => 
    {
    const {name,email,subject}=req.body;
    const information = new Information({
    name,email,subject
    })
    const savedinformation = await information.save()
    res.json(savedinformation)
})





/*router.post('/', (req, res) => {
  console.log(req.body)
  const information = Information(req.body)
  information.save()
  res.send(req.body)
})*/
module.exports=router