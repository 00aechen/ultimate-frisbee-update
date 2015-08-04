app.filter('gradYear', function() {
	return function(n) {
		if (n.length != 4)
			return n;

		var num = parseInt(n);
		
		if (isNaN(num))
			return n;

		num = num.toString();

		return num.substring(2);
	}
});