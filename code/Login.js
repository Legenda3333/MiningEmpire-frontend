const tg = window.Telegram.WebApp;
tg.expand();

const telegramUserData = tg.initDataUnsafe.user;  //Получаем данные о пользователе

let userInfo = null;
let listFriends = null;

//Авторизация пользователя
async function userAuthorization() {
    const request = await fetch("https://mining-empire-backend.vercel.app/tg/userAuthorization", {
        method: "POST",
        headers: {"Content-Type": "application/json;charset=utf-8"},
        body: JSON.stringify({ telegramUserData: telegramUserData }) 
    });

    const data = await request.json();

    userInfo = data.user; 
    listFriends = data.friends; 

    console.log(telegramUserData);
    console.log(userInfo); 
    console.log(listFriends); 

    main();
}

userAuthorization();

