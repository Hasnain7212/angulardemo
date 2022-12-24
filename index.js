var student = {
    name : "",
    type : "student"
};

var outputEl = document.getElementById('output');

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
    document.getElementById('input').addEventListener("keyup", keyup);
}

function keyup(event){
    calculateNumericoutput();
}

function calculateNumericoutput(){
    student.name = document.getElementById('input').value;

    var totalnumber = 0;
    for (let i=0; i<student.name.length; i++){
        totalnumber += student.name.charCodeAt[i];
    }

    outputEl.innerHTML = `Numeric Value Of You Name Provide will be ${totalnumber}`

}