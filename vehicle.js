class Vehicle {

  constructor(x, y) {
    this.position = new Vector2D(x, y)
    this.velocity = new Vector2D(0, 0)
    this.acceleration = new Vector2D(0, 0)

    this.mass = 4
    this.color
  }

  set_mass(mass) {
    this.mass = mass
  }

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

    const p2 = this.velocity
      .copy()
      .set_mag(8)
      .add(this.position)

    const p1 = this.velocity
      .copy()
      .set_mag(8)
      .mult(-1)
      .rotate_in_degree(16)
      .add(this.position)

    const p3 = this.velocity
      .copy()
      .set_mag(8)
      .mult(-1)
      .rotate_in_degree(-16)
      .add(this.position)

    noStroke()
    fill(this.color)

    triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)

  }

}