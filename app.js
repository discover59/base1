angular
    .module('scheduleApp', ['firebase'])
    .controller('MainController', MainController);

function MainController($scope, $firebaseObject, $firebaseArray) {
    /*var ref = firebase.database().ref().child("data");
    // download the data into a local object
    var syncObject = $firebaseObject(ref);
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($scope, "data");*/

    var vm = this;
    var ref = firebase.database().ref().child("profiles");
    // Pass the Firebase reference to $firebaseObject directly
    var obj = $firebaseObject(ref);
    var arrayObj = $firebaseArray(ref);

    vm.reset = reset;
    // arrayObj.$add : add object to list
    // ref.set : save object to the database
    function reset() {
        ref.set({
            monday: {
                name: 'Monday',
                slots: {
                    0900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    }
                }
            },
            tuesday: {
                name: 'Tuesday',
                slots: {
                    0900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    }
                }
            }
        });
    }
}