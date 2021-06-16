
function action(num) {

    let elem = document.form.textview.value;
    let sign = elem.charAt(elem.length-1);

    if (sign === '+' || sign === '-' || sign === '*' || sign === '/') {

        document.form.textview.value = elem.slice(0, elem.length - 1);

        document.form.textview.value += num;

    } else {

        document.form.textview.value += num;
    };
}

function number(num) {
    let digit = document.form.textview.value;
    

    document.form.textview.value += num;
}

function clean() {

    document.form.textview.value = "";
}

function back() {

    let elem = document.form.textview.value;

    document.form.textview.value = elem.substring(0, elem.length - 1);
}

function rov() {

    const initailValue = document.form.textview.value;
    let str = "";
    let result = [];

    for (let i = 0; i <= initailValue.length; i++) {

        if (isFinite(initailValue[i]) || initailValue[i] === ".") {

            str += initailValue[i];

        } else {

            result.push(str);
            str = "";
            result.push(initailValue[i]);
        }


    }

    result.pop();

    for (let j = 0; j < result.length; j++) {
        let resultOfSingleCalculation = "";
        if (result.includes('*') && result.includes('/')) {
            if (result.indexOf('*') < result.indexOf('/')) {
                resultOfSingleCalculation = result[result.indexOf('*') - 1] * result[result.indexOf('*') + 1];
                result.splice(result.indexOf('*') - 1, 3, resultOfSingleCalculation);
                console.log(result);
            } else {
                resultOfSingleCalculation = result[result.indexOf('/') - 1] / result[result.indexOf('/') + 1];
                result.splice(result.indexOf('/') - 1, 3, resultOfSingleCalculation);
                console.log(result);
            }
        }
    }
    for (let i = 0; i < result.length; i++) {
        for (let i = 0; i < result.length; i++) {
            if (result.includes('*')) {
                resultOfSingleCalculation = result[result.indexOf('*') - 1] * result[result.indexOf('*') + 1];
                result.splice(result.indexOf('*') - 1, 3, resultOfSingleCalculation);
                console.log(result);
            }
        }
        for (let i = 0; i < result.length; i++) {
            if (result.includes('/')) {
                if (result[result.indexOf('/') + 1] === '0' || result[result.indexOf('/') + 1] === '') {
                    resultOfSingleCalculation = result[result.indexOf('/') - 1] / result[result.indexOf('/') + 1];
                    result.splice(0, result.length, "Cannot divide by zero");
                } else {
                    resultOfSingleCalculation = result[result.indexOf('/') - 1] / result[result.indexOf('/') + 1];
                    result.splice(result.indexOf('/') - 1, 3, resultOfSingleCalculation);
                    console.log(result);
                }
            }
        }
        for (let i = 0; i < result.length; i++) {

            if (result.includes('-')) {
                resultOfSingleCalculation = result[result.indexOf('-') - 1] - result[result.indexOf('-') + 1];
                result.splice(result.indexOf('-') - 1, 3, resultOfSingleCalculation);
                console.log(result);
            }
        }
        for (let i = 0; i < result.length; i++) {

            if (result.includes('+')) {
                resultOfSingleCalculation = Number(result[result.indexOf('+') - 1]) + Number(result[result.indexOf('+') + 1]);
                result.splice(result.indexOf('+') - 1, 3, resultOfSingleCalculation);
                console.log(result);
            }
        }
    }

    document.form.textview.value = result.join('');
}