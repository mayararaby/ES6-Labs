Object.prototype[Symbol.iterator] = Iterator;

objectInstance = {
    name: "Mayar Araby",
    salary: 2000,
    age: 23
}

function Iterator() {
    let start = -1;
    let keys = Object.keys(this);
    let end = keys.length - 1;
    let that = this;
    let it = {
        next: function() {
            if (start != end) {
                start++;
                return {
                    value: [keys[start], that[keys[start]]],
                    done: false
                }
            } else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
    return it;
}

for (ele of objectInstance)
    console.log(ele);