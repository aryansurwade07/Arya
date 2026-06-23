const router=require('express').Router();

router.post('/register',(req,res)=>{
  res.json({message:'Register endpoint'});
});

router.post('/login',(req,res)=>{
  res.json({token:'demo-jwt-token'});
});

module.exports=router;
