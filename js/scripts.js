$(function(){
	$('.collapse').on('show.bs.collapse', function () {
        $(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle');
    });// end on()
    $('.collapse').on('hide.bs.collapse', function () {
        $(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle');
    });// end on()
    $('.form-sel').select2({
        placeholder: "Select a State",
        allowClear: true
    });
});
