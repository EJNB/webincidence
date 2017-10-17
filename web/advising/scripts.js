///**
// * Created by jorge.fernandez on 2/15/2017.
// */
//function markAsRead(idItem){
//    var url =$('#link-details-item-'+idItem).attr('data-url-mark');
//    var showOption = $('.showHideOptions:checked').val();
//    var filter = $('#find_reference').val();
//    $.post(url, {idItem: idItem, showOption:showOption, filter:filter}, function (response) {
//        $('#table-ajax').html(response);
//        markRow(idItem);
//    });
//}
//
//function showHideItem(idItem){
//    var url =$('#link-show-hide-'+idItem).attr('data-url');
//    var id = $('#link-show-hide-'+idItem).attr('data-value');
//    var showOption = $('.showHideOptions:checked').val();
//    var filter = $('#find_reference').val();
//    var holdyDiv = $('<div></div>').attr('id', 'blocker');
//    holdyDiv.appendTo('body');
//    $('#blocker').addClass('blocker');
//    $('#img-loading').removeClass('hide-elemento');
//    $.post(url, {idItem: id, showOption:showOption, filter:filter}, function (response) {
//        $('#table-ajax').html(response);
//        $('#blocker').remove();
//        $('#img-loading').addClass('hide-elemento');
//    });
//}
//
//function readUnreadItem(idItem){
//    var url =$('#link-read-unread-'+idItem).attr('data-url');
//    var id = $('#link-read-unread-'+idItem).attr('data-value');
//    var showOption = $('.showHideOptions:checked').val();
//    var filter = $('#find_reference').val();
//    var holdyDiv = $('<div></div>').attr('id', 'blocker');
//    holdyDiv.appendTo('body');
//    $('#blocker').addClass('blocker');
//    $('#img-loading').removeClass('hide-elemento');
//    $.post(url, {idItem: id, showOption:showOption, filter:filter}, function (response) {
//        $('#table-ajax').html(response);
//        $('#blocker').remove();
//        $('#img-loading').addClass('hide-elemento');
//    });
//    markRow(idItem);
//}
//
//function detailsByRef(reference){
//    var url =$('#details-ref-'+reference).attr('data-url');
//    $.post(url, {ref: reference}, function (response) {
//        $('#modal-body-details-ref').html(response);
//        $('#modal-details-ref').modal();
//    });
//}
//
//function hideAllItemsByRef(reference){
//    var url =$('#hide-all-ref-'+reference).attr('data-url');
//    var showOption = $('.showHideOptions:checked').val();
//    var holdyDiv = $('<div></div>').attr('id', 'blocker');
//    holdyDiv.appendTo('body');
//    $('#blocker').addClass('blocker');
//    $('#img-loading').removeClass('hide-elemento');
//    $.post(url, {ref: reference, showOption:showOption}, function (response) {
//        $('#table-ajax').html(response);
//        $('#blocker').remove();
//        $('#img-loading').addClass('hide-elemento');
//    });
//}
//
//function showAllItemsByRef(reference){
//    var url =$('#show-all-ref-'+reference).attr('data-url');
//    var showOption = $('.showHideOptions:checked').val();
//    //alert(showOption);
//    var holdyDiv = $('<div></div>').attr('id', 'blocker');
//    holdyDiv.appendTo('body');
//    $('#blocker').addClass('blocker');
//    $('#img-loading').removeClass('hide-elemento');
//    $.post(url, {ref: reference, showOption:showOption}, function (response) {
//        $('#table-ajax').html(response);
//        $('#blocker').remove();
//        $('#img-loading').addClass('hide-elemento');
//    });
//}
//
//function detailsByItem(id,where){
//    var url =$('#link-details-item-'+id).attr('data-url');
//    $.post(url, {id: id}, function (response) {
//        $('#modal-body-details-ref').html(response);
//        $('#modal-details-ref').modal();
//
//    });
//    if(where!='finder'){
//        markAsRead(id);
//    }
//    markRow(id);
//
//}
//
//function passReasignReferenceToModal(reference){
//    $('#link-popup-reasignar').attr('data-value',reference);
//
//    var url =$('#reasign-ref-'+reference).attr('data-url');
//    $('#link-popup-reasignar').attr('data-url',url);
//    $('#modal-reasign-ref').modal();
//}
//
//function reasignRef(){
//    var url = $('#link-popup-reasignar').attr('data-url');
//    var reference = $('#link-popup-reasignar').attr('data-value');
//    var showOption = $('.showHideOptions:checked').val();
//    var user = $('#select-user').val();
//    var comment = $('#note_comment').val();
//    //alert(comment);
//    $.post(url, {ref: reference, showOption:showOption, user:user, comment:comment}, function (response) {
//        $('#table-ajax').html(response);
//        $('#modal-reasign-ref').modal('toggle');
//    });
//}
//
//function createNote(item){
//    $("#modal-item-id").val(item);
//    $("#modal-item-ref").val($('#create-note-'+item).attr('data-ref'));
//    $('#modal-create-notification').modal('toggle');
//}
//
//function saveNote(){
//    $('#form-create-note').submit();
//}
//
//function markRow(id){
//
//    $(".table-selected tbody tr.to-mark").each(function () {
//        $(this).removeClass('row-selected');
//    });
//    $('#tr-'+id).addClass('row-selected');
//
//}
function initiCheck() {
    $('.icheck').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });
}

function findBooking(data) {
    var reference = $('#find_booking').val();

    var url_booking_detail = Routing.generate('incidence_ajax_get_booking_detail');
    var url_services_description = Routing.generate('incidence_ajax_get_services_description');
    $.post(url_booking_detail, {reference:reference}, function(response) {
        $('#container_booking_detail').html(response);
    });

    $.post(url_services_description, {reference:reference}, function(response) {
        $('#container_select_service').html(response);
    });

    $('#select_reference').val(reference);
}

function showByTypes(id) {

    var reference = $('#select_reference').val();
    switch(id) {

        case 1:
            $('#container_booking_suppliers').html('');
            $('#container_booking_clients').html('');
            //hacer select con personas
            var url_booking_persons = Routing.generate('incidence_ajax_get_booking_person_names');
            $.post(url_booking_persons, {reference:reference}, function(response) {
                $('#container_booking_persons').html(response);
            });
            break;
        case 2:
            $('#container_booking_clients').html('');
            $('#container_booking_persons').html('');
            var url_booking_suppliers = Routing.generate('incidence_ajax_get_booking_suppliers');
            $.post(url_booking_suppliers, {reference:reference}, function(response) {
                $('#container_booking_suppliers').html(response);
            });
            break;
        case 3:
            $('#container_booking_suppliers').html('');
            $('#container_booking_persons').html('');
            var url_booking_clients = Routing.generate('incidence_ajax_get_booking_client_names');
            $.post(url_booking_clients, {reference:reference}, function(response) {
                $('#container_booking_clients').html(response);
            });
            break;
        default:
            $('#container_booking_suppliers').html('');
            $('#container_booking_clients').html('');
            $('#container_booking_persons').html('');
    }

   //
   //  if(id==2){
   //     var reference = $('#select_reference').val();
   //     var url_booking_suppliers = Routing.generate('incidence_ajax_get_booking_suppliers');
   //     $.post(url_booking_suppliers, {reference:reference}, function(response) {
   //         $('#container_booking_services').html(response);
   //     });
   // }else if(id==1){
   //     $('#container_booking_services').html('');
   // }
}

//esta funcion recibe un proveedor y me devuelve los servicios asociados a ese proveedor\
function showServicesBySupplier(data) {
    var url_booking_services_suppliers = Routing.generate('incidence_ajax_get_booking_services_supplier');
    var reference = $('#select_reference').val();
    $.post(url_booking_services_suppliers, {supplier:data, reference:reference}, function(response) {
        $('#container_select_service').html(response);
    });
}

function showCompensationCost() {
    var url_booking_compensation_services = Routing.generate('incidence_ajax_get_compensation_service');
    var reference = $('#select_reference').val();
    $.post(url_booking_compensation_services, {reference:reference}, function(response) {
        $('#container_compensation_cost').html(response);
    });
}

function showSustitutionOriginalCost() {
    var url_booking_sustitution_services = Routing.generate('incidence_ajax_get_sustitution_services');
    var reference = $('#select_reference').val();
    $.post(url_booking_sustitution_services, {reference:reference}, function(response) {
        $('#container_sustitution_cost_original').html(response);
    });
}

function showSustitutionSustituteCost(type) {

    var url_booking_sustitution_services = Routing.generate('incidence_ajax_get_sustitution_services');
    var reference = $('#select_reference').val();
    // var service = $('#select_reference').val();
    $.post(url_booking_sustitution_services, {reference:reference, serviceType:type}, function(response) {
        $('#container_sustitution_cost_sustitute').html(response);
    });
}

$(document).ready( function() {

    initiCheck();

    PNotify.prototype.options.styling = "bootstrap3";

    // $('select').attr({
    //     'class' : 'selectpicker',
    //     'data-live-search':'true'
    // })

    //$('select:not(.select-standard)').select2();

    //setTimeout(function() {
    //    $( ".ui-pnotify" ).fadeOut(1000, function () {
    //        $(".ui-pnotify").remove();
    //    });
    //},6000);

    $('.content').css('min-height', ($(window).innerHeight()-200));

    $(".link-eliminar").click(function (event) {
        $("#link-popup-eliminar").attr("href", $(this).attr("data-url"));
        $("#text-descripcion-popup-eliminar").html($(this).attr("data-descripcion"));
    });

    //configuracion del campo date
    $('#system_backendbundle_incidence_incidenceDate').datetimepicker({
       format: 'YYYY-MM-DD',
       locale: 'es',
       showClear: true
    });

    //alert($('#home').height()) //esto lo hice para saber la altura


    //$('.link-tooltip').hover(function(){
    //    $(this).tooltip('show');
    //})
    //
    //$(".link-details-item").click(function (event) {
    //    $("#descripcion-popup").html($(this).attr("data-descripcion"));
    //});
    //
    //$('.showHideOptions').click(function (event) {
    //    //alert($('input:name=""').val());
    //    //$(this).attr('checked','checked');
    //    $('#form-reference').submit();
    //});
    //
    //$('#finder-date-to').datetimepicker({
    //    useCurrent: false, //Important! See issue #1075
    //    format: 'YYYY-MM-DD',
    //    locale: 'es',
    //    showClear: true
    //});
    //$("#finder-date-from").on("dp.change", function (e) {
    //    $('#finder-date-to').data("DateTimePicker").minDate(e.date);
    //});
    //$("#finder-date-to").on("dp.change", function (e) {
    //    $('#finder-date-from').data("DateTimePicker").maxDate(e.date);
    //});
    //
    //$('#finder-search').click(function (event) {
    //    $('#finder-form').submit();
    //});
    //
    //$('#service-search').click(function (event) {
    //    $('#form-service-filter').submit();
    //});
    //
    //$('.showNote').click(function (event) {
    //    $('#note-id').val($(this).attr('data-id'));
    //    $('#note-description').html($(this).attr('data-description'));
    //});
    //
    //$('#link-note-hide').click(function(event){
    //
    //    var id = $('#note-id').val();
    //    $('#form-delete-note').attr('action',$('#note-id-'+id).attr('data-url-show-hide'));
    //    $('#form-delete-note').submit();
    //});
    //
    //$('#link-note-delete').click(function(event){
    //    var id = $('#note-id').val();
    //    $('#form-delete-note').attr('action',$('#note-id-'+id).attr('data-url-delete'));
    //    $('#form-delete-note').submit();
    //});
    //
    //$('#link-service-create-from-fix').click(function (event) {
    //    if($('#modal-service-code').val()!=''&&$('#modal-service-desc').val()!=''){
    //        $('#form-create-service-from-fix').submit();
    //    }else{
    //        new PNotify({
    //            title: 'Error!',
    //            text: 'No se pueden dejar campos vacíos.',
    //            type: 'error'
    //        });
    //    }
    //
    //});
    //$('#link-status-create-from-fix').click(function (event) {
    //    if($('#modal-status-desc').val()!=''){
    //        $('#form-create-status-from-fix').submit();
    //    }else{
    //        new PNotify({
    //            title: 'Error!',
    //            text: 'No se pueden dejar campos vacíos.',
    //            type: 'error'
    //        });
    //    }
    //
    //});
    //$('#link-comment-create-from-fix').click(function (event) {
    //    if($('#modal-comment-desc').val()!=''){
    //        $('#form-create-comment-from-fix').submit();
    //    }else{
    //        new PNotify({
    //            title: 'Error!',
    //            text: 'No se pueden dejar campos vacíos.',
    //            type: 'error'
    //        });
    //    }
    //});
    //
    //$('#show-count-out').html($('#list-notifications li').size());
    //$('#show-count-in').html('Tiene '+$('#list-notifications li').size()+' notificacion(es)');
    //
    //$('#ref-search').click(function (event) {
    //    $('#form-reference').submit();
    //});
    ////
    ////if($('#login-box').html()){
    ////    $('body').css('background-color','#F6F6F6');
    ////}
    //$('#range-date-from').datetimepicker({
    //    format: 'YYYY-MM-DD',
    //    locale: 'es',
    //    showClear: true
    //});
    //$('#range-date-to').datetimepicker({
    //    useCurrent: false, //Important! See issue #1075
    //    format: 'YYYY-MM-DD',
    //    locale: 'es',
    //    showClear: true
    //});
    //$("#range-date-from").on("dp.change", function (e) {
    //    $('#range-date-to').data("DateTimePicker").minDate(e.date);
    //});
    //$("#range-date-to").on("dp.change", function (e) {
    //    $('#range-date-from').data("DateTimePicker").maxDate(e.date);
    //});
    //
    //$('#count-range-search').click(function (event) {
    //    if($("#range-date-from").val()!='' && $("#range-date-to").val()!=''){
    //        $('#count-in-range').submit();
    //    }else{
    //        new PNotify({
    //            title: 'Error!',
    //            text: 'Seleccione ambas fechas.',
    //            type: 'error'
    //        });
    //    }
    //
    //});
    //
    //$('#select_all_notes').change(function () {
    //    if($(this).is(':checked')){
    //        $(".check_note").prop('checked',true);
    //    }
    //    else{
    //        $(".check_note").prop('checked',false);
    //    }
    //})
    //
    //$('#delete_note_select').click(function () {
    //    $('#notes_index_form').submit();
    //});

    //quitar el label

});