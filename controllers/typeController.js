const { Type } = require("../models/models");
const ApiError = require("../error/ApiError");

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }
  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const type = await Type.findOne({
      where: { id },
    });
    return res.json(type);
  }
  async delete(req, res) {
    const { id } = req.params;
    // Предполагается, что у вас есть поле "id" в вашей модели Type
    // Ваш код для удаления типа по id
    try {
      await Type.destroy({ where: { id } });
      return res.json({ message: "Тип успешно удален" });
    } catch (error) {
      // Обработка ошибки
      console.error(error);
      return res.status(500).json({ error: "Ошибка удаления типа" });
    }
  }
  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const type = await Type.findByPk(id);

      if (!type) {
        throw new ApiError("type not found", 404);
      }

      // Обновляем поля title и video
      type.name = name;

      await type.save();

      return res.json(type);
    } catch (error) {
      // В случае ошибки возвращаем сообщение об ошибке
      return res.status(error.statusCode || 500).json({
        message: error.message || "Internal server error",
      });
    }
  }
}

module.exports = new TypeController();
