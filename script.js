$(document).ready(function(){
    setTimeout(function(){
        enterWebsite();
        $('body').delay(350).css({
            'overflow': visible
        })
    },600);
})

function enterWebsite(){
    $('.content').hide();
    Swal.fire({
        title: 'Hi babyyy',
        text: 'Đã gần tới sinh nhật của Ngọc Anh ùi nhỉ?',
        imageUrl: '/img/cinnamoroll.png',
        imageWidth: 250,
        imageHeight: 170,
        imageAlt: 'Cinnamoroll image',
      }).then(function(){
          $('.content').show(500);
      })
}

function switchButton(){

    var audio = new Audio ('/sound/wrong.swf.mp3');
    audio.play();
    var topY = $('#yesAnswer').css("top");
    var leftY = $('#yesAnswer').css("left");
    var topN = $('#noAnswer').css("top");
    var leftN = $('#noAnswer').css("left");

    $('#noAnswer').css('left', leftY);
    $('#noAnswer').css('top', topY);
    $('#yesAnswer').css('left', leftN);
    $('#yesAnswer').css('top', topN);
}

function moveButton(){
    var audio = new Audio('/sound/quack.mp3');
    audio.play();
    if(screen.width <= 600){
        var x = Math.floor(Math.random()*300);
        var y = Math.floor(Math.random()*500);
    } 
    else {
        var x = Math.floor(Math.random()*500);
        var y = Math.floor(Math.random()*500);
    }

    var left = x + 'px';
    var top = y + 'px';

    $('#noAnswer').css("left", left);
    $('#noAnswer').css("top", top);

}

var n = 0;
$('#noAnswer').mousemove(function(){
    if(n < 1)
        switchButton();
    if( n >= 1) 
        moveButton();
    n++;
})

$('#noAnswer').click(()=>{
    if(screen.width>=900)
        moveButton();
})

$('#yesAnswer').click(function(){
    Swal.fire({
        title: 'Gửi lời yêu thương đến người tặng quà đi ạ :>',
        html: true,
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `,
        html: "<input type='text' class = 'form-control' placeholder='VD: NDong đẹp trai nhất thế giới'/>",
        showCancelButton: true,
        cancelButtonText: 'Đéo',
        confirmButtonText: 'Dạa',
        confirmButtonColor: "green",
        cancelButtonColor: "red",
      }).then(result=>{
          if(result.value){
            Swal.fire({
                title: 'Háp pi birthday Cinna Nanhhh',
                text: 'Vậy là em bé của tớ 18 tủi ròi đóoo',
                confirmButtonText: 'Ib cho ngừi đẹp trai nhất thế giới',
                onClose: ()=>{
                    window.location = 'https://www.facebook.com/fluoxeetine/';

                }
            })
          }
          else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            Swal.fire({
              title: 'Mày hơi láo rồi đó',
              text: '18 tuổi rồi trưởng thành lên đi ( ͡° ͜ʖ ͡°)',
              confirmButtonText: '╭∩╮( ͡° ͜ʖ ͡°)╭∩╮',
              onClose: ()=>{
                window.location = 'https://www.facebook.com/fluoxeetine/';
            }
            })
          }
      })
})