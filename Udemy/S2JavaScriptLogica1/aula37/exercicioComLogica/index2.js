function rad(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}
const min = 0;
const max = 100;
const ran = rad(min, max)
console.log(ran)

function div(ran) {
    if(typeof ran !== 'number'){
        console.log(ran)
    }
    else if(ran % 3 === 0 && ran % 5 === 0){
        console.log('FizzBuzz')
    }
    else if (ran % 3 === 0) {
        console.log('Fizz')
    }
    else if(ran % 5 === 0) {
        console.log('Buzz')
    }
   
    else{
        console.log(`Não divisivel por 3 nem por 5 [${ran}]`)
    }
}

div(ran);

