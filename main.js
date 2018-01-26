init();
let n = 1;

setInterval(() => {
    Leave(getImage(n)).one('transitionend', (e) => {Enter($(e.currentTarget))})
    Current(getImage(n+1))
    getPoint(n+1).addClass('active').siblings().removeClass('active')
    n += 1;
}, 1500)


function x(n){
  return (n % 3 == 0)?3:n%3;

}












function getImage(n){
  return $(`.images > img:nth-child(${(x(n))})`);
}

function Leave($node){
  return $node.removeClass('current enter').addClass('leave');
}

function Enter($node){
  return $node.removeClass('leave').addClass('enter');
}

function Current($node){
  return $node.removeClass('enter leave').addClass('current');
}
function getPoint(n){
  return $(`.bar > .small:nth-child(${x(n)})`)
}


function init(){
  Enter(Current(getImage(1)).siblings())
  getPoint(1).addClass('active').siblings().removeClass('active')
}