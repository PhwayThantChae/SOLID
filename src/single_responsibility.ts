class Doctor1 {

    constructor(){};

    addEncounter() {
        console.log("added encounter");
    }
    addPatient() {
        console.log("Added patient");
    }
    removePatient() {
        console.log("removed patient");
    }
}

class Patient1 {
    
    constructor(){};

    addDoctor() {
        console.log("added doctor");
    }
    removeDoctor() {
        console.log("removed doctor");
    }
}