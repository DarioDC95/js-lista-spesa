const list = ['finocchio', 'cima di rapa', 'galbanino', 'ricotta di capra', 'parmiggiano grattuggiato', 'uova', 'frutta'];
let purchaseList = document.querySelector('.purchase-list');
let item = 0;

while (item < list.length) {

    let listItem = document.createElement('li');
    
    listItem.innerText = list[item];

    purchaseList.append(listItem);

    item++;
}