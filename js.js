function bolme(a, b) {
    if (b === 0) {
        console.error("Səhv: 0-a bölmə mümkün deyil!");
        return;
    }
    return a / b;
}

var netice = bolme(10, 0);
console.log(netice); 