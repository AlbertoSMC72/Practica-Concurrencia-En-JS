function compareNumbers() {
    let flag = true;
    while (flag) {
        var num1 = Math.floor(Math.random() * 1000000) + 1;
        var num2 = Math.floor(Math.random() * 1000000) + 1;
        if (num1 === num2) {
            self.postMessage([num1, num2]);
            flag=false;
        } else {
            flag =true;
        }
    }
}

compareNumbers();