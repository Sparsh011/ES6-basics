function varDemo(){
    for(var i = 0; i < 5; i++){
        console.log(i);
    }

    console.log(i); // As the func is var, this can still be accessed here. var -> func level
}


function letDemo(){
    for(let i = 0; i < 5; i++){
        console.log(i);
    }

    // console.log(i); // Gives an error
}

function constDemo(){
    const a = 5
    // a = 10 Gives an error
    console.log(a);
}

varDemo()
letDemo()
constDemo()