const express = require('express')
const router = express.Router()
const hbs = require('hbs')

router.get('/', function (req, res, next) {
res.render('index',{
  users: [
  {
    name:'Taras',
    age:10,

    comments:[ 
    {
      id:656778,
      text:'hello',
    },
    
  },
    
      
    }
  ],
}


router.get('/1', function (req, res, next) {
  res.render('1-var', {
    name: 'Dima',
  })
})

router.get('/2', function (req, res, next) {
  res.render('2-with', {
    user: {
    }: 'Dima',
    },
    role: 'Admin',
  })
})

module.exports = router
