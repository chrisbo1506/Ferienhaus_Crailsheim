import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F8F4E8' }}>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6" style={{ color: '#325670' }}>
            {language === 'de' ? 'Allgemeine Geschäftsbedingungen' : 'Terms and Conditions'}
          </h1>
          
          {language === 'de' ? (
            // Deutsche Version
            <div className="space-y-6 text-gray-700">
              <p className="font-semibold">
                Stand: April 2025
              </p>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>1. Geltungsbereich</h2>
                <p className="mb-3">
                  Diese Allgemeinen Geschäftsbedingungen gelten für Verträge über die mietweise Überlassung von Ferienwohnungen im Ferienhaus Crailsheim-Roßfeld, Im Schanzbuck, 74564 Crailsheim-Roßfeld.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>2. Vertragsabschluss</h2>
                <p className="mb-3">
                  Diese Unterkunft wird von einem privaten Vermieter verwaltet (einer Partei, die nicht im Rahmen ihrer gewerblichen, geschäftlichen oder beruflichen Tätigkeit handelt). Das EU-Verbraucherrecht, einschließlich Widerrufsrecht, gilt nicht für die Buchung der Unterkunft, sie wird aber von den nachfolgend festgelegten Stornierungsbedingungen abgedeckt.
                </p>
                <p className="mb-3">
                  2.1 Mit Ihrer Buchungsanfrage bieten Sie verbindlich den Abschluss eines Mietvertrages an.
                </p>
                <p className="mb-3">
                  2.2 Der Vertrag kommt mit der Bestätigung Ihrer Buchung durch den Vermieter zustande. Die Bestätigung kann auch per E-Mail oder anderen elektronischen Kommunikationsmitteln erfolgen.
                </p>
                <p className="mb-3">
                  2.3 Die Buchung erfolgt durch den buchenden Gast auch für alle in der Buchung mit aufgeführten Personen, für deren Vertragsverpflichtungen der buchende Gast wie für seine eigenen Verpflichtungen einsteht.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>3. Preise und Zahlungen</h2>
                <p className="mb-3">
                  3.1 Die ausgewiesenen Preise sind Endpreise und beinhalten die gesetzliche Mehrwertsteuer sowie alle Nebenkosten, soweit nicht anders angegeben.
                </p>
                <p className="mb-3">
                  3.2 Eine Kaution in Höhe von 50,00 Euro ist spätestens mit der Restzahlung zu leisten. Bei einer Belegung ab 4 Personen erhöht sich die Kaution auf 100,00 Euro. Bei schadloser Rückgabe der Unterkunft wird diese spätestens am 3. Tag nach Abreise zurückerstattet. Sondervereinbarungen zwischen Vermieter und Mieter sind möglich.
                </p>
                <p className="mb-3">
                  3.3 Bei Vertragsabschluss ist eine Anzahlung in Höhe von 30% des Gesamtpreises zu leisten. Die Restzahlung ist bis spätestens 30 Tage vor Mietbeginn fällig. Die Zahlungen können per PayPal, Direktüberweisung oder in bar erfolgen.
                </p>
                <p className="mb-3">
                  3.4 Bei kurzfristigen Buchungen (weniger als 30 Tage vor Anreise) ist der gesamte Mietpreis sofort fällig.
                </p>
                <p className="mb-3">
                  3.5 Die Nutzung der E-Ladestation wird nach Verbrauch abgerechnet und ist bei Abreise per PayPal, Direktüberweisung oder in bar zu bezahlen.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>4. An- und Abreise</h2>
                <p className="mb-3">
                  4.1 Die Anreise erfolgt am Anreisetag ab 15:00 Uhr. Die Abreise hat am Abreisetag bis 11:00 Uhr zu erfolgen.
                </p>
                <p className="mb-3">
                  4.2 Abweichende An- und Abreisezeiten können mit dem Vermieter individuell vereinbart werden.
                </p>
                <p className="mb-3">
                  4.3 Der Zugang erfolgt über elektronische Codeschlösser. Die entsprechenden Codes werden rechtzeitig vor Anreise mitgeteilt.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>5. Mietdauer und Nutzung</h2>
                <p className="mb-3">
                  5.1 Die Mindestmietdauer beträgt 2 Übernachtungen, sofern nicht anders vereinbart.
                </p>
                <p className="mb-3">
                  5.2 Am Anreisetag wird die Ferienwohnung ab 15:00 Uhr zur Verfügung gestellt. Am Abreisetag ist die Wohnung bis 11:00 Uhr zu verlassen. Die Wohnung muss besenrein und frei von Müll und persönlichen Gegenständen übergeben werden. Bei Nichteinhaltung der besenreinen Übergabe wird eine Gebühr von 25 € fällig.
                </p>
                <p className="mb-3">
                  5.3 Eine Weitervermietung oder Untervermietung der Unterkunft an Dritte ist nicht gestattet. Ebenso ist eine Nutzung der Wohnung zur Erzielung von Einkünften nicht erlaubt.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>6. Rücktritt und Stornierung</h2>
                <p className="mb-3">
                  6.1 Sie können jederzeit vor Mietbeginn vom Mietvertrag zurücktreten. Der Rücktritt muss schriftlich erklärt werden. Maßgeblich ist der Eingang der Rücktrittserklärung beim Vermieter.
                </p>
                <p className="mb-3">
                  6.2 Im Falle des Rücktritts sind Sie zum Ersatz des entstandenen Schadens verpflichtet. Bei Stornierung werden folgende Stornierungsgebühren fällig:
                </p>
                <ul className="list-disc pl-6 mb-3">
                  <li>bis 1 Tag vor Anreise: 25 €</li>
                  <li>weniger als 1 Tag vor Anreise oder bei Nichtanreise: 75% des Gesamtpreises</li>
                </ul>
                <p className="mb-3">
                  6.3 Eine Ersatzperson, die zu den gleichen Bedingungen die Ferienwohnung übernimmt, kann von Ihnen gestellt werden. Eine schriftliche Benachrichtigung genügt.
                </p>
                <p className="mb-3">
                  6.4 Bei bereits im Voraus geleisteten Mietvorauszahlungen wird der Restbetrag zurückerstattet. Bei Nichtanreise ohne vorherige Benachrichtigung bis zum Tag der Anreise behält der Vermieter das Recht, die Unterkunft weiter zu vermieten. Ein Recht auf Bezug der Wohnung besteht dann nicht mehr. Bei einer früheren Abreise als gebucht, verfällt die bereits geleistete Zahlung für die restliche Zeit.
                </p>
                <p className="mb-3">
                  6.5 Der Vermieter verpflichtet sich bei Nichtbereitstellung der Unterkunft infolge höherer Gewalt oder aus Gründen, die der Vermieter zu vertreten hat, dem Mieter die bereits geleisteten Zahlungen zurückzuzahlen.
                </p>
                <p className="mb-3">
                  6.6 Der Vermieter ist berechtigt, den Vertrag zu kündigen, wenn der Mieter wiederholt gegen die AGB oder das Hausrecht verstößt. Der Mieter verpflichtet sich, bei einer Vertragskündigung durch den Vermieter keine Schadensersatzansprüche geltend zu machen, sofern der Grund für die Kündigung nicht durch den Vermieter zu vertreten ist.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>7. Pflichten des Mieters</h2>
                <p className="mb-3">
                  7.1 Die Ferienwohnung darf nur mit der im Vertrag angegebenen Personenzahl belegt werden. Die maximale Belegung beträgt 6 Personen.
                </p>
                <p className="mb-3">
                  7.2 Der Hauptmieter erklärt sich einverstanden, mit der Buchung der Unterkunft eine Kopie seines Personalausweises an den Vermieter zu übermitteln. Bei Anmietung durch Firmen entfällt diese Verpflichtung.
                </p>
                <p className="mb-3">
                  7.3 Der Mieter verpflichtet sich, die Wohnung und das Inventar pfleglich zu behandeln.
                </p>
                <p className="mb-3">
                  7.4 Das Rauchen ist im gesamten Gebäude nicht gestattet. Das Rauchen ist nur im Außenbereich erlaubt. Ein Aschenbecher steht auf dem Bistrotisch vor dem Eingang bereit.
                </p>
                <p className="mb-3">
                  7.5 Haustiere sind nur nach vorheriger Absprache und gegen eine zusätzliche Gebühr gestattet.
                </p>
                <p className="mb-3">
                  7.6 Partys oder Gruppenveranstaltungen sind in der Unterkunft und auf dem Gelände nicht erlaubt.
                </p>
                <p className="mb-3">
                  7.7 Die Internetnutzung ist gestattet, soweit diese nicht gegen geltendes Recht verstößt.
                </p>
                <p className="mb-3">
                  7.8 Der Mieter haftet für selbst verursachte Schäden am Mietobjekt und am Inventar in vollem Umfang.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>8. Haftung</h2>
                <p className="mb-3">
                  8.1 Der Vermieter haftet für die Richtigkeit der Beschreibung des Mietobjektes und die ordnungsgemäße Erbringung der vertraglich vereinbarten Leistungen.
                </p>
                <p className="mb-3">
                  8.2 Die Haftung des Vermieters für Sachschäden ist ausgeschlossen, soweit der Schaden nicht durch den Vermieter oder dessen Erfüllungsgehilfen vorsätzlich oder grob fahrlässig herbeigeführt wurde.
                </p>
                <p className="mb-3">
                  8.3 Der Vermieter haftet nicht für den Verlust oder die Beschädigung persönlicher Gegenstände des Mieters.
                </p>
                <p className="mb-3">
                  8.4 Für kurzfristigen Ausfall öffentlicher Versorgung wie Strom und Wasser ist der Vermieter nicht haftbar. Eine Preisminderung ist in diesen Fällen ausgeschlossen. Gleiches gilt bei höherer Gewalt.
                </p>
                <p className="mb-3">
                  8.5 Der Mieter ist verpflichtet, jegliche während seiner Mietzeit entstandenen Schäden dem Vermieter unverzüglich mitzuteilen.
                </p>
                <p className="mb-3">
                  8.6 Die Benutzung der Ferienwohnung, des Grundstücks und der Außenanlagen erfolgt auf eigene Gefahr.
                </p>
                <p className="mb-3">
                  8.7 Der Vermieter ist berechtigt, notwendige Reparaturen oder Wartungsarbeiten während des Aufenthalts durchzuführen, sofern diese nicht mehr als eine minimale Beeinträchtigung darstellen. Der Vermieter wird den Mieter rechtzeitig darüber informieren, dass Reparaturen erforderlich sind, es sei denn, es handelt sich um Notfallmaßnahmen.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>9. Datenschutz</h2>
                <p className="mb-3">
                  Die vom Mieter angegebenen personenbezogenen Daten werden ausschließlich zur Abwicklung des Mietverhältnisses gespeichert und verwendet. Sie werden nicht an Dritte weitergegeben, sofern dies nicht zur Vertragserfüllung notwendig ist oder gesetzliche Verpflichtungen bestehen.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>10. Schlussbestimmungen</h2>
                <p className="mb-3">
                  10.1 Änderungen und Ergänzungen des Vertrages bedürfen der Schriftform.
                </p>
                <p className="mb-3">
                  10.2 Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein, so wird dadurch die Wirksamkeit der übrigen Bestimmungen nicht berührt.
                </p>
                <p className="mb-3">
                  10.3 Es gilt deutsches Recht. Gerichtsstand ist Crailsheim.
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
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>1. Scope</h2>
                <p className="mb-3">
                  These General Terms and Conditions apply to contracts for the rental of vacation apartments in Ferienhaus Crailsheim-Roßfeld, Im Schanzbuck, 74564 Crailsheim-Roßfeld.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>2. Conclusion of Contract</h2>
                <p className="mb-3">
                  2.1 With your booking inquiry, you bindingly offer the conclusion of a rental contract.
                </p>
                <p className="mb-3">
                  2.2 The contract is concluded with the confirmation of your booking by the landlord. The confirmation can also be made via email or other electronic communication methods.
                </p>
                <p className="mb-3">
                  2.3 The booking is made by the booking guest also for all persons listed in the booking, for whose contractual obligations the booking guest is responsible as for their own obligations.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>3. Prices and Payments</h2>
                <p className="mb-3">
                  3.1 The prices shown are final prices and include statutory VAT and all additional costs, unless otherwise stated.
                </p>
                <p className="mb-3">
                  3.2 A security deposit of €50.00 must be paid at the latest with the remaining payment. For occupancy of 4 or more persons, the deposit increases to €100.00. In case of damage-free return of the accommodation, this will be refunded no later than the 3rd day after departure. Special arrangements between landlord and tenant are possible.
                </p>
                <p className="mb-3">
                  3.3 Upon conclusion of the contract, a deposit of 30% of the total price must be paid. The remaining payment is due no later than 30 days before the start of the rental period. Payments can be made via PayPal, direct bank transfer, or in cash.
                </p>
                <p className="mb-3">
                  3.4 For short-term bookings (less than 30 days before arrival), the entire rental price is due immediately.
                </p>
                <p className="mb-3">
                  3.5 The use of the e-charging station is billed according to consumption and must be paid via PayPal, direct bank transfer, or in cash upon departure.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>4. Arrival and Departure</h2>
                <p className="mb-3">
                  4.1 Arrival is on the arrival day between 3:00 PM and 8:00 PM. Departure must be on the departure day by 11:00 AM.
                </p>
                <p className="mb-3">
                  4.2 Different arrival and departure times can be individually arranged with the landlord.
                </p>
                <p className="mb-3">
                  4.3 Access is via electronic code locks. The corresponding codes will be communicated in good time before arrival.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>5. Rental Duration</h2>
                <p className="mb-3">
                  5.1 The minimum rental duration is 2 nights, unless otherwise agreed.
                </p>
                <p className="mb-3">
                  5.2 On the day of arrival, the vacation apartment is available from 3:00 PM. On the day of departure, the apartment must be vacated by 11:00 AM. The apartment must be left in a clean, swept condition and free of trash and personal belongings. Failure to leave the apartment in a swept condition will result in a €25 cleaning fee.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>6. Cancellation and Withdrawal</h2>
                <p className="mb-3">
                  6.1 You may withdraw from the contract at any time before the start of the rental period. The withdrawal must be declared in writing. The receipt of the withdrawal declaration by the landlord is decisive.
                </p>
                <p className="mb-3">
                  6.2 In case of withdrawal, you are obligated to compensate for the damage incurred. In case of cancellation, the following cancellation fees apply:
                </p>
                <ul className="list-disc pl-6 mb-3">
                  <li>up to 1 day before arrival: €25</li>
                  <li>less than 1 day before arrival or in case of no-show: 75% of the total price</li>
                </ul>
                <p className="mb-3">
                  6.3 The guest reserves the right to prove that the landlord has incurred no damage or significantly less damage.
                </p>
                <p className="mb-3">
                  6.4 A substitute person who takes over the vacation apartment under the same conditions can be provided by you. Written notification is sufficient.
                </p>
                <p className="mb-3">
                  6.5 For advance rental payments already made, the remaining amount will be refunded. In case of no-show without prior notification up to the day of arrival, the landlord reserves the right to rent the accommodation to someone else. A right to occupy the apartment no longer exists. In case of an earlier departure than booked, the payment already made for the remaining time is forfeited.
                </p>
                <p className="mb-3">
                  6.6 The landlord commits to refund the guest's payments already made in case the accommodation cannot be provided due to force majeure or for reasons for which the landlord is responsible.
                </p>
                <p className="mb-3">
                  6.7 The landlord is entitled to terminate the contract if the tenant repeatedly violates the terms and conditions or house rules. The tenant agrees not to make any claims for damages in case of contract termination by the landlord, provided that the reason for the termination is not the landlord's responsibility.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>7. Obligations of the Tenant</h2>
                <p className="mb-3">
                  7.1 The vacation apartment may only be occupied with the number of persons specified in the contract. The maximum occupancy is 6 persons.
                </p>
                <p className="mb-3">
                  7.2 The main tenant agrees to provide a copy of their ID card to the landlord when booking the accommodation. This obligation does not apply when rented by companies.
                </p>
                <p className="mb-3">
                  7.3 The tenant is obligated to treat the apartment and the inventory with care.
                </p>
                <p className="mb-3">
                  7.4 Smoking is not permitted in the entire building. Smoking is only allowed in the outdoor area.
                </p>
                <p className="mb-3">
                  7.5 Pets are only allowed after prior agreement and for an additional fee.
                </p>
                <p className="mb-3">
                  7.6 Parties or group events are not permitted in the accommodation or on the premises.
                </p>
                <p className="mb-3">
                  7.7 Internet use is permitted as long as it does not violate applicable law.
                </p>
                <p className="mb-3">
                  7.8 The tenant is liable for self-caused damages to the rented property and inventory.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>8. Liability</h2>
                <p className="mb-3">
                  8.1 The landlord is liable for the accuracy of the description of the rental property and the proper provision of the contractually agreed services.
                </p>
                <p className="mb-3">
                  8.2 The landlord's liability for property damage is excluded, unless the damage was caused intentionally or through gross negligence by the landlord or their vicarious agents.
                </p>
                <p className="mb-3">
                  8.3 The landlord is not liable for the loss or damage of personal belongings of the tenant.
                </p>
                <p className="mb-3">
                  8.4 For short-term failure of public utilities such as electricity and water, the landlord is not liable. A price reduction is excluded in these cases. The same applies in cases of force majeure.
                </p>
                <p className="mb-3">
                  8.5 The tenant is obligated to immediately report any damages that occur during their rental period to the landlord.
                </p>
                <p className="mb-3">
                  8.6 The use of the vacation apartment, the property, and the outdoor facilities is at your own risk.
                </p>
                <p className="mb-3">
                  8.7 The landlord is entitled to carry out necessary repairs or maintenance work during the stay, provided that these do not constitute more than a minimal impairment. The landlord will inform the tenant in good time that repairs are necessary, unless they are emergency measures.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>9. Data Protection</h2>
                <p className="mb-3">
                  The personal data provided by the tenant is stored and used exclusively for the processing of the rental relationship. It will not be passed on to third parties unless this is necessary for the fulfillment of the contract or legal obligations exist.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>10. Final Provisions</h2>
                <p className="mb-3">
                  10.1 Changes and additions to the contract must be made in writing.
                </p>
                <p className="mb-3">
                  10.2 Should individual provisions of these terms and conditions be invalid or unenforceable, this shall not affect the validity of the remaining provisions.
                </p>
                <p className="mb-3">
                  10.3 German law applies. The place of jurisdiction is Crailsheim.
                </p>
              </section>
              
            </div>
          )}
        </div>
      </main>
      
    </div>
  );
};

export default TermsPage;