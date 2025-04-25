import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ImprintPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F8F4E8' }}>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6" style={{ color: '#325670' }}>
            {language === 'de' ? 'Impressum' : 'Legal Notice'}
          </h1>

          {language === 'de' ? (
            // Deutsche Version
            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>Angaben gemäß § 5 TMG</h2>
                <p className="mb-3">
                  Claudia Boger<br />
                  Im Schanzbuck<br />
                  74564 Crailsheim-Roßfeld
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>Kontakt</h2>
                <p className="mb-3">
                  E-Mail: fewo.rossfeld@gmail.com
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p className="mb-3">
                  Claudia Boger<br />
                  Im Schanzbuck<br />
                  74564 Crailsheim-Roßfeld
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>Haftung für Inhalte</h2>
                <p className="mb-3">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="mb-3">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>Haftung für Links</h2>
                <p className="mb-3">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p className="mb-3">
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>Urheberrecht</h2>
                <p className="mb-3">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p className="mb-3">
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                </p>
                <p className="mb-3">
                  Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </section>
              
            </div>
          ) : (
            // Englische Version
            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>Information according to § 5 TMG</h2>
                <p className="mb-3">
                  Claudia Boger<br />
                  Im Schanzbuck<br />
                  74564 Crailsheim-Roßfeld
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>Contact</h2>
                <p className="mb-3">
                  Email: fewo.rossfeld@gmail.com
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>Responsible for content according to § 55 Abs. 2 RStV</h2>
                <p className="mb-3">
                  Claudia Boger<br />
                  Im Schanzbuck<br />
                  74564 Crailsheim-Roßfeld
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>Liability for Content</h2>
                <p className="mb-3">
                  As a service provider, we are responsible for our own content on these pages in accordance with § 7 paragraph 1 of the TMG (German Telemedia Act). According to §§ 8 to 10 TMG, however, we as service providers are not obligated to monitor transmitted or stored third-party information or to research circumstances that indicate illegal activity.
                </p>
                <p className="mb-3">
                  Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of such legal violations, we will remove this content immediately.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>Liability for Links</h2>
                <p className="mb-3">
                  Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages.
                </p>
                <p className="mb-3">
                  The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent content control of the linked pages is not reasonable without concrete evidence of a legal violation. If we become aware of any legal violations, we will remove such links immediately.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3" style={{ color: '#325670' }}>Copyright</h2>
                <p className="mb-3">
                  The content and works on these pages created by the site operators are subject to German copyright law. The duplication, processing, distribution, and any kind of utilization outside the limits of copyright require the written consent of the respective author or creator.
                </p>
                <p className="mb-3">
                  Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such.
                </p>
                <p className="mb-3">
                  Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.
                </p>
              </section>
              
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ImprintPage;