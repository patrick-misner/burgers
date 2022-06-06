import { burgerService } from "../services/BurgerService"
import BaseController from '../utils/BaseController'
import { logger } from "../utils/Logger"

export class BurgersController extends BaseController  {

  constructor(){
    super('api/burgers')
    this.router
    .get('', this.getAll)
    .post('', this.create)
    .delete('/:name', this.remove)
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAll(req, res, next) {
  try {
    const burgers = await burgerService.getBurgers()
    return res.send(burgers)
  } catch (error) {
    next(error)
  }
  }


  async create(req, res, next) {
      try {
        const burger = await burgerService.create(req.body)
        return res.send(burger)
      } catch (error) {
        next(error)
      }
  }

  /**
   * Deletes a value using req params
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async remove(req, res, next) {
      try {
        logger.log(req.params.name)
        const burger = await burgerService.remove(req.params.name)
        return res.send(burger)
      } catch (error) {
        next(error)
      }
  }

}

