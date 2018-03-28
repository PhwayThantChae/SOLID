class Patient_Type {

    name: string;
    phone: string;
    dob: string;

    constructor(name,phone,dob) {
        this.name = name;
        this.phone = phone;
        this.dob= dob;
    }

}

class Custodian_Type extends Patient_Type{

    custodian_phone: string;
    relation: string; 

    constructor(name,custodian_phone,dob,relation) {
        super(name,"",dob);
        this.custodian_phone = custodian_phone;
        this.relation = relation;
    }
}

class Doctor_Type {

    createPatientAccount(patient:Patient_Type) {
        console.log("created patient account for number")
    }
}

let doctorType = new Doctor_Type();
doctorType.createPatientAccount(new Patient_Type("hla","09776657","14/06/1998"));
doctorType.createPatientAccount(new Custodian_Type("May","0977653543","30/06/1996","child"));