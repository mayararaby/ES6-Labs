let objectInstance = {
    name: "Mayar araby",
    age: 23,
    address: "Elhoria.St"
}
var handler = {
    get: function(target, prop) {
        if (!(prop in target)) {
            throw (`Undefined ${prop}`);
        }

        return target[prop];
    },
    set: function(target, prop, value) {
        if (prop === "name") {
            if (value.length != 7) {
                throw ("value should has 7 characters");
            }
            if ((typeof value) != "string")
                throw ("You have to enter string value");

        }
        if (prop === "address") {
            if ((typeof value) != "string")
                throw ("You have to enter string value");
        }
        if (prop == "age") {
            if ((typeof value) != "number")
                throw ("You have to enter a numerical value");

            if (value <= 25 && value >= 60)
                throw ("You have to enter a value between 25 and 60");
        }
        target[prop] = value;
    }
}
let proxyInstance = new Proxy(objectInstance, handler);
proxyInstance.age = 30;
proxyInstance.name = "Mayarar";
proxyInstance.address = "mohammed Farg ,St.";