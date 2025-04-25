import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

// Import der Seiten-Komponenten
import ApartmentOnePage from "./pages/ApartmentOnePage";
import ApartmentTwoPage from "./pages/ApartmentTwoPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ImprintPage from "./pages/ImprintPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/wohnung1" component={ApartmentOnePage} />
      <Route path="/wohnung2" component={ApartmentTwoPage} />
      <Route path="/kontakt" component={ContactPage} />
      <Route path="/agb" component={TermsPage} />
      <Route path="/datenschutz" component={PrivacyPolicyPage} />
      <Route path="/impressum" component={ImprintPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;
