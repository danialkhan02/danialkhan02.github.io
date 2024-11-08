import Header from './components/Header';
import Currently from './components/Currently';
import About from './components/About';
import RecentWork from './components/RecentWork';
import Footer from './components/Footer';
import '@fontsource/jetbrains-mono';
import Toolbar from './components/Toolbar';
import { ThemeProvider } from './contexts/ThemeContext';


function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg-primary text-text-primary font-mono">
        <Toolbar />
        <main className="max-w-3xl mx-auto px-4 py-24">
          <Header />
          <Currently />
          <About />
          <RecentWork />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;