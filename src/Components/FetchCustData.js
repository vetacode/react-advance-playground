import React from 'react';

function FetchCustData() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=1').then((response) =>
      response.json().then((data) => {
        setUser(data);
      })
    );
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div className='section'>
      <h1>Fetch Customer data</h1>
      <h2>Customer data</h2>
      <h3> Name:{user.results[0].name.first}</h3>
      <img src={user.results[0].picture.large} alt='' />
    </div>
  ) : (
    <h2 style={{ color: 'goldenrod' }}>Fetching the data ... ...</h2>
  );
}

export default FetchCustData;
