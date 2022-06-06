import { dbContext } from '../db/dbContext.js'

let fakeDb = {
  Burgers: [
    {
      name: 'Chicken',
      tomatos: true,
      desc: 'delicious'
    }
  ]
}
class BurgerService {


  async getBurgers() {
    return fakeDb.Burgers
  }
  async create(burgerData) {
    fakeDb.Burgers.push(burgerData)
    return burgerData
  }
  async remove(name) {
    fakeDb.Burgers = fakeDb.Burgers.filter(b => b.name != name)
    return fakeDb.Burgers
  }
}

export const burgerService = new BurgerService