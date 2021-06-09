function createDot(x, y) {
    dot = createSprite(x,y,10,10);
    dot.shapeColor = "yellow";
    dotsGroup.add(dot);
}

function horizontalDots(x1,y1,x2,y2){
    for(var i = x1; i <= x2; i += 30){
        dot = createSprite(i,y1,10,10);
        dot.shapeColor = "yellow";
        dotsGroup.add(dot);
    }
}
function verticalDots(x1, y1, x2, y2){
    for(var i = y1; i <= y2; i += 30){
        dot = createSprite(x1,i,10,10);
        dot.shapeColor = "yellow";
        dotsGroup.add(dot);
    }
    
}