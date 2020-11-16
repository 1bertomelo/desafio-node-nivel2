import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import { response } from 'express';

interface Request {
  title: string;

  value: number;

  type: 'income' | 'outcome';

}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    const resultBalance = this.transactionsRepository.getBalance();
    if (type === 'outcome' && value > resultBalance.total) {
      throw Error("outcome cannot be greater than income");
    }

    const newTransaction = this.transactionsRepository.create({ title, value, type });

    return newTransaction;
  }
}

export default CreateTransactionService;
