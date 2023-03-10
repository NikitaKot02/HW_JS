function Calculator() {
    let state = false,
    a = null,
    b = null,
    operation = null;

    this.calculateStart = function(newState){
        let reg = /(?:on|off)/g;
        if (!reg.test(newState)) return;
        if(newState === 'on'){
            state = true;
        }else{
            state = false;
            a = null;
            b = null;
            operation = null;
        }
    }

    this.getA = function () {
        if(!state) return;
        return a;
    };

    this.getB = function () {
        if(!state) return;
        return b;
    };

    this.setA = function (numA) {
        if(!state) return;
        if (isNaN(numA)) return;
        a = +numA;
    };

    this.setB = function (numB) {
        if(!state) return;
        if (isNaN(numB)) return;
        b = +numB;
    };

    this.setOperation = function (oper) {
        if(!state) return;
        let reg = /[\+\-\*\/]/g;
        if (oper.length > 1) return;
        if (!reg.test(oper)) return;
        operation = oper;
    };

    this.getRezult = function(){
        if(!state) return;
        if (a === null || b === null || !operation) return;

        switch (operation) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return;
        }
    }
}
