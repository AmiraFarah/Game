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
    constructor({ position }) {
        this.position = position
        // this.velocity = velocity;
        this.radius = 20

    }
    draw1() {
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2 - 0.75)
        ctx.lineTo(this.position.x, this.position.y)
        ctx.stroke()
        ctx.fillStyle = 'yellow'
        ctx.fill()
        ctx.closePath()

    }
}
const pacman1 = new PacMan({ position: { x: 42, y: 42 } })
pacman1.draw1()
window.addEventListener('keydown', check_Key)
function check_Key(k) {

    if (k.key === 'ArrowUp')                // pressing up key
    {
        pacman1.position.y -= 20
        animation()
    }
    else
        if (k.key === 'ArrowLeft') {     // pressing left key
            pacman1.position.x -= 20
            animation()

        }
        else if (k.key === 'ArrowDown') {       // pressing  down key

            pacman1.position.y += 18
            animation()
        }
        else if (k.key === 'ArrowRight')       // pressing right key
        {
            pacman1.position.x += 20
            animation()


        }
}

//========================= PacMan animation===============
function between(x, min, max) {
    return x >= min && x <= max;
  }
  
function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    box.draw()
    insideBox.draw()
    blue2.draw()
    box3.draw()
    box4.draw()
    pacman1.draw1()
    drawPellete()
    //ghost.draw1()
   // moveBall()    


}
//================================ horizontal rectangle =================

class middle {
    constructor({ position }, { width }, { height }) {
        this.position = position
        this.width = width
        this.height = height


    }
    draw() {

        ctx.fillStyle = 'black';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
const box3 = new middle({ position: { x: 480, y: 70 } }, { width: 70 }, { height: 1200 });
box3.draw();
// ============================== verticalrectangle =================

const box4 = new middle({ position: { x: 70, y: 350 } }, { width: 950 }, { height: 70 })
box4.draw()

//=====================white balls=================
class Balls {
    constructor({ position }) {
        this.position = position
        // this.velocity = velocity;
        this.radius = 12

    }
    draw1() {
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.closePath()

    }
    delete(x,y) {
        ctx.beginPath()
        ctx.arc(x,y, this.radius, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.fillStyle = 'black'
        ctx.fill()
        ctx.closePath()
    }
}
//=================drwaing white balls====================
function drawPellete() {
    const arr1 = []
    let i = 0;
    let j =0 ;
    for (let position1 = 90; position1 < 700; position1 += 50) {
        const balls = new Balls({ position: { x: (40), y: position1 } })
        arr1.push(balls);
        balls.draw1()
        i++
    }
     window.addEventListener('keydown', check)
    function check (k){
         if (k.key === 'ArrowDown')  {
        console.log(pacman1.position)
        //console.log(arr1)
            const closestToBall =arr1.filter((ball)=>{
             return between(pacman1.position.y,ball.position.y-30,ball.position.y+30)

            })
            const blackBalls = new Balls({position: { x: (closestToBall[0].position.x), y: closestToBall[0].position.y }})
            //console.log(closestToBall)
blackBalls.delete(closestToBall[0].position.x, closestToBall[0].position.y)  
console.log(arr1[0])
arr1.splice(0,1)       }
     }
    
  //  }
    //======================================================
    const arr2 = []

    for (let position3 = 300; position3 < 950; position3 += 50) {
        const balls = new Balls({ position: { x: 515, y: position3 - 200 } })
        arr2.push(balls);
        balls.draw1()
       
    }
    //======================================================
    const arr3 = []

    for (let position4 = 500; position4 < 1130; position4 += 50) {
        const balls = new Balls({ position: { x: 1030, y: position4 - 400 } })
        arr3.push(balls);
        balls.draw1()

    }
    //======================================================

    const arr4 = []

    for (let position2 = 90; position2 < 1060; position2 += 50) {
        const balls = new Balls({ position: { x: position2, y: 50 } })
        arr4.push(balls);
        balls.draw1()

    }
    //===================================================
    const arr5 = []

    for (let position5 = 70; position5 < 1000; position5 += 50) {
        const balls = new Balls({ position: { x: position5, y: 390 } })
        arr5.push(balls);
        balls.draw1()
    }
    //===================================================
    const arr6 = []

    for (let position6 = 60; position6 < 1060; position6 += 50) {
        const balls = new Balls({ position: { x: position6, y: 730 } })
        arr6.push(balls);
        balls.draw1()

    }
     function deleteBalls() {
         
arr1.splice(1,1) 
console.log(arr1[0]) 
const del = new Balls({position : arr1[0]}) 
console.log(arr1[0])
console.log(position)
del.delete()
  console.log('deleted')
     }
    }
//========================== Ghost======================


class Ghost {
    constructor({ position }) {
        this.position = position
        // this.velocity = velocity;
        this.radius = 20

    }
    draw1() {
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.fillStyle = 'red'
        ctx.fill()
        ctx.closePath()

    }
}
//const ghost = new Ghost({ position: { x: 500, y: 42 } })

 
// move ghost random
function moveRandom() {
    //canvas width and height is same in your case, so multiplied by one to get both x and y. This will give x, y values within canvas.
    return Math.floor(Math.random()*canvas.width);
   }
// function moveBall()
// {
//     let x = moveRandom();
//     let y = moveRandom();
//     console.log(x)
//     console.log(y)
    
//     const ghost = new Ghost({position:{ x, y}})
//     function animate(){
//         requestAnimationFrame(animate)
//         ghost.draw1();

//     }
//     animate()
    
//   }
  