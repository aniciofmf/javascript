/*
describe( "Narcissistic Function", function() {
  it( "should find small numbers are all narcissistic", function() {
    Test.assertEquals(narcissistic( 7 ), true, "7 is narcissistic" );
  });
  
  it( "should find these numbers are narcissistic", function() {
    Test.assertEquals(narcissistic( 371 ), true, "371 is narcissistic" );
  });
});

*/

function narcissistic(value) {
	let numbersStr = String(value);
	let sum = 0;

	for (let i = 0; i < numbersStr.length; i++) {
		sum += Math.pow(parseInt(numbersStr[i]), numbersStr.length);
	}

	return sum === value;
}

console.log(narcissistic(1652));
