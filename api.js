const responsableModel = require("./models/responsable");
const tascaModel = require("./models/tasques");
const { response } = require('express');

module.exports = (app) => {
    
    app.get('/api/responsable', async (req, res) => {

        const responsable = await responsableModel.find({});

       try {
            res.status(200).send(responsable);
       } catch (error) {
            res.status(500).send(error);
       }
    });


    app.get('/api/idmax', async (req, res) => {

        const responsable = await responsableModel.find().select("id").sort({id: -1}).limit(1);

       try {
            res.status(200).send(responsable);
       } catch (error) {
            res.status(500).send(error);
       }
    });

    app.post('/api/responsable', async (req, res) => {
        const responsable = new responsableModel(req.body);
        
        try {
            await responsable.save(); 
            const respon = await responsableModel.find({});   
            res.status(200).send(respon);
        } catch (error) {
            res.status(500).send(error);
        }
    });




    //Rutes de les tasques:


    app.get('/api/tasca', async (req, res) => {

        const tasca = await tascaModel.find({});

       try {
            res.status(200).send(tasca);
       } catch (error) {
            res.status(500).send(error);
       }
    });

    app.get('/api/idmaxtasca', async (req, res) => {

        const tasca = await tascaModel.find().select("_codi").sort({_codi: -1}).limit(1);

       try {
            res.status(200).send(tasca);
       } catch (error) {
            res.status(500).send(error);
       }
    });


    app.post('/api/tasca', async (req, res) => {
        const tasca = new tascaModel(req.body);
        
        try {
            await tasca.save(); 
            const respon = await tascaModel.find({});   
            res.status(200).send(respon);
        } catch (error) {
            res.status(500).send(error);
        }
    });
}











    