
$("#persname").hide()
$("#objectsl").hide()
$("#selectpopup_engl").append($("#main_content_tit_engl"))
$("#selectpopup_orig").append($("#main_content_tit_orig"))
alphabet_engl = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'L1', 'M1', 'N1', 'O1', 'P1', 'Q1', 'R1', 'S1', 'T1', 'V1', 'W1']
alphabet_orig = ['B2', 'D2', 'F2', 'H2', 'J2', 'K2', 'M2', 'N2', 'O2', 'P2', 'Q2', 'R2', 'S2', 'T2', 'W2', 'X2']

$.each(alphabet_orig, function(index) {
    $("#main_content_orig ul").append('<li id="Beta'+alphabet_orig[index].replace(/\d+/g, '')+'" class="limenu" style="margin-right:10px"><a id="beta'+alphabet_orig[index].replace(/\d+/g, '')+'" href="#" style="color:black; font-size:13px">'+alphabet_orig[index].replace(/\d+/g, '')+'</a></li>');

})

$.each(alphabet_engl, function(index) {
    $("#main_content_engl ul").append('<li id="Alpha'+alphabet_engl[index].replace(/\d+/g, '')+'" class="limenu" style="margin-right:10px"><a id="alpha'+alphabet_engl[index].replace(/\d+/g, '')+'" href="#" style="color:black; font-size:13px">'+alphabet_engl[index].replace(/\d+/g, '')+'</a></li>');
})

keys=[["gott_kult","Gods and other Authorities","#bsd39-container"],["region","Toponyms","#bsd40-container"],["ad_sec","Administrative Institution","#bsd41-container"],["field2","Field of Profession","#bsd42-container"],["field3","Field of Specialization","#bsd43-container"],["field5","Profession","#bsd44-container"],["field4","Gender","#bsd45-container"]]
function deselect(e) {
  $('.pop').slideFadeToggle(function() {
    e.removeClass('selected');
  });    
}

$(function() {
  $('#contact').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
    }
    return false;
  });

  $('.close').on('click', function() {
    deselect($('#contact'));
    return false;
  });
});

$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};

function BasicMenu(var1, par1="", par2="", par3="") {
    obj=par1;

    //TITLE TRANSLIT
    $.each(alphabet_orig, function(index) {
	
	c=$("<div class=\"form-group\" id="+obj[alphabet_orig[index]][1]+"><div id="+obj[alphabet_orig[index]][2]+"><h6 id="+obj[alphabet_orig[index]][3]+"></h6></div></div>")
	var data=obj[alphabet_orig[index]][0];
	var s = $("<select id="+obj[alphabet_orig[index]][5]+" class=\"form-control\" multiple/>");
	for(var val in data) {
	    $("<option/>", {value: data[val], text: data[val]}).appendTo(s);
	}
	
	c.appendTo("#container")
	if (index==0) {
	    $("#main_content_orig").appendTo("#container")
	}
	s.appendTo(var1);
    });  
    

    //TITLE ENGLISCH
    $.each(alphabet_engl, function(index) {
	
	c=$("<div class=\"form-group\" id="+obj[alphabet_engl[index]][1]+"><div id="+obj[alphabet_engl[index]][2]+"><h6 id="+obj[alphabet_engl[index]][3]+"></h6></div></div>")
	var data=obj[alphabet_engl[index]][0];
	var s = $("<select id="+obj[alphabet_engl[index]][5]+" class=\"form-control\" multiple/>");
	for(var val in data) {
	    $("<option/>", {value: data[val], text: data[val]}).appendTo(s);
	}
	c.appendTo("#container")
	if (index==0) {
	    $("#main_content_engl").appendTo("#container")
	}
	s.appendTo(var1);
     });

    $.each(keys, function(index) {
	
	c=$("<div class=\"form-group\" id="+obj[keys[index][0]][1]+"><div id="+obj[keys[index][0]][2]+"><h6 id="+obj[keys[index][0]][3]+"></h6></div></div>")
	var data=obj[keys[index][0]][0];
	var s = $("<select id="+obj[keys[index][0]][5]+" class=\"form-control\" multiple/>");
	for(var val in data) {
	    $("<option/>", {value: data[val], text: data[val]}).appendTo(s);
	}
	c.appendTo("#container")
	$("#main_content_orig").appendTo("#container")
	s.appendTo(var1);
    })
};
    
function DropdownMenu(var1, var2, par1)
{
    obj=par1;
    
    $("div.dropdown-menu.dropdown-menu-right.show" ).appendTo("#main_container")

    $("#msall").hide()
    $(var1).css("opacity", "1")
	    
    $("#moreoptions").css("opacity", "0")
    w2ui.layout.content('main', var2);
    
};
var currentAlpha="";
var currentBeta="";

function SelectionMenu(var1,par1,par2)
{
    obj=par1;
    $("#selectionresult").appendTo("#header")
    $( "<p id='titles_translits' style='opacity:0.3; font-size:18px;'>Titles:<br></p>" ).appendTo("#header")
    $( "<p id='titles_translat_engs' style='opacity:0.3; font-size:18px;'>Translation:<br></p>" ).appendTo("#header")
    $( "<p id='gott_kults' style='opacity:0.3; font-size:18px;'>Gods and other Authorities :<br></p>" ).appendTo("#header")
    $( "<p id='regions' style='opacity:0.3; font-size:18px;'>Toponyms:<br></p>" ).appendTo("#header")
    $( "<p id='ad_secs' style='opacity:0.3; font-size:18px;'>Administrative Institution:<br></p>" ).appendTo("#header")
    $( "<p id='field2s' style='opacity:0.3; font-size:18px;'>Field of Profession:<br></p>" ).appendTo("#header")
    $( "<p id='field3s' style='opacity:0.3; font-size:18px;'>Field of Specialization:<br></p>" ).appendTo("#header")
    $( "<p id='field5s' style='opacity:0.3; font-size:18px;'>Profession:<br></p>" ).appendTo("#header")
    $( "<p id='field4s' style='opacity:0.3; font-size:18px;'>Gender:<br></p>" ).appendTo("#header")
    $("#selectionresult").css("opacity", "1")

    uniquetitlelist_engl=[]
    $.each(alphabet_engl, function(index) {
        uniquetitlelist_engl.push(titles[3]["Translation"][alphabet_engl[index].replace(/\d+/g, '')])
    })
    uniquetitlelist_orig=[]
    $.each(alphabet_orig, function(index) {	       
        uniquetitlelist_orig.push(titles[3]["Title"][alphabet_orig[index].replace(/\d+/g, '')])
    })

    $("#container" ).on("click", ".dropdown-item", function () {

	if (currentAlpha == "") {
	    currentAlpha="A"
	}
	
	if (currentBeta == "") {
	    currentBeta="B"
	}

	var temp=$( ".dropdown-item.active" ).closest(".dropdown.show").attr("id")
	$("#selectedvalues").css("opacity","1")
	$("#selectionresult").css("opacity", "1")
	d=$( ".mt-2.mb-3" ).find('span').text()
        f=d.split('[X]').filter(function(v){return v!==''});
	$( ".mt-2.mb-3" ).hide()  
	
        selvalues = new Object()
	$("#titles_translat_engs").find('strong').remove()
	$("#titles_translits").find('strong').remove()
        $("#gott_kults").find('strong').remove()
	$("#regions").find('strong').remove()
	$("#ad_secs").find('strong').remove()
	$("#field2s").find('strong').remove()
	$("#field3s").find('strong').remove()
	$("#field5s").find('strong').remove()
	$("#field4s").find('strong').remove()
	
	$.each(f, function(index) {
	    $.each(keys, function(index_basic) {
		if($.inArray($.trim(f[index]), titles[3][keys[index_basic][1]]) != -1 && "#"+temp ==  keys[index_basic][2])
		
		{
		    $( "#selectrules1" ).css("opacity","1")
		    $( ".mt-2.mb-3" ).hide()  
		    $("#"+keys[index_basic][0]+"s").css("opacity", "1")
	       	    $("#"+keys[index_basic][0]+"s").append( "<strong>  "+f[index]+"     </strong>" );
		    selvalues[$.trim(f[index])]=keys[index_basic][0]
		}
	    }) 
	    
	    if($.inArray($.trim(f[index]), uniquetitlelist_engl.flat()) != -1)
	    {
		$("#titles_translat_engs").css("opacity", "1")
		$("#titles_translat_engs").append( "<strong>  "+f[index]+"     </strong>" );
		var seen = {};
		$('#titles_translat_engs').find('strong').each(function() {
		    var txt = $(this).text();
		    if (seen[txt])
			$(this).remove();
		    else
			seen[txt] = true;
		});
		selvalues[$.trim(f[index])]="titles_translat_eng";
	    }
	    if($.inArray($.trim(f[index]), uniquetitlelist_orig.flat()) != -1)
	    {
		$("#titles_translits").css("opacity", "1")
		$("#titles_translits").append( "<strong>  "+f[index]+"     </strong>" );
		var seen = {};
		$('#titles_translits').find('strong').each(function() {
		    var txt = $(this).text();
		    if (seen[txt])
			$(this).remove();
		    else
			seen[txt] = true;
		});
		selvalues[$.trim(f[index])]="titles_translit";
	    }
	})
    });
    currentAlpha=""
    currentBeta=""
};

function getDropdownTitles()
{

    $('<span class="radio" style="display:inline; position: absolute;  top:9%; margin-left:10px; font-size:30px;cursor:pointer; opacity:0" id="textfieldsearch"><h4><button id="textfieldsearch" class="btn btn-primary" style="font-size:0.75rem;">Show results</button></h4></span>').appendTo("#upper")

    //Titelanzeige (englisch)
    $("[id^=Alpha]").css("background-color","white")
    currentAlpha="A";
    containerlistengl=["#bsd1-container"]
    $("#main_content_engl").css("z-index","112000")
    $("#main_content_engl").css("position", "absolute")

    $("#main_content_engl").on("click", "[id^=alpha]", function () {
	
	$("[id^=alpha]").css("color","black")
	$("[id^=alpha]").css("font-size","15px")
        currentAlpha=$(this).attr("id").replace('alpha','').replace(/\d+/g, '');
	$("#"+$(this).attr("id")).css("color","#007bff")
	$("#"+$(this).attr("id")).css("font-size","18px")
	var data=[titles[3]["Title"][$(this).text()][0]];
	
        str=containerlistengl.pop()
	$(str).hide()
	
        $(obj[$(this).text()+"1"][7]).show()
	
	$("#main_content_engl").show();
	$(obj[$(this).text()+"1"][7]).find(".dropdown-menu.dropdown-menu-right").css({"top":"0","right":"-20px","position":"absolute"}).show();
	containerlistengl.push(obj[$(this).text()+"1"][7]) 
	return currentAlpha;
    });

    //Titelanzeige (original)
    $("[id^=Beta]").css("background-color","white")
    currentBeta="B";
    containerlistorig=["#bsd23-container"]
    $("#main_content_orig").css("z-index","112000")
    $("#main_content_orig").css("position", "absolute")
    $("#main_content_orig").on("click", "[id^=beta]", function () {
      
	$("[id^=beta]").css("color","black")
	$("[id^=beta]").css("font-size","15px")
        currentBeta=$(this).attr("id").replace('beta','').replace(/\d+/g, '');
	$("#"+$(this).attr("id")).css("color","#007bff")
	$("#"+$(this).attr("id")).css("font-size","18px")
	
	var data=[titles[3]["Translation"][$(this).text()][0]];
	str=containerlistorig.pop()
	$(str).hide()
        $(obj[$(this).text()+"2"][7]).show()
	
	$("#main_content_orig").show();
	
        $(obj[$(this).text()+"2"][7]).find(".dropdown-menu.dropdown-menu-right").css({"top":"0","right":"-20px","position":"absolute"}).show();
	
        containerlistorig.push(obj[$(this).text()+"2"][7]) 
	return currentBeta;
    });
    
    english_container=[]
    name_container=[]
    
    $("#objec").css("opacity","1")
    $(".radio").css("opacity","1")
    var myObject = new Object();
    
    $.each(alphabet_engl, function(index) {
	myObject[alphabet_engl[index]] = [titles[3]["Translation"][alphabet_engl[index].replace(/\d+/g, '')], "titles_translat_eng", "title", "titles_translat_eng", "Select translation beginning with "+alphabet_engl[index].replace(/\d+/g, ''),alphabet_engl[index] , "#"+alphabet_engl[index],"#bsd"+String(index+1)+"-container", "titles_translat_eng","titles_translat_eng"];
	english_container.push("bsd"+String(index+1)+"-button") 
    })
    var i=Object.keys(myObject).length
    $.each(alphabet_orig, function(index) {
	myObject[alphabet_orig[index]] = [titles[3]["Title"][alphabet_orig[index].replace(/\d+/g, '')], "titles_translit", "title", "titles_translit", "Select title beginning with "+alphabet_orig[index].replace(/\d+/g, ''),alphabet_orig[index] , "#"+alphabet_orig[index],"#bsd"+String(index+i+1)+"-container", "titles_translit","titles_translit"];
	name_container.push("bsd"+String(index+i+1)+"-button") 
    })
    myObject["gott_kult"]=[titles[3]["Gods and other Authorities"], "gott_kult", "title", "gott_kult", "Select Gods and other Autorities", "gott_kult", "#gott_kult", "#bsd39-container", "gott_kult","gott_kult"]
    myObject["region"]=[titles[3]["Toponyms"], "region", "title", "region", "Select Toponyms", "region", "#region", "#bsd40-container", "region","region"]
    myObject["ad_sec"]=[titles[3]["Administrative Institution"], "ad_sec", "title", "ad_sec", "Select Administrative Institution", "ad_sec", "#ad_sec", "#bsd41-container", "ad_sec","ad_sec"]
    myObject["field2"]=[titles[3]["Field of Profession"], "field2", "title", "field2", "Select Field of Profession", "field2", "#field2", "#bsd42-container", "field2","field2"]
    myObject["field3"]=[titles[3]["Field of Specialization"], "field3", "title", "field3", "Select Field of Specialization", "field3", "#field3", "#bsd43-container", "field3","field3"]
    myObject["field5"]=[titles[3]["Profession"], "field5", "title", "field5", "Select Profession", "field5", "#field5", "#bsd44-container", "field5","field44"]
    myObject["field4"]=[titles[3]["Gender"], "field4", "title", "field4", "Select Gender", "field4", "#field4", "#bsd45-container", "field4","field45"]
    
    var vars = JSON.stringify(myObject);
    var obj = jQuery.parseJSON( vars );
    
    
    $.getScript( "dist/bootstrap-select-dropdown.js", function() { 

	$.each(alphabet_engl, function(index) {
	    $(obj[alphabet_engl[index]][6]).selectDropdown();
	    $(obj[alphabet_engl[index]][7]+" .input-group .form-control").attr("placeholder", obj[alphabet_engl[index]][4]);
	    $(obj[alphabet_engl[index]][7]).find('.dropdown-menu').css("z-index","12000")
	    $(obj[alphabet_engl[index]][7]).css("margin-bottom","22px")
	    if (index==0){$(obj[alphabet_engl[index]][7]).show()}
	    else {$(obj[alphabet_engl[index]][7]).hide()}
	});

	$.each(alphabet_orig, function(index) {
	    $(obj[alphabet_orig[index]][6]).selectDropdown();
	    $(obj[alphabet_orig[index]][7]+" .input-group .form-control").attr("placeholder", obj[alphabet_orig[index]][4]);
	    $(obj[alphabet_orig[index]][7]).find('.dropdown-menu').css("z-index","12000")
	    $(obj[alphabet_orig[index]][7]).css("margin-bottom","22px")
	    if (index==0){$(obj[alphabet_orig[index]][7]).show()}
	    else {$(obj[alphabet_orig[index]][7]).hide()}
	});
	
	$.each(keys, function(index_basic) {
	$(obj[keys[index_basic][0]][6]).selectDropdown();
	$(obj[keys[index_basic][0]][7]+" .input-group .form-control").attr("placeholder", obj[keys[index_basic][0]][4]);
	$(obj[keys[index_basic][0]][7]).find('.dropdown-menu').css("z-index","12000")
	$(obj[keys[index_basic][0]][7]).css("margin-bottom","22px")
	})
    });
    
    BasicMenu("#title", par1=obj, par2=0, par3="");
    DropdownMenu("#title", w2ui.grid3, par1=obj);
    SelectionMenu("#title", par1=obj, "grid3");
    $(".form-control").css({"border":"0px","font-size":"12px"})
    $("#selectpopup").append($("#main_content_engl"))
    $("#selectpopup").append($("#main_content_orig"))
    
    $("#container").on("click","[id*=-button]", function() {
	$("[id*=-button]").css("opacity","0.5")
	$("#"+$(this).attr("id")).css("opacity","1")
	if($.inArray($(this).attr("id"), english_container) != -1) {
	    
	    $("#main_content_engl").show();
	    $("#main_content_id").hide();
	    $("#main_content_orig").hide();
	    v="#"+$(this).attr("id")
	    $("[id*=-button]").find(".dropdown-menu.dropdown-menu-right").hide();
	    $(v).find(".dropdown-menu.dropdown-menu-right").show();
	}
	
	if($.inArray($(this).attr("id"), name_container) != -1) {
	    
	    $("#main_content_orig").show();
	    $("#main_content_engl").hide();
	    $("#main_content_id").hide();
	    v="#"+$(this).attr("id")
	    $("[id*=-button]").find(".dropdown-menu.dropdown-menu-right").hide();
	    $(v).find(".dropdown-menu.dropdown-menu-right").show();
	}
    });
    buttonlist=["#bsd39-button","#bsd40-button","#bsd41-button","#bsd42-button","#bsd43-button","#bsd44-button","#bsd45-button"]
    $.each(buttonlist, function(index) {
	$("#container").on("click",buttonlist[index], function() {

	$(buttonlist[index]).css({position: 'relative'});
      	$(buttonlist[index]).find(".dropdown-menu.dropdown-menu-right").css({"top": "210px","left":"165px","width":"100px","position":"absolute"})
	    $(buttonlist[index]).find(".dropdown-menu.dropdown-menu-right.show").css({"top": "210px","left":"165px","width":"100px","position":"absolute"})
	    $(buttonlist[index]).find(".dropdown-menu.dropdown-menu-right").show()
	    
    });
    });

    $("#textfieldsearch").on("click",  function () {
	$("#back").css("opacity", "1")
	v=$("#searchfields").val()
	g=w2ui["grid3"].getSearch()
	fieldsearch= [];
	$.each(g, function(index) {
	    fieldsearch.push({ field: g[index], value: v, operator: $('input:radio[name=query]:checked').val()  })
	})
	w2ui["grid3"].search(fieldsearch, 'OR');
	currentIds=w2ui["grid3"].last.searchIds;
	$( ".container" ).hide();
	w2ui['layout'].show('main', window.instant)
    })
    
    // SEARCH GRID
    // initalize grid
    initdata=[]
    $.each(titles[2], function( index, value_tit ) {
	initdata.push(parseInt(value_tit.recid))
    });
    
    initlist=[]
    $.each(initdata, function(index) {
	    initlist.push(w2ui['grid3'].get(initdata[index])); 
    })

    
function select(values="",par1="") {

    w2ui[par1].clear();
    w2ui[par1].add(initlist);
    $("#back").css("opacity", "1")
    $("#upper").addClass(".mt-2 mb-3")
    var search_title_translat_eng=[]
    var search_title_translit=[]
    var search_title_gott=[]
    var search_title_region=[]
    var search_title_ad_sec=[]
    var search_title_field2=[]
    var search_title_field3=[]
    var search_title_field5=[]
    var search_title_field4=[]
    
    $.each(values, function(index)
	   {

	       if (values[index]=="titles_translat_eng") {
		   search_title_translat_eng.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="titles_translit") {
		   search_title_translit.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="gott_kult") {
		   search_title_gott.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="region") {
		   search_title_region.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="ad_sec") {
		   search_title_ad_sec.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="field2") {
		   search_title_field2.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="field3") {
		   search_title_field3.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="field5") {
		   search_title_field5.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="field4") {
		   search_title_field4.push({ field: values[index], value: String(index), operator: "is"  })}
	   });
    
    $( ".container" ).hide();
    w2ui['layout'].show('main', window.instant)
    
    var currentIds1=[]
    var currentIds2=[]
    var currentIds3=[]
    var currentIds4=[]
    var currentIds5=[]
    var currentIds6=[]
    var currentIds7=[]
    var currentIds8=[]
    var currentIds9=[]
    
    if (search_title_gott.length>0) {
	w2ui[par1].search(search_title_gott, 'OR');
	currentIds1=w2ui[par1].last.searchIds;
    }
    else {
	currentIds1=initdata
    }
    
    if (search_title_region.length>0) {
	w2ui[par1].search(search_title_region, 'OR');
	currentIds2=w2ui[par1].last.searchIds;
    }
    else {
	currentIds2=initdata
    }

    if (search_title_ad_sec.length>0) {
	w2ui[par1].search(search_title_ad_sec, 'OR');
	currentIds3=w2ui[par1].last.searchIds;
    }
    else {
	currentIds3=initdata
    }
    if (search_title_field2.length>0) {
	w2ui[par1].search(search_title_field2, 'OR');
	currentIds4=w2ui[par1].last.searchIds;
    }
    else {
	currentIds4=initdata
    }
    if (search_title_field3.length>0) {
	w2ui[par1].search(search_title_field3, 'OR');
	currentIds5=w2ui[par1].last.searchIds;
    }
    else {
	currentIds5=initdata
    }
    if (search_title_field5.length>0) {
	w2ui[par1].search(search_title_field5, 'OR');
	currentIds6=w2ui[par1].last.searchIds;
    }
    else {
	currentIds6=initdata
    }
    if (search_title_field4.length>0) {
	w2ui[par1].search(search_title_field4, 'OR');
	currentIds7=w2ui[par1].last.searchIds;
    }
    else {
	currentIds7=initdata
    }
    if (search_title_translat_eng.length>0) {
	w2ui[par1].search(search_title_translat_eng, 'OR');
	currentIds8=w2ui[par1].last.searchIds;
    }
    else {
	currentIds8=initdata
    }
    if (search_title_translit.length>0) {
	w2ui[par1].search(search_title_translit, 'OR');
	currentIds9=w2ui[par1].last.searchIds;
    }
    else {
	currentIds9=initdata
    }
    // AND SELECTION
	
    var common=""
    
    temp0 = $.grep(currentIds1, function(element) {
	return $.inArray(element, currentIds2 ) !== -1;
    });
    
    temp1 = $.grep(temp0, function(element) {
	return $.inArray(element, currentIds3 ) !== -1;
    });

    temp2 = $.grep(temp1, function(element) {
	return $.inArray(element, currentIds4 ) !== -1;
    });

    temp3 = $.grep(temp2, function(element) {
	return $.inArray(element, currentIds5 ) !== -1;
    });
    
    temp4 = $.grep(temp3, function(element) {
	return $.inArray(element, currentIds6 ) !== -1;
    });
    
    temp5 = $.grep(temp4, function(element) {
	return $.inArray(element, currentIds7 ) !== -1;
    });
    
    temp6 = $.grep(temp5, function(element) {
	return $.inArray(element, currentIds8 ) !== -1;
    });

    common = $.grep(temp4, function(element) {
	return $.inArray(element, currentIds9 ) !== -1;
	});

    var tempresult = [];
    $.each(common, function(index) {
	tempresult.push(w2ui[par1].get(common[index])); 
    });
    
    currentIds=common; //for onClick in grid.js!!
    w2ui[par1].clear();
    w2ui[par1].add(tempresult);
    
}

    //########################
    // SHOW SELECTION RESULT #
    //########################
    
    $("#selectionresult").on("click",  function () {

    $.fn.ignore = function(sel){
	return this.clone().find(sel||">*").remove().end();
    };
    file=($( ".mt-2.mb-3" ).find( "span" ).ignore("a").text());
    collection = file.split(' ');
	
    $("#w2ui-grid-box").css("height","70%")
    $("#layout_layout_panel_main").css("height","100%")
    $(".w2ui-scroll-wrapper").css("width","95%")
    select(values=selvalues,par1="grid3")
    })
}
    
