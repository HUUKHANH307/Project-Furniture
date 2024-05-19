// $(document).ready(function(){
//     $('.btn').click(function(){
//         $('h2').addClass('bg-primary')
//     })
// })
// const modal = document.getElementsByClassName('modal')
// if (modal) {
//   modal.addEventListener('show.bs.modal', event => {
//     alert("day ne")
//   })
// }
$(document).ready(function(){
  $('.list-banner').slick({
    // // $('.item').slick();
    // dots: true,
    // infinite: true,
    // speed: 300,
    slidesToShow: 1,
    // adaptiveHeight: true
  });
});


// thay đổi màu header khi scroll
window.addEventListener('scroll',()=>{
  let box=document.querySelector('.navbar')
  if(window.scrollY>100) box.classList.add('scroll')
  else box.classList.remove('scroll')
})

$(document).ready(function(){
  $('.btn').click(()=>{
    $('.layer').toggleClass('active')
    $('.form-container').toggleClass('active')
    $('.layer-content').toggleClass('active')
  })

})
