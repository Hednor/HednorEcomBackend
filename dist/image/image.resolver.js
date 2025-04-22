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
exports.ImageResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const image_service_1 = require("./image.service");
const image_schema_1 = require("./schemas/image.schema");
const create_image_input_1 = require("./dto/create-image.input");
const update_image_input_1 = require("./dto/update-image.input");
let ImageResolver = class ImageResolver {
    service;
    constructor(service) {
        this.service = service;
    }
    createImage(input) {
        return this.service.create(input);
    }
    findAllImages() {
        return this.service.findAll();
    }
    findImage(id) {
        return this.service.findOne(id);
    }
    updateImage(input) {
        return this.service.update(input.id, input);
    }
    removeImage(id) {
        return this.service.remove(id);
    }
};
exports.ImageResolver = ImageResolver;
__decorate([
    (0, graphql_1.Mutation)(() => image_schema_1.Image),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_image_input_1.CreateImageInput]),
    __metadata("design:returntype", void 0)
], ImageResolver.prototype, "createImage", null);
__decorate([
    (0, graphql_1.Query)(() => [image_schema_1.Image]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImageResolver.prototype, "findAllImages", null);
__decorate([
    (0, graphql_1.Query)(() => image_schema_1.Image),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImageResolver.prototype, "findImage", null);
__decorate([
    (0, graphql_1.Mutation)(() => image_schema_1.Image),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_image_input_1.UpdateImageInput]),
    __metadata("design:returntype", void 0)
], ImageResolver.prototype, "updateImage", null);
__decorate([
    (0, graphql_1.Mutation)(() => image_schema_1.Image),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImageResolver.prototype, "removeImage", null);
exports.ImageResolver = ImageResolver = __decorate([
    (0, graphql_1.Resolver)(() => image_schema_1.Image),
    __metadata("design:paramtypes", [image_service_1.ImageService])
], ImageResolver);
//# sourceMappingURL=image.resolver.js.map