const router =require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db')
const { check, validationResult } = require('express-validator')
const moment = require('moment')
const jwt = require('jwt-simple')

router.post('/register',[
    check('username',"Nombre de usuario Obligatorio").not().isEmpty(),
    check('password',"Password es Obligatorio").not().isEmpty(),
    check('email',"El mail debe ser correcto").isEmail(),
],async (req, res) => {

    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({errores:errors.array()})  
    }

    req.body.password = bcrypt.hashSync(req.body.password,10);
    const user = await User.create(req.body);
    res.json(user)
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({
    where: {email : req.body.email}
  })
  if (user){
    const igual = bcrypt.compareSync(req.body.password, user.password)
      if(igual){
        res.json({ success: createToken(user)})
      }else{
        res.json({ error: 'contraseña incorrecta' })
      }
  }else{
    res.json({ error: 'Usuario y/o contraseña incorrecta' })
  }

});

const createToken = (user)=>{
   const payload = {
     usuarioId : user.id,
     createAt:moment().unix(),
     expireAt:moment().add(5,'minutes').unix()
   }
   return jwt.encode(payload,'asd scret')
}

module.exports = router;