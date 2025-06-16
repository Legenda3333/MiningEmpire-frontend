// Выводим список друзей
async function create_listFriends() {
    // Формируем массив friends
    const friends = listFriends.map(user => ({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        bonus_power: user.MiningPower,
        URL_profilePicture: user.profilePicture,
        isPremium: user.isPremium,
        registrationTime: user.registrationTime
    }));
    friends.sort((a, b) => b.registrationTime - a.registrationTime); //Сортировка друзей от новых к старым

    const premium_users = friends.filter(friend => friend.isPremium === "true").length;
    const no_premium_users = friends.length - premium_users;
    count_friends = premium_users + no_premium_users;
    document.getElementById("total_friends").innerText = count_friends; //Выводим количество друзей

    //Выводим суммарную награду со всех друзей
    MiningPowerFRIENDS += (friends.reduce((sum, friend) => sum + friend.bonus_power, 0))*0.2+(premium_users*250)+(no_premium_users*100);
    let formatted_MiningPowerFRIENDS;
    if (MiningPowerFRIENDS >= 0 && MiningPowerFRIENDS < 1000) { 
        formatted_MiningPowerFRIENDS = (MiningPowerFRIENDS) + " kH/s"; 
    } else if (MiningPowerFRIENDS >= 1000 && MiningPowerFRIENDS < 1000000) { 
        formatted_MiningPowerFRIENDS = (MiningPowerFRIENDS / 1000).toFixed(2).replace(/\.?0+$/, "") + " MH/s"; 
    } else if (MiningPowerFRIENDS >= 1000000 && MiningPowerFRIENDS < 1000000000) { 
        formatted_MiningPowerFRIENDS = (MiningPowerFRIENDS / 1000000).toFixed(2).replace(/\.?0+$/, "") + " GH/s"; 
    } else { 
        formatted_MiningPowerFRIENDS = (MiningPowerFRIENDS / 1000000000).toFixed(2).replace(/\.?0+$/, "") + " TH/s"; 
    }
    document.getElementById("MiningPower_with_friends").innerText = formatted_MiningPowerFRIENDS;

    //Отображаем список друзей, если они есть
    if (friends.length === 0) {}  
    else if (friends.length >= 1) {
        document.getElementById("no_friends").style.display = "none";
        document.getElementById("listFriends").style.display = "flex";
    }

    //Расмширяем размер списка при большом количестве друзей
    if (friends.length === 1) {
        document.getElementById("my_friends").style.height = "85vw";
        document.getElementById("friends_page").style.height = "337vw";

    } else if (friends.length > 3) {
        listFriends_height = 20.5*(friends.length-3)+100;
        friends_page_height = 20.5*(friends.length-3)+352;
        document.getElementById("my_friends").style.height = listFriends_height+"vw";
        document.getElementById("friends_page").style.height = friends_page_height+"vw";
    }

    //Вывод списка друзей
    for (let i = 0; i < friends.length; i++) {
        let element = document.createElement("div");
        element.className = "info_friend";
    
        let profilePicture_friend = document.createElement("img");
        profilePicture_friend.className = "profilePicture_friend";
        profilePicture_friend.src = friends[i].URL_profilePicture;
        
        // Обработчик события, если изображение успешно загружено
        profilePicture_friend.onload = function() {
            element.appendChild(profilePicture_friend);
            addFriendName(); // Добавляем имя только после загрузки аватарки
        };
        
        // Обработчик события, если произошла ошибка при загрузке изображения
        profilePicture_friend.onerror = function() {
            let defaultprofilePicture = document.createElement("img");
            defaultprofilePicture.className = "profilePicture_friend";
            defaultprofilePicture.src = "images/undefined_profilePicture.png";
            element.appendChild(defaultprofilePicture);
            addFriendName(); 
        };
        
        function addFriendName() {
            let name_friend = document.createElement("button");
            name_friend.className = "name_friend";
            if (friends[i].lastName === null) {friends[i].lastName = ""}
            if (friends[i].firstName === null) {friends[i].firstName = ""}
            name_friend.innerText = friends[i].firstName + " " + friends[i].lastName;
            element.appendChild(name_friend);
        }        
    
        let bonus_with_friend_info = document.createElement("div");
        bonus_with_friend_info.className = "bonus_with_friend_info";
    
        let bonus_with_friend_text = document.createElement("button");
        bonus_with_friend_text.className = "bonus_with_friend_text";
        bonus_with_friend_text.innerText = "Бонус с друга";
        bonus_with_friend_info.appendChild(bonus_with_friend_text);
    
        let formatted_bonus_power;
        let reward_for_friend = (friends[i].bonus_power)*0.2;
        if (friends[i].isPremium === "true") {
            reward_for_friend += 250;
        } else if (friends[i].isPremium !== "true") {
            reward_for_friend += 100;
        }
        
        if (reward_for_friend >= 0 && reward_for_friend < 1000) { 
            formatted_bonus_power = (reward_for_friend) + " kH/s"; 
        } else if (reward_for_friend >= 1000 && reward_for_friend < 1000000) { 
            formatted_bonus_power = (reward_for_friend / 1000).toFixed(2).replace(/\.?0+$/, "") + " MH/s"; 
        } else if (reward_for_friend >= 1000000 && reward_for_friend < 1000000000) { 
            formatted_bonus_power = (reward_for_friend / 1000000).toFixed(2).replace(/\.?0+$/, "") + " GH/s"; 
        } else { 
            formatted_bonus_power = (reward_for_friend / 1000000000).toFixed(2).replace(/\.?0+$/, "") + " TH/s"; 
        }

        let bonus_mining_power_with_friend = document.createElement("button");
        bonus_mining_power_with_friend.className = "bonus_mining_power_with_friend";
        bonus_mining_power_with_friend.innerText = formatted_bonus_power;
        bonus_with_friend_info.appendChild(bonus_mining_power_with_friend);
        
        element.appendChild(bonus_with_friend_info);
    
        document.getElementById("listFriends").appendChild(element);
    }
}

//Формируем и выводим реферальную ссылку
const referal_link = "https://t.me/MiningEmpire_bot?start=" + tg.initDataUnsafe.user.id;
document.getElementById("referal_link").innerText = referal_link;


//Функция для пересылки реферальной ссылки
function share_link() { 
    navigator.clipboard.writeText(referal_link) 
    window.open(`https://t.me/share/url?url=${encodeURIComponent(referal_link)}`, "_blank");  
}


//Переход в раздел с заданиями
function go_tasks_section() {
    open_tasks_section();
    const vwValue = 311; 
    const viewportWidth = window.innerWidth; 
    const pixelsToScroll = (vwValue / 100) * viewportWidth; 
    
    window.scrollTo({
        top: pixelsToScroll,
        behavior: "smooth"
    });
}