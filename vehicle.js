class Vehicle {

  constructor(x, y) {
    this.position = new Vector2D(x, y)
    this.velocity = new Vector2D(0, 0)
    this.acceleration = new Vector2D(0, 0)

    this.mass = 2
    this.color
  }

  set_mass(mass) {
    this.mass = mass
  }

  // calc_attraction_force(obj) {

  //   // Gravitational Constant
  //   const G = 1

  //   // distance betweem 2 objects
  //   const r = this.position
  //     .copy()
  //     .sub(obj.position)
  //     .mag()

  //   // getting direction of force
  //   const force = this.position
  //     .copy()
  //     .sub(obj.position)
  //     .normalize()

  //   // f = G * m1 * m2 / (r^2)
  //   force
  //     .mult(G * this.mass * obj.mass)
  //     .div(Math.pow(r, 2))
  //     .constraint(0.02, 0.04)

  //   return force
  // }

  apply_force(force) {
    force = force.copy()

    // acceleration = force / mass
    this.acceleration.add(force.div(this.mass))

  }

  update() {

    // calculating velocity
    this.velocity.add(this.acceleration)
    this.velocity.limit(4)

    // calculating position
    this.position.add(this.velocity)

    // resetting acceleration
    this.acceleration.mult(0)

  }

  display() {

    // calculating 3 points of a triangle

    const p2 = this.position.copy()

    const p1 = this.acceleration
      .copy()
      .set_mag(16)
      .mult(-1)
      .rotate_in_degree(12)
      .add(p2)

    const p3 = this.acceleration
      .copy()
      .set_mag(16)
      .mult(-1)
      .rotate_in_degree(-12)
      .add(p2)

    noStroke()
    fill(this.color)

    triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)

  }

}