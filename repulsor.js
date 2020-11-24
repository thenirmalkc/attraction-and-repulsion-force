class Repulsor {

  constructor(x, y) {
    this.position = new Vector2D(x, y)
    this.velocity = new Vector2D(0, 0)
    this.acceleration = new Vector2D(0, 0)

    this.mass = 8
  }


  calc_repulsion_force(obj) {
    // Gravitational Constant
    const G = 1

    // distance betweem 2 objects
    const r = this.position
      .copy()
      .sub(obj.position)
      .mag()

    // getting direction of force
    const force = this.position
      .copy()
      .sub(obj.position)
      .normalize()
      .mult(-1)

    // f = G * m1 * m2 / (r^2)
    force
      .mult(G * this.mass * obj.mass)
      .div(Math.pow(r, 2))
      .constraint(0.4, 0.8)

    return force
  }

  apply_force(force) {
    force = force.copy()

    // acceleration = force / mass
    this.acceleration.add(force.div(this.mass))

  }

  update() {

    // calculating velocity
    this.velocity.add(this.acceleration)
    this.velocity.limit(0.1)

    // calculating position
    this.position.add(this.velocity)

    // resetting acceleration
    this.acceleration.mult(0)

  }



  display() {
    noStroke()
    fill('orangered')
    circle(this.position.x, this.position.y, this.mass * 2)
  }

}