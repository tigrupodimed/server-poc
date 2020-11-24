import {Request, Response} from 'express';
import {ITEMS} from "./db-data";

export function findAllItems(req: Request, res: Response) {
        setTimeout(() => {
            const payload = Object.values(ITEMS).map(o => {
                let obj = Object.assign({}, o);
                delete obj['description'];
                delete obj['ratingScore'];
                return obj;
            });
            res.status(200).json({payload});
        }, 200);
}

export function findItemById(req: Request, res: Response) {
    const itemId = req.params["id"];
    const items:any = Object.values(ITEMS);
    const item = items.find(it => it.id == itemId);
    if (!item) {
        res.status(404).json(itemNotFound);
    } else {
        res.status(200).json(item);
    }
}

const itemNotFound: any = {
    name: 'NOT_FOUND',
    message: 'Item não encontrado'
};
