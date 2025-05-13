import { useNavigate } from 'react-router-dom';
import './App.css';
import WLogo from "./assets/whiteLogo.png"
import BG from "./assets/bg.png"

function LandingPage() {
  const navigate = useNavigate();

  return (
    //
    <div className="relative min-h-screen w-full overflow-hidden">
      <img src={BG} alt="Background" className="absolute inset-0 w-full h-full object-cover brightness-50" />
      <header className="absolute top-8 left-8 sm:top-10 sm:left-10">
        <img src={WLogo} alt="Taravel Logo" className="w-[200px] h-auto" />
      </header>
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-white font-extrabold text-[2.5rem] sm:text-[4.5rem] leading-[1.2] max-w-3xl">
          “Life’s too short to<br />stay in one place.”
        </h1>
        <p className="text-white text-sm sm:text-base mt-4 max-w-md font-light">
          Taravel is an online platform that guides you
        </p>
        <button
          onClick={() => navigate('/app')}
          className="mt-8 bg-[#4B22B6] border-2 border-white rounded-full px-8 py-3 text-white font-bold text-sm sm:text-base hover:bg-[#3a1a8a] transition-colors"
        >
          GET STARTED
        </button>
      </main>
      <div>

      </div>
    </div>
  );
}

export default LandingPage;
