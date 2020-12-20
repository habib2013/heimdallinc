import { Router } from 'express';
import Index from '../controllers';
import questionOneSolution from '../controllers/questionOneController';
import questionTwoSolution from '../controllers/questionTwoController';
import questionThreeSolution from '../controllers/questionThreeController';

const router = Router();

const routes = (app) => {
  router.get('/', Index.home);
  router.get('/api/v1', Index.v1);
  // Input Validation Route
  router.post('/api/v1/question-one-solutions/input-validation', questionOneSolution.inputValidation);
  // Object Property Removal Route
  router.patch('/api/v1/question-two-solutions/remove-prop-from-object', questionTwoSolution.removeObjectProperty);
  // Non existent endpoints
  // Lowest Index For Aladdin's Circular Trip Route
  router.post('/api/v1/question-three-solutions/lowest-index-for-circular-trips', questionThreeSolution.lowestCircularTripIndexFinder);
  // Non existent endpoints
  router.use((req, res) => {
    res.status(404).json({
      status: 404,
      error: 'This endpoint doesn\'t exist on this server',
    });
  });

  app.use(router);
};

export default routes;
