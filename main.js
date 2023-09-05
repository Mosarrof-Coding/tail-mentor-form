let Nmerr = document.querySelector('.fname-err');

function fname(){
    let Fname = document.querySelector('#name');
    if (Fname.value == '') {
        Nmerr.innerHTML = 'This field is Required';
    }else{
        Nmerr.innerHTML = "<i class='bx bx-check-circle text-2xl text-blue-400' ></i>";
    }
}
function Email(){
    let email = document.querySelector('#email');
    let mErr = document.querySelector('.mail-err');
    if (email.value == '') {
        mErr.innerHTML = 'This field is Required';
    }else{
        mErr.innerHTML = "<i class='bx bx-check-circle text-2xl text-blue-400' ></i>";
    }
}
function Phone(){
    let phone = document.querySelector('#phone');
    let phnErr = document.querySelector('.phnErr');
    if (phone.value == '') {
        phnErr.innerHTML = 'This field is Required';
    }else{
        phnErr.innerHTML = "<i class='bx bx-check-circle text-2xl text-blue-400' ></i>";
    }
}

// scroller------------
let scroller = document.querySelector('.scroller-body');
let circleIndicator = Array.from(document.querySelectorAll('.circleIndicator'));
let prvBtn = Array.from(document.querySelectorAll('.prvBtn'));
let nxtbtn =Array.from(document.querySelectorAll('.nxt-btn'));

let x = 0;
nxtbtn.map((item, index)=>{
    item.addEventListener('click', function(){
        if (x > '-3300') {
            x = x - 550;
            scroller.style.marginLeft = x + 'px';
        }
        circleIndicator.map((lol)=>{
            lol.classList.remove('activee');
        })
        circleIndicator[index + 1].classList.add('activee');
    })
})
prvBtn.map((item, index)=>{
    item.addEventListener('click', function(){
        if (x < 0) {
            x = x + 550;
            scroller.style.marginLeft = x + 'px';
        }
        circleIndicator.map((lol)=>{
            lol.classList.remove('activee')
        })
        circleIndicator[index].classList.add('activee');
    })
})