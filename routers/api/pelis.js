const router = require('express').Router();

const { Peli } = require('../../db')


router.get('/', async (req, res) => {
    const pelis = await Peli.findAll();
    res.json(pelis)
})

router.post('/', async (req, res) => {
    const peli = await Peli.create(req.body);
    res.json(peli);
})

router.put('/:peliId', async (req, res) => {
    await Peli.update(req.body,{
        where: { id : req.params.peliId}
    });
    res.json({success: "Registro modificado con exito"})
})

router.delete('/:peliId',async (req, res) =>{
    await Peli.destroy(
        {where:{ id : req.params.peliId } })
    res.json({success: "Registro Eliminado correctamente"})
})


module.exports =router