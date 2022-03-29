//Main Function
class Trip {
    constructor(group) {
        this.neha = group;
    }
    showGroup() {
        return this.neha
    }
}


//Function to add Members

Trip.prototype.addMember = function (nameArray) {
    for (var i = 0; i < nameArray.length; i++) {

        //Validations
        if (nameArray[i] === "" || nameArray[i] == null) {
            console.log("Cannot fill empty name");
        }else if(nameArray.length<3){
          console.log("Atleast 3 names required");
        } else {
            this.neha.push({ name: nameArray[i], expenses: 0 })
        }
    }
    return JSON.stringify(this.neha, null, 4)
}



//Function to add Expenses

Trip.prototype.addExpenses = function (expenses) {
    for (var i = 0; i < this.neha.length; i++) {
        this.neha[i].expenses = expenses
    }
    return JSON.stringify(this.neha, null, 4)
}



//Function to show final output  
Trip.prototype.showSplitData = function () {
    var result = [];
    var group = this.neha;
    for (var i = 0; i < group.length; i++) {
        var { name, expenses } = this.neha[i];
        result.push({ [name]: expenses })
    }
    return JSON.stringify(result, null, 4)
}







// Create Trip Group
const createTrip = new Trip([])
var trip = createTrip.showGroup();
console.log(trip);


// Add 3 members to group
var trip = createTrip.addMember(["Priya", "Sakshi", "Astha"])
console.log("Added members to the group =", trip);


//Adding expenses
var trip = createTrip.addExpenses(30)
console.log("Added 30 rs to the group with same members =", trip);

// Final output
var trip = createTrip.showSplitData()
console.log("Final Output =", trip);













