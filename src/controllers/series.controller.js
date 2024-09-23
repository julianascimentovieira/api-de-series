import { Serie } from "../models/series.model.js";
import { series } from "../database/series. database.js";

export const createSeries = (req, res) => {

	const newSerie = req.body;

    const dadoFormatado = new Serie(
		newSerie.id,
		newSerie.nome,
		newSerie.genero,
		newSerie.temporadas
	);

    series.push(dadoFormatado);

	res.status(201).send(`A série foi criada com sucesso!`);
};

export const getAllSeries = (req, res) => {
    res.status(200).json(series);
};

export const getSeriesByID = (req,res) => {
	const idParametro = req.params.id;

	try {
		const encontrandoSerie = series.find((series) => series.id == idParametro);
		if(!encontrandoSerie) {
			throw new Error("Sinto Muito, mas não foi dessa vez");
		}
		res.status(200).send(encontrandoSerie);
	} catch (e) {
		res.status(404).send({
			error: e.message,
		});
	}
};

export const getSeriesByName = (req,res) => {
	const nameParametro = req.params.name;
	
	try {
		const encontrandoSerie = series.find((series) => series.name == nameParametro);
		if(!encontrandoSerie) {
			throw new Error("Sinto Muito, mas não encontramos esse nome");
		}
		res.status(200).send(encontrandoSerie);
	} catch (e) {
		res.status(404).send({
			error: e.message,
		});
	}
};

