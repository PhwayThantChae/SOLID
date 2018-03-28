class Account {
    constructor(){}

    createAccount(account: any){
        account.createAccount();
    }
}

class Doctor_Class {
    name: string;
    phone: string;
    dob: string;
    sama: string;

    constructor(name,phone,dob,sama) {
        this.name = name;
        this.phone = phone;
        this.dob = dob;
        this.sama= sama;
    }

    createAccount(){
        console.log("Created Doctor Account");
    }
}

class Patient_Class {

    name: string;
    phone: string;
    dob: string;

    constructor(name,phone,dob) {
        this.name = name;
        this.phone = phone;
        this.dob= dob;
    }

    createAccount(){
        console.log("Created Patient Account");
    }

}

class Custodian_Class extends Patient_Class{

    custodian_phone: string;
    relation: string; 

    constructor(name,custodian_phone,dob,relation) {
        super(name,"",dob);
        this.custodian_phone = custodian_phone;
        this.relation = relation;
    }

    createAccount(){
        console.log("Created Custodian Account");
    }
}

let account = new Account();
account.createAccount(new Doctor_Class("hla","534534","04/09/1994","535435"));
account.createAccount(new Patient_Class("hla","534534","04/09/1994"));
account.createAccount(new Custodian_Class("hla","534534","04/09/1994","child"));

