const controller = {};
const conn = require('../connection/connection');
const skillModel = require('../models/allskills.model');

controller.index = async (req, res) => {
    // res.send('Conectado...');
    try {
        await conn();
        // console.log('Conectado a base de datos');
        const datos = await skillModel.find();

        res.render('index', {
            datos
        });
        
    } catch (error) {
        console.log('ERRRRRRRRRRRRRRROR', error);
    }
}

controller.guardar = async (req, res) => {

    // console.log(req.body);
    try {

        const nuevo = new skillModel(req.body);
        await nuevo.save();
        res.redirect('/');
        
    } catch (error) {
        console.log(error);
    }


}

controller.detalle = async (req, res) => {
    
    try {

        const id = req.params.id;
        // console.log(id);
        const findRow = await skillModel.findOne({_id:id});
        res.render('detalle', {
            findRow
        });
        
    } catch (error) {
        console.log(error);
    }
}

controller.borrar = async (req, res) => {

    try {

        const id = req.params.id;
        const borrarSkill = await skillModel.findByIdAndDelete({_id:id});

        if (borrarSkill){
            res.json({
                estado: true,
                mensaje: 'borrado'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'fallo eliminar'
            })
        }
        
    } catch (error) {
        console.log(error);
    }

}

controller.editar = async (req, res) => {

    const id = req.params.id;
    const body = req.body;

    try {

        const editarSkill = await skillModel.findByIdAndUpdate(id, body, { useFindAndModify: false });

        res.json({
            estado: true,
            mensaje: 'editado'
        })
        
    } catch (error) {
        console.log(error);

        res.json({
            estado: false,
            mensaje: 'error al actualizar'
        })
    }

}

module.exports = controller;