const hr = [ '6am ','7am ','8am ','9am ','10am ','11am ','12pm ','1pm ', '2pm ','3pm ','4pm ','5pm ','6pm ','7pm ','8pm ',]
 
 const pdx = {
    min: 23,
    max: 65,
    avg: 6.3,
    hArray:[],
    random: function () {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        let cph = Math.floor(Math.random() * (max - min + 1)) + min;
        return cph * this.avg;
      },
      cookieList: function () {
        for (let i = 0; i < this.hArray.length; i++ ) {
            const list = document.getElementById('PDX Airport');
            const li = lcation.creatElement('li');
            li.textcontent =  hr[i] + this.hr[] + ' cookies.';
            list.appendChild(li);
};

const pSquare = {
    min: 3,
    max: 24,
    avg: 1.2,
    hArray:[],
    random: function () {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        let cph = Math.floor(Math.random() * (max - min + 1)) + min;
        return cph * this.avg;
      },
      cookieList: function (){
        for (let i = 0; i < this.hArray.length; i++ ) {
            const list = document.getElementById('Pioneer Square');
            const li = lcation.creatElement('li');
            li.textcontent =  hr[i] + this.hr[] + ' cookies.';
            list.appendChild(li);
    
};

const powells = {
    min: 11,
    max: 38,
    avg: 1.7,
    hArray:[],
    random: function () {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        let cph = Math.floor(Math.random() * (max - min + 1)) + min;
        return cph * this.avg;
    },
    cookieList: function (){
        for (let i = 0; i < this.hArray.length; i++ ) {
            const list = document.getElementById('Powells');
            const li = lcation.creatElement('li');
            li.textcontent =  hr[i] + this.hr[] + ' cookies.';
            list.appendChild(li);
};

const stJohns = {
    min: 20,
    max: 38,
    avg: 2.3,
    hArray:[],
    random: function () {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        let cph = Math.floor(Math.random() * (mas - min + 1)) + min;
        return cph * this.avg;
    },
    cookieList: function (){
        for (let i = 0; i < this.hArray.length; i++ ) {
            const list = document.getElementById('St. Johns');
            const li = lcation.creatElement('li');
            li.textcontent =  hr[i] + this.hr[] + ' cookies.';
            list.appendChild(li);
};

const waterfront = {
    min: 2,
    max: 16,
    avg: 4.6,
    hArray:[],
    random: function () {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        let cph = Math.floor(Math.random() * (mas - min +1)) + min;
        return cph * this.avg;
    },
    cookieList: function (){
        for (let i = 0; i < this.hArray.length; i++ ) {
            const list = document.getElementById('waterfront');
            const li = lcation.creatElement('li');
            li.textcontent =  hr[i] + this.hr[] + ' cookies.';
            list.appendChild(li);
        }
};