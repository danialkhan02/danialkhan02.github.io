import Navbar from './components/Navbar';
import Header from './components/Header';
import Currently from './components/Currently';
import About from './components/About';
import RecentWork from './components/RecentWork';
import Footer from './components/Footer';
import '@fontsource/jetbrains-mono';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-mono">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <Header />
        <Currently />
        <About />
        <RecentWork />
      </main>
      <Footer />
    </div>
  );
}

export default App;