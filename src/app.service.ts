import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class AppService {

  public getHello(to: string) {

    sgMail.setApiKey(process.env.EMAIL_API_KEY);
    const msg = {
      to: to,
      from: 'info@tripnotision.com',
      subject: 'Test subject',
      text: 'This is test text',
      html: '<strong>This is test html</strong>',
    };
    sgMail.send(msg);

    return {
      message: `The mail has been sent to ${to}.`
    }

    
  }
}
