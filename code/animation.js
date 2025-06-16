//Анимации появления майнеров
function animateVisibleElements(entries) {
    const visibleEntries = entries.filter(entry => entry.isIntersecting);

    visibleEntries.forEach((entry, index) => {
        setTimeout(() => {
            entry.target.classList.add("animate")}, index * 200)})}

const observer = new IntersectionObserver((entries) => {
    animateVisibleElements(entries)}, {threshold: 0.6});

const elements = document.querySelectorAll(".miner_container");
elements.forEach(el => {observer.observe(el)});


//Анимация для кнопки "Пригласить друга"
const invite_friends_button = document.getElementById("invite_friends");
const handleIntersection = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 1) {
                invite_friends_button.classList.add("animate")}}})};

const observer2 = new IntersectionObserver(handleIntersection, {threshold: 1});
observer2.observe(invite_friends_button);


//Сброс классов анимаций
function resetting_animations() {
    const animated_miner_Elements = document.querySelectorAll(".miner_container.animate");
    animated_miner_Elements.forEach(elements => {elements.classList.remove("animate")});

    invite_friends_button.classList.remove("animate");

    document.getElementById("copy_info_board").classList.remove("show", "close");
    document.getElementById("copy_info_board").classList.add("hidden");
    changed_section = true;

    document.getElementById("completed_task_info_board").classList.remove("show", "close");
    document.getElementById("completed_task_info_board").classList.add("hidden");
    changed_section2 = true;

    document.getElementById("unfulfilled_task_info_board").classList.remove("show", "close");
    document.getElementById("unfulfilled_task_info_board").classList.add("hidden");
    changed_section3 = true;

    document.getElementById("transaction_status_info_board").classList.remove("show", "close");
    document.getElementById("transaction_status_info_board").classList.add("hidden");
    changed_section4 = true;

    document.getElementById("notification_info_board").classList.remove("show", "close");
    document.getElementById("notification_info_board").classList.add("hidden");
    changed_section5 = true;

    document.getElementById("generate_new_block_info_board").classList.remove("show", "close");
    document.getElementById("generate_new_block_info_board").classList.add("hidden");
    changed_section6 = true;

    const infoBoards = document.querySelectorAll(".info_board");
    infoBoards.forEach((element) => {element.style.display = "none"});
}


//Анимация кирки
const pickaxe = document.getElementById("pickaxe");
animatePickaxe();

function animatePickaxe() {
    pickaxe.style.transition = "transform 1.2s ease"; 
    pickaxe.style.transform = "rotate(-80deg)"; 

    setTimeout(() => {
        pickaxe.style.transition = "transform 0.6s ease"; 
        pickaxe.style.transform = "rotate(-5deg)"; 
    }, 1200); 
}

setInterval(animatePickaxe, 2400);


//Копирование реф.ссылки в буфер обмена и воспроизведение анимации инфо-блока скопированной ссылки
function copy_ref_link() {
    if (request===true) {return}
    if (window.getComputedStyle(document.getElementById("copy_info_board")).opacity == 0) {
        changed_section = false;
        navigator.clipboard.writeText(referal_link);
        document.getElementById("copy_info_board").style.display = "flex";
        document.getElementById("copy_info_board").classList.remove("show", "close");
        document.getElementById("copy_info_board").classList.add("show");
        setTimeout(delete_class_copy_info_board, 3000);
        setTimeout(resert_request, 3000);
    }
}

function delete_class_copy_info_board() {
    if (changed_section === false) {
        document.getElementById("copy_info_board").classList.remove("show", "close");
        document.getElementById("copy_info_board").classList.add("close");
        request=true;
    }
}

function resert_request() {request=false}


//Анимация о выполненном задании
function completed_task_info_board() {
    if (request2===true) {return}
    if (window.getComputedStyle(document.getElementById("completed_task_info_board")).opacity == 0) {
        changed_section2 = false;
        document.getElementById("completed_task_info_board").style.display = "flex";
        document.getElementById("completed_task_info_board").classList.remove("show", "close");
        document.getElementById("completed_task_info_board").classList.add("show");
        setTimeout(delete_class_completed_task_info_board, 3000);
        setTimeout(resert_request2, 3000);
    }
}


function delete_class_completed_task_info_board() {
    if (changed_section2 === false) {
        document.getElementById("completed_task_info_board").classList.remove("show", "close");
        document.getElementById("completed_task_info_board").classList.add("close");
        request2=true;
    }
}

function resert_request2() {request2=false}


// Анимация о невыполненном задании
function unfulfilled_task_info_board() {
    if (request3===true) {return}
    if (window.getComputedStyle(document.getElementById("unfulfilled_task_info_board")).opacity == 0) {
        changed_section3 = false;
        document.getElementById("unfulfilled_task_info_board").style.display = "flex";
        document.getElementById("unfulfilled_task_info_board").classList.remove("show", "close");
        document.getElementById("unfulfilled_task_info_board").classList.add("show");
        setTimeout(delete_class_unfulfilled_task_info_board, 3000);
        setTimeout(resert_request3, 3000);
    }
}


function delete_class_unfulfilled_task_info_board() {
    if (changed_section3 === false) {
        document.getElementById("unfulfilled_task_info_board").classList.remove("show", "close");
        document.getElementById("unfulfilled_task_info_board").classList.add("close");
        request3=true;
    }
}

function resert_request3() {request3=false}


//Успешная покупка
function successful_purchase_info_board() {
    document.getElementById("transaction_status_icon").src = "images/check_mark.png";
    document.getElementById("transaction_status_icon").style.width = "8vw";
    document.getElementById("transaction_status_icon").style.top = "3vw";
    document.getElementById("transaction_status_icon").style.left = "4vw";
    document.getElementById("text_payment_status").innerText = "Успешная покупка!";
    document.getElementById("transaction_status_info_board").style.background = "linear-gradient(to bottom, #00e340, #00c738)";
    status_transaction_info_board();
}

//Ошибка при покупке
function error_purchase_info_board() {
    document.getElementById("transaction_status_icon").src = "images/x.png";
    document.getElementById("transaction_status_icon").style.width = "6.5vw";
    document.getElementById("transaction_status_icon").style.top = "3.75vw";
    document.getElementById("transaction_status_icon").style.left = "5vw";
    document.getElementById("text_payment_status").innerText = "Ошибка во время оплаты";
    document.getElementById("transaction_status_info_board").style.background = "linear-gradient(to bottom, #c24242, #b6110b)";
    status_transaction_info_board();
}

//Инфо-блок о статусе покупки
function status_transaction_info_board() {
    if (request4===true) {return}
    if (window.getComputedStyle(document.getElementById("transaction_status_info_board")).opacity == 0) {
        changed_section4 = false;
        document.getElementById("transaction_status_info_board").style.display = "flex";
        document.getElementById("transaction_status_info_board").classList.remove("show", "close");
        document.getElementById("transaction_status_info_board").classList.add("show");
        setTimeout(delete_class_status_transaction_info_board, 3000);
        setTimeout(resert_request4, 3000);
    }
}


function delete_class_status_transaction_info_board() {
    if (changed_section4 === false) {
        document.getElementById("transaction_status_info_board").classList.remove("show", "close");
        document.getElementById("transaction_status_info_board").classList.add("close");
        request4=true;
    }
}

function resert_request4() {request4=false}


// Оповещающий инфо-блок
function notification_info_board() {
    if (request5===true) {return}
    if (window.getComputedStyle(document.getElementById("notification_info_board")).opacity == 0) {
        changed_section5 = false;
        document.getElementById("notification_info_board").style.display = "flex";
        document.getElementById("notification_info_board").classList.remove("show", "close");
        document.getElementById("notification_info_board").classList.add("show");
        setTimeout(delete_class_notification_info_board, 3000);
        setTimeout(resert_request5, 3000);
    }
}


function delete_class_notification_info_board() {
    if (changed_section5 === false) {
        document.getElementById("notification_info_board").classList.remove("show", "close");
        document.getElementById("notification_info_board").classList.add("close");
        request5=true;
    }
}

function resert_request5() {request5=false}


// Оповешение о новом добытом блоке
async function generate_new_block_info_board() {
    if (request6===true) {return}
    if (window.getComputedStyle(document.getElementById("generate_new_block_info_board")).opacity == 0) {
        block_number = update_number_block();
        document.getElementById("text_in_generate_new_block_info_board").innerText = `Блок #${block_number} добыт!`;
        document.getElementById("reward_icon").src = "images/MiningEmpireCoin.png";
        await update_profit_per_block();
        document.getElementById("block_reward").innerText = profit_per_block;
        changed_section6 = false;
        document.getElementById("generate_new_block_info_board").style.display = "flex";
        document.getElementById("generate_new_block_info_board").classList.remove("show", "close");
        document.getElementById("generate_new_block_info_board").classList.add("show");
        setTimeout(delete_class_generate_new_block_info_board, 3000);
        setTimeout(resert_request6, 3000);
    }
}


function delete_class_generate_new_block_info_board() {
    if (changed_section6 === false) {
        document.getElementById("generate_new_block_info_board").classList.remove("show", "close");
        document.getElementById("generate_new_block_info_board").classList.add("close");
        request6=true;
    }
}

function resert_request6() {request6=false}
