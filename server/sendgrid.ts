import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.error("WARNUNG: SENDGRID_API_KEY Umgebungsvariable nicht gefunden!");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY as string);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string; 
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const emailData: any = {
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    };
    
    if (params.replyTo) {
      emailData.replyTo = params.replyTo;
    }
    
    await mailService.send(emailData);
    console.log('E-Mail erfolgreich gesendet');
    return true;
  } catch (error) {
    console.error('SendGrid E-Mail-Fehler:', error);
    return false;
  }
}