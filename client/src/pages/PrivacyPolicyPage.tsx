import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicyPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F8F4E8' }}>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6" style={{ color: '#325670' }}>
            {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
          </h1>

          {language === 'de' ? (
            // Deutsche Version
            <div className="space-y-6 text-gray-700">
              <p className="font-semibold">
                Stand: April 2025
              </p>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>1. Verantwortliche Stelle</h2>
                <p className="mb-3">
                  Ferienhaus Crailsheim-Roßfeld<br />
                  Claudia Boger<br />
                  Im Schanzbuck<br />
                  74564 Crailsheim-Roßfeld<br />
                  E-Mail: fewo.rossfeld@gmail.com
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>2. Erhebung und Verwendung personenbezogener Daten</h2>
                <p className="mb-3">
                  Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer Buchung oder Anfrage mitteilen. Welche Daten erhoben werden, ist aus den entsprechenden Eingabeformularen ersichtlich. Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gespeichert.
                </p>
                <p className="mb-3">
                  Wir verwenden die von Ihnen mitgeteilten Daten zur Bearbeitung Ihrer Anfragen und zur Abwicklung der mit Ihnen geschlossenen Verträge.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>3. Datenkategorien</h2>
                <p className="mb-3">
                  Folgende Datenkategorien werden verarbeitet:
                </p>
                <ul className="list-disc pl-6 mb-3">
                  <li>Stammdaten (Name, Adresse)</li>
                  <li>Kontaktdaten (Telefonnummer, E-Mail-Adresse)</li>
                  <li>Buchungsdaten (Anreise, Abreise, Anzahl der Gäste)</li>
                  <li>Zahlungsdaten</li>
                  <li>Kommunikationsdaten</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>4. Rechtsgrundlage</h2>
                <p className="mb-3">
                  Die Verarbeitung der Daten erfolgt auf folgender Rechtsgrundlage:
                </p>
                <ul className="list-disc pl-6 mb-3">
                  <li>Die Datenverarbeitung zum Zweck der Vertragsabwicklung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO.</li>
                  <li>Die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung (z.B. steuerliche Aufbewahrungspflichten) erfolgt gemäß Art. 6 Abs. 1 lit. c DSGVO.</li>
                  <li>Für Zwecke der Direktwerbung erfolgt die Verarbeitung aufgrund unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>5. Speicherdauer</h2>
                <p className="mb-3">
                  Die personenbezogenen Daten werden für die Dauer der Geschäftsbeziehung gespeichert, insbesondere solange diese zur Erfüllung des mit Ihnen geschlossenen Vertrages erforderlich sind. Darüber hinaus speichern wir Ihre Daten für die Erfüllung steuerlicher und handelsrechtlicher Pflichten für die gesetzlich vorgeschriebenen Zeiträume, in der Regel für 10 Jahre.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>6. Ihre Rechte</h2>
                <p className="mb-3">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der in unserem Impressum angegebenen Adresse an uns wenden.
                </p>
                <p className="mb-3">
                  Im Einzelnen haben Sie folgende Rechte:
                </p>
                <ul className="list-disc pl-6 mb-3">
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>7. Weitergabe von Daten</h2>
                <p className="mb-3">
                  Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
                </p>
                <ul className="list-disc pl-6 mb-3">
                  <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben (Art. 6 Abs. 1 lit. a DSGVO)</li>
                  <li>die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben (Art. 6 Abs. 1 lit. f DSGVO)</li>
                  <li>für den Fall, dass für die Weitergabe eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO)</li>
                  <li>es gesetzlich zulässig und für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO)</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>8. Datensicherheit</h2>
                <p className="mb-3">
                  Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der Regel handelt es sich dabei um eine 256 Bit Verschlüsselung. Falls Ihr Browser keine 256-Bit Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie zurück. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.
                </p>
                <p className="mb-3">
                  Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>9. Cookies</h2>
                <p className="mb-3">
                  Unsere Website verwendet Cookies. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies", die nach Ende Ihres Besuchs automatisch gelöscht werden. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
                </p>
                <p className="mb-3">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
                <p className="mb-3">
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2025. Aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.
                </p>
              </section>
              
            </div>
          ) : (
            // Englische Version
            <div className="space-y-6 text-gray-700">
              <p className="font-semibold">
                Last updated: April 2025
              </p>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>1. Responsible Party</h2>
                <p className="mb-3">
                  Ferienhaus Crailsheim-Roßfeld<br />
                  Claudia Boger<br />
                  Im Schanzbuck<br />
                  74564 Crailsheim-Roßfeld<br />
                  Email: fewo.rossfeld@gmail.com
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>2. Collection and Use of Personal Data</h2>
                <p className="mb-3">
                  We collect personal data when you provide it to us as part of your booking or inquiry. The data that is collected can be seen from the corresponding input forms. When contacting us (e.g., via contact form or email), the user's information is stored for processing the contact request and its handling.
                </p>
                <p className="mb-3">
                  We use the data you provide to process your inquiries and to execute the contracts concluded with you.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>3. Data Categories</h2>
                <p className="mb-3">
                  The following data categories are processed:
                </p>
                <ul className="list-disc pl-6 mb-3">
                  <li>Master data (name, address)</li>
                  <li>Contact data (phone number, email address)</li>
                  <li>Booking data (arrival, departure, number of guests)</li>
                  <li>Payment data</li>
                  <li>Communication data</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>4. Legal Basis</h2>
                <p className="mb-3">
                  The processing of data is based on the following legal grounds:
                </p>
                <ul className="list-disc pl-6 mb-3">
                  <li>Data processing for the purpose of contract execution is carried out in accordance with Art. 6 Para. 1 lit. b GDPR.</li>
                  <li>Processing for the fulfillment of a legal obligation (e.g., tax retention obligations) is carried out in accordance with Art. 6 Para. 1 lit. c GDPR.</li>
                  <li>For direct marketing purposes, processing is carried out based on our legitimate interest in accordance with Art. 6 Para. 1 lit. f GDPR.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>5. Storage Duration</h2>
                <p className="mb-3">
                  Personal data is stored for the duration of the business relationship, especially as long as it is necessary for the fulfillment of the contract concluded with you. In addition, we store your data for the fulfillment of tax and commercial law obligations for the legally prescribed periods, usually for 10 years.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>6. Your Rights</h2>
                <p className="mb-3">
                  You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have a right to correction, blocking, or deletion of this data. For this as well as for further questions on the topic of data protection, you can contact us at any time at the address given in our imprint.
                </p>
                <p className="mb-3">
                  In detail, you have the following rights:
                </p>
                <ul className="list-disc pl-6 mb-3">
                  <li>Right to information (Art. 15 GDPR)</li>
                  <li>Right to rectification (Art. 16 GDPR)</li>
                  <li>Right to erasure (Art. 17 GDPR)</li>
                  <li>Right to restriction of processing (Art. 18 GDPR)</li>
                  <li>Right to data portability (Art. 20 GDPR)</li>
                  <li>Right to object (Art. 21 GDPR)</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>7. Data Transfer</h2>
                <p className="mb-3">
                  Your personal data will not be transmitted to third parties for purposes other than those listed below. We will only pass on your personal data to third parties if:
                </p>
                <ul className="list-disc pl-6 mb-3">
                  <li>You have given your express consent to this (Art. 6 Para. 1 lit. a GDPR)</li>
                  <li>The disclosure is necessary for the assertion, exercise, or defense of legal claims and there is no reason to assume that you have an overriding interest worthy of protection in the non-disclosure of your data (Art. 6 Para. 1 lit. f GDPR)</li>
                  <li>There is a legal obligation to disclose (Art. 6 Para. 1 lit. c GDPR)</li>
                  <li>It is legally permissible and necessary for the processing of contractual relationships with you (Art. 6 Para. 1 lit. b GDPR)</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>8. Data Security</h2>
                <p className="mb-3">
                  We use the widespread SSL (Secure Socket Layer) procedure in conjunction with the highest level of encryption supported by your browser within the website visit. Usually, this is a 256-bit encryption. If your browser does not support 256-bit encryption, we use 128-bit v3 technology instead. Whether an individual page of our website is encrypted for transmission can be recognized by the closed representation of the key or lock symbol in the lower status bar of your browser.
                </p>
                <p className="mb-3">
                  We also use appropriate technical and organizational security measures to protect your data against accidental or intentional manipulation, partial or complete loss, destruction, or against unauthorized access by third parties. Our security measures are continuously improved in line with technological developments.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>9. Cookies</h2>
                <p className="mb-3">
                  Our website uses cookies. Cookies are small text files that are stored on your computer and saved by your browser. Most of the cookies we use are so-called "session cookies," which are automatically deleted at the end of your visit. Other cookies remain stored on your device until you delete them. These cookies allow us to recognize your browser on your next visit.
                </p>
                <p className="mb-3">
                  You can set your browser to inform you about the placement of cookies and to allow cookies only in individual cases, to exclude the acceptance of cookies for certain cases or in general, and to enable the automatic deletion of cookies when closing the browser. Disabling cookies may limit the functionality of this website.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>10. Currency and Amendment of this Privacy Policy</h2>
                <p className="mb-3">
                  This privacy policy is currently valid and has the status of April 2025. Due to changed legal or regulatory requirements, it may be necessary to adapt this privacy policy.
                </p>
              </section>
              
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;