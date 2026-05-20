const request = require('supertest');
const app = require('../../src/app');
const Transaction = require('../../src/models/transactionModel');

describe('Transaction Controller', () => {
  afterEach(async () => {
    await Transaction.deleteMany({});
  });

  describe('POST /api/transactions', () => {
    it('should create a new transaction', async () => {
      const res = await request(app)
       .post('/api/transactions')
       .send({ amount: 100, type: 'credit' });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('amount', 100);
      expect(res.body).toHaveProperty('type', 'credit');
    });
  });

  describe('GET /api/transactions', () => {
    it('should get all transactions', async () => {
      await Transaction.create({ amount: 100, type: 'credit' });
      const res = await request(app).get('/api/transactions');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Array);
    });
  });

  describe('GET /api/transactions/:id', () => {
    it('should get a transaction by id', async () => {
      const transaction = await Transaction.create({ amount: 100, type: 'credit' });
      const res = await request(app).get(`/api/transactions/${transaction.id}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('_id', transaction.id.toString());
    });
  });

  describe('PUT /api/transactions/:id', () => {
    it('should update a transaction', async () => {
      const transaction = await Transaction.create({ amount: 100, type: 'credit' });
      const res = await request(app)
       .put(`/api/transactions/${transaction.id}`)
       .send({ amount: 200, type: 'debit' });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('amount', 200);
      expect(res.body).toHaveProperty('type', 'debit');
    });
  });

  describe('DELETE /api/transactions/:id', () => {
    it('should delete a transaction', async () => {
      const transaction = await Transaction.create({ amount: 100, type: 'credit' });
      const res = await request(app).delete(`/api/transactions/${transaction.id}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('_id', transaction.id.toString());
    });
  });
});