
const tachesModel = require("../models/taches");

exports.add = async (req, res) => {

    let { titre, description } = req.body;

    tachesModel.create({ titre, description }).then((result) => {

        return res.status(201).json({
            message: 'ajout de tache réuissi',
            data: result,
        });

    }).catch((err) => {
        return res.status(404).json({
            message: 'erreur decele imposible d\‘ajouter',
            data: err,
        });

    });

}

exports.all = async (req, res) => {

    tachesModel.findAll().then((result) => {

        return res.status(200).json({
            message: 'liste des taches',
            data: result,
        });

    }).catch((err) => {

        return res.status(404).json({
            message: 'erreur decele imposible de lister',
            data: err,
        });


    });


}

exports.one = async (req, res) => {

    tachesModel.findOne({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        return res.status(200).json({
            message: 'Tache trouvee avec succes',
            data: result,
        });
    }).catch((err) => {

        return res.status(404).json({
            message: 'erreur decele imposible de lister',
            data: err,
        });

    });

}

exports.update = async (req, res) => {

    const { id } = req.params;

    const { titre, description } = req.body;

    tachesModel.update({ titre, description }, {
        where: {
            id
        }
    }).then((result) => {
        return res.status(200).json({
            message: 'Tache modifier avec succes',
            data: result,
        });
    }).catch((err) => {
        return res.status(404).json({
            message: 'erreur decele imposible de lister',
            data: err,
        });
    })


}

exports.delete = async (req, res) => {

    const { id } = req.params;

    tachesModel.destroy({ where: { id } }).then((result) => {
        return res.status(200).json({
            message: 'Tache supprimer avec succes',
            data: result,
        });
    }).catch((err) => {
        return res.status(404).json({
            message: 'erreur decele imposible de lister',
            data: err,
        });
    });

}