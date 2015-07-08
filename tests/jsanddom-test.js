/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/

test( "String Reversal Test", 3, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the reverseString function is valid
    ok( reverseString('hello'), 'olleh', 'Expected "olleh" as the result, the result was: ' + reverseString('hello world') );

    // Verify negative test case by providing invalid data type
    equal( reverseString(1234), null, 'Expected "null" as the result, the result was: ' + reverseString(1234) );
});


test( "Find Minimum In Array Test", 3, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    var input = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
    // Make sure the result from the findMinValue function is valid
    ok( findMinValue(input), -1.1, 'Expected "-1.1" as the result, the result was: ' + findMinValue(input) );

    // Verify negative test case by providing invalid data type
    input = ['a', 'b'];
    equal( findMinValue(input), null, 'Expected "null" as the result, the result was: ' + findMinValue(input) );
});


test( "Find Unique Elements In Array Test", 3, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    var input = [3, 5, 7, 3, -1, 10, 5];
    // Make sure the result from the findDistinctValues function is valid
    ok( findDistinctValues(input), [3, 5, 7, -1, 10], 'Expected "[3, 5, 7, -1, 10]" as the result, the result was: ' + findDistinctValues(input) );

    // Verify negative test case by providing invalid data type
    input = ['a', 'b'];
    equal( findDistinctValues(input), null, 'Expected "null" as the result, the result was: ' + findDistinctValues(input) );
});

test( "Run FizzBuzz Test", 1, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' ); 
});

test( "Remove Fruits In Array Test", 3, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var fruitsToRemove = ['pear', 'banana'];
	var expected = ['apple', 'orange', 'kiwi', 'plum', 'strawberry'];
    // Make sure the result from the removeFruits function is valid
    ok(removeFruits(fruits, fruitsToRemove), expected, 'Expected "{expected}" as the result, the result was: ' + removeFruits(fruits, fruitsToRemove));

    // Verify negative test case by providing invalid data type
    fruits  = ['a', 'b'];
	fruitsToRemove = [1, 2];
    equal(removeFruits(fruits, fruitsToRemove), null, 'Expected "null" as the result, the result was: ' + removeFruits(fruits, fruitsToRemove));
});

test( "Push An Element/Array to Array Test", 3, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

    var array = [1, 2, 3, 4];
	var toPush = [5, 6];
	var expected = [1, 2, 3, 4, 5, 6];
    // Make sure the result from the removeFruits function is valid
    ok(pushOntoArray(array, toPush), expected, 'Expected "{expected}" as the result, the result was: ' + pushOntoArray(array, toPush));

    // Push single element to an array
    array  = [1, 2];
	toPush = 3;
	expected = [1, 2, 3];
    ok(pushOntoArray(array, toPush), expected, 'Expected "{expected}" as the result, the result was: ' + pushOntoArray(array, toPush));
});


test( "Split An Array Using Comma Delimeter Test", 3, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 

    var input = "Hello, World";
	var expected = ['Hello', 'World'];
    // Make sure the result from the removeFruits function is valid
    ok(splitListStrUsingComma(input), expected, 'Expected' + expected + ' as the result, the result was: ' + splitListStrUsingComma(input));

    // Negative test
    equal(splitListStrUsingComma(123), null, 'Expected "null" as the result, the result was: ' + splitListStrUsingComma(input));
});

test( "Calculate Sum of Input Arguments Test", 2, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 

    // Make sure the result from the sum function is valid
    ok(sum(1, 2, 3), 6, 'Expected' + 6 + ' as the result, the result was: ' + sum(1, 2, 3));
});


test( "Is Only Whitespac Test", 3, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' ); 

    var input = " ";
	var expected = true;
    // Make sure the result from the removeFruits function is valid
    ok(isOnlyWhitespace(input), true, 'Expected' + 'true' + ' as the result, the result was: ' + isOnlyWhitespace(input));

    // Negative test
    equal(isOnlyWhitespace(123), false, 'Expected "null" as the result, the result was: ' + isOnlyWhitespace(123));
});