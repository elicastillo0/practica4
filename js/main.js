let add = (a,b) => a + b;

console.log(add(2,4));

let squareSurface = a => a * a;

console.log(squareSurface(5));

window.username = "Juan";

function User() {
    this.username = "Laura";
    setTimeout(()=> {
        console.log("Usuari@ " + this.username);
    }, 2000)
}

let user1 = new User();

let alumns = [
    {name: "María", surname: "Zuil", points: 4.6},
    {name: "Juan", surname: "Gómez", points: 7},
    {name: "Laura", surname: "López", points: 3.6},
    {name: "Carlos", surname: "Pérez", points: 6.7}
]

let passAlumnCounter = 0;

alumns.forEach((alumn) => {
    if (alumn.points >= 5) {
        passAlumnCounter++;
    }
})

console.log(passAlumnCounter);

const alumnList = alumns.map((alumn, index) => {
    return `${index + 1}.- ${alumn.name} ${alumn.surname}`;
})

console.log(alumnList);


const dataSet = [
    {
        "city": "Madrid",
        "10-01-22": "430",
        "10-02-22": "450",
        "10-04-22": "310",
        "10-05-22": "290"

    },
    {
        "city": "Barcelona",
        "10-01-22": "230",
        "10-02-22": "480",
        "10-03-22": "290",
        "10-04-22": "510"

    },
    {
        "city": "Sevilla",
        "10-01-22": "670",
        "10-02-22": "560",
        "10-03-22": "320"
    },
]

const dataSetAverage = dataSet.map(({city, ...dayData}) => {
    let totalDayData = 0;
    Object.values(dayData).forEach(value => totalDayData += Number(value));
    return {
        city,
        averageData: totalDayData / Object.values(dayData).length
    }
})

console.log(dataSetAverage);

let alumns2 = [
    {name: "Jorge", surname: "Gallardo", points: 4.6},
    {name: "Kilo", surname: "Castillo", points: 7},
    {name: "Pablo", surname: "Torres", points: 5}
]

const notPassedAlumns = alumns2.filter((alumn) => {
    return alumn.points < 5;
})

console.log(notPassedAlumns);