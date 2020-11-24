import * as express from 'express';
import {Application} from 'express';
import {findAllItems, findItemById} from "./get-items.route";

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/items').get(findAllItems);
app.route('/api/items/:id').get(findItemById);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
});



