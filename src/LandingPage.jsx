import { useNavigate } from 'react-router-dom';
import './App.css';
import WLogo from "./assets/whiteLogo.png"
import BG from "./assets/bg.png"

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={BG}
        alt="Travel background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      {/* Header */}
      <header className="absolute top-4 left-4 sm:top-8 sm:left-8">
        <img src={WLogo}
        alt="Taravel Logo"
        className="w-40 sm:w-52" />
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-white font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-tight">
          “Life’s too short to<br />stay in one place.”
        </h1>
        <p className="text-white text-sm sm:text-base mt-4 max-w-md font-light">
          Taravel is an online platform that guides you
        </p>
        <button
          onClick={() => navigate('/app')}
          className="mt-8 bg-[#4B22B6] border-2 border-white rounded-full px-6 py-3 text-white font-bold text-base hover:bg-[#3a1a8a] transition-colors"
        >
          GET STARTED
        </button>
      </main>
    </div>
  );
}

export default LandingPage;
