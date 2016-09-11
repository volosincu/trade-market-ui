

var cfg = (function(){

    return {

	urls : {
	    find : function(timestamp) {
		return "/messages?gte=" + timestamp;
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
	    ab: "amountBuy",
	    as : "amountSell"
	},


	ddLabelsViewBy : {
	    oc: "Originating Country",
	    ab: "Amount Buy",
	    as : "Amount Sell"
	},

	selec : {
	    viewby : "oc",
	    last : "last7"
	}



    }

})()
