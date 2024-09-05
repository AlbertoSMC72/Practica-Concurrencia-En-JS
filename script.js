function bucle (){
    let w;
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("./random.js");
        }
        w.onmessage = (e) => {
            document.getElementById("numero").innerHTML = `Los números son iguales ${e.data[0]} y ${e.data[1]}`;
        };
    } else {
        console.log("Your browser does not support web workers");
    }
}

let wTemp;
function temporizador() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(wTemp) == "undefined") {
            wTemp = new Worker("./temporizador.js");
        }
        wTemp.onmessage = (e) => {
            document.getElementById("tiempo").innerHTML = e.data;
        };
    } else {
        console.log("Your browser does not support web workers");
    }
}

function stop() {
    wTemp.terminate();
}