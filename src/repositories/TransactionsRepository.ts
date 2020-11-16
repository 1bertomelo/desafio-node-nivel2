import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;

  value: number;

  type: 'income' | 'outcome';

}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const totalIncome = this.transactions.reduce((accumulator, transaction) =>
      accumulator + (transaction.type === 'income' ? transaction.value : 0), 0);

    const totalOutcome = this.transactions.reduce((accumulator, transaction) =>
      accumulator + (transaction.type === 'outcome' ? transaction.value : 0), 0);

    const balance: Balance = {
      income: totalIncome,
      outcome: totalOutcome,
      total: totalIncome - totalOutcome,
    }
    return balance;

  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO
    const newTransaction = new Transaction({ title, value, type });
    this.transactions.push(newTransaction);
    return newTransaction;
  }
}

export default TransactionsRepository;
