let x = 0;

function loop() {

    x++;
    setTimeout(loop, 1000); 
    self.postMessage(x);
}

loop();