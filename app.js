//exercise1
let i = 0;

while(i <= 100){
    if (i % 2 == 0){
        console.log(i);
    }
}

for (i = 0; i < 100; i++){
    if (i % 2){
        console.log(i);
    }
}

//exercise2
let i = 0
do{
    i = i + 1
    console.log(i);
} while(i < 100)

for (i = 0; i < 100; i++){
    console.log(i);
    if(i % 3 && i % 5 == 0){
        console.log('FIZZBUZZ');
    }else{
    
        if (i % 3 == 0){
            console.log('Fizz');
        } 
        if (i % 5 == 0){
                console.log('BUZZ'); 
        } 
    
    } 
} 
//excserise3
let i = 1;

while(i <= 100){
    let output = '';

    if (i % 3 == 0){
        output += 'FIZZ';
    }

    if (i % 5 == 0){
        output += 'BUZZ';
    }

    console.log(`${i} ${output}`);

    i++
} 

do{
    let output = '';

    if (i % 3 == 0){
        output += 'FIZZ';
    }

    if (i % 5 == 0){
        output += 'BUZZ';
    }

    console.log(`${i} ${output}`);

    i++
} while(i <= 100) 

//exercise4
let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (i = 0; i < n; i++){
    console.log(i);
    if (i == value){
        console.log("Found value!");
    
        break;
    } else if(i != value){
        console.log("Did not find value");

    }
    
} 