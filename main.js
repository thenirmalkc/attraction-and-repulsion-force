const width = 800
const height = 600


// objects
let attractor
let repuslor
let vehicles = []


// forces
let attraction_force
let repulsion_force


let distance


function setup() {
	const canvas = createCanvas(width, height)
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2)
	background(80)

  attractor = new Attractor(width / 2 - 12, height / 2)

  repulsor = new Repulsor(width / 2 + 12, height / 2)

  for(let i = 0; i < 48; i ++) {
    vehicles.push(new Vehicle(Math.floor(Math.random() * width), Math.floor(Math.random() * height)))
    vehicles[i].mass = Math.random() * 2 + 1
  }
}


function draw() {
  background(80)

  for(let i = 0; i < vehicles.length; i ++) {
    attraction_force = attractor.calc_attraction_force(vehicles[i])
    vehicles[i].apply_force(attraction_force)

    vehicles[i].color = 'lime'

    let distance = repulsor.position
      .copy()
      .sub(vehicles[i].position)
      .mag()

    distance = Math.pow(distance, 2)

    // applying repulsion force when distance between vehicle and attractor is less than 4200
    if(distance < 4200) {
      repulsion_force = repulsor.calc_repulsion_force(vehicles[i])
      vehicles[i].apply_force(repulsion_force)

      vehicles[i].color = 'red'
    }

    vehicles[i].display()
    vehicles[i].update()

  }

  attractor.display()
  attractor.update()

  repulsor.display()
  repulsor.update()

}
