import issueResponse from '../helpers/issueResponse';

const questionThreeSolution = {
  lowestCircularTripIndexFinder(req, res) {
    const { magic, dist } = req.body;
    let lowestTripIndex = magic[0];
    const netOfMagicAndDistance = magic.reduce((netOfMagicAndDist, v, i) => {
      const score = netOfMagicAndDist + v - dist[i];
      if (score < lowestTripIndex) lowestTripIndex = i;
      return score;
    }, 0);
    return netOfMagicAndDistance < 0
      ? issueResponse(res, 400, 'error', -1)
      : issueResponse(res, 200, 'lowestIndex', lowestTripIndex);
  },
};

export default questionThreeSolution;
