import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

export const withDataLoader = (url) => (WrappedComponent) => {
  const WithLoader = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then((res) => {
          console.log(res)
          setData(res);
        });
    }, []);

    if (!data) {
      return <Spinner />;
    }

  return <WrappedComponent data={data} />;
  };

  return WithLoader;

}
