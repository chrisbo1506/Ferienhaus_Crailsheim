import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsPage: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-12 px-4 md:px-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center" style={{ color: '#325670' }}>
        {language === 'de' ? 'Allgemeine Geschäftsbedingungen' : 'Terms and Conditions'}
      </h1>
      
      <div className="prose prose-lg max-w-none">
        {language === 'de' ? (
          <>
            <h2 className="text-xl font-semibold mt-6 mb-4">1. Allgemeines</h2>
            <p>Diese Allgemeinen Geschäftsbedingungen regeln die Vermietung der Ferienwohnung in der Adresse Im Schanzbuck 48, 74564 Crailsheim-Roßfeld. Mit Ihrer Buchung erkennen Sie diese Bedingungen an.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">2. Vertragsabschluss</h2>
            <p>Diese Unterkunft wird von einem privaten Vermieter verwaltet (eine Partei, die nicht im Rahmen ihrer gewerblichen, geschäftlichen oder beruflichen Tätigkeit handelt). Das EU-Verbraucherrecht, einschließlich Widerrufsrecht, gilt nicht für die Buchung der Unterkunft, sie wird aber von den nachfolgend festgelegten Stornierungsbedingungen abgedeckt.</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Mit Ihrer Buchungsanfrage bieten Sie verbindlich den Abschluss eines Mietvertrages an.</li>
              <li>Der Vertrag kommt mit der Bestätigung Ihrer Buchung durch den Vermieter zustande. Die Bestätigung bedarf keiner bestimmten Form.</li>
              <li>Die Buchung erfolgt durch den buchenden Gast auch für alle in der Buchung mit aufgeführten Personen, für deren Vertragsverpflichtungen der buchende Gast wie für seine eigenen Verpflichtungen einsteht.</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">3. Preise und Zahlungen</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Die ausgewiesenen Preise sind Endpreise und beinhalten die gesetzliche Mehrwertsteuer sowie alle Nebenkosten, soweit nicht anders angegeben.</li>
              <li>Eine Kaution in Höhe von 50,00 Euro ist spätestens mit der Restzahlung zu leisten. Bei einer Belegung ab 4 Personen erhöht sich die Kaution auf 100,00 Euro. Bei schadloser Rückgabe der Unterkunft wird diese spätestens am 3. Tag nach Abreise zurückerstattet. Sondervereinbarungen zwischen Vermieter und Mieter sind möglich.</li>
              <li>Bei Vertragsabschluss ist eine Anzahlung in Höhe von 30% des Gesamtpreises zu leisten. Die Restzahlung ist bis spätestens 30 Tage vor Mietbeginn fällig.</li>
              <li>Bei kurzfristigen Buchungen (weniger als 30 Tage vor Anreise) ist der gesamte Mietpreis sofort fällig.</li>
              <li>Die Nutzung der E-Ladestation wird nach tatsächlichem Verbrauch abgerechnet und ist bei Abreise per PayPal, Überweisung oder in bar zu bezahlen.</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">4. An- und Abreise</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Die Anreise erfolgt am Anreisetag ab 15:00 Uhr. Die Abreise hat am Abreisetag bis 11:00 Uhr zu erfolgen.</li>
              <li>Am Abreisetag ist die Wohnung besenrein zu hinterlassen.</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">5. Nutzungsbedingungen</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Eine Weitervermietung oder Untervermietung der Unterkunft an Dritte ist nicht gestattet.</li>
              <li>Die Nutzung der Wohnung zur Erzielung von Einkünften ist nicht erlaubt.</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">6. Rücktritt und Stornierung</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Sie können jederzeit vor Mietbeginn vom Mietvertrag zurücktreten. Der Rücktritt muss schriftlich erklärt werden. Maßgeblich ist der Eingang der Rücktrittserklärung beim Vermieter.</li>
              <li>Im Falle des Rücktritts sind Sie zum Ersatz des entstandenen Schadens verpflichtet. Bei Stornierung werden folgende Stornierungsgebühren fällig:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>bis 30 Tage vor Anreise: 25% des Gesamtpreises</li>
                  <li>bis 14 Tage vor Anreise: 50% des Gesamtpreises</li>
                  <li>bis 2 Tage vor Anreise: 80% des Gesamtpreises</li>
                  <li>weniger als 2 Tage vor Anreise oder bei Nichtanreise: 100% des Gesamtpreises</li>
                </ul>
              </li>
              <li>Sie können eine Ersatzperson stellen, die zu den gleichen Bedingungen die Ferienwohnung übernimmt. Eine schriftliche Benachrichtigung hierüber ist ausreichend.</li>
              <li>Bei bereits im Voraus geleisteten Zahlungen wird der nach Abzug der Stornierungsgebühr verbleibende Restbetrag zurückerstattet. Bei Nichtanreise ohne vorherige Benachrichtigung bis zum Anreisetag behält der Vermieter das Recht, die Unterkunft anderweitig zu vermieten. Ein Anspruch auf Bezug der Wohnung besteht dann nicht mehr.</li>
              <li>Bei einer früheren Abreise als gebucht verfällt die bereits geleistete Zahlung für die nicht genutzte Zeit.</li>
              <li>Der Vermieter verpflichtet sich, bei Nichtbereitstellung der Unterkunft infolge höherer Gewalt oder aus Gründen, die der Vermieter zu vertreten hat, dem Mieter die bereits geleisteten Zahlungen vollständig zurückzuzahlen.</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">7. Pflichten des Mieters</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Die Ferienwohnung darf nur mit der im Vertrag angegebenen Personenzahl belegt werden. Die maximale Belegung beträgt 6 Personen.</li>
              <li>Der Hauptmieter erklärt sich einverstanden, mit der Buchung der Unterkunft eine Kopie seines Personalausweises an den Vermieter zu übermitteln. Bei Anmietung durch Firmen entfällt diese Verpflichtung.</li>
              <li>Der Mieter verpflichtet sich, die Wohnung und das Inventar pfleglich zu behandeln.</li>
              <li>Das Rauchen ist im gesamten Gebäude nicht gestattet. Rauchen ist ausschließlich im Außenbereich erlaubt. Ein Aschenbecher steht auf dem Bistrotisch vor dem Eingang bereit.</li>
              <li>Haustiere sind nur nach vorheriger Absprache und gegen eine zusätzliche Gebühr gestattet.</li>
              <li>Partys oder Gruppenveranstaltungen sind in der Unterkunft und auf dem Gelände nicht erlaubt.</li>
              <li>Die Internetnutzung ist gestattet, soweit diese nicht gegen geltendes Recht verstößt.</li>
              <li>Der Mieter haftet für selbst verursachte Schäden am Mietobjekt und am Inventar in vollem Umfang.</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">8. Haftung</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Der Vermieter haftet für die Richtigkeit der Beschreibung des Mietobjektes und die ordnungsgemäße Erbringung der vertraglich vereinbarten Leistungen.</li>
              <li>Die Haftung des Vermieters für Sachschäden ist ausgeschlossen, soweit der Schaden nicht durch den Vermieter oder dessen Erfüllungsgehilfen vorsätzlich oder grob fahrlässig herbeigeführt wurde.</li>
              <li>Der Vermieter haftet nicht für den Verlust oder die Beschädigung persönlicher Gegenstände des Mieters.</li>
              <li>Für kurzfristigen Ausfall öffentlicher Versorgung wie Strom und Wasser ist der Vermieter nicht haftbar. Eine Preisminderung ist in diesen Fällen ausgeschlossen. Gleiches gilt bei höherer Gewalt.</li>
              <li>Der Mieter ist verpflichtet, jegliche während seiner Mietzeit entstandenen Schäden dem Vermieter unverzüglich mitzuteilen.</li>
              <li>Die Benutzung der Ferienwohnung, des Grundstücks und der Außenanlagen erfolgt auf eigene Gefahr.</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">9. Datenschutz</h2>
            <p>Die vom Mieter bereitgestellten personenbezogenen Daten werden ausschließlich zur Abwicklung des Mietverhältnisses verwendet und nicht an Dritte weitergegeben, sofern dies nicht zur Vertragserfüllung notwendig ist oder gesetzliche Verpflichtungen bestehen.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">10. Schlussbestimmungen</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Änderungen oder Ergänzungen des Vertrages bedürfen der Schriftform.</li>
              <li>Es gilt deutsches Recht. Gerichtsstand ist der Wohnort des Vermieters.</li>
              <li>Sollten einzelne Bestimmungen dieser AGB unwirksam sein, wird dadurch die Wirksamkeit der übrigen Bestimmungen nicht berührt.</li>
            </ol>
            
            <p className="mt-8 text-right">Stand: April 2025</p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mt-6 mb-4">1. General Information</h2>
            <p>These General Terms and Conditions govern the rental of the holiday apartment located at Im Schanzbuck 48, 74564 Crailsheim-Roßfeld. By making a booking, you accept these conditions.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">2. Contract Conclusion</h2>
            <p>This accommodation is managed by a private landlord (a party not acting within the scope of their commercial, business, or professional activities). EU consumer law, including the right of withdrawal, does not apply to the booking of the accommodation, but it is covered by the cancellation conditions specified below.</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>By submitting your booking request, you are offering to enter into a binding rental agreement.</li>
              <li>The contract comes into effect upon confirmation of your booking by the landlord. The confirmation does not require any specific form.</li>
              <li>The booking is made by the booking guest also for all persons listed in the booking, for whose contractual obligations the booking guest is responsible as for their own obligations.</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">3. Prices and Payments</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>The prices shown are final prices and include statutory VAT as well as all incidental costs, unless otherwise stated.</li>
              <li>A security deposit of €50.00 must be paid at the latest with the final payment. For occupancy of 4 or more people, the security deposit increases to €100.00. Upon damage-free return of the accommodation, this will be refunded no later than the 3rd day after departure. Special arrangements between landlord and tenant are possible.</li>
              <li>Upon conclusion of the contract, a down payment of 30% of the total price is due. The remaining payment is due no later than 30 days before the start of the rental period.</li>
              <li>For short-term bookings (less than 30 days before arrival), the entire rental price is due immediately.</li>
              <li>The use of the e-charging station is billed according to actual consumption and must be paid upon departure via PayPal, bank transfer, or in cash.</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">4. Arrival and Departure</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Arrival on the arrival day is from 3:00 PM. Departure must take place by 11:00 AM on the day of departure.</li>
              <li>On the day of departure, the apartment must be left in broom-clean condition.</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">5. Terms of Use</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Subletting or transferring the accommodation to third parties is not permitted.</li>
              <li>Using the apartment for income generation is not allowed.</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">6. Cancellation and Withdrawal</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>You may withdraw from the rental contract at any time before the start of the rental period. The withdrawal must be declared in writing. The receipt of the withdrawal declaration by the landlord is decisive.</li>
              <li>In case of withdrawal, you are obligated to compensate for the damage incurred. The following cancellation fees apply:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>up to 30 days before arrival: 25% of the total price</li>
                  <li>up to 14 days before arrival: 50% of the total price</li>
                  <li>up to 2 days before arrival: 80% of the total price</li>
                  <li>less than 2 days before arrival or in case of no-show: 100% of the total price</li>
                </ul>
              </li>
              <li>You may provide a substitute person who takes over the holiday apartment under the same conditions. Written notification of this is sufficient.</li>
              <li>For payments already made in advance, the remaining amount after deduction of the cancellation fee will be refunded. In case of no-show without prior notification by the day of arrival, the landlord reserves the right to rent the accommodation to others. There is then no longer a right to occupy the apartment.</li>
              <li>In case of earlier departure than booked, the payment already made for the unused time is forfeited.</li>
              <li>The landlord undertakes to refund payments already made in full to the tenant in the event of non-provision of the accommodation due to force majeure or for reasons for which the landlord is responsible.</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">7. Tenant's Obligations</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>The holiday apartment may only be occupied by the number of persons specified in the contract. The maximum occupancy is 6 persons.</li>
              <li>The main tenant agrees to provide a copy of their ID card to the landlord with the booking of the accommodation. This obligation does not apply when rented by companies.</li>
              <li>The tenant undertakes to treat the apartment and the inventory with care.</li>
              <li>Smoking is not permitted in the entire building. Smoking is only allowed in the outdoor area. An ashtray is available on the bistro table in front of the entrance.</li>
              <li>Pets are only permitted after prior agreement and for an additional fee.</li>
              <li>Parties or group events are not permitted in the accommodation or on the premises.</li>
              <li>Internet use is permitted as long as it does not violate applicable law.</li>
              <li>The tenant is fully liable for damages caused to the rental property and inventory.</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">8. Liability</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>The landlord is responsible for the accuracy of the description of the rental property and the proper provision of the contractually agreed services.</li>
              <li>The landlord's liability for property damage is excluded unless the damage was caused by the landlord or their agents intentionally or through gross negligence.</li>
              <li>The landlord is not liable for the loss or damage of personal items of the tenant.</li>
              <li>The landlord is not liable for short-term failures of public utilities such as electricity and water. A price reduction is excluded in these cases. The same applies to force majeure.</li>
              <li>The tenant is obligated to immediately notify the landlord of any damage that occurs during their rental period.</li>
              <li>The use of the holiday apartment, the property, and the outdoor facilities is at your own risk.</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">9. Data Protection</h2>
            <p>The personal data provided by the tenant is used exclusively for the processing of the rental relationship and is not passed on to third parties unless this is necessary for the fulfillment of the contract or legal obligations exist.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">10. Final Provisions</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Changes or additions to the contract must be made in writing.</li>
              <li>German law applies. The place of jurisdiction is the residence of the landlord.</li>
              <li>Should individual provisions of these terms and conditions be invalid, the validity of the remaining provisions shall not be affected.</li>
            </ol>
            
            <p className="mt-8 text-right">As of: April 2025</p>
          </>
        )}
      </div>
    </section>
  );
};

export default TermsPage;