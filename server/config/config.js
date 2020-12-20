import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../router';

const testVariablesObj = {};

const config = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  routes(app);
};

export { testVariablesObj, config };
