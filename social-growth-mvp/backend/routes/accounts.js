const router=require('express').Router();

router.get('/',(req,res)=>{
  res.json([
    {id:1, username:'example_account', followers:12500}
  ]);
});

router.post('/',(req,res)=>{
  res.json({message:'Account added'});
});

module.exports=router;
