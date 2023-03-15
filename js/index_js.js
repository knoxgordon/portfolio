function showpop(sel) {
    console.log(sel);
    console.log('show');
    document.querySelector(sel).className = 'show';
    document.querySelector("#popup-section").className = 'show';
 }

function hidepop(sel) {
    console.log(sel);
    console.log('hide');
    document.querySelector(sel).className = 'hide';
    document.querySelector("#popup-section").className = 'hide';
 }