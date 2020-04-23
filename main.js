function myFunction() {
    let switchedplan = document.getElementById("switchedplan");
    let basic = document.getElementById("myBASIC");
    let professional = document.getElementById("myProf");
    let master = document.getElementById("myMaster");

    changePrice(basic, professional, master, switchedplan)
        /*if (x.innerHTML === "$20.99") {
            x.innerHTML = "$19.99";
        } else {
            x.innerHTML = "$20.99";
        }*/


}

function changePrice(basic, professional, master, switchedplan) {

    if (switchedplan.value === "yearly") {
        basic.innerHTML = "$199.99";
        professional.innerHTML = "$249.99";
        master.innerHTML = "$399.99";
        switchedplan.value = 'monthly';

    } else if (switchedplan.value === 'monthly') {
        basic.innerHTML = "$19.99";
        professional.innerHTML = "$24.99";
        master.innerHTML = "$39.99";
        switchedplan.value = 'yearly';

    } else {
        basic.innerHTML = "$199.99";
        professional.innerHTML = "$249.99";
        master.innerHTML = "$399.99";
    }
}