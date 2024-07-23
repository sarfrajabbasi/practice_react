// @ts-nocheck
import React, {  useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: `something went Wrong: ${action.error}`,
      };
    default:
      return state;
  }
};
const FetchWithReducer = () => {
  // const [loading,setLoading] = useState(true);
  // const [error,setError]= useState('');
  // const [post,setPost]= useState({});
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ERROR",
          error:error
        })
      })

      }, []);
      const {loading,error,post} = state
  return (
    <div>
      <p>{loading ? "Loading..." : post.title}</p>
      {error && <p>{error}</p>}
    </div>
  );
};

export default FetchWithReducer;
