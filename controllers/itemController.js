const express = require('express');
// router equal to the invoking of express
const router = express();
// Item variable equals our item.js model
const Item = require('../models/item');

// sending JSON to the front end
// Strategy for us to see if things work or not, we use a try and catch
// React needs to know why our response is bad. 
// Index Route
router.get('/', async (req, res) => {
   try{
       const items = await Item.find();
       res.send({
           success: true,
           data: items
       })
   }catch(err){
       res.send({
           status: 500, 
           data: err.message
       }) 
   }
})
// Create Route
router.post('/', async (req, res) => {
    try{
        const newItem = await Item.create(req.body);
        console.log(newItem);
        res.send({
            success: true,
            data: newItem
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})
// Show Route
// to send me an individual item
router.get('/:id', async (req, res) => {
    try{
        const item = await Item.findById(req.params.id);
        if(!item){
            throw new Error('No item by that ID');
        }
        res.send({
            success: true,
            data: item
        })
    } catch(err){
        res.send({
            success: true,
            data: err.message
        })
    }
})
// Delete Route
router.delete('/:id', async (req, res) => {
    try{
        const item = await Item.findByIdAndDelete(req.params.id);
        res.send({
            success: true,
            data: item
        })
    } catch(err){
        res.send({
            success: true,
            data: err.message
        })
    }
})
// Update Route
router.put('/:id', async (req, res) => {
    try{
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send({
            success: true,
            data: item
        })
    } catch(err){
        res.send({
            success: true,
            data: err.message
        })
    }
})
module.exports = router;