$('#backgroundColor').on('input', function(e){
    $('.card-bg').css('background-color', `${e.target.value}`);
})

$('#accentColor').on('input', function(e){
    $('.btn-primary').css('background-color', `${e.target.value}`);
})

$('#textColor').on('input', function(e){
    $('.text-color').css('color', `${e.target.value}`);
})