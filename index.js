// CHOOSE CATEGORY TRIGGER

function overall() {
    let value = document.getElementById('category').value;
    
    if(value == "mass") {
        massLabel();


    } else if (value == "length") {
        lengthLabel()

    }else if (value == "volume") {
        volumeLabel()
}
}

// LABEL FUNCTIONS

function massLabel() {
    let unit_1 = document.getElementById('input1');
        unit_1.placeholder = "Input Kilograms here";
    
    let label_1 = document.getElementById('label1');
        label_1.innerText = "Kilograms";

    let unit_2 = document.getElementById('input2');
        unit_2.placeholder = "Input Grams here";

    let label_2 = document.getElementById('label2');
        label_2.innerText = "Grams";
}

function lengthLabel() {
    let unit_1 = document.getElementById('input1');
        unit_1.placeholder = "Input Kilometer here";
    
    let label_1 = document.getElementById('label1');
        label_1.innerText = "Kilometer";

    let unit_2 = document.getElementById('input2');
        unit_2.placeholder = "Input Meter here";

    let label_2 = document.getElementById('label2');
        label_2.innerText = "Meter";
}

function volumeLabel() {
    let unit_1 = document.getElementById('input1');
        unit_1.placeholder = "Input Liter here";
    
    let label_1 = document.getElementById('label1');
        label_1.innerText = "Liter";

    let unit_2 = document.getElementById('input2');
        unit_2.placeholder = "Input Milliliter here";

    let label_2 = document.getElementById('label2');
        label_2.innerText = "Milliliter";

}

// CONVERTION FUNCTIONS


function run1() {
    let input_1 = document.getElementById('input1').value;
    let input_2 = document.getElementById('input2');

    input_2.placeholder = input_1 * 1000;
}

function run2() {
    let input_2 = document.getElementById('input2').value;
    let input_1 = document.getElementById('input1');

    input_1.placeholder = input_2 / 1000;
}

function test() {
    let value = document.getElementById('category').value;
    
    if (value == 0) {
        alert("Please choose a category first");
    }
}

function resetInput() {
    location.reload();
}
