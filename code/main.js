let CoinBalance = 0;
let profit_per_block = 0;

let MiningPower = 0;
let MiningPowerMINERS = 0;
let MiningPowerFRIENDS = 0;
let ReferralBonus = 0;
let MiningPowerTASKS = 0;
let MiningPowerBONUS = 0;
let count_friends = 0;

let level = 1;

let changed_section = false;
let changed_section2 = false;
let changed_section3 = false;
let changed_section4 = false;
let changed_section5 = false;
let changed_section6 = false;
let request = false;
let request2 = false;
let request3= false;
let request4= false;
let request5= false;
let request6= false;

async function main() {
    CoinBalance = userInfo.Coins;

    // Устанавливаем аватарку и имя пользователя
    const profilePictureImg = document.getElementById("profilePicture");
    profilePictureImg.src = userInfo.profilePicture;
    profilePictureImg.onerror = function() { profilePictureImg.src = "images/undefined_profilePicture.png" };

    if (userInfo.username !== "NO USERNAME") { document.getElementById("user_name").innerText = userInfo.username }
    else if (userInfo.username === "NO USERNAME") { document.getElementById("user_name").innerText = userInfo.firstName }

    await create_listFriends(); // Выводим список друзей
    await tasks(); //Выводим список задач
    await calculateReferralBonus(); // Награда за регистрацию по реферальной ссылке
    await updateMiningPower(); // Обновляем значение MiningPower в базе данных
    set_time_toNext_block(); //Рассчитываем время до добычи блока
    update_main_page(); //Обновляем главную страницу
}

async function calculateReferralBonus() {
    if (userInfo.referral_ID !== "" && userInfo.referral_ID !== null) {
        if (userInfo.isPremium === "true") {ReferralBonus = 250} 
        else if (userInfo.isPremium !== "true") {ReferralBonus = 100}
    }
}

async function updateMiningPower() {
    MiningPowerMINERS = (userInfo.M1 * 1000) + (userInfo.M2 * 1650) + (userInfo.M3 * 2500) + (userInfo.M4 * 4000) + 
    (userInfo.M5 * 6300) + (userInfo.M6 * 11250) + (userInfo.M7 * 19250) + (userInfo.M8 * 34000) + 
    (userInfo.M9 * 54000) + (userInfo.M10 * 85500) + (userInfo.M11 * 125000) + (userInfo.M12 * 157500) + 
    (userInfo.M13 * 220000) + (userInfo.M14 * 275000) + (userInfo.M15 * 360000) + (userInfo.M16 * 500000);

    MiningPower = MiningPowerMINERS + MiningPowerFRIENDS + ReferralBonus + MiningPowerTASKS + (MiningPowerMINERS + MiningPowerFRIENDS + ReferralBonus + MiningPowerTASKS)*(MiningPowerBONUS/100);


    await fetch("https://mining-empire-backend.vercel.app/tg/updateMiningPower", {
        method: "POST",
        headers: {"Content-Type": "application/json;charset=utf-8"},
        body: JSON.stringify({ 
            UserID: tg.initDataUnsafe.user.id, 
            MiningPower: MiningPower
        }) 
    });
}


//МЕНЮ
let section = "main";

miners_page = document.getElementById("miners_page")
main_page = document.getElementById("main_page")
friends_page = document.getElementById("friends_page")
tasks_page = document.getElementById("tasks_page")
info_about_project_page = document.getElementById("info_about_project_page")

menu1 = document.getElementById("menu1");
menu2 = document.getElementById("menu2");
menu3 = document.getElementById("menu3");
menu4 = document.getElementById("menu4");
menu5 = document.getElementById("menu5");

async function open_info_about_project_section() {
    if (section !== "info_about_project") {
        info_about_project_page.style.display="flex";
        scroll_to_up();

        if (section === "miners") {menu2.style.display = "none"; miners_page.style.display="none"} 
        if (section === "main") {menu3.style.display = "none"; main_page.style.display="none"} 
        if (section === "friends") {menu4.style.display = "none"; friends_page.style.display="none"} 
        if (section === "tasks") {menu5.style.display = "none", tasks_page.style.display="none"}

        menu1.style.display = "inline";
        resetting_animations();
        section = "info_about_project";
    };
}

async function open_miners_section() {
    if (section !== "miners") {
        miners_page.style.display="inline";
        scroll_to_up();
        document.getElementById("miners_page").style.height = "585vw";
        document.getElementById("animation_miners_page").classList.add("animate");
        document.getElementById("miners_section").classList.add("animate");

        if (section === "info_about_project") {menu1.style.display = "none"; info_about_project_page.style.display="none"} 
        if (section === "main") {menu3.style.display = "none"; main_page.style.display="none"} 
        if (section === "friends") {menu4.style.display = "none"; friends_page.style.display="none"} 
        if (section === "tasks") {menu5.style.display = "none", tasks_page.style.display="none"}

        menu2.style.display = "inline";
        resetting_animations();
        section = "miners";
        update_miners_page();

        await sleep(500);
        document.getElementById("miners_page").style.height = "545vw";
    };
}

// Функция для получения актуальной высоты страницы в vw
function getPageHeightInVW() {
    const heightInPixels = document.documentElement.scrollHeight; 
    const widthInPixels = window.innerWidth; 
    const heightInVW = (heightInPixels / widthInPixels) * 100; 
    return heightInVW;
}

// Функция для изменения высоты элемента на 30vw
async function increasePageHeight() {
    const currentHeightVW = getPageHeightInVW(); 
    const newHeightVW = currentHeightVW + 30; 
    document.getElementById("miners_page").style.height = `${newHeightVW}vw`;
}

async function reducePageHeight() {
    const currentHeightVW = getPageHeightInVW(); 
    const newHeightVW = currentHeightVW - 30; 
    document.getElementById("miners_page").style.height = "545vw"
}

async function open_main_section() {
    if (section !== "main") {
        main_page.style.display="inline";
        scroll_to_up();

        if (section === "info_about_project") {menu1.style.display = "none"; info_about_project_page.style.display="none"} 
        if (section === "miners") {menu2.style.display = "none"; miners_page.style.display="none"} 
        if (section === "friends") {menu4.style.display = "none"; friends_page.style.display="none"} 
        if (section === "tasks") {menu5.style.display = "none", tasks_page.style.display="none"}

        menu3.style.display = "inline";
        resetting_animations();
        section = "main";
        update_main_page();
    };
} 

async function open_friends_section() {
    if (section !== "friends") {
        friends_page.style.display="flex"
        scroll_to_up();
        document.getElementById("animation_friends_page1").classList.add("animate");
        document.getElementById("animation_friends_page2").classList.add("animate");

        if (section === "info_about_project") {menu1.style.display = "none"; info_about_project_page.style.display="none"} 
        if (section === "miners") {menu2.style.display = "none"; miners_page.style.display="none"} 
        if (section === "main") {menu3.style.display = "none"; main_page.style.display="none"} 
        if (section === "tasks") {menu5.style.display = "none", tasks_page.style.display="none"}

        menu4.style.display = "inline";
        resetting_animations();
        section = "friends";
    };
} 

async function open_tasks_section() {
    if (section !== "tasks") {
        tasks_page.style.display="flex";
        scroll_to_up();

        document.getElementById("task_board_block_animate1").classList.add("animate");
        document.getElementById("task_board_block_animate2").classList.add("animate");

        if (section === "info_about_project") {menu1.style.display = "none"; info_about_project_page.style.display="none"} 
        if (section === "miners") {menu2.style.display = "none"; miners_page.style.display="none"} 
        if (section === "main") {menu3.style.display = "none"; main_page.style.display="none"} 
        if (section === "friends") {menu4.style.display = "none"; friends_page.style.display="none"}
        
        menu5.style.display = "inline";
        resetting_animations();
        section = "tasks";
        await tasks();
    };
}

function scroll_to_up() {
    window.scrollTo({top: 0});
}

//Переход в телеграм канал
function open_telegram_channel() {
    window.open("https://t.me/MiningEmpire_official_channel", "_blank");
}

//Открыть настройки
function open_settings_page() {
    document.getElementById("text_in_notification_info_board").innerText = "Раздел находится в разработке!";
    notification_info_board();
}

//Обновление данных на странице
async function update_main_page() {
    document.getElementById("level").innerText = "Ранг "+level+"/10";

    CoinBalance_formatted = parseFloat(CoinBalance).toFixed(2); 
    CoinBalance_formatted = parseFloat(CoinBalance_formatted).toString();
    CoinBalance_formatted = CoinBalance_formatted.replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    document.getElementById("CoinBalance_main").innerText = CoinBalance_formatted;

    if ((MiningPower >= 100000 && MiningPower < 1000000) || (MiningPower >= 100000000 && MiningPower < 1000000000)) { 
        document.getElementById("MiningPower_main").style.fontSize = "2.8vh"; 
        document.getElementById("img_lightning").style.height = "3vh"; 
    } 
    
    let formattedMiningPower;
    
    if (MiningPower >= 0 && MiningPower < 1000) { 
        formattedMiningPower = (MiningPower) + " kH/s"; 
    } else if (MiningPower >= 1000 && MiningPower < 1000000) { 
        formattedMiningPower = (MiningPower / 1000).toFixed(2).replace(/\.?0+$/, "") + " MH/s"; 
    } else if (MiningPower >= 1000000 && MiningPower < 1000000000) { 
        formattedMiningPower = (MiningPower / 1000000).toFixed(2).replace(/\.?0+$/, "") + " GH/s"; 
    } else { 
        formattedMiningPower = (MiningPower / 1000000000).toFixed(2).replace(/\.?0+$/, "") + " TH/s"; 
    }
    
    document.getElementById("MiningPower_main").innerText = formattedMiningPower;

    await update_profit_per_block();
    document.getElementById("ProfitMЕC_main").innerText = "≈" + profit_per_block;
}


//Рассчитанная прибыль за блок
async function update_profit_per_block() {
    const response = await fetch("https://mining-empire-backend.vercel.app/tg/GetTotalMiningPower", {
        method: "POST",
        headers: {"Content-Type": "application/json;charset=utf-8"}
    });

    const data = await response.json(); 
    const users_MiningPower = data.users_MiningPower;

    const totalMiningPower = users_MiningPower.reduce((sum, row) => sum + row.MiningPower, 0);
    profit_per_block = MiningPower / totalMiningPower * 10000;
    profit_per_block = parseFloat(profit_per_block.toFixed(2));
}

// Функция для установки времени до следующего блока
let time_toNext_block;
let currentTime;

function set_time_toNext_block() {
    let minutes_toNext_block;
    let seconds_toNext_block;

    setInterval(() => {
        currentTime = Math.floor(Date.now() / 1000);
        time_toNext_block = 600 - Math.floor(currentTime % 600);

        minutes_toNext_block = Math.floor(time_toNext_block / 60);
        seconds_toNext_block = time_toNext_block % 60;

        if (minutes_toNext_block<10) {minutes_toNext_block = "0" + minutes_toNext_block }
        if (seconds_toNext_block<10) {seconds_toNext_block = "0" + seconds_toNext_block }
        document.getElementById("timer_before_block_mining").innerText = minutes_toNext_block+":"+seconds_toNext_block;

        const progress_new_block = (600-time_toNext_block)*0.16666; 
        document.getElementById("time_new_block_board").style.width = `${progress_new_block}%`

        if (time_toNext_block < 2){
            generate_new_block_info_board(); 
            CoinBalance += profit_per_block;
            update_main_page();
        }
    }, 1000); 
}

//Высчитать номер добытого блока
function update_number_block() {
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const targetDate = new Date("2025-04-12T19:00:00+03:00");
    const targetTimeInSeconds = Math.floor(targetDate.getTime() / 1000);
    const timeDifference = currentTimeInSeconds - targetTimeInSeconds;
    const block_number = Math.floor(timeDifference / 600);

    return block_number;
}