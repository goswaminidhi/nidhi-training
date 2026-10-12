export class BankAccount{

    #balance; //private balance feild
    #transcation = [];

    constructor(owner, initialBalance = 0){
        this.owner = owner;
        this.#balance= initialBalance;
    }

    //getting the balance 
    get balance(){
        return this.#balance;
     }

     //depositing the amount
    deposit(amount){
        if(!Number.isFinite(amount)  ){
             throw new Error("Amount entered is not a number");
        }else if(amount <= 0){
            throw new Error("Invalid Amount")
        }

        this.#balance += amount;

        this.#transcation.push({
            type : "deposit",
            amount: amount,
            balanceAfter : this.#balance
        });
    } 

    //withdrwaing the amount
    withdraw(amount){
        if(!Number.isFinite(amount)  || amount <= 0 ){
             throw new Error("Invalid amount withdrawn");
        }
        if(amount > this.#balance){
            throw new Error("Insufficient funds");
        }

        this.#balance -= amount;

        this.#transcation.push({
            type : "withdraw",
            amount: amount,
            balanceAfter : this.#balance
        });
    }


    history(){
       return this.#transcation.map(transaction => ({ ...transaction }));
    }

    static transfer(from, to, amount){
        try{
            from.withdraw(amount);
            to.deposit(amount);
        }catch(error){
            throw new Error("Transfer cannot be completed!!")
        }
    }

}

class SavingsAccount extends BankAccount{
    addInterest(ratePercent){
        let interest = (super.balance * ratePercent) / 100;

        super.deposit(interest);
    }

    withdraw(amount){
        if(super.balance - amount < 1000){
            throw new Error("Cannot proceed with the request.Would go below zero.");
        }
    }
}



const a = new BankAccount("Asha", 500);
const b = new BankAccount("Ravi");
a.deposit(200);
console.log(a.balance); 
//console.log(a.withdraw(1000));
// console.log(a.deposit(-5)); 
try{
    a.balance = 99999;         
}catch(error){
    console.log(a.balance);
}

BankAccount.transfer(a, b, 300);   
console.log(a.balance); // 400
console.log(b.balance); // 300

a.history().push("hack");  
console.log(a.history().length);


 const s = new SavingsAccount("Meena", 5000);
s.addInterest(10);         
console.log(s.balance);   // 5500
console.log(s.withdraw(4600));   
