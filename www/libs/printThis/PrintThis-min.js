	(function(e){var t;e.fn.printThis=function(n){t=e.extend({},e.fn.printThis.defaults,n);var r=this instanceof jQuery?this:e(this);var i="printThis-"+(new Date).getTime();if(window.location.hostname!==document.domain&&navigator.userAgent.match(/msie/i)){var s='javascript:document.write("<head><script>document.domain=\\"'+document.domain+'\\";</script></head><body></body>")';var o=document.createElement("iframe");o.name="printIframe";o.id=i;o.className="MSIE";document.body.appendChild(o);o.src=s}else{var u=e("<iframe id='"+i+"' name='printIframe' />");u.appendTo("body")}var a=e("#"+i);if(!t.debug)a.css({position:"absolute",width:"0px",height:"0px",left:"-600px",top:"-600px"});setTimeout(function(){var n=a.contents();if(t.importCSS)e("link[rel=stylesheet]").each(function(){var t=e(this).attr("href");if(t){var r=e(this).attr("media")||"all";n.find("head").append("<link type='text/css' rel='stylesheet' href='"+t+"' media='"+r+"'>")}});if(t.pageTitle)n.find("head").append("<title>"+t.pageTitle+"</title>");if(t.loadCSS)n.find("head").append("<link type='text/css' rel='stylesheet' href='"+t.loadCSS+"'>");if(t.header)n.find("body").append(t.header);if(t.printContainer)n.find("body").append(r.outer());else r.each(function(){n.find("body").append(e(this).html())});if(t.removeInline){if(e.isFunction(e.removeAttr)){n.find("body *").removeAttr("style")}else{n.find("body *").attr("style","")}}setTimeout(function(){if(a.hasClass("MSIE")){window.frames["printIframe"].focus();n.find("head").append("<script>  window.print(); </script>")}else{a[0].contentWindow.focus();a[0].contentWindow.print()}r.trigger("done");if(!t.debug){setTimeout(function(){a.remove()},1e3)}},t.printDelay)},333)};e.fn.printThis.defaults={debug:false,importCSS:true,printContainer:true,loadCSS:"",pageTitle:"",removeInline:false,printDelay:333,header:null};jQuery.fn.outer=function(){return e(e("<div></div>").html(this.clone())).html()}})(jQuery)