interface DoctorAction {
     addEncounter();
     addPatient();
     removePatient();
}

interface PatientAction {
    addDoctor();
    removeDoctor();
}

class Doctor implements DoctorAction {

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

class Patient implements PatientAction {
    
    constructor(){};

    addDoctor() {
        console.log("added doctor");
    }
    removeDoctor() {
        console.log("removed doctor");
    }
}

let patient = new Patient();
patient.addDoctor();

let doctor = new Doctor();
doctor.addEncounter();