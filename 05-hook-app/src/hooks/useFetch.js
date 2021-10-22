import { useEffect, useState } from "react";

function useFetch(url) {
  const [state, setState] = useState({ loading: true, error: null, data: null });

  useEffect(() => {
    setState(() => ({ loading: true, error: null, data: null }));
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState(() => ({ loading: false, error: null, data }));
      });
  }, [url]);

  return state;
}

export default useFetch;
