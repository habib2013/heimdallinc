const issueResponse = (res, code, varName, varData) => res.status(code)
  .json({
    status: code,
    [varName]: varData,
  });

export default issueResponse;
