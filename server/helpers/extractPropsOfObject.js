const extractPropsOfObject = (obj, arrOfExtractedProps) => arrOfExtractedProps
  .reduce((extractedObj, prop) => ({ ...extractedObj, [prop]: obj[prop] }), {});

export default extractPropsOfObject;
