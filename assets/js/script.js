let account=localStorage.getItem('account')
//-----------------------start slider-----------------------------------------------
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
  //------------------------end slider------------------------------------
$('.list-item-product a[href="#"]').click(function(event){
  event.preventDefault()
  if(account=='true'){
    $(this).removeAttr('data-bs-toggle')
    $(this).removeAttr('data-bs-target')
    const filename = window.location.pathname.split('/').pop();
    if(filename!='detail-product.html'){
      let src=$(this).closest('.item').find('img').attr('src')
      let title=$(this).closest('.item').find('.title').text()
      let name=$(this).closest('.item').find('h4').text()
      let price=$(this).closest('.item').find('.price').text()
      localStorage.setItem('src',src)
      localStorage.setItem('title',title)
      localStorage.setItem('name',name)
      localStorage.setItem('price',price)
      window.location.href='detail-product.html'
    }
  }
  else {
    $(this).attr('data-bs-toggle','modal')
    $(this).attr('data-bs-target','#modal-1')
  }
})
  //--------------------------- start flash- sale----------------------
  $('.btn-buy').click(function(){
    let src
    let name
    let price
    if(account=='true'){
      const filename = window.location.pathname.split('/').pop();
      if(filename!='detail-product.html'){
        src=$(this).closest('.item').find('img').attr('src')
        name=$(this).closest('.item').find('h4').text()
        price=$(this).closest('.item').find('.price').text()
      }
      else {
        src=localStorage.getItem('src')
        name=localStorage.getItem('name')
        price=localStorage.getItem('price')
      }
      $('#shopping-cart .list-item').append(`
      <div class="item">
      <img src=${src} alt="">
      <div class="box-content">
        <p class="name-item">${name}</p>
        <div class="box-price">
          <div class="btn down">-</div>
          <input type="text" value="1">
          <div class="btn up">+</div>
          <p>Đơn giá: <span class="price">${price}</span></p>
        </div>
      </div>
    </div>
      `)
      shoppingPrice()
      updateSumPrice()
    }
  })
  let dl=new Date('august 29 2024 00:00:00').getTime()
  setInterval(function(){
    let now =new Date().getTime()
    let res=dl-now
    let days=Math.floor(res/(1000*60*60*24))
    let hours=Math.floor(res/(1000*60*60))
    let minutes=Math.floor(res/(1000*60))
    let seconds=Math.floor(res/1000)
  
    hours%=24
    minutes%=60
    seconds%=60
    $('.time-countdown .days p').text(days)
    $('.time-countdown .hours p').text(hours)
    $('.time-countdown .minutes p').text(minutes)
    $('.time-countdown .seconds p').text(seconds)
  },1000)
  
  let saleNavItems=document.querySelectorAll('.sale-nav .item')
  saleNavItems.forEach(item=>{
    item.addEventListener('click',function(){
      //xóa các item khác có class active
      saleNavItems.forEach(i=>{
        i.classList.remove('active')
      })
      //thêm lại class active
      item.classList.add('active')
    })
  })
  
  $('.flash-sale .list-item').slick({
    infinite:true,
    autoplay:true,
    slidesToShow:3,
    slideToScroll:1,
    autoplaySpeed:4000,
    speed:2000,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow:1
        }
      }
    ]
  
  })
  
  //--------------------------- end flash- sale----------------------
  //--------------------------------start shopping-cart------------------------------------------------
  function shoppingPrice(){
    $('.down').click(function(){
      let quantity=$(this).parent().find('input').val()
      let count =quantity-1
      if(count==0) {
        const filename = window.location.pathname.split('/').pop();
        if(filename!='detail-product.html') $(this).closest('.item').remove()
      }
      else $(this).parent().find('input').val(quantity-1)
      updateSumPrice()
    })
    $('.up').click(function(){
      let quantity=$(this).parent().find('input').val()
      $(this).parent().find('input').val(eval(quantity)+1)
      updateSumPrice()
    })

  }
  $(document).ready(function(){
    $('#shopping-cart').click(updateSumPrice())
    shoppingPrice()
  })
  function updateSumPrice(){
    let sum=0
    let item =document.querySelectorAll('#shopping-cart .item')
    item.forEach(i=>{
      let quantity=i.querySelector('input').value
      let price=i.querySelector('.price').innerHTML
      // sum+=eval(quantity)*eval(price)
      sum+=quantity*price
    })
    $('#shopping-cart .sum-price').text(sum)
  }
  //--------------------------------end shopping-cart------------------------------------------------
  //--------------------------------start modal sign-in sign-up-----------------------------------------------
  if(window.innerWidth<920){
    $('.sign-in form > p a').click((event)=>{
      $('.sign-in').addClass('d-none')
      $('.sign-up').removeClass('d-none')
      event.preventDefault()
    })
    $('.sign-up form > p a').click((event)=>{
      $('.sign-up').addClass('d-none')
      $('.sign-in').removeClass('d-none')
      event.preventDefault()
    })
  }
  else {
    $('.ps-2').click((event)=>{
      $('.layer').toggleClass('active')
      $('.form-container').toggleClass('active')
      $('.layer-content').toggleClass('active')
      event.preventDefault()
    })
    $('.layer .btn').click((event)=>{
      $('.layer').toggleClass('active')
      $('.form-container').toggleClass('active')
      $('.layer-content').toggleClass('active')
      event.preventDefault()
    })
  }
  // hàm kiểm tra email---------------------
  const validateEmail=(email)=>{
    const regex =/[\w\.]+@\w+(\.\w+)+/gi
    const isEmail=regex.test(email);
    return isEmail;
  }
  //------------------------------------------
  $('.btn-close').click(function(){
    $('.form-floating span').remove()
    $('.form-floating input').css('border-color','#666666')
    $('.form-floating input').val('')
  })
  $('.btn').click(function(){
    var flag = true;
    var name=$('#name').val()
    var email=$('#email').val()
    var password=$('#password').val()
    var repassword=$('#re-password').val()
  
    $('.form-floating span').remove()
    $('.form-floating input').css('border-color','#666666')
    for(i=0;i<name.length;i++){
      if(name[i]>=0&&name[i]<=9){
        $('#name').closest('.form-floating').append('<span class="error">*Trong tên có số, xin thử lại!!!</span>')
        $('#name').css('border-color', '#EA4335')
        flag=false;
        break;
      }
    }
    if(email=="") {
      $('#email').closest('.form-floating').append('<span>*Email bắt buộc, xin hãy nhập!!!')
      $('#email').css('border-color', '#EA4335')
      flag=false;
    }
    else {
      if(!validateEmail(email)) {
        $('#email').closest('.form-floating').append('<span>*Email không hợp lệ, xin hãy nhập!!!')
        $('#email').css('border-color', '#EA4335')
        flag=false;
      }
    }
    if(repassword!=password){
      $('#re-password').closest('.form-floating').append('<span>*Mật khẩu không khớp, xin thử lại')
      $('#re-password').css('border-color', '#EA4335')
      flag=false;
    }
    if(flag) {
      $('.user').addClass('had-user')
      $('.user').html(name.charAt())
      localStorage.removeItem('account')
      localStorage.setItem('nameAccount',name)
      localStorage.setItem('account','true')
      updateAccount(account)
    }
  })
  //--------------------------------end modal sign-in sign-up-----------------------------------------------
  if(account=='true'){
    $('.user').addClass('had-user')
    let nameAccount=localStorage.getItem('nameAccount')
    $('.user').html(nameAccount.charAt())
    let a= $('*[data-bs-toggle="modal"][data-bs-target="#modal-1"]')
    $(a).attr('data-bs-toggle','offcanvas')
    $(a).attr('data-bs-target','#shopping-cart')
  }
  function updateAccount(account){
    if(account=='true'){
    let a= $('*[data-bs-toggle="modal"][data-bs-target="#modal-1"]')
    $(a).attr('data-bs-toggle','offcanvas')
    $(a).attr('data-bs-target','#shopping-cart')
    }
  }