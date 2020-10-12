const rotator  = document.getElementById('rotator');
  let isRotate = false;
  let startX   = 0;
  let endX     = 0;

rotator.addEventListener('mousedown', e => {
    startX   = e.offsetX
    isRotate = true
    rotator.classList.add("active");
});

rotator.addEventListener('mousemove', e => {
    if (isRotate === true) {
        endX = e.offsetX
        rotate()
    }
});

document.addEventListener('mouseup', e => {
    isRotate = false;
    rotator.classList.remove("active");
});


function bgPositionNumber(){
    let setBgPosition     = rotator.style.backgroundPositionX;
    let numberOnly        = setBgPosition.replace(/\D/g,'');
    return Number(numberOnly);
}

function rotate(){
    const glue            = document.getElementById('glue');
      let bgPosition      = bgPositionNumber();
      let glueHeight      = glue.clientHeight;
      let move            = 1; //move just 1px

    if(startX > endX){
        if(glueHeight > 0){
            glue.style.height = (glueHeight - move) + 'px';
            rotator.style.backgroundPosition = (bgPosition - move) + 'px 0px';
        }
    }
    else{
        glue.style.height = (glueHeight + move) + 'px';
        rotator.style.backgroundPosition = (bgPosition + move) + 'px 0px';
    }
}