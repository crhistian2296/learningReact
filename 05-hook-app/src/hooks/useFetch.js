import { useEffect, useRef, useState } from 'react';

function useFetch(url) {
  const [state, setState] = useState({ loading: true, error: null, data: null });
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState(() => ({ loading: true, error: null, data: null }));
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) setState(() => ({ loading: false, error: null, data }));
        // } else console.warn("El componente ya fue desmontado");
      })
      .catch(() => {
        setState(() => ({
          loading: false,
          error: 'No se pudo acceder a la informacion deseada',
          data: null,
        }));
      });
  }, [url]);

  return state;
}

export default useFetch;
