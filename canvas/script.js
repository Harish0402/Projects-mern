var canvas = document.getElementById("mycanvas")

// console.log(canvas)

??


//const grad = ctx.createLinearGradient(0,0,0,130)
//grad.addColorStop(0,"Orange")
//grad.addColorStop(0.4,"White")
//grad.addColorStop(0.6,"White")
//grad.addColorStop(1,"green")

//ctx.fillStyle = grad
//ctx.fillRect(0,0,130,130)

const radial = ctx.createRadialGradient(150,150,15,150,150,150)
radial.addColorStop(0,"lightblue")
radial.addColorStop(0.4,"yellow")
radial.addColorStop(1,"darkblue")

ctx.beginPath();
ctx.arc(250,40,40,0,3*Math.PI)
ctx.fillStyle = radial
ctx.fill()
ctx.stroke()

const grad = ctx.createLinearGradient(100,100, 200,100)
grad.addColorStop(0,"red")
grad.addColorStop(0.7,"blue")

grad.addColorStop(1,"orange")

ctx.font = "50px Arial"
 ctx.fillStyle = grad
 ctx.fillText("Hello Class",100,100)
 ctx.fillStyle("red")


ctx.font = "50px Arial"
ctx.strokeStyle = grad
ctx.strokeText("Hello Class ",100,100)



// const radial = ctx.createRadialGradient(120,120,20,120,120,30)
// radial.addColorStop(0,"yellow")
// radial.addColorStop(0.2,"blue")
// radial.addC