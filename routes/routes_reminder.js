var express=require('express');
var router=express.Router();
var reminder=require('../models/model_reminder');
router.get('/:id?',function(req,res,next){
if(req.params.id)
{
    reminder.get_reminder_by_uid(req.params.id,function(err,rows){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }

    });
}
else
{
            reminder.getremindbyid(function(err,rows){
                if(err)
                {
                    res.json(err);
                }
                else
                {
                    res.json(rows);
                }
            });
        }      
});
router.post('/',function(req,res,next){
        
        reminder.insert_reminder(req.body,function(err,rows){
    
            if(err){
                res.json(err);
            }
            else{
                res.json(req.body);
            }
        });
    });
    router.put('/:id',function(req,res,next){
        reminder.deleterem(req.params.id,req.body,function(err,rows){
         
        if(err)
          {
          res.json(err);
          }
          else
          {
          res.json(rows);
          }
        });
        });
         
    
module.exports=router;