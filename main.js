let username = prompt('ismizni kiriting');
let count = +prompt(username + " nechta savol beraylik?");
sendtelegram(`${username} ${count} ta savol tanlandi!`);

let true_answer = 0;



for (let i = 1; i <= count; i++) {
    let num1 = Math.floor(5 + Math.random() * 12);
    let num2 = Math.floor(5 + Math.random() * 12);
    let question = +prompt(`${i})-savol: ${num1} * ${num2} = ? `);

    if (question == num1 * num2) {
        document.write(`${i}-savol: ${num1} * ${num2} = ${question} (T'og'ri) <br>`);
        true_answer ++;
    } else {
        document.write(`${i}-savol: ${num1} * ${num2} =${question} (Xato! Javob: ${num1 * num2} <br>`);
        
    }// sendtelegram
}

sendtelegram(`${username} ${count} ta savoldan ${true_answer} ta javob tog'ri! va ${count - true_answer} ta xato`);

function sendtelegram(message) { let telegram_bot_id ="6980215422:AAGmk5AXNRk4uQIwPPbCuTBKCSjs32aX7GU"; let chat_id = 1568825992; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };





