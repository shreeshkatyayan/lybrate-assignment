//Setup filter
lybrateApp.filter('currencyConversion',  function() {
	
	//Create the return function, required parameter is **input**
	//Optional parameters are symbol, conversion ratio and location - true for right || false for left
		//Default currency symbol = Rs.
		//Default conversion ratio = 1
		//Default currency location = left
	return function(input, symbol, conversion, place) {
		
		//Check if input is number
		if (isNaN(input)) {
			return input;
		} else {
			var symbol = symbol || 'Rs.';
			var place = place === undefined ? false : place;
			var conversion = conversion || 1.00;
			input = input*conversion;

			//Sets the symbol in right location
			if (input == 0) {
				return "Free";
			} else {
				if(place === true) {
					return input + " " + symbol;
				} else if(place === false) {
					return symbol + " " + input;
				}
			}
		}
	}
});
lybrateApp.filter('truncate', function(){
	//Create the return function, required parameter is **input**
	//Optional parameter is limit
		//Default limit is 20
	return function(input, limit) {
		var length = input.length;
		var limit = limit || 25;
		if (length > limit + 3) {
			return input.substr(0, limit) + "...";
		} else {
			return input;
		}
	}
});