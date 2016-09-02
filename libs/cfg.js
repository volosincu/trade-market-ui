

var cfg = (function(){

    return {

	urls : {
	    find : function(timestamp) {
		if(/localhost/g.test(location.host)){
		    return "http://localhost:8080/message?gte=" + timestamp;
		}
		return "http://icurrencyfair.herokuapp.com/message?gte=" + timestamp;
	    }
	},


	ddLabels : {
	    last7: "Last 7 days",
	    last30 : "Last 30 days",
	    last360 : "Last 360 days",
	    lastall : "All time"
	},

	ddkeys : {
	    oc: "originatingCountry",
	    ab: "amountSell",
	    as : "amountBuy"
	},


	ddLabelsViewBy : {
	    oc: "Originating Country",
	    ab: "Amount Sell",
	    as : "Amount Buy"
	},

	selec : {
	    viewby : "oc",
	    last : "last7"
	}



    }

})()
