

export const sendOrderApi = (order, sum) => {
  let name = order.name;
  let number = order.number;
  let adres = order.adres;
  let validation = true;
  if (name.length < 1 && number.length < 1 && adres.length < 1) {
    alert("Введите данные для доставки");
    validation = false;
  }
  if (sum === 0) {
    alert("пустая корзина");
    validation = false;
  }
  if (validation) {
    console.log(order, sum);
  }
};
