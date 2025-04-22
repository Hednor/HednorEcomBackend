"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const image_schema_1 = require("./schemas/image.schema");
let ImageService = class ImageService {
    imageModel;
    constructor(imageModel) {
        this.imageModel = imageModel;
    }
    async create(input) {
        const created = new this.imageModel(input);
        return created.save();
    }
    async findAll() {
        return this.imageModel.find().exec();
    }
    async findOne(id) {
        const image = await this.imageModel.findById(id);
        if (!image)
            throw new common_1.NotFoundException('Image not found');
        return image;
    }
    async update(id, input) {
        const updated = await this.imageModel.findByIdAndUpdate(id, input, {
            new: true,
        });
        if (!updated)
            throw new common_1.NotFoundException('Image not found');
        return updated;
    }
    async remove(id) {
        const deleted = await this.imageModel.findByIdAndDelete(id);
        if (!deleted)
            throw new common_1.NotFoundException('Image not found');
        return deleted;
    }
};
exports.ImageService = ImageService;
exports.ImageService = ImageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(image_schema_1.Image.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ImageService);
//# sourceMappingURL=image.service.js.map