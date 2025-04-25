import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // E-Mail-Endpunkt für Kontaktformular
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { apartment, name, email, phone, persons, arrival, departure, message, privacy } = req.body;

      if (!email || !name || !apartment || !arrival || !departure || !privacy) {
        return res.status(400).json({ 
          success: false, 
          message: "Bitte füllen Sie alle Pflichtfelder aus." 
        });
      }

      // Formatiere die E-Mail-Inhalte
      const formattedPhone = phone ? phone : "Nicht angegeben";
      const subject = `Neue Anfrage für ${apartment === 'wohnung1' ? 'Wohnung 1' : 'Wohnung 2'}`;
      
      const htmlContent = `
        <h2>Neue Anfrage über das Kontaktformular</h2>
        <p><strong>Wohnung:</strong> ${apartment === 'wohnung1' ? 'Wohnung 1' : 'Wohnung 2'}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${formattedPhone}</p>
        <p><strong>Personen:</strong> ${persons}</p>
        <p><strong>Anreise:</strong> ${arrival}</p>
        <p><strong>Abreise:</strong> ${departure}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message || 'Keine Nachricht angegeben'}</p>
      `;

      const textContent = `
        Neue Anfrage über das Kontaktformular
        
        Wohnung: ${apartment === 'wohnung1' ? 'Wohnung 1' : 'Wohnung 2'}
        Name: ${name}
        E-Mail: ${email}
        Telefon: ${formattedPhone}
        Personen: ${persons}
        Anreise: ${arrival}
        Abreise: ${departure}
        
        Nachricht: 
        ${message || 'Keine Nachricht angegeben'}
      `;

      // Sende E-Mail an Besitzer (fewo.rossfeld@gmail.com)
      const emailSent = await sendEmail({
        to: "fewo.rossfeld@gmail.com",
        from: "fewo.rossfeld@gmail.com", // Muss verifizierte Absender-Adresse sein
        subject: subject,
        text: textContent,
        html: htmlContent,
        replyTo: email // So kann direkt auf die Anfrage geantwortet werden
      });

      if (emailSent) {
        res.status(200).json({ success: true, message: "Anfrage erfolgreich gesendet." });
      } else {
        res.status(500).json({ success: false, message: "Fehler beim Senden der Anfrage." });
      }
    } catch (error) {
      console.error("Fehler bei der Kontaktformular-Anfrage:", error);
      res.status(500).json({ 
        success: false, 
        message: "Ein Serverfehler ist aufgetreten. Bitte versuchen Sie es später erneut." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
