var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next) 
{
    var y = Math.random();
    var x;
    x = req.query.x;

    if(x==undefined)
    {
        x=y;
    }

  res.render('computation', { values: `round() - f(${x}) is ${Math.round(x)}`+"    &    "+  `fround() - f(${x}) is ${Math.fround(x)}` });
 
})



module.exports = router;