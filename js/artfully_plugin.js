(function(window,document,undefined){window.artfully={},window.artfully.config={},artfully.configure=function(obj){obj!=null&&obj.store_uri!=null&&(obj.store_uri=obj.store_uri.replace("store","widget"),obj.store_uri=obj.store_uri.replace("artfullyhq.com","artful.ly")),obj!=null&&obj.base_uri!=null&&(obj.base_uri=obj.base_uri.replace("artfullyhq.com","artful.ly")),jQuery.extend(artfully.config,obj)},artfully.alert=function(msg){alert(msg)}})(this,document),artfully.config={base_uri:"https://www.artful.ly/api/v3/",store_uri:"https://www.artful.ly/widget/v3/",maxHeight:"350",resellerId:undefined,cartLock:jQuery.Deferred()},artfully.reseller=function(resellerId){if(resellerId===undefined)return artfully.config.resellerId;artfully.config.resellerId=resellerId},artfully.utils=function(){function is_mobile(){return"ontouchstart"in document.documentElement}function ticket_uri(params){var u=artfully.config.base_uri+"tickets.jsonp?callback=?";return jQuery.each(params,function(k,v){u+="&"+k+"="+v}),u}function event_uri(id){return artfully.config.base_uri+"events/"+id+".jsonp?callback=?"}function show_uri(id){return uri=artfully.config.base_uri+"shows/"+id+".jsonp?",artfully.reseller()!==undefined&&(uri+="reseller_id="+artfully.reseller()+"&"),uri+="callback=?",uri}function performance_uri(id){return artfully.config.base_uri+"performances/"+id+".jsonp?callback=?"}function order_uri(){return uri=artfully.config.store_uri+"order?reseller_id=",artfully.reseller()!==undefined&&(uri+=artfully.reseller()),uri}function donation_uri(id){return artfully.config.base_uri+"organizations/"+id+"/authorization.jsonp?callback=?"}function artfully_storefront_uri(){return artfully.config.store_uri+"store?cart[token]="+artfully.widgets.cart().token}function cart_uri(){return uri=artfully.config.base_uri+"carts?reseller_id=",artfully.reseller()!==undefined&&(uri+=artfully.reseller()),uri}function keyOnId(list){var result={};return jQuery.each(list,function(index,item){result[item.id]=item}),result}function modelize(data,model,callback){return data&&(data instanceof Array?jQuery.each(data,function(index,item){modelize(item,model,callback)}):(jQuery.extend(data,model()),callback!==undefined&&callback(data))),data}return{is_mobile:is_mobile,ticket_uri:ticket_uri,performance_uri:performance_uri,event_uri:event_uri,show_uri:show_uri,donation_uri:donation_uri,artfully_storefront_uri:artfully_storefront_uri,order_uri:order_uri,keyOnId:keyOnId,modelize:modelize,cart_uri:cart_uri}}(),artfully.widgets=function(){var artfully_event,cart,donation,widgetCache={};return modelize_ticket_type=function(ticket_types,ticket_type_model,callback){artfully.utils.modelize(ticket_types,ticket_type_model,callback)},artfully_event=function(){function prep(data){return artfully.utils.modelize(data.performances,artfully.models.performance,function(performance){artfully.utils.modelize(performance.chart,artfully.models.chart,function(chart){jQuery.each(chart.sections,function(index,section){artfully.utils.modelize(section,artfully.models.section,modelize_ticket_type(section.ticket_types,artfully.models.ticket_type))})})}),artfully.utils.modelize(data,artfully.models.artfully_event)}function render(data,dom_id){e=prep(data),e.render(jQuery(dom_id))}return widgetCache.artfully_event===undefined&&(widgetCache.artfully_event={display:function(id,target_dom_id){var dom_id=target_dom_id?target_dom_id:"#artfully-event";artfully.widgets.cart().display(),jQuery.getJSON(artfully.utils.event_uri(id),function(data){render(data,dom_id)})}}),widgetCache.artfully_event},artfully_show=function(){function prep(data){return artfully.utils.modelize(data.chart,artfully.models.chart,function(chart){jQuery.each(chart.sections,function(index,section){artfully.utils.modelize(section,artfully.models.section,modelize_ticket_type(section.ticket_types,artfully.models.ticket_type))})}),artfully.utils.modelize(data.event,artfully.models.artfully_event),artfully.utils.modelize(data,artfully.models.performance),data}function render(data,domId){var s=prep(data);s.render(jQuery(domId),!0,!0)}return widgetCache.artfully_show===undefined&&(widgetCache.artfully_show={display:function(id,targetDomId){var domId=targetDomId||"#artfully-show";artfully.widgets.cart().display(),jQuery.getJSON(artfully.utils.show_uri(id),function(data){render(data,domId)})}}),widgetCache.artfully_show},cart=function(){function hiddenFormFor(tickets,ticket_type_id){var $form=jQuery(document.createElement("form")).attr({method:"post",target:artfully.widgets.cart().$iframe.attr("name"),action:artfully.utils.order_uri()});return jQuery.each(tickets,function(i,ticket){jQuery(document.createElement("input")).attr({type:"hidden",name:"tickets[]",value:ticket.id}).appendTo($form)}),jQuery(document.createElement("input")).attr({type:"hidden",name:"ticket_type_id",value:ticket_type_id}).appendTo($form),jQuery(document.createElement("input")).attr({type:"hidden",name:"cart[token]",value:artfully.widgets.cart().token}).appendTo($form),jQuery(document.createElement("input")).attr({type:"hidden",name:"reseller_id",value:artfully.reseller()}).appendTo($form),$form.appendTo(jQuery("body"))}var internal_cart={init:function(){return this.$cart=jQuery("<div id='shopping-cart' class='hidden' />"),this.$controls=jQuery("<div id='shopping-cart-controls' />").appendTo(this.$cart),jQuery("<span class='cart-name' />").text("Shopping Cart").appendTo(this.$controls),that=this,jQuery.ajax({dataType:"jsonp",url:artfully.utils.cart_uri(),success:function(json){artfully.widgets.cart().token=json.cart.token,that.$iframe=jQuery("<iframe name='shopping-cart-iframe' />").attr("src",artfully.utils.order_uri()+"&cart[token]="+artfully.widgets.cart().token).height(artfully.config.maxHeight).hide().appendTo(that.$cart),artfully.config.cartLock.resolve()}}),this.$cart},display:function(){this.$cart.appendTo("body")},add:function(tickets,ticket_type_id){hiddenFormFor(tickets,ticket_type_id).submit().remove(),this.show(),artfully.utils.is_mobile()&&setTimeout(function(){window.location=artfully.utils.artfully_storefront_uri()},300)},show:function(){this.$cart.addClass("shown").removeClass("hidden"),this.$iframe.slideDown()},hide:function(){this.$cart.addClass("hidden").removeClass("shown"),this.$iframe.slideUp()},toggle:function(){this.$cart.hasClass("shown")?this.hide():this.show()}};return widgetCache.cart===undefined&&(internal_cart.init(),internal_cart.$controls.click(function(){cart().toggle()}),widgetCache.cart=internal_cart),widgetCache.cart},donation=function(){function prep(donation){return artfully.utils.modelize(donation,artfully.models.donation)}function authorize(donation){jQuery.getJSON(artfully.utils.donation_uri(donation.organizationId),function(data){data.authorized&&(donation.type=data.type,donation.fsp_name=data.fsp_name,artfully.config.cartLock.done(function(){donation.render(jQuery("#donation"))}))})}function render(data){var donation=prep(data);authorize(donation)}return widgetCache.donation===undefined&&(widgetCache.donation={display:function(id,donation_preset_array){donation_preset_array===undefined&&(donation_preset_array=[]);var data={organizationId:id,donationPresetArray:donation_preset_array};render(data)}}),widgetCache.donation},{event:artfully_event,show:artfully_show,cart:cart,donation:donation}}(),artfully.models=function(){var chart,section,ticket_type,performance,artfully_event,donation;return modelCache={},chart=function(){return modelCache.chart===undefined&&(modelCache.chart={render:function($target,expanded){res=this.container().appendTo($target),expanded==0&&res.hide()},container:function(){var $c=jQuery(document.createElement("ul")).addClass("ticket-types");return jQuery.each(this.sections,function(index,section){section.render($c)}),$c}}),modelCache.chart},ticket_type=function(){return modelCache.ticket_type===undefined&&(modelCache.ticket_type={render:function($t){this.$target=this.container(),this.render_info(this.$target),this.render_form(this.$target),this.$target.appendTo($t)},container:function(){return jQuery(document.createElement("li"))},render_info:function($target){jQuery(document.createElement("span")).addClass("ticket-type-name").text(this.name).appendTo($target),jQuery(document.createElement("span")).addClass("ticket-type-price").text("$"+new Number(this.price)/100).appendTo($target)},render_form:function($target){var $select,$form=jQuery(document.createElement("form")).appendTo($target),obj=this,i,available=Math.min(this.available,10);$select=jQuery(document.createElement("select")).attr({name:"ticket_count"}).addClass("ticket_count").appendTo($form);if(available>0){jQuery(document.createElement("option")).text("1 Ticket").attr("value",1).appendTo($select);for(i=2;i<=available;i++)jQuery(document.createElement("option")).text(i+" Tickets").attr("value",i).appendTo($select)}else jQuery(document.createElement("option")).text("No Tickets Available").attr("value",0).appendTo($select);jQuery(document.createElement("input")).attr("type","submit").val("Go").appendTo($form),$form.submit(function(){var params={limit:$select.val(),show_id:jQuery(this).closest(".performance").data("performance").id,ticket_type_id:obj.id,price:obj.price};return jQuery.getJSON(artfully.utils.ticket_uri(params),function(data){data!==null&&data.length>0?(data.length<$select.val()&&artfully.alert("Only "+data.length+" ticket(s) could be found for this performance."),artfully.widgets.cart().add(data,obj.id)):artfully.alert("Sorry! No tickets are available for purchase at this time.")}),!1})}}),modelCache.ticket_type},section=function(){return modelCache.section===undefined&&(modelCache.section={render:function($target,expanded){jQuery.each(this.ticket_types,function(index,ticket_type){ticket_type.render($target)}),expanded==0&&res.hide()}}),modelCache.section},performance=function(){return modelCache.performance===undefined&&(modelCache.performance={render:function(target,expanded,asRoot){var $t,performance_link;asRoot===!0?($t=target.addClass("performance"),jQuery("<h1>").addClass("event-name").text(this.event.name).appendTo($t),jQuery("<h2>").addClass("performance-datetime").text(this.show_time).appendTo($t)):($t=jQuery(document.createElement("li")).addClass("performance").appendTo(target),performance_link=jQuery(document.createElement("a")).addClass("performance-datetime").text(this.show_time).attr("href","#").appendTo($t)),$t.data("performance",this),expanded==0&&performance_link!==undefined&&performance_link.click(function(){return jQuery(this).closest(".performance").children(".ticket-types").slideToggle(),!1}),this.chart.render($t,expanded),this.$target=$t}}),modelCache.performance},artfully_event=function(){return modelCache.artfully_event===undefined&&(modelCache.artfully_event={render:function($target){$target.data("event",this),$target.append(jQuery(document.createElement("h1")).addClass("event-name").text(this.name)),this.subtitle!=null&&$target.append(jQuery(document.createElement("h2")).addClass("event-subtitle").text(this.subtitle)),this.producer!=null&&$target.append(jQuery(document.createElement("h3")).addClass("event-producer").text(this.producer)),this.render_performances($target)},render_performances:function($target){$ul=jQuery(document.createElement("ul")).addClass("performances").appendTo($target),this.performances.length==1?this.performances[0].render($ul,!0):jQuery.each(this.performances,function(index,performance){performance.render($ul,!1)})}}),modelCache.artfully_event},donation=function(){return modelCache.donation===undefined&&(modelCache.donation={message:function($key){var messages={regular:"Donate now and help support our work. Donations are tax-deductible to the extent permitted by law.",sponsored:this.fsp_name+" is a fiscally sponsored project of Fractured Atlas, a non-profit arts service organization. Contributions for the purposes of "+this.fsp_name+" must be made payable to Fractured Atlas and are tax-deductible to the extent permitted by law."};return messages[$key]||""},render:function($t){var $amountRdoArray=[],$myDiv;if(this.donationPresetArray.length>0){for(var i in this.donationPresetArray){var val=this.donationPresetArray[i];i>0&&i%5==0&&$amountRdoArray.push(jQuery(document.createElement("div")).attr({style:"clear:both"})),$myDiv=jQuery(document.createElement("div")).addClass("preset-amount"),$myDiv.append(jQuery(document.createElement("input")).attr({type:"radio","class":"presetRadio",name:"presetRadioGroup",value:val,id:"preset_id_"+val})),$myDiv.append(jQuery(document.createElement("label")).attr({"for":"preset_id_"+val}).append(document.createTextNode("$"+val))),$amountRdoArray.push($myDiv)}$myDiv=jQuery(document.createElement("div")).addClass("preset-amount"),$myDiv.append(jQuery(document.createElement("input")).attr({type:"radio","class":"presetRadio",name:"presetRadioGroup",value:"0",id:"preset_id_0"})),$myDiv.append(jQuery(document.createElement("label")).attr({"for":"preset_id_0"}).append(document.createTextNode("Other"))),$amountRdoArray.push($myDiv)}var $form=jQuery(document.createElement("form")).attr({method:"post",target:artfully.widgets.cart().$iframe.attr("name"),action:artfully.utils.order_uri()}),$producer=jQuery(document.createElement("input")).attr({type:"hidden",name:"donation[organization_id]",value:this.organizationId}),$amount=jQuery(document.createElement("input")).attr({type:"text",name:"donation[amount]"}).addClass("currency").addClass("preset_currency"),$token=jQuery(document.createElement("input")).attr({type:"hidden",name:"cart[token]",value:artfully.widgets.cart().token}),$submit=jQuery(document.createElement("input")).attr({type:"submit",value:"Make Donation"}),$notice=jQuery(document.createElement("p")).html(this.message(this.type)),orgId=this.organizationId;$form.submit(function(){artfully.widgets.cart().show(),(artfully.utils.is_mobile()||orgId=="1581")&&setTimeout(function(){window.location=artfully.utils.artfully_storefront_uri()},300)}),$notice.appendTo($t),$form.append($amountRdoArray).append($amount).append($producer).append($token).append($submit).appendTo($t),$(".presetRadio").click(function(){$(".preset_currency").val("$"+$(this).val()+".00")})}}),modelCache.donation},{chart:chart,section:section,ticket_type:ticket_type,performance:performance,artfully_event:artfully_event,donation:donation}}();
