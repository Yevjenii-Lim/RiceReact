

export const sendOrderApi = (obj, sum) => {
  let name = obj.name;
  let number = obj.number;
  let adres = obj.adres;
  let validation = true;
  let sendingArr = [];
  
  if (name.length < 1 && number.length < 1 && adres.length < 1) {
    alert("Введите данные для доставки");
    validation = false;
  }
  if (sum === 0) {
    alert("пустая корзина");
    validation = false;
  }
  if (validation) {
    
    obj.order.forEach(i => {
        sendingArr.push({product: i.title, amount: i.amount})
    });
    let sendingObj = {
        sendingArr,
        name,
        adres,
        number,
        sum,
        stiks: {regular: obj.regularSticks, study: obj.studySticks},
        extra:{vasabi: obj.extraVas, soy: obj.extraSoy, imbir: obj.extraImbir}
    };
    alert(`cпасибо за заказ ${name}`)
    localStorage.setItem('cart', null)
    // console.log(order.order[0].title);
    console.log(sendingObj)
  }
};
