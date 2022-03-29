

//Another Function

var startTime=performance.now()
class Trip2 {
    constructor(group2) {
        this.neha2 = group2;
    }
    showGroup2() {
        return this.neha2
    }
}


//Function to add Members

Trip2.prototype.addMember2 = function (nameArray) {
    for (var i = 0; i < nameArray.length; i++) {

        //Validations
        if (nameArray[i] === "" || nameArray[i] == null) {
            console.log("Cannot fill empty name");
        }else if(nameArray.length<10){
         console.log("Atleast 10 names required");
        } else {
            this.neha2.push({ name: nameArray[i], expenses: 0 })
        }
    }
    return JSON.stringify(this.neha2, null, 4)
}



//Function to add Expenses

Trip2.prototype.addExpenses2 = function () {
    for (var i = 0; i < this.neha2.length; i++) {
        let randomNum =300*(Math.random())
        this.neha2[i].expenses = Math.trunc(randomNum)
    }
    return JSON.stringify(this.neha2, null, 4)
}



//Function to show final output  
Trip2.prototype.showSplitData2 = function () {
    var result = [];
    var group2 = this.neha2;
    for (var i = 0; i < group2.length; i++) {
        var { name, expenses } = this.neha2[i];
        result.push({ [name]: expenses })
    }
    return JSON.stringify(result, null, 4)
}




var endTime=performance.now()


// Create Trip2 Group2
const createTrip2 = new Trip2([])
var trip2 = createTrip2.showGroup2();
console.log(trip2);


// Add 3 members to group2
var trip2 = createTrip2.addMember2(["Priya", "Sakshi", "Astha","Shweta","Akash","Dheeraj","Kavya","Dimple","Rawat","Abhi"])
console.log("Added members to the group2 =", trip2);


//Adding expenses

var trip2 = createTrip2.addExpenses2()
console.log("Added 30 rs to the group2 with same members =", trip2);

// Final output
var trip2 = createTrip2.showSplitData2()
let totalTime=endTime-startTime
console.log("Final Output =", trip2);
console.log("Total Time=",totalTime);




























