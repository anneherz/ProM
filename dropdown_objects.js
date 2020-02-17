$("#persname").hide()
$("#title").hide()


keys=[["object_type","Type","#bsd1-container"],["object_subtype","Subtype","#bsd2-container"],["object_location","Location","#bsd3-container"],["object_provenance","Provenance","#bsd4-container"],["object_material","Material","#bsd5-container"]]

function BasicMenu(var1, par1="", par2="", par3="") {
    obj=par1;

    $.each(keys, function(index) {
	console.log(keys[index][0]) 
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
    w2ui.layout.content('main', var2);
    
};

function SelectionMenu(var1,par1,par2)
{
       
    obj=par1;
    $("#selectionresult").appendTo("#header")
    $( "<p id='object_types' style='opacity:0.3; font-size:18px;'>Object type:<br></p>" ).appendTo("#header")
    $( "<p id='object_subtypes' style='opacity:0.3; font-size:18px;'>Object sub-type:<br></p>" ).appendTo("#header")
    $( "<p id='object_locations' style='opacity:0.3; font-size:18px;'>Object location:<br></p>" ).appendTo("#header")
    $( "<p id='object_provenances' style='opacity:0.3; font-size:18px;'>Object provenance:<br></p>" ).appendTo("#header")
    $( "<p id='object_materials' style='opacity:0.3; font-size:18px;'>Object material:<br></p>" ).appendTo("#header")
    $("#selectionresult").css("opacity", "1")
    
       
    $("#container" ).on("click", ".dropdown-item", function () {
	
	var temp=$( ".dropdown-item.active" ).closest(".dropdown.show").attr("id")
	$("#selectedvalues").css("opacity","1")
	$("#selectionresult").css("opacity", "1")
	d=$( ".mt-2.mb-3" ).find('span').text()
        f=d.split('[X]').filter(function(v){return v!==''});
	$( ".mt-2.mb-3" ).hide()  
	
        selvalues = new Object()
        $("#object_types").find('strong').remove()
        $("#object_subtypes").find('strong').remove()
	$("#object_locations").find('strong').remove()
	$("#object_provenances").find('strong').remove()
	$("#object_materials").find('strong').remove()
	
	
	
	$.each(f, function(index) {

	    $.each(keys, function(index_basic) {
	
		if($.inArray($.trim(f[index]), objects[3][keys[index_basic][1]]) != -1 && "#"+temp ==  keys[index_basic][2])
		{
		    $( "#selectrules1" ).css("opacity","1")
		    $( ".mt-2.mb-3" ).hide()
		    $("#"+keys[index_basic][0]+"s").css("opacity", "1")
		    $("#"+keys[index_basic][0]).css("opacity", "1")
	       	    $("#"+keys[index_basic][0]+"s").append( "<strong>  "+f[index]+"     </strong>" );
		    selvalues[$.trim(f[index])]=keys[index_basic][0]
		}
	    }) 
	    
	    
	})
    });
};

function getDropdownObjects()
{

    $('<span class="radio" style="display:inline; position: absolute;  top:9%; margin-left:10px; font-size:30px;cursor:pointer; opacity:0" id="textfieldsearch"><h4><button id="textfieldsearch" class="btn btn-primary" style="font-size:0.75rem;">Show results</button></h4></span>').appendTo("#upper")
    $("#objec").css("opacity","1")
    $(".radio").css("opacity","1")
    var myObject = new Object();
    
  
    myObject["object_type"]=[objects[3].Type, "obj_type", "object", "type", "Select object type", "type", "#type", "#bsd1-container", "type","type"]
    myObject["object_subtype"]=[objects[3].Subtype, "obj_subtype", "object", "subtype", "Select object sub-type", "subtype", "#subtype", "#bsd2-container", "subtype","subtype"]
    myObject["object_location"]=[objects[3].Location, "obj_location", "object", "location", "Select object location", "location", "#location", "#bsd3-container", "location","loction"]
    myObject["object_provenance"]=[objects[3].Provenance, "obj_provenance", "object", "provenance", "Select object provenance", "provenance", "#provenance", "#bsd4-container", "provenance","provenance"]
    myObject["object_material"]=[objects[3].Material, "obj_material", "object", "location", "Select object material", "material", "#material", "#bsd5-container", "material","material"]
    var vars = JSON.stringify(myObject);
    var obj = jQuery.parseJSON( vars );
    
    
    $.getScript( "dist/bootstrap-select-dropdown.js", function() { 

	$.each(keys, function(index_basic) {
	$(obj[keys[index_basic][0]][6]).selectDropdown();
	$(obj[keys[index_basic][0]][7]+" .input-group .form-control").attr("placeholder", obj[keys[index_basic][0]][4]);
	$(obj[keys[index_basic][0]][7]).find('.dropdown-menu').css("z-index","12000")
	$(obj[keys[index_basic][0]][7]).css("margin-bottom","22px")
	})


    });
    
    BasicMenu("#objectsl", par1=obj, par2=0, par3="");
    DropdownMenu("#objectsl", w2ui.grid2, par1=obj);
    SelectionMenu("#objectsl", par1=obj, "grid2");
    $(".form-control").css({"border":"0px","font-size":"12px"})
    
    buttonlist=["#bsd1-button","#bsd2-button","#bsd3-button","#bsd4-button","#bsd5-button"]
    $.each(buttonlist, function(index) {

    $("#container").on("click",buttonlist[index], function() {

	$("[id*=-button]").css("opacity","0.5")
	$("#"+$(this).attr("id")).css("opacity","1")
	$(buttonlist[index]).css({position: 'relative'});
      	$(buttonlist[index]).find(".dropdown-menu.dropdown-menu-right").css({"top": "210px","left":"165px","width":"100px","position":"absolute"})
	$(buttonlist[index]).find(".dropdown-menu.dropdown-menu-right.show").css({"top": "210px","left":"165px","width":"100px","position":"absolute"})
	$(buttonlist[index]).find(".dropdown-menu.dropdown-menu-right").show()
	
    });
    });

    $("#textfieldsearch").on("click",  function () {
	$("#back").css("opacity", "1")
	v=$("#searchfields").val()
	g=w2ui["grid2"].getSearch()
	fieldsearch= [];
	$.each(g, function(index) {
	    fieldsearch.push({ field: g[index], value: v, operator: $('input:radio[name=query]:checked').val()  })
	})
	w2ui["grid2"].search(fieldsearch, 'OR');
	currentIds=w2ui["grid2"].last.searchIds;
	$( ".container" ).hide();
	w2ui['layout'].show('main', window.instant)
    })

    // SEARCH GRID
    // initalize grid
    initdata=[]
    $.each(objects[2], function( index, value_obj ) {
	initdata.push(parseInt(value_obj.recid))
    });
    
    initlist=[]
    $.each(initdata, function(index) {
	    initlist.push(w2ui['grid2'].get(initdata[index])); 
    })

    
function select(values="",par1="") {

    w2ui[par1].clear();
    w2ui[par1].add(initlist);
    $("#back").css("opacity", "1")
    $("#upper").addClass(".mt-2 mb-3")
    var search_object_type=[]
    var search_object_subtype=[]
    var search_object_location=[]
    var search_object_provenance=[]
    var search_object_material=[]
    
    $.each(values, function(index)
	   {
	       if (values[index]=="object_type") {
		   search_object_type.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="object_subtype") {
		   search_object_subtype.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="object_location") {
		   search_object_location.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="object_provenance") {
		   search_object_provenance.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="object_material") {
		   search_object_material.push({ field: values[index], value: String(index), operator: "is"  })}
	   });
    
    $( ".container" ).hide();
    w2ui['layout'].show('main', window.instant)
    
    var currentIds1=[]
    var currentIds2=[]
    var currentIds3=[]
    var currentIds4=[]
    var currentIds5=[]
    
    if (search_object_type.length>0) {
	w2ui[par1].search(search_object_type, 'OR');
	currentIds1=w2ui[par1].last.searchIds;
    }
    else {
	currentIds1=initdata
    }
    
    if (search_object_subtype.length>0) {
	w2ui[par1].search(search_object_subtype, 'OR');
	currentIds2=w2ui[par1].last.searchIds;
    }
    else {
	currentIds2=initdata
    }

    if (search_object_location.length>0) {
	w2ui[par1].search(search_object_location, 'OR');
	currentIds3=w2ui[par1].last.searchIds;
    }
    else {
	currentIds3=initdata
    }
    if (search_object_provenance.length>0) {
	w2ui[par1].search(search_object_provenance, 'OR');
	currentIds4=w2ui[par1].last.searchIds;
    }
    else {
	currentIds4=initdata
    }
    if (search_object_material.length>0) {
	w2ui[par1].search(search_object_material, 'OR');
	currentIds5=w2ui[par1].last.searchIds;
    }
    else {
	currentIds5=initdata
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
    
    common = $.grep(temp2, function(element) {
	return $.inArray(element, currentIds5 ) !== -1;
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
    select(values=selvalues,par1="grid2")
	})
}
    
