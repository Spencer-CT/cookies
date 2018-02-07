hr = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ', '2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ', 'Total:'];

const pdx = {
    location: 'pdx',
    min: 23,
    max: 65,
    avg: 6.3,
    timeArray:[],
    
    random: function () {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        for (let i = 0; i < 15; i++){
        const custPH = Math.floor(Math.random() * (max - min + 1)) + min;
        const cookPH = Math.round(custPH * this.avg);
        this.timeArray.push (cookPH);
        }
    },
    totalCookies: function () {
        let total = 0;
        for (let j = 0; j < 15; j++){
        total = total + this.timeArray[j];
        }
    this.timeArray.push(total);
    },
    makeCookies: function () {
        for (let i = 0; i < this.timeArray.length; i++ ) {
            const list = document.getElementById('pdx');
            const li = document.createElement('li');
            li.textContent = hr[i] + this.timeArray[i] + ' cookies.';
            list.appendChild(li);
            console.log(li);
        }
    },
};

pdx.random();
pdx.totalCookies();
pdx.makeCookies();

const pSquare = {
    location: 'pSquare',
    min: 3,
    max: 24,
    avg: 1.2,
    timeArray:[],
    
    random: function () {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        for (let i = 0; i < 15; i++){
        const custPH = Math.floor(Math.random() * (max - min + 1)) + min;
        const cookPH = Math.round(custPH * this.avg);
        this.timeArray.push (cookPH);
        }
    },
    totalCookies: function () {
        let total = 0;
        for (let j = 0; j < 15; j++){
        total = total + this.timeArray[j];
        }
    this.timeArray.push(total);
    },
    makeCookies: function () {
        for (let i = 0; i < this.timeArray.length; i++ ) {
            const list = document.getElementById('pSquare');
            const li = document.createElement('li');
            li.textContent = hr[i] + this.timeArray[i] + ' cookies.';
            list.appendChild(li);
            console.log(li);
        }
    },
};

pSquare.random();
pSquare.totalCookies();
pSquare.makeCookies();

const powells = {
    location: 'powells',
    min: 11,
    max: 38,
    avg: 1.7,
    timeArray:[],
    
    random: function () {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        for (let i = 0; i < 15; i++){
        const custPH = Math.floor(Math.random() * (max - min + 1)) + min;
        const cookPH = Math.round(custPH * this.avg);
        this.timeArray.push (cookPH);
        }
    },
    totalCookies: function () {
        let total = 0;
        for (let j = 0; j < 15; j++){
        total = total + this.timeArray[j];
        }
    this.timeArray.push(total);
    },
    makeCookies: function () {
        for (let i = 0; i < this.timeArray.length; i++ ) {
            const list = document.getElementById('powells');
            const li = document.createElement('li');
            li.textContent = hr[i] + this.timeArray[i] + ' cookies.';
            list.appendChild(li);
            console.log(li);
        }
    },
};

powells.random();
powells.totalCookies();
powells.makeCookies();

const stJohns = {
    location: 'stJohns',
    min: 20,
    max: 38,
    avg: 2.3,
    timeArray:[],
    
    random: function () {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        for (let i = 0; i < 15; i++){
        const custPH = Math.floor(Math.random() * (max - min + 1)) + min;
        const cookPH = Math.round(custPH * this.avg);
        this.timeArray.push (cookPH);
        }
    },
    totalCookies: function () {
        let total = 0;
        for (let j = 0; j < 15; j++){
        total = total + this.timeArray[j];
        }
    this.timeArray.push(total);
    },
    makeCookies: function () {
        for (let i = 0; i < this.timeArray.length; i++ ) {
            const list = document.getElementById('stJohns');
            const li = document.createElement('li');
            li.textContent = hr[i] + this.timeArray[i] + ' cookies.';
            list.appendChild(li);
            console.log(li);
        }
    },
};

stJohns.random();
stJohns.totalCookies();
stJohns.makeCookies();

const waterfront = {
    location: 'waterfront',
    min: 2,
    max: 16,
    avg: 4.6,
    timeArray:[],
    
    random: function () {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        for (let i = 0; i < 15; i++){
        const custPH = Math.floor(Math.random() * (max - min + 1)) + min;
        const cookPH = Math.round(custPH * this.avg);
        this.timeArray.push (cookPH);
        }
    },
    totalCookies: function () {
        let total = 0;
        for (let j = 0; j < 15; j++){
        total = total + this.timeArray[j];
        }
    this.timeArray.push(total);
    },
    makeCookies: function () {
        for (let i = 0; i < this.timeArray.length; i++ ) {
            const list = document.getElementById('waterfront');
            const li = document.createElement('li');
            li.textContent = hr[i] + this.timeArray[i] + ' cookies.';
            list.appendChild(li);
            console.log(li);
        }
    },
};

waterfront.random();
waterfront.totalCookies();
waterfront.makeCookies();