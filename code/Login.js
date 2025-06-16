const tg = window.Telegram.WebApp;
tg.expand();

let userInfo = null;
let listFriends = null;

const photo = tg.initDataUnsafe.user; // photo_url
console.log(photo);

//Получаем данные о пользователе
async function userAuthorization() {
    const request = await fetch("https://mining-empire-backend.vercel.app/tg/userAuthorization", {
        method: "POST",
        headers: {"Content-Type": "application/json;charset=utf-8"},
        body: JSON.stringify({ 
            userID: tg.initDataUnsafe.user.id, 
            firstName: tg.initDataUnsafe.user.first_name, 
            lastName: tg.initDataUnsafe.user.last_name || "", 
            username: tg.initDataUnsafe.user.username || "NO USERNAME", 
            languageCode: tg.initDataUnsafe.user.language_code || "", 
            isPremium: tg.initDataUnsafe.user.is_premium || false, 
            registrationTime: Math.floor(Date.now() / 1000), 
            profilePicture: "images/undefined_profilePicture.png" 
        }) 
    });

    const data = await request.json();

    userInfo = data.user; 
    listFriends = data.friends; 

    console.log(userInfo); 
    console.log(listFriends); 

    main();
}

userAuthorization();

