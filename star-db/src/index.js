const getResource = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
  }

  const body = await res.json();
  return body;
};

getResource('https://swapi.co/api/people/16546546/')
  .then(body => {
    console.log(body);
  })
  .catch(err => {
    console.error('Console not fetch', err);
  });

/*fetch('https://swapi.co/api/people/1/')
  .then(res => {
    return res.json();
  })
  .then(body => {
    console.log(body);
  });*/
