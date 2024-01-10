const { AboutUs } = require('../models/models');
const ApiError = require('../error/ApiError');

class AboutUsController {
    async create(req, res) {
        const {title, video} = req.body;
        const about = await AboutUs.create({title, video})
        return res.json(about)
    }
    async getAll(req, res) {
        const abouts = await AboutUs.findAll();
        return res.json(abouts)
    }
    async update(req, res) {
        const { id } = req.params;
        const { title, video } = req.body;
        
        try {
            const about = await AboutUs.findByPk(id);
            
            if (!about) {
                throw new ApiError('About not found', 404);
            }
            
            // Обновляем поля title и video
            about.title = title;
            about.video = video;
            
            await about.save();
            
            return res.json(about);
        } catch (error) {
            // В случае ошибки возвращаем сообщение об ошибке
            return res.status(error.statusCode || 500).json({
                message: error.message || 'Internal server error',
            });
        }
    }
}
    
module.exports = new AboutUsController();