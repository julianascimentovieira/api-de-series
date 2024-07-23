import express from 'express';
import { seriesRouter } from './src/routers/series.router.js';

const app = express();

app.use(express.json());

app.use(seriesRouter);


const PORT = 5000;

app.listen(PORT, () => {
	console.log(`Nosso app tá rodando na porta: http://localhost:${PORT}`);
});