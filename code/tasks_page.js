let count_ads_viewd = 0;

async function tasks() {
    MiningPowerTASKS = 0;
    MiningPowerBONUS = 0;

    document.getElementById("count_ads_viewd").innerText = count_ads_viewd + "/20";

    document.getElementById("count_friends1").innerText = count_friends + "/1";
    document.getElementById("count_friends2").innerText = count_friends + "/5";
    document.getElementById("count_friends3").innerText = count_friends + "/15";
    document.getElementById("count_friends4").innerText = count_friends + "/50";
    document.getElementById("count_friends5").innerText = count_friends + "/150";
    document.getElementById("count_friends6").innerText = count_friends + "/500";

    //ЕЖЕДНЕВНЫЕ ЗАДАЧИ
    if (userInfo.task1_1 === "true") {
        document.getElementById("go_to_task_img_1-1").style.display = "none";
        document.getElementById("task_completed_1-1").style.display = "inline";
    }
    if (userInfo.task1_2 === "true") {
        document.getElementById("go_to_task_img_1-2").style.display = "none";
        document.getElementById("task_completed_1-2").style.display = "inline";
    }
    if (userInfo.task1_3 === "true") {
        document.getElementById("go_to_task_img_1-3").style.display = "none";
        document.getElementById("task_completed_1-3").style.display = "inline";
    }
    if (userInfo.task1_4 === "true") {
        document.getElementById("count_ads_viewd").style.display = "none";
        document.getElementById("task_completed_1-4").style.display = "inline";
    }

    MiningPowerTASKS += 25*userInfo.count_task1_1 + 300*userInfo.count_task1_2 + 200*userInfo.count_task1_3 + 5*userInfo.count_task1_4;

    //ОСОБОЕ
    if (userInfo.task2_1 === "true") {
        document.getElementById("go_to_task_img_2-1").style.display = "none";
        document.getElementById("task_completed_2-1").style.display = "inline";
        MiningPowerTASKS += 100;
        MiningPowerBONUS += 0.5;
    }
    if (userInfo.task2_2 === "true") {
        document.getElementById("go_to_task_img_2-2").style.display = "none";
        document.getElementById("task_completed_2-2").style.display = "inline";
        MiningPowerTASKS += 500;
        MiningPowerBONUS += 2.5;
    }
    if (userInfo.task2_3 === "true") {
        document.getElementById("go_to_task_img_2-3").style.display = "none";
        document.getElementById("task_completed_2-3").style.display = "inline";
        MiningPowerTASKS += 250;
        MiningPowerBONUS += 1;
    }

    //АКТИВНОСТЬ В СОЦИАЛЬНЫХ СЕТЯХ
    if (userInfo.task3_1 === "true") {
        document.getElementById("go_to_task_img_3-1").style.display = "none";
        document.getElementById("task_completed_3-1").style.display = "inline";
        MiningPowerTASKS += 100;
        MiningPowerBONUS += 0;
    }
    if (userInfo.task3_2 === "true") {
        document.getElementById("go_to_task_img_3-2").style.display = "none";
        document.getElementById("task_completed_3-2").style.display = "inline";
        MiningPowerTASKS += 150;
        MiningPowerBONUS += 1;
    }

    //ДРУЗЬЯ
    if (userInfo.task4_1 === "true") {
        document.getElementById("count_friends1").style.display = "none";
        document.getElementById("task_completed_4-1").style.display = "inline";
        MiningPowerTASKS += 0;
        MiningPowerBONUS += 0.5;
    }
    if (userInfo.task4_2 === "true") {
        document.getElementById("count_friends2").style.display = "none";
        document.getElementById("task_completed_4-2").style.display = "inline";
        MiningPowerTASKS += 0;
        MiningPowerBONUS += 1.5;
    }    
    if (userInfo.task4_3 === "true") {
        document.getElementById("count_friends3").style.display = "none";
        document.getElementById("task_completed_4-3").style.display = "inline";
        MiningPowerTASKS += 0;
        MiningPowerBONUS += 3;
    }
    if (userInfo.task4_4 === "true") {
        document.getElementById("count_friends4").style.display = "none";
        document.getElementById("task_completed_4-4").style.display = "inline";
        MiningPowerTASKS += 0;
        MiningPowerBONUS += 5;
    }    
    if (userInfo.task4_5 === "true") {
        document.getElementById("count_friends5").style.display = "none";
        document.getElementById("task_completed_4-5").style.display = "inline";
        MiningPowerTASKS += 0;
        MiningPowerBONUS += 10;
    }
    if (userInfo.task4_6 === "true") {
        document.getElementById("count_friends6").style.display = "none";
        document.getElementById("task_completed_4-6").style.display = "inline";
        MiningPowerTASKS += 0;
        MiningPowerBONUS += 25;
    }

    sorting_tasks_list();
}        

// Функция для сортировки задач (невыполненные - выполненные)
async function sorting_tasks_list() {
    const everydayTasks = [
        { id: "quest_daily_reward", completed: userInfo.task1_1 === "true" },
        { id: "quest_daily_TON_transaction", completed: userInfo.task1_2 === "true" },
        { id: "quest_daily_TGstars_transaction", completed: userInfo.task1_3 === "true" },
        { id: "quest_watch_ads", completed: userInfo.task1_4 === "true" }
    ];
    
    const specialTasks = [
        { id: "quest_connect_wallet", completed: userInfo.task2_1 === "true" },
        { id: "quest_buy_miner", completed: userInfo.task2_2 === "true" },
        { id: "quest_telegram_premium", completed: userInfo.task2_3 === "true" }
    ];
    
    const socialMediaActivityTasks = [
        { id: "quest_subscribe_telegram_channel_mining_empire", completed: userInfo.task3_1 === "true" },
        { id: "quest_boost_mining_empire_channel", completed: userInfo.task3_2 === "true" }
    ];
    
    const friendsTasks = [
        { id: "quest_ivite_1_friend", completed: userInfo.task4_1 === "true" },
        { id: "quest_ivite_5_friends", completed: userInfo.task4_2 === "true" },
        { id: "quest_ivite_15_friends", completed: userInfo.task4_3 === "true" },
        { id: "quest_ivite_50_friends", completed: userInfo.task4_4 === "true" },
        { id: "quest_ivite_150_friends", completed: userInfo.task4_5 === "true" },
        { id: "quest_ivite_500_friends", completed: userInfo.task4_6 === "true" }
    ];

    await sorting(everydayTasks, "everyday_tasks");
    await sorting(specialTasks, "special_tasks");
    await sorting(socialMediaActivityTasks, "social_media_activity_tasks");
    await sorting(friendsTasks, "friends_tasks"); 

    async function sorting(tasks_list, tasks_blok_ID) {
        tasks_list.sort((a, b) => a.completed - b.completed);
    
        const tasks_block = document.getElementById(tasks_blok_ID);
        tasks_list.forEach(task => {
            const taskElement = document.getElementById(task.id);
            tasks_block.appendChild(taskElement);
        });
    }
}

//Задержка по времени
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//ЕЖЕДНЕВНЫЙ ВХОД
async function quest_daily_reward() {
    if (userInfo.task1_1 === "false") {
        document.getElementById("go_to_task_img_1-1").style.display = "none";
        document.getElementById("loading_animation_1_1").style.display = "inline";

        await fetch("https://mining-empire-backend.vercel.app/tg/rewardForCompletedTask", {
            method: "POST",
            headers: {"Content-Type": "application/json;charset=utf-8"},
            body: JSON.stringify({ 
                UserID: tg.initDataUnsafe.user.id, 
                taskID: "1_1",
                CountCompletedTasks: userInfo.count_task1_1
            }) 
        });
        
        userInfo.task1_1 = "true";
        userInfo.count_task1_1 += 1;
        await sleep(1500); 
        document.getElementById("task_reward_img_lightning").src = "images/lightning.png";
        document.getElementById("task_reward").innerText = "+10 kH/s";
        completed_task_info_board();
        document.getElementById("loading_animation_1_1").style.display = "none";
        document.getElementById("task_completed_1-1").style.display = "inline";
        await sleep(1000); 
        await tasks();
        updateMiningPower();
    }
}

//ЕЖЕДНЕВНАЯ TON-ТРАНЗАКЦИЯ
async function quest_daily_TON_transaction() {
    if (userInfo.task1_2 === "false") {
        document.getElementById("go_to_task_img_1-2").style.display = "none";
        document.getElementById("loading_animation_1_2").style.display = "inline";
        await sleep(500); 

        const daily_TON_transaction = {validUntil: Math.round(Date.now() / 1000) + 60,
            messages: [{address: "UQDri2nzlX1zi8cytEnnBbL7Ubmd3xjP46ahTc2C1PjQjsZJ", amount: "100000000"}]};
        try {
            await tonConnectUI.sendTransaction(daily_TON_transaction);
            await fetch("https://mining-empire-backend.vercel.app/tg/rewardForCompletedTask", {
                method: "POST",
                headers: {"Content-Type": "application/json;charset=utf-8"},
                body: JSON.stringify({ 
                    UserID: tg.initDataUnsafe.user.id, 
                    taskID: "1_2",
                    CountCompletedTasks: userInfo.count_task1_2
                }) 
            });

            userInfo.task1_2 = "true"; 
            userInfo.count_task1_2 += 1;
            await sleep(1500); 
            document.getElementById("task_reward_img_lightning").src = "images/lightning.png";
            document.getElementById("task_reward").innerText = "+300 kH/s";
            completed_task_info_board();
            document.getElementById("loading_animation_1_2").style.display = "none";
            document.getElementById("task_completed_1-2").style.display = "inline";
            await sleep(1000); 
            await tasks();
            updateMiningPower();
        }
        catch (e) {
            await sleep(1000); 
            unfulfilled_task_info_board();
            document.getElementById("loading_animation_1_2").style.display = "none";
            document.getElementById("go_to_task_img_1-2").style.display = "inline";
        }
    }
}


//ЕЖЕДНЕВНАЯ ОПЛАТА В TG STARS
async function quest_daily_TGstars_transaction() {
    if (userInfo.task1_3 === "false") {
        document.getElementById("go_to_task_img_1-3").style.display = "none";
        document.getElementById("loading_animation_1_3").style.display = "inline";
        await sleep(1000); 

        const invoiceID = {invoiceID: "telegram_stars_daily_payment"};
    
        const response = await fetch("https://mining-empire-backend.vercel.app/tg/getInvoiceLink", {
            method: "POST",
            headers: {"Content-Type": "application/json;charset=utf-8"},
            body: JSON.stringify(invoiceID) 
        });
        
        const invoiceLink = await response.json();

        if (invoiceLink.success) {
            tg.openInvoice(invoiceLink.link, async (status) => {
                if (status === "paid") {
                    await fetch("https://mining-empire-backend.vercel.app/tg/rewardForCompletedTask", {
                        method: "POST",
                        headers: {"Content-Type": "application/json;charset=utf-8"},
                        body: JSON.stringify({ 
                            UserID: tg.initDataUnsafe.user.id, 
                            taskID: "1_3",
                            CountCompletedTasks: userInfo.count_task1_3
                        }) 
                    });

                    userInfo.task1_3 = "true"; 
                    userInfo.count_task1_3 += 1;
                    await sleep(1500); 
                    document.getElementById("task_reward_img_lightning").src = "images/lightning.png";
                    document.getElementById("task_reward").innerText = "+200 kH/s";
                    completed_task_info_board();
                    document.getElementById("loading_animation_1_3").style.display = "none";
                    document.getElementById("task_completed_1-3").style.display = "inline";
                    await sleep(1000); 
                    await tasks();
                    updateMiningPower();
                }

                else if (status === "cancelled") {
                    await sleep(1000); 
                    unfulfilled_task_info_board();
                    document.getElementById("loading_animation_1_3").style.display = "none";
                    document.getElementById("go_to_task_img_1-3").style.display = "inline";
                }
            })
        }
    }
}

//ПРОСМОТР РЕКЛАМЫ
async function quest_watch_ads() {
    document.getElementById("text_in_notification_info_board").innerText = "Задание временно не доступно!";
    notification_info_board();
}

//ПОДКЛЮЧИТЬ КОШЕЛЁК
async function quest_connect_wallet() {
    if (userInfo.task2_1 === "false") {
        document.getElementById("go_to_task_img_2-1").style.display = "none";
        document.getElementById("loading_animation_2_1").style.display = "inline";
        await sleep(1000); 

        //connect_wallet();

        if (userInfo.wallet_connect === "true"){
            await fetch("https://mining-empire-backend.vercel.app/tg/rewardForCompletedTask", {
                method: "POST",
                headers: {"Content-Type": "application/json;charset=utf-8"},
                body: JSON.stringify({ 
                    UserID: tg.initDataUnsafe.user.id, 
                    taskID: "2_1"
                }) 
            });

            userInfo.task2_1 = "true";
            await sleep(1500); 
            document.getElementById("task_reward_img_lightning").src = "images/lightning.png";
            document.getElementById("task_reward").innerText = "+100 kH/s";
            completed_task_info_board();
            document.getElementById("loading_animation_2_1").style.display = "none";
            document.getElementById("task_completed_2-1").style.display = "inline";
            await sleep(1000); 
            await tasks();
            updateMiningPower();
        } else {
            await sleep(1000); 
            unfulfilled_task_info_board();
            document.getElementById("loading_animation_2_1").style.display = "none";
            document.getElementById("go_to_task_img_2-1").style.display = "inline";
        }
    }    
}

//КУПИТЬ 1 ЛЮБОЙ МАЙНЕР
async function quest_buy_miner() {
    if (userInfo.task2_2 === "false") {
        document.getElementById("go_to_task_img_2-2").style.display = "none";
        document.getElementById("loading_animation_2_2").style.display = "inline";
        await sleep(1000); 

        if ((userInfo.M1 >= 1) || (userInfo.M2 >= 1) || (userInfo.M3 >= 1) || (userInfo.M4 >= 1) || 
            (userInfo.M5 >= 1) || (userInfo.M6 >= 1) || (userInfo.M7 >= 1) || (userInfo.M8 >= 1) ||
            (userInfo.M9 >= 1) || (userInfo.M10 >= 1) || (userInfo.M11 >= 1) || (userInfo.M12 >= 1) ||
            (userInfo.M13 >= 1) || (userInfo.M14 >= 1) || (userInfo.M15 >= 1) || (userInfo.M16 >= 1)) {
                await fetch("https://mining-empire-backend.vercel.app/tg/rewardForCompletedTask", {
                    method: "POST",
                    headers: {"Content-Type": "application/json;charset=utf-8"},
                    body: JSON.stringify({ 
                        UserID: tg.initDataUnsafe.user.id, 
                        taskID: "2_2"
                    }) 
                });

            userInfo.task2_2 = "true";
            await sleep(1500); 
            document.getElementById("task_reward_img_lightning").src = "images/lightning.png";
            document.getElementById("task_reward").innerText = "+500 kH/s";
            completed_task_info_board();
            document.getElementById("loading_animation_2_2").style.display = "none";
            document.getElementById("task_completed_2-2").style.display = "inline";
            await sleep(1000); 
            await tasks();
            updateMiningPower();
        } else {
            await sleep(1000); 
            unfulfilled_task_info_board();
            document.getElementById("loading_animation_2_2").style.display = "none";
            document.getElementById("go_to_task_img_2-2").style.display = "inline";
        }
    }
}

//ТЕЛЕГРАМ-ПРЕМИУМ
async function quest_telegram_premium(){
    if (userInfo.task2_3 === "false") {
        document.getElementById("go_to_task_img_2-3").style.display = "none";
        document.getElementById("loading_animation_2_3").style.display = "inline";
        await sleep(1000); 

        const telegram_premium_account = tg.initDataUnsafe.user.isPremium;

        if (telegram_premium_account === true){
            await fetch("https://mining-empire-backend.vercel.app/tg/rewardForCompletedTask", {
                method: "POST",
                headers: {"Content-Type": "application/json;charset=utf-8"},
                body: JSON.stringify({ 
                    UserID: tg.initDataUnsafe.user.id, 
                    taskID: "2_3"
                }) 
            });

            userInfo.task2_3 = "true";
            await sleep(1500); 
            document.getElementById("task_reward_img_lightning").src = "images/lightning.png";
            document.getElementById("task_reward").innerText = "+250 kH/s";
            completed_task_info_board();
            document.getElementById("loading_animation_2_3").style.display = "none";
            document.getElementById("task_completed_2-3").style.display = "inline";
            await sleep(1000); 
            await tasks();
            updateMiningPower();
        } else {
            await sleep(1000); 
            unfulfilled_task_info_board();
            document.getElementById("loading_animation_2_3").style.display = "none";
            document.getElementById("go_to_task_img_2-3").style.display = "inline";
        }
    }    
}

//ПОДПИСАТЬСЯ НА ТЕЛЕГРАМ КАНАЛ
async function quest_subscribe_telegram_channel_mining_empire() {
    if (userInfo.task3_1 === "false") {
        document.getElementById("go_to_task_img_3-1").style.display = "none";
        document.getElementById("loading_animation_3_1").style.display = "inline";
        await sleep(1000); 

        open_telegram_channel();
        await sleep(7500); 

        const response = await fetch("https://mining-empire-backend.vercel.app/tg/checkingChannelSubscription", {
            method: "POST",
            headers: {"Content-Type": "application/json;charset=utf-8"},
            body: JSON.stringify({ 
                UserID: tg.initDataUnsafe.user.id, 
                channelUsername: '@MiningEmpire_official_channel'
            }) 
        });

        const data = await response.json();
    
        if (data.isSubscribed) {
            await fetch("https://mining-empire-backend.vercel.app/tg/rewardForCompletedTask", {
                method: "POST",
                headers: {"Content-Type": "application/json;charset=utf-8"},
                body: JSON.stringify({ 
                    UserID: tg.initDataUnsafe.user.id, 
                    taskID: "3_1"
                }) 
            });

            userInfo.task3_1 = "true";
            await sleep(1500); 
            document.getElementById("task_reward_img_lightning").src = "images/lightning.png";
            document.getElementById("task_reward").innerText = "+100 kH/s";
            completed_task_info_board();
            document.getElementById("loading_animation_3_1").style.display = "none";
            document.getElementById("task_completed_3-1").style.display = "inline";
            await sleep(1000); 
            await tasks();
            updateMiningPower();
        } else {
            await sleep(1000); 
            unfulfilled_task_info_board();
            document.getElementById("loading_animation_3_1").style.display = "none";
            document.getElementById("go_to_task_img_3-1").style.display = "inline";
        }
    }
}


//ПРОГОЛОСОВАТЬ ЗА КАНАЛ
async function quest_boost_mining_empire_channel() {
    document.getElementById("text_in_notification_info_board").innerText = "Задание временно не доступно!";
    notification_info_board();
}

//ЗАДАЧИ НА ПРИГЛАШЕНИЕ ДРУЗЕЙ
async function quest_ivite_1_friend() {
    if (userInfo.task4_1 === "false") {
        document.getElementById("count_friends1").style.display = "none";
        document.getElementById("loading_animation_4_1").style.display = "inline";
        await sleep(1000); 

        if (count_friends >= 1) {
            await fetch("https://mining-empire-backend.vercel.app/tg/rewardForCompletedTask", {
                method: "POST",
                headers: {"Content-Type": "application/json;charset=utf-8"},
                body: JSON.stringify({ 
                    UserID: tg.initDataUnsafe.user.id, 
                    taskID: "4_1"
                }) 
            });

            userInfo.task4_1 = "true";
            await sleep(1500); 
            document.getElementById("task_reward_img_lightning").src = "images/lightning4.png";
            document.getElementById("task_reward").innerText = "+0.5%";
            completed_task_info_board();
            document.getElementById("loading_animation_4_1").style.display = "none";
            document.getElementById("task_completed_4-1").style.display = "inline";
            await sleep(1000); 
            await tasks();
            updateMiningPower();
        } else {
            await sleep(1000); 
            unfulfilled_task_info_board();
            document.getElementById("loading_animation_4_1").style.display = "none";
            document.getElementById("count_friends1").style.display = "inline";
        }
    }
}


async function quest_ivite_5_friends() {
    if (userInfo.task4_2 === "false") {
        document.getElementById("count_friends2").style.display = "none";
        document.getElementById("loading_animation_4_2").style.display = "inline";
        await sleep(1000); 

        if (count_friends >= 5) {
            await fetch("https://mining-empire-backend.vercel.app/tg/rewardForCompletedTask", {
                method: "POST",
                headers: {"Content-Type": "application/json;charset=utf-8"},
                body: JSON.stringify({ 
                    UserID: tg.initDataUnsafe.user.id, 
                    taskID: "4_2"
                }) 
            });

            userInfo.task4_2 = "true";
            await sleep(1500); 
            document.getElementById("task_reward_img_lightning").src = "images/lightning4.png";
            document.getElementById("task_reward").innerText = "+1.5%";
            completed_task_info_board();
            document.getElementById("loading_animation_4_2").style.display = "none";
            document.getElementById("task_completed_4-2").style.display = "inline";
            await sleep(1000); 
            await tasks();
            updateMiningPower();
        } else {
            await sleep(1000); 
            unfulfilled_task_info_board();
            document.getElementById("loading_animation_4_2").style.display = "none";
            document.getElementById("count_friends2").style.display = "inline";
        }
    }
}


async function quest_ivite_15_friends() {
    if (userInfo.task4_3 === "false") {
        document.getElementById("count_friends3").style.display = "none";
        document.getElementById("loading_animation_4_3").style.display = "inline";
        await sleep(1000); 

        if (count_friends >= 15) {
            await fetch("https://mining-empire-backend.vercel.app/tg/rewardForCompletedTask", {
                method: "POST",
                headers: {"Content-Type": "application/json;charset=utf-8"},
                body: JSON.stringify({ 
                    UserID: tg.initDataUnsafe.user.id, 
                    taskID: "4_3"
                }) 
            });

            userInfo.task4_3 = "true";
            await sleep(1500); 
            document.getElementById("task_reward_img_lightning").src = "images/lightning4.png";
            document.getElementById("task_reward").innerText = "+3%";
            completed_task_info_board();
            document.getElementById("loading_animation_4_3").style.display = "none";
            document.getElementById("task_completed_4-3").style.display = "inline";
            await sleep(1000); 
            await tasks();
            updateMiningPower();
        } else {
            await sleep(1000); 
            unfulfilled_task_info_board();
            document.getElementById("loading_animation_4_3").style.display = "none";
            document.getElementById("count_friends3").style.display = "inline";
        }
    }
}


async function quest_ivite_50_friends() {
    if (userInfo.task4_4 === "false") {
        document.getElementById("count_friends4").style.display = "none";
        document.getElementById("loading_animation_4_4").style.display = "inline";
        await sleep(1000); 

        if (count_friends >= 50) {
            await fetch("https://mining-empire-backend.vercel.app/tg/rewardForCompletedTask", {
                method: "POST",
                headers: {"Content-Type": "application/json;charset=utf-8"},
                body: JSON.stringify({ 
                    UserID: tg.initDataUnsafe.user.id, 
                    taskID: "4_4"
                }) 
            });

            userInfo.task4_4 = "true";
            await sleep(1500);
            document.getElementById("task_reward_img_lightning").src = "images/lightning4.png";
            document.getElementById("task_reward").innerText = "+5%";
            completed_task_info_board(); 
            document.getElementById("loading_animation_4_4").style.display = "none";
            document.getElementById("task_completed_4-4").style.display = "inline";
            await sleep(1000); 
            await tasks();
            updateMiningPower();
        } else {
            await sleep(1000);
            unfulfilled_task_info_board(); 
            document.getElementById("loading_animation_4_4").style.display = "none";
            document.getElementById("count_friends4").style.display = "inline";
        }
    }
}


async function quest_ivite_150_friends() {
    if (userInfo.task4_5 === "false") {
        document.getElementById("count_friends5").style.display = "none";
        document.getElementById("loading_animation_4_5").style.display = "inline";
        await sleep(1000); 

        if (count_friends >= 150) {
            await fetch("https://mining-empire-backend.vercel.app/tg/rewardForCompletedTask", {
                method: "POST",
                headers: {"Content-Type": "application/json;charset=utf-8"},
                body: JSON.stringify({ 
                    UserID: tg.initDataUnsafe.user.id, 
                    taskID: "4_5"
                }) 
            });

            userInfo.task4_5 = "true";
            await sleep(1500); 
            document.getElementById("task_reward_img_lightning").src = "images/lightning4.png";
            document.getElementById("task_reward").innerText = "+10%";
            completed_task_info_board();
            document.getElementById("loading_animation_4_5").style.display = "none";
            document.getElementById("task_completed_4-5").style.display = "inline";
            await sleep(1000); 
            await tasks();
            updateMiningPower();
        } else {
            await sleep(1000); 
            unfulfilled_task_info_board();
            document.getElementById("loading_animation_4_5").style.display = "none";
            document.getElementById("count_friends5").style.display = "inline";
        }
    }
}

async function quest_ivite_500_friends() {
    if (userInfo.task4_6 === "false") {
        document.getElementById("count_friends6").style.display = "none";
        document.getElementById("loading_animation_4_6").style.display = "inline";
        await sleep(1000); 

        if (count_friends >= 500) {
            await fetch("https://mining-empire-backend.vercel.app/tg/rewardForCompletedTask", {
                method: "POST",
                headers: {"Content-Type": "application/json;charset=utf-8"},
                body: JSON.stringify({ 
                    UserID: tg.initDataUnsafe.user.id, 
                    taskID: "4_6"
                }) 
            });

            userInfo.task4_6 = "true";
            await sleep(1500); 
            document.getElementById("task_reward_img_lightning").src = "images/lightning4.png";
            document.getElementById("task_reward").innerText = "+25%";
            completed_task_info_board();
            document.getElementById("loading_animation_4_6").style.display = "none";
            document.getElementById("task_completed_4-6").style.display = "inline";
            await sleep(1000); 
            await tasks();
            updateMiningPower();
        } else {
            await sleep(1000); 
            unfulfilled_task_info_board();
            document.getElementById("loading_animation_4_6").style.display = "none";
            document.getElementById("count_friends6").style.display = "inline";
        }
    }
}

