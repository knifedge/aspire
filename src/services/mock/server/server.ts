import {createServer} from 'miragejs';

const SPENDING_LIMIT = 5000;
const SPENT_AMOUNT = 200;
const BANK_BALANCE = 2000;

const user = {
  firstName: 'Mark',
  lastName: 'Henry',
  email: 'markhenty@aspireapp.com',
  image: 'https://img.icons8.com/stickers/100/000000/user.png',
  cardInfo: {
    name: 'Mark Henry',
    cNo: '5647-3411-2413-2020',
    cvv: 456,
    expiry: '12/25',
    isActive: true,
  },
  spendLimit: SPENDING_LIMIT,
  spendAmount: SPENT_AMOUNT,
  currentBalance: BANK_BALANCE,
};

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/user', () => {
      return {
        user,
      };
    });
  },
});
