// src/email/email.service.ts
import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { ConfigService } from '@nestjs/config';
import { SendEmailDto } from './dto/send-email.dto';
import type { MailContent, MailDataRequired } from '@sendgrid/helpers/classes/mail';

@Injectable()
export class EmailService {
  constructor(private configService: ConfigService) {}

  async sendEmail(sendEmailDto: SendEmailDto): Promise<void> {
    const apiKey = this.configService.get<string>('SENDGRID_API_KEY');
    if (!apiKey) {
      throw new Error('SendGrid API key is missing');
    }

    sgMail.setApiKey(apiKey);

    const { to, subject, text, html } = sendEmailDto;

    if (!text && !html) {
      throw new Error('Either text or html must be provided');
    }

    const contentArray: MailContent[] = [];

    if (text) {
      contentArray.push({ type: 'text/plain', value: text });
    }

    if (html) {
      contentArray.push({ type: 'text/html', value: html });
    }

    // 👇 Ye line TypeScript ko guarantee deti hai ki content empty nahi hoga
    const content = contentArray as [MailContent, ...MailContent[]];

    const msg: MailDataRequired = {
      to,
      from: 'Imran.IT@ramaera.in',
      subject,
      content,
    };

    try {
      await sgMail.send(msg);
      console.log('✅ Email sent successfully');
    } catch (error) {
      console.error('❌ SendGrid Error:', error.response?.body || error.message);
      throw error;
    }
  }
}
