import { Router} from 'express';
import { createSeries, getAllSeries, getSeriesByID,  getSeriesByName } from '../controllers/series.controller.js';

const seriesRouter = Router();

seriesRouter.post('/series',  createSeries);

seriesRouter.get('/allseries', getAllSeries);

seriesRouter.get('/series/:id', getSeriesByID);

seriesRouter.get('/series/:name', getSeriesByName);

export { seriesRouter };
