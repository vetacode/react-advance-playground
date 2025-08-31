import React from 'react';

function FetchCustData() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {};

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div className='section'>
      <h1>Fetch Customer data</h1>
      <h2>Customer data</h2>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default FetchCustData;
