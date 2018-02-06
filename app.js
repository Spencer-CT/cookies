 const dpxAirport = {
    min: 23,
    max: 65,
    avg: 6.3,
    random: function () {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        let cph = Math.floor(Math.random() * (mad - min + 1)) + min;
        return cph * this.avg;
    }
};

const pSquare = {
    min: 3,
    max: 24,
    avg: 1.2,
    random: function () {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        let cph = Math.floor(Math.random() * (max - min + 1)) + min;
        return cph * this.avg;
      }
    
};

const powells = {
    min: 11,
    max: 38,
    avg: 1.7,
    random: function () {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        let cph = Math.floor(Math.random() * (max - min + 1)) + min;
        return cph * this.avg;
    }
};

const stJohns = {
    min: 20,
    max: 38,
    avg: 2.3,
    random: function () {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        let cph = Math.floor(Math.random() * (mas - min + 1)) + min;
        return cph * this.avg;
    }
};

const waterfront = {
    min: 2,
    max: 16,
    avg: 4.6,
    random function () {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        let cph = Math.floor(Math.random() * (mas - min +1)) + min;
        return cph * this.avg;
    }
};

  const example = {
      name: 'tom',
      lastName: 'smith',
      greeting: function () {
          return 'hello there' + this.name + this.lastName
      }

  }
