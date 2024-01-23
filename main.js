let username = prompt('ismizni kiriting');
let count = +prompt(username + " nechta savol beraylik?");


for (let i = 1; i <= count; i++) {
    let num1 = Math.floor(5 + Math.random() * 12);
    let num2 = Math.floor(5 + Math.random() * 12);
    let question = +prompt(`${i})-savol: ${num2} * ${num2} = ? `);

    if (question == num1 * num2) {
        document.write(`${i}-savol: ${num1} * ${num2} = ${question} (T'og'ri) <br>`);
    } else {
        document.write(`${i}-savol: ${num1} * ${num2} =${question} (Xato! Javob: ${num1 * num2} <br>`);

    }


}


