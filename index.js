var recipes = {}

function updateObjectWithKeyAndValue(object, key, value)
{
  var toReturn = Object.assign({},object,{[key],value})
  return toReturn
}