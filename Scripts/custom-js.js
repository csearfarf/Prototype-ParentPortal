
function ClearInputs(){
    $(':input')
    .not(':button, :submit, :reset, :hidden')
    .val('')
    .prop('checked', false)
    .prop('selected', false);

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

        $(".card-right")
        .mousedown(function() {
            $(this).removeClass("shadow-sm").addClass("shadow-lg");
            $(".div-slot-right").addClass("active");
        })
        .mouseup(function() {
            $(this).removeClass("shadow-lg").addClass("shadow-sm");
            $(".div-slot-right").removeClass("active");
    });
});
    

function new_pdf(title, subtitle, link, permalink){
    var layout = '<li class="ui-sortable-handle">'
    +'<div class="accordion-item">'
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
}

function new_slides(title, subtitle, link, permalink){
    var layout = '<li class="ui-sortable-handle">'
    +'<div class="accordion-item">'
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
    
}

function new_flipbook(title, subtitle, link, permalink){

    var layout = '<li class="ui-sortable-handle">'
    +'<div class="accordion-item">'
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

}

