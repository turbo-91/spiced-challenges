let data;

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "null":
    console.log("null!");
  case "NaN":
    console.log("not a number!");
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "bigint":
    console.log("bigint!");
    break;
  case "function":
    console.log("function!");
    break;
  case "object":
    console.log("object!");
    break;
  case "array":
    console.log("array!");
    break;
  default:
    console.log("I have no idea!");
}
