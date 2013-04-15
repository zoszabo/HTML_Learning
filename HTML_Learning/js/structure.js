/**
 * @author Zoltan Szabo
 */

$.get('structure/header.html', function(data) {
    $('header').html(data);
});

$.get('structure/menu.html', function(data) {
    $('nav').html(data);
});

$.get('structure/footer.html', function(data) {
    $('footer').html(data);
});



