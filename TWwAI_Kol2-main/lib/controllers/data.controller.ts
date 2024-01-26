import Controller from '../interfaces/controller.interface';
import { Request, Response, NextFunction, Router } from 'express';
import DataModel from "../models/DataModel";

class DataController implements Controller {
    public path = '/charts';
    public path_post = '/charts/addChart';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path_post, this.addData);
        this.router.get(this.path, this.getData);
    }

    private addData = async (request: Request, response: Response) => {
        const { pressure, temperature, humidity, date }
            = request.body;

        try {
            const newData = new DataModel({ pressure, temperature, humidity, date });
            await newData.save();
            response.status(201).json(newData);
        } catch (error) {
            console.error('Błąd:', error);
            response.status(500).json({ error: 'Błąd w trakcie zapisu danych' });
        }
    };

    private getData = async (request: Request, response: Response) => {
        try {
            const data = await DataModel.find();
            response.status(200).json(data);
        } catch (error) {
            console.error('Błąd:', error);
            response.status(500).json({ error: 'Błąd w trakcie pobierania danych' });
        }
    };
}

export default DataController;
