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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const sgMail = require("@sendgrid/mail");
const config_1 = require("@nestjs/config");
let EmailService = class EmailService {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    async sendEmail(sendEmailDto) {
        const apiKey = this.configService.get('SENDGRID_API_KEY');
        if (!apiKey) {
            throw new Error('SendGrid API key is missing');
        }
        sgMail.setApiKey(apiKey);
        const { to, subject, text, html } = sendEmailDto;
        if (!text && !html) {
            throw new Error('Either text or html must be provided');
        }
        const contentArray = [];
        if (text) {
            contentArray.push({ type: 'text/plain', value: text });
        }
        if (html) {
            contentArray.push({ type: 'text/html', value: html });
        }
        const content = contentArray;
        const msg = {
            to,
            from: 'Imran.IT@ramaera.in',
            subject,
            content,
        };
        try {
            await sgMail.send(msg);
            console.log('✅ Email sent successfully');
        }
        catch (error) {
            console.error('❌ SendGrid Error:', error.response?.body || error.message);
            throw error;
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EmailService);
//# sourceMappingURL=email.service.js.map