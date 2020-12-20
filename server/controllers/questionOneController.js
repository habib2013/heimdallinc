import issueResponse from '../helpers/issueResponse';

const questionOneSolution = {
  inputValidation(req, res) {
    const { data, rules } = req.body;
    const suppliedDataProperties = Object.keys(data);
    const missingPropertiesArr = rules
      .filter(rule => suppliedDataProperties.every(prop => prop !== rule));
    return missingPropertiesArr.length === 0
      ? issueResponse(res, 200, 'message', 'valid')
      : issueResponse(res, 400, 'missingData', missingPropertiesArr);
  },
};

export default questionOneSolution;
