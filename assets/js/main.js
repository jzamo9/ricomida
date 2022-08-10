
$(document).ready (function (){

    // $("#button").css("color", "red")

    // $("#button").dblclick(function (){
    //     $(this).hide();
    // });

    $("a").click(function(){
        var gato = this.hash

        $("html, body").animate(
            {
            scrollTop: $(gato).offset().top -80
        },
        1000
        )
    })

    $("#titulo-1").dblclick(function(){
        $(this).css("color", "red");
    })

    $("#titulo-2").dblclick(function(){
        $(this).css("color", "red");
    })

    $('.button-1').click(function(){
        $(this).on(alert("El correo fue enviado correctamente"));
 })

 $('.button-1-m').click(function(){
    $(this).on(alert("El correo fue enviado correctamente"));
})
        
    $('.button-1').tooltip();
    $('.button-2').tooltip();
    

    $(".card").click(function(){
        $("#cards").toggle();
     })


     $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
 



   
     


});

