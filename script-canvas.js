// creating my Canvas on the Browser
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d') //pac-man variable
const pinky = canvas.getContext('2d')// pinky variable
canvas.width = window.innerWidth
canvas.height = window.innerHeight;


// ==========colors===========
const colorRed = 'rgba(255,26,104,1)'
// const colorBlue ='rgba(54,162,235,1)'
// const colorYellow = 'rgba(255,206,86,1)'
// const colorGreen = 'rgba(75,192,192,1)'

// ================ creating Pacman =================
// const radius = 50;
// const angle = Math.PI/180;
// ctx.beginPath();
// ctx.strokeStyle = colorYellow;
// ctx.fillStyle = colorYellow;

// ctx.lineWidth = 3;
// ctx.arc(350, 300, 25, angle*30, angle* 330, false)
// ctx.lineTo(350,300)
// ctx.closePath()
// ctx.stroke()
// ctx.fill()=colorYellow

//================== creating Pinky===============
// pinky.beginPath();
// pinky.strokeStyle = colorBlue;
// pinky.linewidth=3;
// pinky.moveTo(400,200)
// pinky.lineTo(400,200);
// pinky.stroke();
// pinky.beginPath();
// pinky.strokeStyle=(colorRed);
// pinky.lineWidth = 3;
// pinky.arc(350,200,30, angle*180 , angle * 0, false)
// pinky.lineTo(380,210)
// pinky.lineTo(380,240);
// pinky.lineTo(380,240);
// pinky.lineTo(370,240);
// pinky.lineTo(360,260);
// pinky.lineTo(350,240);
// pinky.lineTo(340,250);
// pinky.lineTo(330,250);
// pinky.lineTo(330,240);
// pinky.lineTo(310,250);
// pinky.lineTo(310,250);
// pinky.closePath()
// pinky.stroke();
// //=============creating eyes=========
// pinky.beginPath();
// pinky.strokeStyle=colorRed;
// pinky.lineWidth=3;
// pinky.arc(330, 200, 5, angle*0, angle*360 ,false)
// pinky.arc(370, 200, 5, angle*0, angle*360 ,false)
// pinky.stroke();
// pinky.fill();

//==================big square wall the blue Background =======================

class BigSquare {
    constructor(position, width, height) {
        this.position = position
        this.width = width
        this.height = height


    }
    draw() {

        ctx.fillStyle = 'darkblue';
        ctx.fillRect(this.position[0], this.position[0], this.height, this.width)
    }
}
const box = new BigSquare([0, 0], 1100, 1100);
box.draw();

//============================== Second black box ==========================

class Box1 extends BigSquare {
    constructor(position, width, height) { super(position, width, height) }
    draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.position[1], this.position[1], this.height, this.width)


    }
}
insideBox = new Box1([10, 10], 1050, 1050)
insideBox.draw();
// =============================third blue box=============

//i will just call first class the blue class with different values
const blue2 = new BigSquare([75, 50], 620, 920);
blue2.draw()

//=====================  creating pac man================
class PacMan {
    constructor({position}){
        this.position = position
       // this.velocity = velocity;
        // this.radius = 20

    }
    draw1() {
        ctx.beginPath()
        ctx.arc(this.position.x , this.position.y, 20, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.fillStyle = 'yellow'
        ctx.fill()
        ctx.closePath()

    }
}
const pacman1 = new PacMan({position : { x:42 , y: 42}})
pacman1.draw1()
window.addEventListener('keydown', check_Key)
function check_Key(k) 
{

    if (k.key === 'ArrowUp')                // pressing up key
    {
        pacman1.position.y -= 15
        animation()
    }
    else
        if (k.key === 'ArrowLeft') {     // pressing left key
            pacman1.position.x -= 15
            animation()
        }
        else if (k.key === 'ArrowDown') {       // pressing  down key
           
            pacman1.position.y += 15
            animation()
        }
        else if (k.key === 'ArrowRight')       // pressing right key
        {
            pacman1.position.x += 15
            animation()

        }
}

//========================= PacMan animation===============

function animation()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    box.draw()
    insideBox.draw()
    blue2.draw()
    box3.draw()
    box4.draw()
    pacman1.draw1()


}
//================================ horizontal rectangle =================

class middle {
    constructor({position}, {width}, {height}) {
        this.position = position
        this.width = width
        this.height = height


    }
    draw() {

        ctx.fillStyle = 'black';
        ctx.fillRect(this.position.x, this.position.y,this.width , this.height )
    }
}
const box3 = new middle({position: {x: 480,y:70 }},{width: 70}, {height: 1200});
box3.draw();
    // ============================== verticalrectangle =================

const box4 = new middle({position: {x: 70,y :350}},{ width: 950}, {height : 70})
box4.draw()

//=====================white balls=================
class Balls {
    constructor({position}){
        this.position = position
       // this.velocity = velocity;
         this.radius = 12

    }
    draw1() {
        ctx.beginPath()
        ctx.arc(this.position.x , this.position.y, this.radius, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.closePath()

    }
}
//const balls= new Balls()
//const pellets=[]
 for (let position1 = 80; position1 < 600; position1 +=30 )
 {
 const balls= new Balls({position:{x:(position1-40),y: position1}})
balls.draw1()
}
// pellete = new Balls(bo)