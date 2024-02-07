class client{

  constructor(name, spentForAllTTime){
    if (name && Number(spentForAllTTime)){
      this.name = name;
      this.spentForAllTTime = Number(spentForAllTTime);
    };
  }

  spendNow(amount){
    let discountAmount = 0;
    this.spentForAllTTime += amount;
    if ( this.spentForAllTTime > 100 && this.spentForAllTTime <= 300){
      discountAmount = 10;
    } else {
      if ( this.spentForAllTTime > 300 && this.spentForAllTTime <= 500){
        discountAmount = 20;
      } else {
        if ( this.spentForAllTTime > 500){
          discountAmount = 30;
        };
      };
    };
    alert(`Вам предоставляется скидка в ${discountAmount}%`);
    alert(`Спасибо, ${this.name}. К оплате ${amount - (amount*discountAmount/100)}$, всего потрачено ${this.spentForAllTTime}$`);
  }
  
}

const clientName = prompt('Введите имя клиента');
const clientSpent = +prompt('Сколько клиент потратил за все время?');
const clientSpendNow = +prompt('Сколько клиент потратил сегодня?');
if (typeof(clientSpent) == NaN || typeof(clientSpendNow) == NaN) {
  alert('Сумма, которую клиент потратил за сегодня, и сумма, которую клиент потратил за все время, должна быть числом! Обновите страницу и повторите попытку!');
} else {
  let client1 = new client(clientName, clientSpent);
  client1.spendNow(clientSpendNow);
}

