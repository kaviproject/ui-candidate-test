     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
        debugger;
         if(typeof(str) === 'string') {
            // split string to character array, reveverse array and join elements to string
            return str.split('').reverse().join('');
         } else {
            return null;
         }
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         if(Array.isArray(values) && values.length  && (typeof(values[0]) === 'number')) {
            return Math.min.apply(null, values);
         } else {
            return null;
         }
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
        var uniqueArray = null;
        if(Array.isArray(values) && values.length && (typeof(values[0]) === 'number')) {
            uniqueArray = [];
            for(var idx = 0; idx < values.length; idx++) {
                if(uniqueArray.indexOf(values[idx]) < 0) {
                    uniqueArray.push(values[idx]);
                }
            }
        } 
        return uniqueArray;
     }
     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
        for(var num = 1; num < 101; num++) {
            var output = '';

            if(!(num % 3)) {
                output = 'Fizz';
            }

            if(!(num % 5)) {
                output = output + 'Buzz';
            }

            if(output) {
                console.log(output);
            }
        }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         if(Array.isArray(fruits) && Array.isArray(fruitsToRemove) && fruits.length && (typeof(fruits[0]) === 'string') && (typeof(fruits[0]) === typeof(fruitsToRemove[0]))) {
            for(var idx = 0; idx < fruitsToRemove.length; idx++) { 

                var searchFruit = fruitsToRemove[idx];
                // Find indices of a given fruit in master array
                var jdx = fruits.indexOf(searchFruit);
                while (jdx != -1) {
                  fruits.splice(jdx, 1);
                  jdx = fruits.indexOf(searchFruit, jdx);
                } 
            }
           return fruits; 
         } else {
           return null;
         }
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         if(typeof(array) === typeof(toPush)) {
            return Array.prototype.push.apply(array, toPush);
         } else {
            return array.push(toPush);
         }
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         var result = null;
         if(typeof(sourceStr) === 'string') {
            result = sourceStr.split(',');
         }
         return result;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
        var result = 0;
        for (var idx = 0; idx < arguments.length; idx++) {
            result += parseInt(arguments[idx]);
        }
        return result;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         if((typeof(sourceStr) === 'string') && (sourceStr.length === 1)) {
            return sourceStr.match(/\s/g).length ? true : false;
         }
         return false;
     }


     // write an example of a javascript closure
      function BankAccount(bankAccountNum, balance) {
        var that = this;
        var _bankAccountNum = bankAccountNum;
        var _balance = balance;
        // _balance property is never exposed to client directly, 
        return function deposit(balance) {
            _balance = _balance + balance;
        }
     }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     // Person 
    function Person(first, last, city, state, zip, home, work, mobile) {
        this['first name'] = first;
        this['last name'] = last;
        this['city'] = city;
        this['state'] = state;
        this['zip'] = zip;
        this['phone'] = {};
        this.phone['home'] = home;
        this.phone['work'] = work;
        this.phone['mobile'] = mobile;
    }

    person = new Person('k', 'a', 'v', 'i', 't', 'h', 'a', 'p');
    people = new Array();
    people.push(person);
    people.push(person);
    JSON.stringify(people);

     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');
     // Not complete
    function DataTable() {
        var rows = new Array();
        var cols = new Array();
    }
    
    DataTable.prototype.addrows = function() {
        this.rows.push('a');
    }

    DataTable.prototype.addCols = function() {
        this.cols.push('b');
    }

$( document ).ready(function() {
    // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
   debugger;

   var data = {
    'firstname': 'kavitha',
    'lastname': 'parupati'
}

var selectedMethod = $('<select id ="dropdown"/>');
for(var val in data) {
    $('<option />', {value: val, text: data[val]}).appendTo(selectedMethod);
}

selectedMethod.appendTo('body');
 $("body").append("<input type='button' id='field' value = 'submit' />");

$('#field').click(function(event){
    debugger;
       console.log($('#dropdown option:selected').text()+' '+$('#dropdown option:selected').val());
    
       
   })
  /*  var options = { '1': 'One', '2': 'Two'};
    var s=$('#div1').append('<select></select>').attr('id', 'customSelect');
    $.each(options, function(key, val) {
    // $('#customSelect').append($('<option></option>').attr('value', key).text(val));
    $('#customSelect').append($('<option></option>').attr('value', key).text(val));
    });
    $('<button></button>').attr('id', 'showOption').text('Click Me').appendTo('#div1');
    $('#showOption').click(function(event){
        console.log($('#customSelect option:selected').val() + '  ' + $('#customSelect option:selected').text());
    });*/

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     debugger;
     //first Method
     console.log($('.link').text());
     //second method
     $('#fizz a').click(function(event) {
        console.log(event.target.text);
     });
     //Third Method
    console.log($('.link').html());
    //Fourth Method
    console.log($('a').html());
    //console.log(document.getElementByClassName('link')[0].innerHTML);
    //Fifth Method
    console.log($('a:first').html());

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     for(var idx = 0; idx < 5; idx++) {
        $('<li></li>').attr('id', 'item').text(idx).appendTo('#list1');
     }

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     for(var idx = 0; idx < 5; idx++) {
        $('#foobar').append('<label><input type="checkbox" />Check</label>');
    }
    $('#foobar').append('<a href="#" class="action" id="check"> Check </a>');
    $('#foobar').append('<a href="#" class="action" id="uncheck"> Un Check </a>');
    $('.action').click(function(event){
        if(event.target.id === 'check') {
            $('[type = checkbox]').prop('checked', true);
        } else {
             $('[type = checkbox]').prop('checked', false);
        }
    });
});
     