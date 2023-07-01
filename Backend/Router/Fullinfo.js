const router=require('express').Router();
const TesingData =require('../Models/FullData')

router.post('/',async(req,res)=>{
    console.log('req.body',req.body);
    const Data=new TesingData(req.body)
    console.log('Data?',Data);
    try{
const savedData=await Data.save();
console.log('savedData?',savedData);
res.status(201).json(savedData)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/:id',async(req,res)=>{
console.log(' id check',req.params.id);
const Id=parseInt(req.params.id)
console.log('id check 2',Id);
 try{
const Data=await TesingData.aggregate([{
   $match:{vrno:parseInt(req.params.id)}
},{  $group: {
    _id: null,
    total: { $sum: '$amt'},
  },}])
console.log('Data agregate',Data);
res.status(200).json(Data)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/',async(req,res)=>{
     try{
    const Data=await TesingData.find()
    console.log('Get Total Data',Data);
    res.status(200).json(Data)
        }catch(err){
            res.status(500).json(err)
        }
    })

module.exports=router;