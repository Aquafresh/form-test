$('.owl-carousel').owlCarousel({
    margin:10,
    loop:false,
    nav: true,
    autoWidth:true,
    items:5
})


$('#dateTime').datetimepicker({
	locale:'en',
	format: 'DD/MM/YY',
	widgetPositioning: {
		vertical: 'top'
	},
	defaultDate: new Date()
});

function radioCheck() {
	$('[date-addControl="no"]').click( function(){
		if($(this).is(':checked')) {

			$('.controlWrapDatePicker').addClass('controlWrapDatePickerHide')
		}
	});

	$('[date-addControl="yes"]').click( function(){
		if($(this).is(':checked')) {
			$('.controlWrapDatePicker').removeClass('controlWrapDatePickerHide')

		}
	});

	// ======================

	$('[data-selectCheck="no"]').click( function(){
		if($(this).is(':checked')) {
			$('.controlWrapSelectToggle').addClass('controlWrapSelectHide')
		}
	});

	$('[data-selectCheck="yes"]').click( function(){
		if($(this).is(':checked')) {
			$('.controlWrapSelectToggle').removeClass('controlWrapSelectHide')

		}
	});

}

radioCheck()


