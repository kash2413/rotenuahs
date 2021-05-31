
var TWAGORAINARTICLE=TWAGORAINARTICLE||function(){
			
	var getHTScriptElement = function(){
		var hTClass = 'pa-ht-class';
		if (document.currentScript)
			return document.currentScript;
		else {
			
			var scripts = document.getElementsByTagName('script');
			var currentHTag = 'htagpa.tech/c/retetesivedete.ro.js'; 
			var sl = scripts.length;
			for (var s=0; s<sl; s++){
				if ( (scripts[s].src.indexOf(currentHTag) !== -1) && !scripts[s].classList.contains(hTClass)){
					scripts[s].classList.add(hTClass);
					break;
				}
			}

			return scripts[s];
		}
	}
    
	var getQueryString = function(script){
		var queryString = script.src.replace(/^[^\?]+\??/,'');
		return '?'+queryString;
	}
    
	var getParameterByName = function(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, '$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		try {
			return decodeURIComponent(results[2].replace(/\+/g, ' '));
		}catch(err){
			return null;
		}
	}
            
	var getPartnerSCOfromHTUrl = function(currentScript){
		var schain = null;
		var currentHTScript = currentScript;
		var qS = getQueryString(currentHTScript);
		if (qS) schain = getParameterByName('schain',qS);
		
		return schain;

	}
			
			
	var config = {"site_name":"retetesivedete.ro","sco":{"paSellerId":"106126","paOwns":"Owned & Operated"}};

	var currentHTScript = getHTScriptElement();

	return {
		getConfig:function(){return config;},
		getPartnersSCO: function(){return getPartnerSCOfromHTUrl(currentHTScript);}
	}

}();

!function(e,t,a){var n,r=e.getElementsByTagName(t)[0];e.getElementById("pa-tag")||((n=e.createElement(t)).id="pa-tag",n.src="//aghtag.tech/libs/projectagora.min.js",r.parentNode.insertBefore(n,r))}(document,"script");
			