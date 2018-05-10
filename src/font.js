import fontkit from 'fontkit';

// fontkit.open
var a = null;
let FONT = null;
var file = document.getElementById('file');

file.addEventListener('change', (input)=>{
    console.log(input);
    let fontFilePath = input.target.files[0].path;
    FONT = fontkit.openSync(fontFilePath);
})