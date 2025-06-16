container_window_buy = document.getElementById("container_window_buy");
window_buy = document.getElementById("window_buy");
circle = document.getElementById("circle")
x = document.getElementById("x");
hashrate = document.getElementById("hashrate")
container_hashrate = document.getElementById("container_hashrate")
lightning = document.getElementById("lightning")
miner = document.getElementById("miner");
name_miner = document.getElementById("name_miner");
mining_power = document.getElementById("mining_power")
button_buy1 = document.getElementById("button_buy1")
button_buy2 = document.getElementById("button_buy2")
buy_per_stars = document.getElementById("buy_per_stars")
img_MineCoin_window_buy = document.getElementById("img_MineCoin_window_buy")
container_buy_per_stars = document.getElementById("container_buy_per_stars")
buy_per_TON = document.getElementById("buy_per_TON")
img_TON_window_buy = document.getElementById("img_TON_window_buy")
container_buy_per_TON = document.getElementById("container_buy_per_TON")

let position = 0;
let number_miner_buy = 0;
    
async function update_miners_page() {
    CountStartMiner_id.innerText = "x"+userInfo.M1;
    CountRedMiner_id.innerText = "x"+userInfo.M2;
    CountLGC200_id.innerText = "x"+userInfo.M3;
    CountLGC450_id.innerText = "x"+userInfo.M4;
    CountLGC550_id.innerText = "x"+userInfo.M5;
    CountT100_id.innerText = "x"+userInfo.M6;
    CountT100SUPER_id.innerText = "x"+userInfo.M7;
    CountLGC800_id.innerText = "x"+userInfo.M8;
    CountLGC900_id.innerText = "x"+userInfo.M9;
    CountNeonMiner_id.innerText = "x"+userInfo.M10;
    CountHGC_A1_id.innerText = "x"+userInfo.M11;
    CountHGC_A2_id.innerText = "x"+userInfo.M12;
    CountRT_S22_id.innerText = "x"+userInfo.M13;
    CountTMiner_V1_id.innerText = "x"+userInfo.M14;
    CountTMiner_V2_id.innerText = "x"+userInfo.M15;
    CountTMiner_V3_id.innerText = "x"+userInfo.M16;

    function updateFontSizeCountMiners(elementId) {
        const textLength = document.getElementById(elementId).innerText.length;

        if (textLength === 2 || textLength === 3) {
            document.getElementById(elementId).style.fontSize = "6vw";
        } else if (textLength === 4) {
            document.getElementById(elementId).style.fontSize = "5.5vw";
        } else if (textLength === 5) {
            document.getElementById(elementId).style.fontSize = "5vw";
            document.getElementById(elementId).style.marginTop = "0.5vw";
        }
    }

    [ "CountStartMiner_id","CountRedMiner_id","CountLGC200_id",
    "CountLGC450_id","CountLGC550_id","CountT100_id",
    "CountT100SUPER_id","CountLGC800_id","CountLGC900_id","CountNeonMiner_id",
    "CountHGC_A1_id","CountHGC_A2_id","CountRT_S22_id","CountTMiner_V1_id",
    "CountTMiner_V2_id","CountTMiner_V3_id"].forEach(elementId => updateFontSizeCountMiners(elementId));

    if (userInfo.wallet_connect === "false") {
        document.getElementById("wallet_disconnect").style.display = "flex";
        document.getElementById("wallet_connect").style.display = "none";
    } if (userInfo.wallet_connect === "true") {
        document.getElementById("wallet_disconnect").style.display = "none";
        document.getElementById("wallet_connect").style.display = "flex";
    }

    await fetch("https://mining-empire-backend.vercel.app/tg/updateCountMiners", {
        method: "POST",
        headers: {"Content-Type": "application/json;charset=utf-8"},
        body: JSON.stringify({ 
            UserID: tg.initDataUnsafe.user.id, 
            userInfo: userInfo
        }) 
    });
}  

const overlayDark = document.createElement("div");
overlayDark.style.position = "fixed";
overlayDark.style.top = "0";
overlayDark.style.left = "0";
overlayDark.style.width = "100%";
overlayDark.style.height = "100%";
overlayDark.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
document.body.appendChild(overlayDark);
overlayDark.style.display = "none";

function preventDefault(e) {e.preventDefault()}
function removeScrolling() {document.addEventListener("touchmove", preventDefault, {passive: false})}
function addScrolling() {document.removeEventListener("touchmove", preventDefault, {passive: false})}

function buyMiner1() {removeScrolling(); buy_StartMiner(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}
function buyMiner2() {removeScrolling(); buy_RedMiner(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}
function buyMiner3() {removeScrolling(); buy_LGC200(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}
function buyMiner4() {removeScrolling(); buy_LGC450(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}
function buyMiner5() {removeScrolling(); buy_LGC550(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}
function buyMiner6() {removeScrolling(); buy_T100(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}
function buyMiner7() {removeScrolling(); buy_T100SUPER(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}
function buyMiner8() {removeScrolling(); buy_LGC800(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}
function buyMiner9() {removeScrolling(); buy_LGC900(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}
function buyMiner10() {removeScrolling(); buy_NeonMiner(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}
function buyMiner11() {removeScrolling(); buy_HGC_A1(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}
function buyMiner12() {removeScrolling(); buy_HGC_A2(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}
function buyMiner13() {removeScrolling(); buy_TMiner_V1(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}
function buyMiner14() {removeScrolling(); buy_RT_S22(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}
function buyMiner15() {removeScrolling(); buy_TMiner_V2(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}
function buyMiner16() {removeScrolling(); buy_TMiner_V3(), position_objects_in_window_buy(); open_window_buy(); closing_and_buy_handler()}

function open_window_buy() {
    menu.style.display = "none";
    container_window_buy.classList.remove("invisible");
    container_window_buy.classList.add("show");
    const elements = [overlayDark, window_buy, circle, x, hashrate, lightning, 
        miner, name_miner, mining_power, button_buy1, button_buy2, 
        buy_per_stars, img_MineCoin_window_buy, buy_per_TON, img_TON_window_buy];
    elements.forEach(element => {element.style.display = "inline"});
}

function close_window_buy() {
    container_window_buy.classList.remove("show");
    container_window_buy.classList.add("invisible");
    overlayDark.style.display = "none";
    menu.style.display = "inline";
}

function closing_and_buy_handler() {
    overlayDark.addEventListener("click", () => {close_window_buy(); addScrolling()});
    circle.addEventListener("click", () => {close_window_buy(); addScrolling()});
    x.addEventListener("click", () => {close_window_buy(); addScrolling()});

    button_buy1.addEventListener("click", () => {buy_miners_per_TG_stars(number_miner_buy)});
    container_buy_per_stars.addEventListener("click", () => {buy_miners_per_TG_stars(number_miner_buy)});
    button_buy2.addEventListener("click", () => {buy_miners_per_TON(number_miner_buy)});
    container_buy_per_TON.addEventListener("click", () => {buy_miners_per_TON(number_miner_buy)});
}

function position_objects_in_window_buy() {
    if (position === 1) {
        container_window_buy.style.top = "40vh";
        name_miner.style.top = "18.2vh";
        hashrate.style.top = "26vh";
        container_hashrate.style.top = "29.7vh";
        button_buy1.style.top = "37.3vh";
        button_buy2.style.top = "47.8vh";
        container_buy_per_stars.style.top = "38.8vh";
        container_buy_per_TON.style.top = "49.2vh";
    }
    else {container_window_buy.style.top = "42vh";
        name_miner.style.top = "16.2vh";
        hashrate.style.top = "24vh";
        container_hashrate.style.top = "27.7vh";
        button_buy1.style.top = "35.3vh";
        button_buy2.style.top = "45.8vh";
        container_buy_per_stars.style.top = "36.8vh";
        container_buy_per_TON.style.top = "47.2vh";
    }   
}

//Покупка за TG Stars
async function buy_miners_per_TG_stars(number_miner_buy) {
    async function request_generate_payment_link(invoiceID) {
        const response = await fetch("https://mining-empire-backend.vercel.app/tg/getInvoiceLink", {
            method: "POST",
            headers: {"Content-Type": "application/json;charset=utf-8"},
            body: JSON.stringify(invoiceID) 
        });

        const invoiceLink = await response.json();
        return invoiceLink;
    }

    invoiceLink = await request_generate_payment_link({invoiceID: "miner"+number_miner_buy});

    if (invoiceLink.success) {
        tg.openInvoice(invoiceLink.link, async (status) => {
            if (status === "paid") {
                userInfo["M"+number_miner_buy] += 1;  
                successful_payment();
            }
            else if (status === "cancelled") {
                failed_payment();
            }
        })
    }
}

//TON CONNECT
const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: "https://inquisitive-flan-7aa527.netlify.app/tonconnect-manifest.json",
    }
);

tonConnectUI.uiOptions = {twaReturnUrl: "https://t.me/MiningEmpire_bot"};

//Подключение кошелька
async function connect_wallet() {
    if (userInfo.wallet_connect === "false") {
        tonConnectUI.disconnect();
        const connectedWallet = await tonConnectUI.connectWallet();
        const wallet_address = connectedWallet.account.address;
        if (wallet_address !== "") {
            userInfo.wallet_connect = "true";
            document.getElementById("wallet_disconnect").style.display = "none";
            document.getElementById("wallet_connect").style.display = "flex";


            await fetch("https://mining-empire-backend.vercel.app/tg/updateStatusWallet", {
                method: "POST",
                headers: {"Content-Type": "application/json;charset=utf-8"},
                body: JSON.stringify({ 
                    UserID: tg.initDataUnsafe.user.id, 
                    statusWallet: true
                }) 
            });
        }
    } 
}

//Отключить кошелёк
async function disconnect_wallet() {
    if (userInfo.wallet_connect === "true") {
        userInfo.wallet_connect = "false";
        document.getElementById("wallet_disconnect").style.display = "flex";
        document.getElementById("wallet_connect").style.display = "none";

        await fetch("https://mining-empire-backend.vercel.app/tg/updateStatusWallet", {
            method: "POST",
            headers: {"Content-Type": "application/json;charset=utf-8"},
            body: JSON.stringify({ 
                UserID: tg.initDataUnsafe.user.id, 
                statusWallet: false
            }) 
        });

        await tonConnectUI.disconnect();
    } 
}


//Покупка за TON
async function buy_miners_per_TON(number_miner_buy) {
    let amount_nanoTON_sending;
    const deposit_TON_address = "UQDri2nzlX1zi8cytEnnBbL7Ubmd3xjP46ahTc2C1PjQjsZJ";
    const minerPrices = {
        1: "1000000000", 
        2: "1500000000",
        3: "2000000000",
        4: "3000000000",
        5: "4500000000",
        6: "7500000000",
        7: "12000000000",
        8: "20000000000",
        9: "30000000000",
        10: "45000000000",
        11: "62500000000",
        12: "75000000000",
        13: "100000000000",
        14: "120000000000",
        15: "150000000000",
        16: "200000000000"
    };
    
    amount_nanoTON_sending = minerPrices[number_miner_buy] 

    if (userInfo.wallet_connect === "true") {
        const transaction = {
            validUntil: Math.round(Date.now() / 1000) + 60, //60с на совершение оплаты
            messages: [{address: deposit_TON_address, amount: amount_nanoTON_sending}]
        };

        try {
            await tonConnectUI.sendTransaction(transaction);
            userInfo["M"+number_miner_buy] += 1;  
            successful_payment();
        } 
        catch (e) {failed_payment()}
    } else {connect_wallet()}
}

//Успешная оплата
async function successful_payment() {
    await updateMiningPower();
    await update_miners_page(); 
    successful_purchase_info_board(); 
    close_window_buy(); 
    addScrolling();
}

//Неудавшаяся оплата
async function failed_payment() {
    update_miners_page(); 
    error_purchase_info_board(); 
    close_window_buy(); 
    addScrolling();
}

function buy_StartMiner() {
    miner.src="images/miners/StartMiner.png";
    name_miner.innerText = "StartMiner";
    mining_power.innerText = "+1 MH/s";
    buy_per_stars.innerText = "250";
    buy_per_TON.innerText = "1";

    number_miner_buy = 1;
    position = 1; 
}

function buy_RedMiner() {
    miner.src="images/miners/RedMiner.png";
    name_miner.innerText = "RedMiner";
    mining_power.innerText = "+1.65 MH/s";
    buy_per_stars.innerText = "375";
    buy_per_TON.innerText = "1.5";

    number_miner_buy = 2;
    position = 1; 
}

function buy_LGC200() {
    miner.src="images/miners/LGC-200.png";
    name_miner.innerText = "LGC200";
    mining_power.innerText = "+2.5 MH/s";
    buy_per_stars.innerText = "500";
    buy_per_TON.innerText = "2";

    number_miner_buy = 3;
    position = 2; 
}

function buy_LGC450() {
    miner.src="images/miners/LGC-450.png";
    name_miner.innerText = "LGC450";
    mining_power.innerText = "+4 MH/s";
    buy_per_stars.innerText = "750";
    buy_per_TON.innerText = "3";

    number_miner_buy = 4;
    position = 2; 
}

function buy_LGC550() {
    miner.src="images/miners/LGC-550.png";
    name_miner.innerText = "LGC550";
    mining_power.innerText = "+6.3 MH/s";
    buy_per_stars.innerText = "1 125";
    buy_per_TON.innerText = "4.5";

    number_miner_buy = 5;
    position = 2; 
}

function buy_T100() {
    miner.src="images/miners/T100.png";
    name_miner.innerText = "T100";
    mining_power.innerText = "+11.25 MH/s";
    buy_per_stars.innerText = "1 875";
    buy_per_TON.innerText = "7.5";

    number_miner_buy = 6;
    position = 2; 
}

function buy_T100SUPER() {
    miner.src="images/miners/T100 SUPER.png";
    name_miner.innerText = "T100 SUPER";
    mining_power.innerText = "+19.25 MH/s";
    buy_per_stars.innerText = "3 000";
    buy_per_TON.innerText = "12";

    number_miner_buy = 7;
    position = 2; 
}

function buy_LGC800() {
    miner.src="images/miners/LGC-800.png";
    name_miner.innerText = "LGC800";
    mining_power.innerText = "+34 MH/s";
    buy_per_stars.innerText = "5 000";
    buy_per_TON.innerText = "20";

    number_miner_buy = 8;
    position = 2; 
}

function buy_LGC900() {
    miner.src="images/miners/LGC-900.png";
    name_miner.innerText = "LGC900";
    mining_power.innerText = "+54 MH/s";
    buy_per_stars.innerText = "7 500";
    buy_per_TON.innerText = "30";

    number_miner_buy = 9;
    position = 2; 
}

function buy_NeonMiner() {
    miner.src="images/miners/NeonMiner.png";
    name_miner.innerText = "NeonMiner";
    mining_power.innerText = "+85.5 MH/s";
    buy_per_stars.innerText = "11 250";
    buy_per_TON.innerText = "45";

    number_miner_buy = 10;
    position = 2; 
}

function buy_HGC_A1() {
    miner.src="images/miners/HGC-A1.png";
    name_miner.innerText = "HGC-A1";
    mining_power.innerText = "+125 MH/s";
    buy_per_stars.innerText = "15 625";
    buy_per_TON.innerText = "62.5";

    number_miner_buy = 11;
    position = 1; 
}

function buy_HGC_A2() {
    miner.src="images/miners/HGC-A2.png";
    name_miner.innerText = "HGC-A1";
    mining_power.innerText = "+157.5 MH/s";
    buy_per_stars.innerText = "18 750";
    buy_per_TON.innerText = "75";

    number_miner_buy = 12;
    position = 1; 
}

function buy_TMiner_V1() {
    miner.src="images/miners/TMiner V-1.png";
    name_miner.innerText = "TMiner V-1";
    mining_power.innerText = "+220 MH/s";
    buy_per_stars.innerText = "25 000";
    buy_per_TON.innerText = "100";

    number_miner_buy = 13;
    position = 2; 
}

function buy_RT_S22() {
    miner.src="images/miners/RT S22.png";
    name_miner.innerText = "RT S22";
    mining_power.innerText = "+275 MH/s";
    buy_per_stars.innerText = "30 000";
    buy_per_TON.innerText = "120";

    number_miner_buy = 14;
    position = 2; 
}

function buy_TMiner_V2() {
    miner.src="images/miners/TMiner V-2.png";
    name_miner.innerText = "TMiner V-2";
    mining_power.innerText = "+360 MH/s";
    buy_per_stars.innerText = "37 500";
    buy_per_TON.innerText = "150";

    number_miner_buy = 15;
    position = 2; 
}

function buy_TMiner_V3() {
    miner.src="images/miners/TMiner V-3.png";
    name_miner.innerText = "TMiner V-3";
    mining_power.innerText = "+500 MH/s";
    buy_per_stars.innerText = "50 000";
    buy_per_TON.innerText = "200";

    number_miner_buy = 16;
    position = 2; 
}
