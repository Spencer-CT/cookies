const dpxAirport = {
    min: '23',
    max: '65',
    avg: '6.3'
};

const pSquare = {
    min:'3',
    max: '24',
    avg: '1.2'
};

const powells = {
    min: '11',
    max: '38',
    avg: '1.7'
};

const stJohns = {
    min: '20',
    max: '38',
    avg: '2.3'
};

const waterfront = {
    min: '2',
    max: '16',
    avg: '4.6'
};



function getRandomIntInclusive(a, b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a + 1)) + a; 
  }

  getRandomIntInclusive(2, 16);