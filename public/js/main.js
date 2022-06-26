$('input[phone]').mask('+7 999 999 99-99')

//Якоря

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

//End anchors

$('.cost .wrapper-container button').click((e) => {
    let index = $(e.currentTarget).index()

    $('.cost .container-body .element').hide()
    $('.cost .container-body .element').eq(index).show()

    $('.cost .wrapper-container button').css({'background': 'white', 'color': 'black'})

    $(e.currentTarget).css({'background': '#E8B11E', 'color': 'white'})
})

/**/

$('#burger').click((e) => {
    let scrollTop = $(window).scrollTop()

    if ($(e.currentTarget).hasClass('burger-active')) {
        $(e.currentTarget).removeClass('burger-active')
        $('.header_mobile').hide(200)

        $(window).off('scroll', scrollOff())

        header_menu()
    } else {
        $(e.currentTarget).addClass('burger-active')
        $('.header_mobile').show(200)

        $(window).on('scroll', scrollOff(scrollTop))
    }
})

//This is function ScrollOff
const scrollOff = (scrollTop = 0) => {
    $(window).scroll(() => {
        $(window).scrollTop(scrollTop)
    })
}

/*autoheight blocks*/

const autoheight = () => {
    for(let i = 0; i < $('*[autoheight]').length; i++) {
        let width = $('*[autoheight]').eq(i).width()

        $('*[autoheight]').eq(i).height(width)
    }

    for(let i = 0; i < $('*[autoheight2]').length; i++) {
        let width = $('*[autoheight2]').eq(i).width()

        $('*[autoheight2]').eq(i).height(width/1.9)
    }
}

autoheight()

/*End autoheight blocks*/

/*закрытие модального окна с видео / открытие*/

$('.componentModal_video').click((e) => {
    if($(e.target).prop('className') == 'componentModal_video') {
        $(e.currentTarget).hide()
    }
})

$('#open_video').click(() => {
    $('.componentModal_video').show()
    autoheight()
})

/**/

/* Header fixed menu */

const header_menu = () => {

    $(window).scroll(() => {
        let scrollTopHeader = $(document).scrollTop()
        let header_menu = $('.componentMain').height()

        if(scrollTopHeader > header_menu && $(window).width() < 950) {
            $('header').attr('header_active', '')
        }
        if(scrollTopHeader < header_menu && $(window).width() < 950) {
            $('header').removeAttr('header_active')
        }
    })
}

header_menu()

/* end header fixed menu */

$(window).resize(() => {
    autoheight()
})

