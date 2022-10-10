"use strict";

let container = document.createElement('div');
container.id = 'container';
document.body.append(container);

for(let i = 1; i <= 100; i++){
    showTimeout(i);
};

function showTimeout(i){
    setTimeout(function (){
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.append(`Cell ${i}`)
        container.append(cell);
        cell.innerHTML = `<div class="cell-inner">${i}</div>`;
        if((i % 3 == 0) && (i % 5 == 0)){
            cell.innerHTML = `<div class="cell-inner">FIZZBUZZ</div>`;
            let list = cell.classList;
            list.add('fizzbuzz');
        }
        else if(i % 3 == 0){
            cell.innerHTML = `<div class="cell-inner">FIZZ</div>`;
            let list = cell.classList;
            list.add('fizz');
        }
        else if(i % 5 == 0){
            cell.innerHTML = `<div class="cell-inner">BUZZ</div>`;
            let list = cell.classList;
            list.add('buzz');
        }
    }, 200 * i);
}