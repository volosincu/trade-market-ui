
$(document).ready(function(){


    var uiService = new Service();

    $('.dropdown-toggle').dropdown();

    
    $('#dd2 li').on("click", function(){
	var n,
	    date = new Date(),
	    itemId = $(this).children(":first").attr("id");

	cfg.selec.viewby = itemId;
	$("#dd-label").text(cfg.ddLabelsViewBy[itemId]);
	
    });

    
    
    $('#dd1 li').on("click", function(){
	var n,
	    date = new Date(),
	    itemId = $(this).children(":first").attr("id");
	var last = itemId.match(/(\d+)$/g);

	if(null != last) {
	    n =parseInt(last);
	    date.setDate(date.getDate() - n);
	}else {
	    date = new Date(1970, 1, 1);
	}

	$("#dd-label").text(cfg.ddLabels[itemId]);

	uiService.async(date.getTime());
	
    });



    //init get data
    var d = new Date();
    d.setDate(d.getDate()-7);
    
    uiService.async(d.getTime());
    
	  
});
