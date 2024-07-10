
$('.etc_box .sns a').hover(function(){
     $(this).find('i').removeClass('fa-regular').addClass('fa-solid');
},function(){
    $(this).find('i').removeClass('fa-solid').addClass('fa-regular');
})