
function ClearInputs(){
    $('input:text')
    .not(':button, :submit, :reset, :hidden')
    .val('');
    //.prop('checked', false);
    //.prop('selected', false);

}


$(document).ready(function(){

    $(".card-left")
        .mousedown(function() {
            $(this).removeClass("shadow-sm").addClass("shadow-lg");
            $(".div-slot-left").addClass("active");
        })
        .mouseup(function() {
            $(this).removeClass("shadow-lg").addClass("shadow-sm");
            $(".div-slot-left").removeClass("active");
        });

        $(".card-right, .widget")
        .mousedown(function() {
            $(this).removeClass("shadow-sm").addClass("shadow-lg");
            //$(".div-slot-right").addClass("active");
            // $(".widget-action-buttons").addClass("d-none");
        })
        .mouseup(function() {
            $(this).removeClass("shadow-lg").addClass("shadow-sm");
            //$(".div-slot-right").removeClass("active");
            //$(".widget-action-buttons").removeClass("d-none");
    });


    // Display alert message when no widget selected
    if( !$('#ddl-widget').val()) {
        $("#alert-no-widget-selected").removeClass("d-none");
    }else{
        $("#alert-no-widget-selected").addClass("d-none");
    }


    $('.keyup-widget-selection').keyup(function () {
        var title = $("#txtTitle").val();
        var subtitle = $("#txtSubtitle").val();
        var link = $("#txtLink").val();

        if(title != "" && subtitle != "" && link != ""){
            $("#add-widget-right").prop("disabled", false); 
        }else{
            $("#add-widget-right").prop("disabled", true);
        }
    });

    // Check widget details
});


function new_pdf(title, subtitle, link, permalink){

    var current_id = document.getElementById(permalink);
    if(current_id){
        $("#alert-id-exists").removeClass("d-none");
    }else{
        $("#alert-id-exists").addClass("d-none");

        var layout = '<li class="ui-sortable-handle">'
        +'<div class="accordion-item">'

        + '<div class="d-flex justify-content-between widget-action-buttons">'
        + '<img src="../Images/img-pdf.png">'
        + '<div>'
        + '<i class="fa-solid fa-pencil"></i>'
        + '<i class="fa-solid fa-trash ms-1"></i>'
        + '</div>'
        + '</div>'

        +'<div class="card shadow-sm mb-3 card-right">'
        +'<div class="d-flex accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#'+ permalink +'" aria-expanded="false" aria-controls="'+ permalink +'">'
        +'<div class="flex-grow-1 align-self-center">'
        +'<h5 class="mb-0">'+ title +'</h5>'
        +'<small>'+ subtitle +'</small>'
        +'</div>'
        +'</div>'
        +'<div id="'+ permalink +'" class="accordion-collapse collapse" data-bs-parent="#accordionHome">'
        +'<div class="accordion-body loader-search">'
        +'<iframe class="mt-3" style="width:100%;height:400px" src="'+ link +'" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true"></iframe>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'</li>';
    
        $("#sortable-section-right").append(layout);

        $("#staticBackdrop").modal("hide");
       // ClearInputs();
    }
}

function new_slides(title, subtitle, link, permalink){

    var current_id = document.getElementById(permalink);
    if(current_id){
        $("#alert-id-exists").removeClass("d-none");
    }else{
        $("#alert-id-exists").addClass("d-none");

        var layout = '<li class="ui-sortable-handle">'
        +'<div class="accordion-item">'

        + '<div class="d-flex justify-content-between widget-action-buttons">'
        + '<img src="../Images/img-slides.png">'
        + '<div>'
        + '<i class="fa-solid fa-pencil"></i>'
        + '<i class="fa-solid fa-trash ms-1"></i>'
        + '</div>'
        + '</div>'


        +'<div class="card shadow-sm mb-3 card-right">'
        +'<div class="d-flex accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#'+ permalink +'" aria-expanded="false" aria-controls="'+ permalink +'">'
        +'<div class="flex-grow-1 align-self-center">'

        +'<h5 class="mb-0">'+ title +'</h5>'
        +'<small>'+ subtitle +'</small>'
        +'</div> '
        +'</div> '

        +'<div id="'+ permalink +'" class="accordion-collapse collapse" data-bs-parent="#accordionHome">'
        +'<div class="accordion-body loader-search">'
        +'<div class="responsive-google-slides">'
        +'<iframe src="'+ link +'" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'

        +'</div>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'</li>';

        $("#sortable-section-right").append(layout);

        $("#staticBackdrop").modal("hide");
        ClearInputs();
    }
    
}

function new_flipbook(title, subtitle, link, permalink){

    var current_id = document.getElementById(permalink);
    if(current_id){
        $("#alert-id-exists").removeClass("d-none");
    }else{
        $("#alert-id-exists").addClass("d-none");

        var layout = '<li class="ui-sortable-handle">'
        +'<div class="accordion-item">'

        + '<div class="d-flex justify-content-between widget-action-buttons">'
        + '<img src="../Images/img-book.png">'
        + '<div>'
        + '<i class="fa-solid fa-pencil"></i>'
        + '<i class="fa-solid fa-trash ms-1"></i>'
        + '</div>'
        + '</div>'

        +'<div class="card shadow-sm mb-3 card-right">'
        +'<div class="d-flex accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#'+ permalink +'" aria-expanded="false" aria-controls="'+ permalink +'">'
        +'<div class="flex-grow-1">'

        +'<h5 class="mb-0">'+ title +'</h5>'
        +'<small>'+ subtitle +'</small>'
        +'</div> '
        +'</div> '

        +'<div id="'+ permalink +'" class="accordion-collapse collapse" data-bs-parent="#accordionHome">'
        +'<div class="accordion-body loader-search">'
        +'<iframe class="mt-3" style="width:100%;height:400px" src="'+ link +'" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true"></iframe>'
        
        +'</div>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'</li>';

        $("#sortable-section-right").append(layout);

        $("#staticBackdrop").modal("hide");
        ClearInputs();
    }

}

