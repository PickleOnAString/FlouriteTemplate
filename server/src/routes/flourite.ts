import express from 'express';
import fs from 'fs';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import path from 'path';

const router = express.Router();

// Define a route to get a user profile
router.get('/get', (req, res) => {
    fs.readFile(path.join(path.resolve(), 'src', 'flourite.json'), 'utf8', (err, data) => {
        if (err) {
            res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
            return;
        }
        const json = JSON.parse(data);
        res.send(json);
    });
});

router.post('/increment', (req, res) => {
    fs.readFile(path.join(path.resolve(), 'src', 'flourite.json'), 'utf8', (err, data) => {
        if (err) {
            res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
            return;
        }
        const json = JSON.parse(data);
        json.amount++;
        fs.writeFile(path.join(path.resolve(), 'src', 'flourite.json'), JSON.stringify(json), (err) => {
            if (err) {
                res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
                return;
            }
            res.sendStatus(StatusCodes.OK);
        });
    });
});

export default router;
