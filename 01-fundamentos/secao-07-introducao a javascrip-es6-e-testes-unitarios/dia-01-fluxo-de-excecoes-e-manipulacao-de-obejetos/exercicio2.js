const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.

const customerInfo = (order) => {
  const pessoaDelivery = order.order.delivery.deliveryPerson;
  const cliente = order.name;
  const telefone = order.phoneNumber;
  const endereco = order.address.street;
  const numero = order.address.number;
  const nAp = order.address.apartment;
  
  console.log(`Olá ${pessoaDelivery}, entrega para: ${cliente}, Telefone: ${telefone}, ${endereco}, Nº: ${numero}, AP: ${nAp}`);
};

customerInfo(order);

// Complete a função orderModifier() para que seu retorno seja similar a 'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
// Modifique o nome da pessoa compradora para Luiz Silva;
// Modifique o valor total da compra para R$ 50,00.

const orderModifier = (order) => {
  // const cliente = ;
  const pizzas = Object.keys(order.order.pizza);
  order.name = 'Luiz Silva';
  const nome = order.name;
  const drink = order.order.drinks.coke.type;
  order.payment = 'R$ 50,00';
  const total = order.payment;
  console.log(`Olá ${nome}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é ${total}`);
};

orderModifier(order);