(function(context, $,cfg){

    
    context.Service = function (){
	
			
	var self = {
	    memq : {oc : {}, as : {}, ab :{}}
	};
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
		    el.html(el.html()+' (' +cfg.ddkeys[cfg.selec.viewby] +' - '+data[code]+')');
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
	
	
	self.reloadMap = reloadMap.bind(self);
	self.processData = processData.bind(self);
	self.done = done.bind(self);
	
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

	    refreshData : function(){
		
		$("#spinner").show();
		self.reloadMap('world-map-gdp', self.memq[cfg.selec.viewby]);
		
	    }

	    

	    
	}	
    };
    
    

})(window, jQuery, cfg);
