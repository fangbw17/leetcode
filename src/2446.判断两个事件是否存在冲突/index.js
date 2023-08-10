/**
 * @description: 
 * @param {[String, String]} event1
 * @param {[String, String]} event2
 * @return {Boolean}
 */
var haveConflict = function (event1, event2) {
    return !(event1[0] > event2[1] || event1[1] < event2[0])
};

console.log(haveConflict(["10:00", "11:00"], ["14:00", "15:00"]));
