// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array,name){
    return array.filter(function(driver){
        return driver.toLowerCase()===name.toLowerCase()
})
}

function fuzzyMatch (array,letter){
    return array.filter(function(driver){
        return driver.charAt(0)===letter
    })
}

console.log(fuzzyMatch(drivers,S))

function matchName(array,string){
    return array.filter(function(element){
        return string === element.name
    })
}

