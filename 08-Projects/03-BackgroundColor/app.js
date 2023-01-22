window.onload = () =>{
    main();
}

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click',function() {
        const bgColor = generateRGBcolor();
        root.style.backgroundColor = bgColor;
    });

}
// Step--> 2. Random Color generator function
function generateRGBcolor() {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;

}
