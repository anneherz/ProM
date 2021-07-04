$("#persname").hide()
$("#objectsl").hide()
keys=[["titles_translat_eng","Translation","#bsd1-container"],["titles_translit","Title","#bsd2-container"],["gott_kult","Gods and other Authorities","#bsd3-container"],["region","Toponyms","#bsd4-container"],["ad_sec","Administrative Institution","#bsd5-container"],["field2","Field of Profession","#bsd6-container"],["field3","Field of Specialization","#bsd7-container"],["field5","Profession","#bsd8-container"],["field4","Gender","#bsd9-container"]]

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
    $("<h1 style='font-size:35px; margin-left: 15px; margin-top:30px; font-weight: bold;'>Titles</h1>").appendTo("#upper")
    obj=par1;
    $.each(keys, function(index) {
        
        c=$("<div class=\"form-group\" id="+obj[keys[index][0]][1]+"><div id="+obj[keys[index][0]][2]+"><h6 id="+obj[keys[index][0]][3]+"></h6></div></div>")
        var data=obj[keys[index][0]][0];
        var s = $("<select id="+obj[keys[index][0]][5]+" class=\"form-control\" multiple/>");
        for(var val in data) {
            $("<option/>", {value: data[val], text: data[val]}).appendTo(s);
        }
        c.appendTo("#container")
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
    w2ui.layout.content('right', var2);
};

function SelectionMenu(var1,par1,par2)
{
    obj=par1;
    $("#selectionresult,#selectionresulttext, #currentselection").css("opacity", "1")
    $("#selectionresulttext").appendTo("#header")
    $( "<p id='titles_translits' style='margin-left:10px; opacity:0.3; font-size:18px;'><a id='H5'>Titles:<br></a></p>" ).appendTo("#header") //2
    $( "<p id='titles_translat_engs' style='margin-left:10px; opacity:0.3; font-size:18px;'><a id='H5'>Translation:<br></a></p>" ).appendTo("#header") //1
    $( "<p id='field2s' style='margin-left:10px; opacity:0.3; font-size:18px;'><a id='H5'>Field of Profession:<br></a></p>" ).appendTo("#header") //6
    $( "<p id='field3s' style='margin-left:10px; opacity:0.3; font-size:18px;'><a id='H5'>Field of Specialization:<br></a></p>" ).appendTo("#header") //7
    $( "<p id='field5s' style='margin-left:10px;opacity:0.3; font-size:18px;'><a id='H5'>Profession:<br></a></p>" ).appendTo("#header") //8
    $( "<p id='field4s' style='margin-left:10px; opacity:0.3; font-size:18px;'><a id='H5'>Gender:<br></a></p>" ).appendTo("#header") //9
    $( "<p id='gott_kults' style='margin-left:10px; opacity:0.3; font-size:18px;'><a id='H5'>Gods and other Authorities:<br></a></p>" ).appendTo("#header") //3
    $( "<p id='ad_secs' style='margin-left:10px; opacity:0.3; font-size:18px;'><a id='H5'>Administrative Institution:<br></a></p>" ).appendTo("#header") //5
    $( "<p id='regions' style='margin-left:10px;opacity:0.3; font-size:18px;'><a id='H5'>Toponyms:<br></a></p>" ).appendTo("#header") //4
    $("#selectionresult").css({"margin-left:10px;opacity":"1", "position":"relative", "left":"2%"})
    $("#selectionresult").appendTo("#header")
    
    $("#container" ).on("click", ".dropdown-item", function () {
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
		if($.inArray($.trim(f[index]), titles[3][keys[index_basic][1]]) != -1)
		{
		    $( "#selectrules1" ).css("opacity","1")
		    $( ".mt-2.mb-3" ).hide()  
		    $("#"+keys[index_basic][0]+"s").css("opacity", "1")
	       	    $("#"+keys[index_basic][0]+"s").append( "<strong>  "+f[index]+" - </strong>" );
		    selvalues[$.trim(f[index])]=keys[index_basic][0]
		}
	    }) 
	})
    });
};

function getDropdownTitles()
{

    $('<span class="radio" style="display:inline; position: absolute;  top:5%; margin-left:10px; font-size:30px;cursor:pointer; opacity:0" id="textfieldsearch"></span>').appendTo("#searchfield")
    $('<h4><button id="textfieldsearchtitles" class="btn btn-primary" style="margin-top:20ox; margin-left: 10px; font-size:0.85rem;">Show results</button></h4>').appendTo("#lastradio")
    english_container=[]
    name_container=[]
    
    $("#objec").css("opacity","1")
    $(".radio").css("opacity","1")
    var myObject = new Object();
    
    myObject["titles_translat_eng"]=[titles[3]["Translation"], "titles_translat_eng", "title", "titles_translat_eng", "English writing" , "trans","#trans","#bsd1-container", "titles_translat_eng","titles_translat_eng"];
    myObject["titles_translit"]=[titles[3]["Title"], "titles_translit", "title", "titles_translit", "Egyptian writing" ,"titles" , "#titles","#bsd2-container", "titles_translit","titles_translit"];
    myObject["gott_kult"]=[titles[3]["Gods and other Authorities"], "gott_kult", "title", "gott_kult", "Gods and other Autorities", "gott_kult", "#gott_kult", "#bsd3-container", "gott_kult","gott_kult"]
    myObject["region"]=[titles[3]["Toponyms"], "region", "title", "region", "Toponyms", "region", "#region", "#bsd4-container", "region","region"]
    myObject["ad_sec"]=[titles[3]["Administrative Institution"], "ad_sec", "title", "ad_sec", "Administrative Institution", "ad_sec", "#ad_sec", "#bsd5-container", "ad_sec","ad_sec"]
    myObject["field2"]=[titles[3]["Field of Profession"], "field2", "title", "field2", "Field of Profession", "field2", "#field2", "#bsd6-container", "field2","field2"]
    myObject["field3"]=[titles[3]["Field of Specialization"], "field3", "title", "field3", "Field of Specialization", "field3", "#field3", "#bsd7-container", "field3","field3"]
    myObject["field5"]=[titles[3]["Profession"], "field5", "title", "field5", "Profession", "field5", "#field5", "#bsd8-container", "field5","field44"]
    myObject["field4"]=[titles[3]["Gender"], "field4", "title", "field4", "Gender", "field4", "#field4", "#bsd9-container", "field4","field45"]
    
    var vars = JSON.stringify(myObject);
    var obj = jQuery.parseJSON( vars );
    var helpmenu=["enter Egyptian title in English writing e.g. mayor of Memphis", "enter Egyptian title in Egyptian writing e.g. H#.tj-o n.j Mn-nfr","enter gender, choose between male and female","enter god or other administrative authority as documented in Egyptian titles e.g. Ptah or king","enter administrative institution as documented in Egyptian titles e.g. temple of Ptah or temple of Ramesses II in the house of Ptah","enter toponym as documented in Egyptian titles e.g. Mennefer or Hutkaptah]","enter field of profession as documented in Egyptian titles e.g. cultic personnel or administration","enter profession as documented in Egyptian titles e.g. god’s servant or overseer of the cattle","enter professional specialization as documented in Egyptian titles e.g. priests or administration of the cattle"]

    $.getScript( "dist/bootstrap-select-dropdown.js", function() { 

	$.each(keys, function(index_basic) {
	$(obj[keys[index_basic][0]][6]).selectDropdown();
	$(obj[keys[index_basic][0]][7]+" .input-group .form-control").attr("placeholder", obj[keys[index_basic][0]][4]);
	    $(obj[keys[index_basic][0]][7]).find('.dropdown-menu').css("z-index","12000")
	    $(obj[keys[index_basic][0]][7]).find('.dropdown-menu').css("width","400px")
	    $(obj[keys[index_basic][0]][7]).append("<span title='"+helpmenu[index_basic]+"' style='cursor:pointer; position:relative; width:20px; font-size:22px; margin-left:-30px; top:-30px;'>&#9432;</span>")
	    $(obj[keys[index_basic][0]][7]).css("margin-bottom","-22px")
	    $(obj[keys[index_basic][0]][7]).find(".dropdown-item:contains('Select all')").css("font-family","italic")
	    $(obj[keys[index_basic][0]][7]).find(".dropdown-item:contains('Deselect all')").css("font-family","italic")
	    $(obj[keys[index_basic][0]][7]).find(".dropdown-item:contains('Show selected')").css("font-family","italic")
	    $(obj[keys[index_basic][0]][7]).find(".dropdown-item:contains('Clear input field')").css("font-family","italic")
	   
	})
	$(obj["titles_translit"][7]).find(".dropdown-item").css("font-family","aegypt")
	$(obj["titles_translit"][7]).find(".dropdown-item:contains('Select all')").css("font-family","italic")
	$(obj["titles_translit"][7]).find(".dropdown-item:contains('Deselect all')").css("font-family","italic")
	$(obj["titles_translit"][7]).find(".dropdown-item:contains('Show selected')").css("font-family","italic")
	$(obj["titles_translit"][7]).find(".dropdown-item:contains('Clear input field')").css("font-family","italic")
	$("#titles_translits").css("font-family","aegypt")
	$("#titles_translits").find("#H5:contains('Titles:')").css("font-family","italic")
	$("#titles_translat_engs").find("#H5:contains('Translation:')").css("font-family","italic")
	$("#gott_kults").find("#H5:contains('Gods and other Authorities:')").css("font-family","italic")
	$("#regions").find("#H5:contains('Toponyms:')").css("font-family","italic")
	$("#ad_secs").find("#H5:contains('Administrative Institution:')").css("font-family","italic")
	$("#field2s").find("#H5:contains('Field of Profession:')").css("font-family","italic")
	$("#field3s").find("#H5:contains('Field of Specialization:')").css("font-family","italic")
	$("#field5s").find("#H5:contains('Profession:')").css("font-family","italic")
	$("#field4s").find("#H5:contains('Gender:')").css("font-family","italic")
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

    });
    buttonlist=["#bsd1-button", "#bsd2-button", "#bsd3-button","#bsd4-button","#bsd5-button","#bsd6-button","#bsd7-button","#bsd8-button","#bsd9-button"]
    $.each(buttonlist, function(index) {
	$("#container").on("click",buttonlist[index], function() {

	$(buttonlist[index]).css({position: 'relative'});
      	$(buttonlist[index]).find(".dropdown-menu.dropdown-menu-right").css({"top": "210px","left":"165px","width":"100px","position":"absolute"})
	    $(buttonlist[index]).find(".dropdown-menu.dropdown-menu-right.show").css({"top": "210px","left":"165px","width":"100px","position":"absolute"})
	    $(buttonlist[index]).find(".dropdown-menu.dropdown-menu-right").show()
	    
    });
    });

    // initalize grid
    initdata=[]
    $.each(titles[2], function( index, value_tit ) {
	initdata.push(parseInt(value_tit.recid))
    });
    
    initlist=[]
    $.each(initdata, function(index) {
	    initlist.push(w2ui['grid3'].get(initdata[index])); 
    })
    
    $("#textfieldsearchtitles").on("click",  function () {


	$('#layout').show()
	w2ui["grid3"].clear();
	w2ui["grid3"].add(initlist);
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
	w2ui["layout"].show('right', w2ui.grid3);
    })
    
    // SEARCH GRID

    function select(values="",par1="") {
	
	$('#layout').show()
	w2ui['layout'].hide('main', window.instant)
	w2ui['layout'].show('right', window.instant)

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
		   f=(String(index).replace(' (god)', ''))
		   search_title_gott.push({ field: values[index], value: f, operator: "is"  })}
	       if (values[index]=="region") {
		   search_title_region.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="ad_sec") {
		   search_title_ad_sec.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="field2") {
		   search_title_field2.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="field3") {
		   search_title_field3.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="field5") {
		   f=(String(index).replace(' (prof.)', ''))
		   search_title_field5.push({ field: values[index], value: f, operator: "is"  })}
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
$("#container").css("margin-top","-420px")    
$("#filterfield").append("<span title='select one or more items of the same category e.g. English writing: overseer of the cattle, herdsman and scribe of the cattle. You can also combine several items of different categories e.g. English writing: overseer of the cattle, god or other administrative authority: Ptah and toponym: Hutkaptah to refine your search query. ' style='cursor:pointer; position:relative; width:20px; font-size:25px; margin-left:-30px; top:-35px;'>&#9432;</span>")
$("#searchfield").prepend("<span title='select a specific query e.g. id, god or toponym as documented in Egyptian titles and chose between the listed query options' style='cursor:pointer; position:relative; width:20px; font-size:25px; margin-left:-35px; top:0px;'>&#9432;</span>")
