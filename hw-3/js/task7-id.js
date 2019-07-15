// TASK 7

// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы 
// для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод отвечающий за добавление суммы к балансу
     * Создает объект транзакции и вызывает addTransaction
     */
    deposit(amount) {
        this.balance += amount;

        this.addTransaction({
            id: this.transactions.length + 1,
            type: Transaction.DEPOSIT,
            amount,
        });
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Создает объект транзакции и вызывает addTransaction
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if(amount > this.balance){
            return alert("You can't do this");
        }
        this.addTransaction({
            id: this.transactions.length + 1,
            type: Transaction.WITHDRAW,
            amount,
        })
    },
  
    /*
     * Метод добавляющий транзацию в свойство transactions
     * Принимает объект трназкции
     */
    addTransaction(transaction) {
        this.transactions.push(transaction);
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },
  
    /*
     * Метод ищет и возвращает return
     */
    getTransactionDetails(id) {return
        for (let transaction of this.transactions){
            if(transaction.id === id) {
                return transaction;
            }
        }
    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let count = 0;
        for (let transaction of this.transactions){
            if(transaction.type === type) {
             count++;
            }
        }
        return count;
    
    } 
  };

  
   console.log(account.deposit(300));
   console.log(account.deposit(200));
   console.log(account.deposit(100));
   console.log(account.withdraw(50));
   console.log(account.withdraw(40));
   console.log(account.withdraw(30));
   console.log(account.withdraw(20));
   console.log(account.getTransactionTotal(Transaction.WITHDRAW));