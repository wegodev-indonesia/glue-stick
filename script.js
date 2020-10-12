const rotator  = document.getElementById('rotator');
  let start    = 0;
  let end      = 0;

rotator.addEventListener('mousedown', e => {
    start = e.offsetX;
});

rotator.addEventListener('mouseup', e => {
    end = e.offsetX;
    rotate(start, end)
});

function bgPositionNumber(){
    let setBgPosition    = rotator.style.backgroundPositionX;
    let numberOnly       = setBgPosition.replace(/\D/g,'');
    return Number(numberOnly);
}

function rotate(start, end){
    const glue            = document.getElementById('glue');
      let bgPosition      = bgPositionNumber();
      let glueHeight      = glue.clientHeight;
      let newBgPosition   = 0;
      let newGlueHeight   = 0;
      let move            = 17;
    
    if(start > end){
        newBgPosition     = bgPosition + move;
        console.log(newBgPosition);
        newGlueHeight     = glueHeight + move;
        glue.style.height = newGlueHeight + 'px';
        rotator.style.backgroundPosition = newBgPosition + 'px 0px';
    }
    else{
        newBgPosition     = bgPosition - move;
        newGlueHeight     = glueHeight - move;
        glue.style.height = newGlueHeight + 'px';
        rotator.style.backgroundPosition = newBgPosition + 'px 0px';
    }
}