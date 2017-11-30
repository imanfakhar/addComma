//Add Comma by Iman Fakhar
(function ( $ ) {
jQuery(document).ready(function($) { 
    $.fn.addComma = function() {
        return this.keyup(function(e) {
			var str = jQuery(this).val();
				if(str.indexOf(',')>0) {
					str = str.replace(/,/gi, '');
				}
			
			var objRegex = new RegExp( '(-?[0-9]+)([0-9]{3})' );
				while( objRegex.test( str ) ) {
				var	str = str.replace( objRegex, '$1,$2' );
				}
			$(this).val(str);

        });
 
    };
})
}( jQuery ));
