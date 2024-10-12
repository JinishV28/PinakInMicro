var speed = 200 
$('.accordion dt.expanded + dd').slideDown(speed)

$('.accordion dt').on('click', function(){
    var that = $(this)


    // Expandable
    if( that.parent().hasClass('expandable') ){

            that.toggleClass('expanded').next('dd').slideToggle(speed)
        
    // Collapsable
    }else if(that.parent().hasClass('collapsable')){

        if( !that.hasClass('expanded') ){
            that.siblings('dt').removeClass('expanded').next('dd').slideUp(speed)
          }
            
            that.toggleClass('expanded').next('dd').slideToggle(speed)
   // Standard
    }else{
          // make sure its not collapsing itself and reappearing right after.
        if( !that.hasClass('expanded') ){

            that.siblings('dt').removeClass('expanded').next('dd').slideUp(speed)
            that.toggleClass('expanded').next('dd').slideToggle(speed)
        }
    } 
})

