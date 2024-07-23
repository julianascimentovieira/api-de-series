import { Router} from 'express';
import { createSeries, getAllSeries, getSeriesByID } from '../controllers/series.controller.js';

const seriesRouter = Router();

seriesRouter.post('/series',  createSeries);

seriesRouter.get('/series', getAllSeries);

seriesRouter.get('/series/:id', getSeriesByID);

export { seriesRouter };