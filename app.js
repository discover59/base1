angular
    .module('scheduleApp', ['firebase'])
    .controller('MainController', MainController);

function MainController($scope, $firebaseObject, $firebaseArray) {
    var vm = this;
    var ref = firebase.database().ref().child("profiles");
    // Pass the Firebase reference to $firebaseObject directly
    var obj = $firebaseObject(ref);
    var arrayObj = $firebaseArray(ref);

    vm.reset = reset;
    // arrayObj.$add : add object to list
    // ref.set : save object to the database

    load();

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

    function load() {
        // connect to firebase
        var ref = firebase.database().ref().child("profiles");

        // sync as object
        var syncObject = $firebaseObject(ref);

        // three way data binding
        syncObject.$bindTo($scope, "days");
    }
}