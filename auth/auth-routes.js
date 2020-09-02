const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 

const Users = require('./auth-model.js');


// register
router.post('/register', (req, res) => {
  let user = req.body;

 if(!user.email || !user.password){
   res.status(400).json({message:"Must provide email and password"})
 }

  const hash = bcrypt.hashSync(user.password, 10); 
  user.password = hash;
  

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      
       
      res.status(500).json({message:"Error occured"});
    });
  
});

//login
router.post('/login', (req, res) => {
  let { email, password } = req.body;

  Users.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        
        const token = getJwtToken(user.email, user.id);
        const id = user.id
        const image = user.image_url
        const email = user.email

        
        res.status(200).json({
          message: `Welcome to virtual closet ${user.email}!`,
          id,
          image, 
          token,
          email 
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials, Please try again.' });
      }
    })
    .catch(error => {
      res.status(500).json({message: "Could not add user"});
    });
});


function getJwtToken(email, id) {
  const payload = {
    email,
    id
   
  }

  const secret = process.env.JWT_SECRET || 'jiu jitsu secret word is safe';

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, secret, options)
}

module.exports = router;
