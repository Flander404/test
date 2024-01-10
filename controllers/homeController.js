const { Home } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

class HomeController {
  async create(req, res) {
    const { img } = req.files;
    let fileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, "..", "homeimg", fileName));
    const home = await Home.create({ img: fileName, })
    return res.json(home)
  }
  async getAll(req, res) {
    const homes = await Home.findAll();
    return res.json(homes)
  }
  async getOne(req, res) {
    const { id } = req.params;
    const home = await Home.findOne({
        where: { id },
    });
    return res.json(home)
  }
  async delete(req, res) {
    const {id} = req.params

    try{
        await Home.destroy({ where: {id} })
        return res.json({ message: "Изображение успешно удалено" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Ошибка удаления изображения" });
    }
  }
}

module.exports = new HomeController();