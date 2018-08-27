$(document).ready(function(){

    if(window.location.href.indexOf('index') > -1){
    
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        auto: true,
        slideWidth: 1200
      });

      var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut justo dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Pellentesque faucibus lectus nec semper tincidunt. Donec vel arcu tellus. Nulla facilisi. Etiam dapibus ipsum urna, non tristique nisl aliquet sit amet. Sed pellentesque tortor sapien, at ullamcorper erat tempus eleifend. Proin at suscipit neque. Nunc laoreet sit amet est sit amet porta. Morbi varius bibendum erat eu sollicitudin.'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut justo dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Pellentesque faucibus lectus nec semper tincidunt. Donec vel arcu tellus. Nulla facilisi. Etiam dapibus ipsum urna, non tristique nisl aliquet sit amet. Sed pellentesque tortor sapien, at ullamcorper erat tempus eleifend. Proin at suscipit neque. Nunc laoreet sit amet est sit amet porta. Morbi varius bibendum erat eu sollicitudin.'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut justo dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Pellentesque faucibus lectus nec semper tincidunt. Donec vel arcu tellus. Nulla facilisi. Etiam dapibus ipsum urna, non tristique nisl aliquet sit amet. Sed pellentesque tortor sapien, at ullamcorper erat tempus eleifend. Proin at suscipit neque. Nunc laoreet sit amet est sit amet porta. Morbi varius bibendum erat eu sollicitudin.'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut justo dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Pellentesque faucibus lectus nec semper tincidunt. Donec vel arcu tellus. Nulla facilisi. Etiam dapibus ipsum urna, non tristique nisl aliquet sit amet. Sed pellentesque tortor sapien, at ullamcorper erat tempus eleifend. Proin at suscipit neque. Nunc laoreet sit amet est sit amet porta. Morbi varius bibendum erat eu sollicitudin.'
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut justo dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Pellentesque faucibus lectus nec semper tincidunt. Donec vel arcu tellus. Nulla facilisi. Etiam dapibus ipsum urna, non tristique nisl aliquet sit amet. Sed pellentesque tortor sapien, at ullamcorper erat tempus eleifend. Proin at suscipit neque. Nunc laoreet sit amet est sit amet porta. Morbi varius bibendum erat eu sollicitudin.'
        }
      ];

      posts.forEach((item, index) => {

        var post = `
                 <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>
        `;

        $('#posts').append(post);
      });
    }
    //   Selector de temas
    var selector_theme = $('#selector-theme');
    selector_theme.hide();
    var theme = $('#theme');
    if(localStorage.getItem('theme') != null){
        theme.attr('href',localStorage.getItem('theme'));
    }
   
    $('#to-green').click(function(){
        theme.attr('href','css/green.css');
        localStorage.setItem('theme', 'css/green.css');
    });

    $('#to-red').click(function(){
        theme.attr('href', 'css/red.css');
        localStorage.setItem('theme', 'css/red.css');
    });

    $('#to-blue').click(function(){
        theme.attr('href','css/blue.css');
        localStorage.setItem('theme', 'css/blue.css');
    });

    // Scroll arriba
    $(".subir").click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0}, 500);
            return false;
    });

    $('#login form').submit(function(){
        var form_name = $('#form_name').val();
        localStorage.setItem('form_name', form_name);
    });

    var form_name = localStorage.getItem('form_name');

    if(form_name != null && form_name != 'undefined'){
        
        var about_parrafo = $('#about p');
        var about_img = $('#about img');

        about_img.attr('src','img/yo.png');

        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");

        $('#login').hide();
        selector_theme.show();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    }
    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();
    }
    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            var reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);
        }, 1000)
       
    }
    if(window.location.href.indexOf('contact') > -1){

        $('form input[name="date"]').datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang:'es'
        });
    }
});