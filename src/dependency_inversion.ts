interface ApiURLInterface {
    setApiURL(api: string);
    getApiURL();
}

class developmentModule implements ApiURLInterface {

    api: string; 

    constructor(api) {
        this.setApiURL(api);
    }

    setApiURL(api) {
        this.api = api;
    }

    getApiURL() {
        return this.api;
    }
}

class productionModule implements ApiURLInterface {

    api: string; 

    constructor(api) {
        this.setApiURL(api);
    }

    setApiURL(api) {
        this.api = api
    }

    getApiURL() {
        return this.api;
    }
}


class CreateAccount {
    constructor(apiURlInterface: ApiURLInterface) {
        console.log(apiURlInterface.getApiURL());
    }
}

let accountCreation = new CreateAccount(new developmentModule("192.168.0.89"));
let accountCreation1 = new CreateAccount(new productionModule("192.56.0.89"));