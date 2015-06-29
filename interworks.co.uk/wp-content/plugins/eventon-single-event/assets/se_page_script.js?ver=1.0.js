/*
	Javascript code for single event page
	version: 0.1
*/
jQuery(document).ready(function($){
	
	initial_sin_event_map_setup();
	
	function initial_sin_event_map_setup(){
		var calendar = $('.evo_sin_page');
		var obj = calendar.find('.evcal_list_a');
		
		var event_line = calendar.find('.evcal_list_a');
		
		if( event_line.data('gmtrig')=='1' && event_line.data('gmap_status')!='null' ){			
			
			obj.evoGenmaps({'fnt':3, 'cal':calendar});
			//console.log('ff');
		}
	}
	
	
	
	
});