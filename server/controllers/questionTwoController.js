import issueResponse from '../helpers/issueResponse';

const questionTwoSolution = {
  removeObjectProperty(req, res) {
    const { data, item } = req.body;
    const originalLength = Object.keys(data).length;
    delete data[item];
    return Object.keys(data).length === originalLength
      ? issueResponse(res, 400, 'error', 'attribute not found')
      : issueResponse(res, 200, 'data', data);
  },
};

export default questionTwoSolution;
