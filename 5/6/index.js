let client= {
  name: 'Игорь',
  spentForAllTTime: 110,
  spendNow: function discount(amount){
    let discountAmount = 0;
    client.spentForAllTTime += amount;
    if ( client.spentForAllTTime > 100 && client.spentForAllTTime <= 300){
      discountAmount = 10;
    } else {
      if ( client.spentForAllTTime > 300 && client.spentForAllTTime <= 500){
        discountAmount = 20;
      } else {
        if ( client.spentForAllTTime > 500){
          discountAmount = 30;
        };
      };
    };
    alert(`Вам предоставляется скидка в ${discountAmount}%`);
    alert(`Спасибо, ${client.name}. К оплате ${amount - (amount*discountAmount/100)}$, всего потрачено ${client.spentForAllTTime}$`);
  }
};

client.spendNow(25);