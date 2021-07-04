import { useSelector } from "react-redux";
import parseJWT from "../helpers/parseJWT.js";

function useUserid() {
  const token = useSelector((state) => state.auth.access_token);
  try {
    const parseObj = parseJWT(token);
    if (parseObj.id) {
      console.log("parseObj.id", parseObj.id);
      return parseObj.id;
    }
    return null;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}

export { useUserid };
