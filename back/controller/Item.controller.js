const { CardModel } = require("../model/Item.model")


const CardController={
    getAll:async(req,res)=>{
        try{
            const item= await CardModel.find()
        res.status(200).send(item)
        }catch(error){
            res.status(404).send("An occures while getting items")
        }
    }, 
    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const target= await CardModel.findById(id)
            res.status(200).send(target)
        } catch(error){
            res.statsu(404).send("An occures while getting by ID item")
        }
    }, 
 
    add:async(req,res)=>{
       try{
        const {name,price,img,desc}=req.body
        const newItem= new CardModel({name,price,img,desc})
        await newItem.save()
        res.status(200).send(newItem)
       } catch(error){
        res.status(404).send("An occures while adding new item")
       }
    }, 

    delete:async(req,res)=>{
     try{
        const {id}=req.params
        await CardModel.findByIdAndDelete(id)
        res.send("item deleted")
     } catch(error){
        res.send("An occures while deleting item")
     }

    }
}

module.exports={CardController}