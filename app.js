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

function CookieStore (location, min, max, avg, timeArray) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.timeArray = timeArray;

    this.answer = null
}
const pdxCookie = new CookieStore ('pdx', 23, 65, 6.3, []);
pdxCookie.ask();
pdxCookie.render();
const pioneerCookie = new CookieStore ('pSquare', 3, 24, 1.2, []);
pioneerCookie.ask();
pioneerCookie.render();
const powellsCookie = new CookieStore ('powells', 11, 38, 1.7, []);
powellsCookie.ask();
powellsCookie.render();
const stJohnsCookie = new CookieStore ('stJohns', 20, 38, 2.3, []);
stJohnsCookie.ask();
stJohnsCookie.render();
const waterfrontCookie = new CookieStore ('waterfront', 20, 38, 2.3, []);
waterfrontCookie.ask();
waterfrontCookie.render();


const pSquare = {
    location: 'pSquare',
    min: 3,
    max: 24,
    avg: 1.2,
    timeArray:[]
};
const powells = {
    location: 'powells',
    min: 11,
    max: 38,
    avg: 1.7,
    timeArray:[]
};
const stJohns = {
    location: 'stJohns',
    min: 20,
    max: 38,
    avg: 2.3,
    timeArray:[]
};

const waterfront = {
    location: 'waterfront',
    min: 2,
    max: 16,
    avg: 4.6,
    timeArray:[]
};