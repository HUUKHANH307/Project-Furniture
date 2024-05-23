$(document).ready(function(){
  $('.slider').slick({
    infinite:true,
    autoplay:true,
    autoplaySpeed:4000,
    speed:2000,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"

  })
})






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



var banTra=[
  {
    img:'link ảnh',
    name:'ten sp',
    price:'giá',
    desc:'mô tả'
  },
  {
    img:'link ảnh',
    name:'ten sp',
    price:'giá',
    desc:'mô tả'
  }
]