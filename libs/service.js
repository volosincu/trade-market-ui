(function(context, $,cfg){

    
    context.Service = function (){
	
	
	this.memq = {oc : {}, as : {}, ab :{}};
	
	var self = {};
	var reloadMap = function (id, data){
	    
	    document.getElementById(id).innerHTML = "";
	    
	    $("#"+id).vectorMap({
		map: 'world_mill',
		series: {
		    regions: [{
			values: data,
			scale: ['#C8EEFF', '#0071A4'],
			normalizeFunction: 'polynomial'
		    }]
		},
		onRegionTipShow: function(e, el, code){
		    el.html(el.html()+' (GDP - '+data[code]+')');
		}
	    });

	    $("#spinner").fadeOut(1000);
	    
	};
	
	var processData = function (a){
	    
	    this.memq = {oc : {}, as : {}, ab :{}};
	    var l = a.length, country;
	    while(l--){
		
		country = a[l][cfg.ddkeys["oc"]];
		
		if(!this.memq.oc[country]){
		    this.memq.oc[country] = 1;
		    this.memq.as[country] = a[l][cfg.ddkeys["as"]];
		    this.memq.ab[country] = a[l][cfg.ddkeys["ab"]];
		}else {
		    this.memq.oc[country] += 1
		    this.memq.as[country] += a[l][cfg.ddkeys["as"]];
		    this.memq.ab[country] += a[l][cfg.ddkeys["ab"]];
		}
		
	    }
	    
	    return this.memq;
	};

	var done = function(a){
	    $("#spinner").show();
	    self.reloadMap('world-map-gdp', self.processData(a)[cfg.selec.viewby]);
	}
	
	
	self.reloadMap = reloadMap.bind(this);
	self.processData = processData.bind(this);
	self.done = done.bind(this);
	
	return {
	    async : function(timestamp){
	
		$.ajax({
		    url: cfg.urls.find(timestamp),
		    method: "GET",
		    dataType: "json"
		}).done(self.done)
		    .fail(function(a) {
			console.log(a );
		    });
		
	    },

	    

	    
	}	
    };
    
    

})(window, jQuery, cfg);
