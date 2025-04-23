import { ConfigService } from '@nestjs/config';
import { SendEmailDto } from './dto/send-email.dto';
export declare class EmailService {
    private configService;
    constructor(configService: ConfigService);
    sendEmail(sendEmailDto: SendEmailDto): Promise<void>;
}
