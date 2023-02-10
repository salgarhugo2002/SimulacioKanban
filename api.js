const responsableModel = require("./models/responsable");
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
}
    