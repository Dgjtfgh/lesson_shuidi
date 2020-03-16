const express = require('express');
const shop = express.Router();
const db = require('../db/db.js');
const Shop = require('../models/shop.js');

// 2d spare 是mongodb 内建的， 独有的功能
// 1. NOSQL 
// 2. 移动时代， 定位功能
shop.get('/', async(req, res) => {
  Shop
    .find({
      location: {
        $near: [115.013288,27.114381], // $ 在mongodb 里 函数
        $maxDistance: 0.012 //10公里 1 index 距离排序 
        // $lt $  
      } // mongodb 20 
    }).limit(10).exec(function(err, shops) {
      if (err) {
        console.log(err)
      }
      res.json(shops)
    })
})

shop.post('/', async(req, res) => {
  console.log('---shops');
  const shop = new Shop({
    name: '农家小厨',
    location: [115.024958,27.11611]
  });
  shop
    .save((err, saved)=> {
      res.json({
        status:1
      })
    })
});

module.exports =  (app) => {
  app.use('/shops', shop);
}

