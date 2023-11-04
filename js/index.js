function getId(id) {
    return document.getElementById(id);
}

function getValue(id) {
    return Number(document.getElementById(id).value);
}

//?  Start lesson 1
getId('btn1').onclick = function () {
    var oneSalaryDay = getValue('salary');
    var countDay = getValue('day');

    if (oneSalaryDay == "" || isNaN(oneSalaryDay) || oneSalaryDay <= 0) {
        alert("Please provide a valid salary day");
        getId('result1').innerHTML = ''
        return;
    }

    if (countDay == "" || isNaN(countDay) || countDay <= 0) {
        alert("Please provide a valid day");
        getId('result1').innerHTML = '';
        return;
    }

    var totalSalary = 0;

    totalSalary = oneSalaryDay * countDay;

    getId('result1').innerHTML = `Tổng lương được nhận là: ${totalSalary}$`
}

// ? End lesson 1


//?  Start lesson 2
getId('btn2').onclick = function () {
    var num1 = getId('num1').value;
    var num2 = getId('num2').value;
    var num3 = getId('num3').value;
    var num4 = getId('num4').value;
    var num5 = getId('num5').value;

    function areValidStrings(...strings) {
        for (var str of strings) {
            if (str === '' || isNaN(str)) {
                return true;
            }
        }
        return false;
    }


    if (areValidStrings(num1,num2,num3,num4,num5)) {
        alert("Please provide valid number");
        getId('result2').innerHTML = '';
        return;
    }

    var medium = 0;

    medium = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) / 5;

    getId('result2').innerHTML = `Giá trị trung bình của 5 số trên là: ${medium}`
}
// ? End lesson 2


//?  Start lesson 3
getId('btn3').onclick = function () {
    var usdMoney = getValue('usd');

    if (isNaN(usdMoney) || usdMoney <= 0) {
        alert("Please provide valid number");
        getId('result3').innerHTML = '';
        return;
    }

    var vndMoney = 0;

    vndMoney = usdMoney * 23500;


    getId('result3').innerHTML = `${new Intl.NumberFormat('vn-VN').format(vndMoney)} VNĐ`;
}

// ? End lesson 3


//?  Start lesson 4
getId('btn4').onclick = function () {
    var length = getValue('length');
    var width = getValue('width');

    if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
        alert("Please provide valid number");
        getId('result4').innerHTML = '';
        return;
    }

    var chuVi = 0;
    var dienTich = 0;
    chuVi = (length + width) * 2;
    dienTich = length * width;


    getId('result4').innerHTML = `Hình chữ nhật có chu vi=${chuVi} & diện tích=${dienTich} `

}
// ? End lesson 4


//?  Start lesson 5
getId('btn5').onclick = function () {
    var num = getValue('num');
    var absNum = Math.abs(num);

    if (isNaN(absNum) || absNum < 10 || absNum > 99) {
        alert("Please provide valid number");
        getId('result5').innerHTML = '';
        return;
    }

    var sum = 0;
    sum = (absNum % 10) + Math.floor(absNum / 10);
    if (num < 0){
        sum = -sum;
    }

    getId('result5').innerHTML = `Tổng 2 ký số của số trên là ${sum}`;
}


// ? End lesson 5