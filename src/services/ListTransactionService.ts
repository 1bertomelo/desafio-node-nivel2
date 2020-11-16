import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Balance {
    income: number;
    outcome: number;
    total: number;
}

interface ResponseDTO {
    transactions: Transaction[];
    balance: Balance;
}

class ListTransactionService {
    private transactionsRepository: TransactionsRepository;

    constructor(transactionsRepository: TransactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }

    public execute(): ResponseDTO {
        // TODO
        const allTransactions = this.transactionsRepository.all();
        const resultBalance = this.transactionsRepository.getBalance();
        const response: ResponseDTO = {
            transactions: allTransactions,
            balance: resultBalance
        }
        return response;
    }
}

export default ListTransactionService;
