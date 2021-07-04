   
$("#title").hide()
$("#objectsl").hide()


function BasicMenu(var1, par1="", par2="", par3="") {
  
    obj=par1;
    $("<h1 style='font-size:35px; margin-left: 15px; margin-top:30px; font-weight: bold;'>Persons</h1>").appendTo("#upper")

    // NAME ORIGINAL
    var c=$("<div id="+obj["original"][2]+"><h6 id="+obj["original"][3]+"></h6></div>")
    var data=obj["original"][0];
    var s = $("<select id="+obj["original"][5]+" class=\"form-control\" multiple/>");
    for(var val in data) {
	$("<option/>", {value: data[val], text: data[val]}).appendTo(s);
    }
    c.appendTo("#container")
    s.appendTo(var1);
    
    // NAME ENGLISH
    var c=$("<div id="+obj["english"][2]+"><h6 id="+obj["english"][3]+"></h6></div>")
    var data=obj["english"][0];
    var s = $("<select id="+obj["english"][5]+" class=\"form-control\" multiple/>");
    for(var val in data) {
	$("<option/>", {value: data[val], text: data[val]}).appendTo(s);
    }
    c.appendTo("#container")
    s.appendTo(var1);
    
    
    // GENDER
    var c=$("<div id="+obj["gender"][2]+"><h6 id="+obj["gender"][3]+"></h6></div>")
    var data=obj["gender"][0];
    var s = $("<select id="+obj["gender"][5]+" class=\"form-control\" multiple/>");
    for(var val in data) {
	$("<option/>", {value: data[val], text: data[val]}).appendTo(s);
    }
    c.appendTo("#container")
    s.appendTo(var1);
    
   

    

};
    
function DropdownMenu(var1, var2, par1)
	{
            obj=par1;
	   
	    
	    $("div.dropdown-menu.dropdown-menu-right.show" ).appendTo("#main_container")
	   
	    $("#msall").hide()
	    $(var1).css("opacity", "1")
	    
	    $("#moreoptions").css("opacity", "0")
	    w2ui["layout"].content('right', var2);
   
	};



function SelectionMenu(var1,par1,par2)
    {
	obj=par1;
	$("#selectionresulttext,#selectionresult, #currentselection").css("opacity", "1")
	
	$("#selectionresulttext").appendTo("#header")
	
	$( "<p id='personen' style='margin-left:10px; opacity:0.3; font-size:18px;'><a id='H5'>Persons (english):<br></a></p>" ).appendTo("#header")
	$( "<p id='genders' style='margin-left:10px; opacity:0.3; font-size:18px;'><a id='H5'>Gender:<br></a></p>" ).appendTo("#header")
	$( "<p id='originals' style='margin-left:10px; opacity:0.3; font-size:18px;'><a id='H5'>Persons (original):<br></a></p>" ).appendTo("#header")
	$("#selectionresult").css({"margin-top:-150px; margin-left:10px;opacity":"1", "position":"relative", "left":"2%"})
	$("#selectionresult").appendTo("#container")

	
	$("#container" ).on("click", ".dropdown-item", function () {
	    
	    var temp=$( ".dropdown-item.active" ).closest(".dropdown.show").attr("id")
	    $("#selectedvalues").css("opacity","1")
	    
	    d=$( ".mt-2.mb-3" ).find('span').text()
            f=d.split('[X]').filter(function(v){return v!==''});
	    
	    $( ".mt-2.mb-3" ).hide()
	    selvalues = new Object()
            $("#personen").find('strong').remove()
            $("#genders").find('strong').remove()
	    $("#originals").find('strong').remove()
	    
            $.each(f, function(index) {
		if($.inArray($.trim(f[index]), persons[3].english) != -1)
		{
		    $( "#selectrules1" ).css("opacity","1")
		    $( ".mt-2.mb-3" ).hide()  
		    $("#personen").css("opacity", "1")
	       	    $( "#personen" ).append( "<strong>  "+f[index]+" -    </strong>" );
		    selvalues[$.trim(f[index])]="name_translit"
		}
		
		if($.inArray($.trim(f[index]), persons[3].gender) != -1)
		{
		    $( "#selectrules1" ).css("opacity","1")
		    $( ".mt-2.mb-3" ).hide()  
		    $("#genders").css("opacity", "1")
	       	    $( "#genders" ).append( "<strong>  "+f[index]+" -     </strong>" );
		    selvalues[$.trim(f[index])]="gender"
		}
		
		if($.inArray($.trim(f[index]), persons[3].name) != -1)
		{
		    $( "#selectrules1" ).css("opacity","1")
		    $( ".mt-2.mb-3" ).hide()  
		    $("#originals").css("opacity", "1")
		    $("#originalstext").css("opacity", "1")
	       	    $( "#originals" ).append( "<strong>  "+f[index]+" -     </strong>" );
		    selvalues[$.trim(f[index])]="name"
		}
	    })
	});
    };

function changeDesign()
{
   
    $("#layout").css("opacity","1")
}
function getDropdownPersons()
{
   
    $('<span class="radio" style="display:inline; position: absolute;  top:5%; margin-left:10px; font-size:30px;cursor:pointer; opacity:0" id="textfieldsearch" title="Erklärung"></span>').appendTo("#searchfield")
    $('<h4><button id="textfieldsearchpersons" class="btn btn-primary" style="margin-top:20px; margin-left: 10px; font-size:0.85rem;" onclick="changeDesign()">Show results</button></h4>').appendTo("#lastradio")
    $("#persname").css("opacity","1")
    
    $(".radio").css("opacity","1")
    var myObject = new Object();
  
    myObject["english"] = [persons[3].english, "pers_engl", "pers", "engl_name", "English writing" , "english", "#english","#bsd1-container", "name_translit","english"];
    myObject["gender"]=[persons[3].gender, "pers_gender", "pers", "gender", "Gender", "gender","#gender", "#bsd2-container", "gender","gender"]
    myObject["original"]=[persons[3].name, "pers_name", "pers", "orig_name", "Egyptian writing", "original", "#original", "#bsd3-container", "name","original"];
    
    var vars = JSON.stringify(myObject);
    var obj = jQuery.parseJSON( vars );
    
    $.getScript( "dist/bootstrap-select-dropdown.js", function() { 
	
    	$(obj["english"][6]).selectDropdown();
	$(obj["english"][7]+" .input-group .form-control").attr("placeholder", obj["english"][4]);
	
	$(obj["english"][7]).find('.dropdown-menu').css("z-index","12000")
	$(obj["english"][7]).find('.dropdown-menu').css("width","400px")
	$(obj["english"][7]).find('.dropdown-menu.show').css("position","absolute")
	$(obj["english"][7]).find('.dropdown-menu.show').css("left","-75px")
	$(obj["english"][7]).append("<span title='enter Egyptian name in English writing, e.g. Ptahmose or Ptahmay' style='cursor:pointer; position:relative; width:20px; font-size:25px; margin-left:-30px; top:-30px;'>&#9432;</span>")
	$(obj["english"][7]).css("margin-bottom","-22px")
	$(obj["english"][7]).find(".dropdown-item:contains('Select all')").css("font-family","italic")
	$(obj["english"][7]).find(".dropdown-item:contains('Deselect all')").css("font-family","italic")
	$(obj["english"][7]).find(".dropdown-item:contains('Show selected')").css("font-family","italic")
	$(obj["english"][7]).find(".dropdown-item:contains('Clear input field')").css("font-family","italic")
	
	$(obj["gender"][6]).selectDropdown();
	$(obj["gender"][7]+" .input-group .form-control").attr("placeholder", obj["gender"][4]);
	$(obj["gender"][7]).find('.dropdown-menu').css("z-index","12000")
	$(obj["gender"][7]).find('.dropdown-menu').css("width","300px")
	$(obj["gender"][7]).find('.dropdown-menu').css("left","-75px")
	$(obj["gender"][7]).append("<span  title='enter person’s gender, choose between male and female' style='cursor:pointer; position:relative; width:20px; font-size:25px; margin-left:-30px; top:-30px;'>&#9432;</span>")
	$(obj["gender"][7]).css("margin-bottom","-22px")
	$(obj["gender"][7]).find(".dropdown-item:contains('Select all')").css("font-family","italic")
	$(obj["gender"][7]).find(".dropdown-item:contains('Deselect all')").css("font-family","italic")
	$(obj["gender"][7]).find(".dropdown-item:contains('Show selected')").css("font-family","italic")
	$(obj["gender"][7]).find(".dropdown-item:contains('Clear input field')").css("font-family","italic")

	$(obj["original"][6]).selectDropdown();
	$(obj["original"][7]+" .input-group .form-control").attr("placeholder", obj["original"][4]);
	$(obj["original"][7]).find('.dropdown-menu').css("z-index","12000")
	$(obj["original"][7]).find('.dropdown-menu').css("width","300px")
	$(obj["original"][7]).find('.dropdown-menu').css("left","-75px")
	$(obj["original"][7]).append("<span  title='enter Egyptian name in Egyptian writing e.g. PtH-ms or PtH-mo.jj' style='cursor:pointer; position:relative; width:20px; font-size:25px; margin-left:-30px; top:-30px;'>&#9432;</span>")
	$(obj["original"][7]).css("margin-bottom","-22px")
	$(obj["original"][7]).find(".dropdown-item").css("font-family","aegypt")
	$(obj["original"][7]).find(".dropdown-item:contains('Select all')").css("font-family","italic")
	$(obj["original"][7]).find(".dropdown-item:contains('Deselect all')").css("font-family","italic")
	$(obj["original"][7]).find(".dropdown-item:contains('Show selected')").css("font-family","italic")
	$(obj["original"][7]).find(".dropdown-item:contains('Clear input field')").css("font-family","italic")
	$("#originals").css("font-family","aegypt")
	$("#originals").find("#H5:contains('Persons (original):')").css("font-family","italic")
	$("#genders").find("#H5:contains('Gender:')").css("font-family","italic")
	$("#personen").find("#H5:contains('Persons (english):')").css("font-family","italic")

    });
    
    BasicMenu("#pers", par1=obj, par2=0, par3="");
    DropdownMenu("#pers", w2ui.grid1, par1=obj);
    SelectionMenu("#pers", par1=obj, "grid1");

    // initalize grid
    initdata=[]
    $.each(persons[2], function( index, value_pers ) {
	initdata.push(parseInt(value_pers.recid))
    });
    
    initlist=[]
    $.each(initdata, function(index) {
	initlist.push(w2ui['grid1'].get(initdata[index])); 
    })
    
    $("#textfieldsearchpersons").on("click",  function () {

	$('#layout').show()
	w2ui["grid1"].clear();
	w2ui["grid1"].add(initlist);
	$("#back").css("opacity", "1")
	v=$("#searchfields").val()
	g=w2ui["grid1"].getSearch()
	fieldsearch= [];
	$.each(g, function(index) {
	    fieldsearch.push({ field: g[index], value: v, operator: $('input:radio[name=query]:checked').val()  })
	})
	w2ui["grid1"].search(fieldsearch, 'OR');
	currentIds=w2ui["grid1"].last.searchIds;
	$( ".container" ).hide();
	w2ui["layout"].show('right', w2ui.grid1);
	
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
	var search_name_engl=[]
	var search_gender=[]
	var search_name_orig=[]
	
    $.each(values, function(index)
	   {
	       if (values[index]=="name_translit") {
		   search_name_engl.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="gender") {
		   search_gender.push({ field: values[index], value: String(index), operator: "is"})}
	      if (values[index]=="name") {
		   search_name_orig.push({ field: values[index], value: String(index), operator: "is"})}
	       
	   });
    
	$( ".container" ).hide();
	
	var currentIds1=[]
	var currentIds2=[]
        var currentIds3=[]
	
	
	if (search_name_engl.length>0) {
	 
	    w2ui[par1].search(search_name_engl, 'OR');
	    currentIds1=w2ui[par1].last.searchIds;
	    
	}
	else {
	    currentIds1=initdata
	}
	if (search_gender.length>0) {
	w2ui[par1].search(search_gender, 'OR');
	currentIds2=w2ui[par1].last.searchIds;
	}
	else {
	    currentIds2=initdata
	}
	
	if (search_name_orig.length>0) {
            w2ui[par1].search(search_name_orig, 'OR');
	    currentIds3=w2ui[par1].last.searchIds;
	}
	else {
	    currentIds3=initdata
	}
  
	// AND SELECTION
	
	var common=""
    
	temp = $.grep(currentIds1, function(element) {
	    return $.inArray(element, currentIds2 ) !== -1;
	});

	common = $.grep(currentIds3, function(element) {
	    return $.inArray(element, temp ) !== -1;
	});

	
   // };

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
    select(values=selvalues,par1="grid1")
	
})
    
}
   
$("#container").css("margin-top","-210px")
$("#filterfield").append("<span title='select one or more items of the same category e.g. English writing: Amenemope, Ptahmay and Hatiay. You can also combine several items of different categories e.g. Amenemope, Ptahmay and Hatiay and gender: female to refine your search query.' style='cursor:pointer; position:relative; width:20px; font-size:25px; margin-left:-30px; top:-35px;'>&#9432;</span>")
$("#searchfield").prepend("<span title='select a specific query e.g. id or name of person and chose between the listed query options ' style='cursor:pointer; position:relative; width:20px; font-size:25px; margin-left:-35px; top:0px;'>&#9432;</span>")
