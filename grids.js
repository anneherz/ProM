function allTables(var1="")
{
    
   
    
    if (w2ui['grid1'] != null) {
	w2ui['grid1'].reset();
	w2ui['grid1'].destroy();
    }
   
    
$('#grid1').w2grid({
    name    : 'grid1',
   

    show: { 
            toolbar: true,
            footer: true
        },

multiSearch: true,
    searches: persons[0],
    columns: persons[1],
    records: persons[2],
    
    onSearch: function(event) {
        var grid = this;
    },
    
    onClick: function(event) {

	$("#searchfield").hide()
	$("#textfieldsearch").hide()
	$(".radio").hide()
        $("#upper").css({"height":"40px", "z-index": "10000"})
        
        $("#bgroup").css("opacity", "1");
        var grid = this;
        //Anmerkung: das sind die Ids aus der onSearch Funktion davor!
        //Beim nächsten Aufruf, werden die Search IDs ausgegeben
        //Daher hier bei onClick die Methode '.last'
         var plp= [];
         $.each(currentIds, function( index, value ) {

             plp.push({"id":grid.get(value).id_persons,"name":grid.get(value).name_translit})
         
        })
       
       
       $(document).ready(function(){
       var count = 0
     
       $("#p1").click(function(){
        
          count=count+1
          document.getElementById('Content2').setAttribute('src',"detail/singleview_persons.html?ids="+plp[count].id+"&name="+plp[count].name)
     });
   
      $("#p0").click(function(){
       
          count=count-1
          document.getElementById('Content2').setAttribute('src',"detail/singleview_persons.html?ids="+plp[count].id+"&name="+plp[count].name)
     });
      });
      
        event.onComplete = function() {
        var sel_rec_ids = grid.getSelection();
        
        if (sel_rec_ids.length) {
        var sel_record = grid.get(sel_rec_ids[0]);
        w2ui.layout.content('main', '<iframe class="row" id="Content2" style="height: 100%;overflow-y: hidden"></iframe>' )
        document.getElementById('Content2').setAttribute('src',"detail/singleview_persons.html?ids="+(sel_record.id_persons).toString()+"&name="+(sel_record.name).toString())
       
}
}}
});

//##################################   OBJECTS  #########################################
if (w2ui['grid2'] != null) {
	w2ui['grid2'].reset();
	w2ui['grid2'].destroy();
    }
   
$('#grid2').w2grid({
    name    : 'grid2',
    show: { 
            toolbar: true,
            footer: true
        },

    multiSearch: true,
    searches: objects[0],
        columns: objects[1],
        records: objects[2],
        onSearch: function (target, info) {
	    var grid = this;
	    
	},
    
    onClick: function(event) {
	$("#searchfield").hide()
	$("#textfieldsearch").hide()
	$(".radio").hide()


	$("#upper").css({"height":"40px", "z-index": "10000"})
        $("#bgroup").css("opacity","1");
        
        var grid = this;
        var plo= [];
        $.each(currentIds, function( index, value ) {

             plo.push({"id":grid.get(value).id_objects,"type":grid.get(value).object_type})
         
        })
   
$(document).ready(function(){
       var count = 0
       $("#p1").click(function(){
         
          count=count+1
          document.getElementById('Content2').setAttribute('src',"detail/singleview_objects.html?ids="+plo[count].id+"&type="+plo[count].type)
     });
   
     $("#p0").click(function(){
          count=count-1
          document.getElementById('Content2').setAttribute('src',"detail/singleview_objects.html?ids="+plo[count].id+"&type="+plo[count].type)
     });
      });

        event.onComplete = function() {
        var sel_rec_ids = grid.getSelection();
        
        if (sel_rec_ids.length) {
      
        //w2ui['layout'].show('right', window.instant)
        var sel_record = grid.get(sel_rec_ids[0]);
        w2ui.layout.content('main', '<iframe class="row" id="Content2" style="height: 100%; overflow-y: hidden"></iframe>' )
        document.getElementById('Content2').setAttribute('src',"detail/singleview_objects.html?ids="+(sel_record.id_objects).toString()+"&type="+(sel_record.object_type).toString())
       
}
}}
});

//##################################   TITLES  #########################################
    if (w2ui['grid3'] != null) {
	w2ui['grid3'].reset();
	w2ui['grid3'].destroy();
    }
    
    $('#grid3').w2grid({
	name    : 'grid3',
	show: { 
            toolbar: true,
            footer: true
        },
	multiSearch: true,
	searches: titles[0],
        columns: titles[1],
        records: titles[2],
        onSearch: function (target, info) {
	    var grid = this;
            //console.log(grid)
	    
	},
    onClick: function(event) {
	$("#searchfield").hide()
	$("#textfieldsearch").hide()
	$(".radio").hide()
	$("#upper").css({"height":"40px", "z-index": "10000"})

        $("#bgroup").css("opacity", "1");
        var grid = this;

        var plt= [];
         $.each(currentIds, function( index, value ) {

             plt.push({"id":grid.get(value).id,"title":grid.get(value).titles_translat_eng})
         
        })
        
 $(document).ready(function(){
     var count = 0
     $("#p1").click(function(){
          count=count+1
          document.getElementById('Content2').setAttribute('src',"detail/singleview_objects.html?ids="+plt[count].id+"&title="+plt[count].title)
     });
   
     $("#p0").click(function(){
          count=count-1
          document.getElementById('Content2').setAttribute('src',"detail/singleview_objects.html?ids="+plt[count].id+"&title="+plt[count].title)
     });
 });
	    
       event.onComplete = function() {
        var sel_rec_ids = grid.getSelection();
      if (sel_rec_ids.length) {
        //w2ui['layout'].show('right', window.instant)
        var sel_record = grid.get(sel_rec_ids[0]);
        w2ui.layout.content('main', '<iframe class="row" id="Content2" style="height: 100%; overflow-y: hidden"></iframe>' )
        document.getElementById('Content2').setAttribute('src',"detail/singleview_titles.html?ids="+(sel_record.id).toString()+"&title="+(sel_record.titles_translat_eng).toString());
      
}
}}
});


    if(w2ui.hasOwnProperty('layout')){
	$().w2destroy('layout');
        }

 
var config = {
 layout:{
        name: "layout",
        padding: 0,
        panels: [
            { type: 'main', resizable: true, overflow: 'hidden', style: pstyle }
         ]
    }
};

$(function () {
    // initialization
    $('#main1').w2layout(config.layout);
   
    w2ui.layout.content('left', '<iframe class="sidebar" id="sidebar" src="sidebar.html" style="width: 100%; height: 100%"></iframe>');
    //w2ui['layout'].show('right', window.instant)
    
    w2ui['layout'].hide('main', window.instant)
    //w2ui.layout.content('left', '<iframe class="sidebar" id="sidebar" src="sidebar.html" style="width: 100%; height: 100%"></iframe>');
    //w2ui.layout.content('main', '<iframe class="PI" id="ProjectInformation" src="index.html" style="width: 100%; height: 100%"></iframe>');
    // in memory initialization
    w2ui['grid1'].hideColumn('notes','to_do','link_bonner_totenbuch','link_trismegistos','link_tla','person_no_ranke')
    w2ui['grid2'].hideColumn('object_subtype_other','object_provenance_detail','object_provenance_reconstructed','object_component','object_material','object_text_format','object_image_format','object_location_detail','condition','obejct_technique','object_height','object_lenght','object_width','object_description','notes','to_do','measurements_unit','weblink','literature', 'digital_resource')
    w2ui['grid3'].hideColumn('titles_index','titles_translat','region','gott_kult','ad_sec','field2','field3','field5','field6','titel_hierach','titel_kern','titel_spez_taetigkeit','titel_spez_gott_koenig_pers','titel_spez_epitheton','titel_spez_institution','titel_spez_toponym','old_ids')
    $().w2grid(config.grid1);
    $().w2grid(config.grid2);
    $().w2grid(config.grid3);
    
    

    w2ui.layout.content('main', w2ui.grid1);
});
}
