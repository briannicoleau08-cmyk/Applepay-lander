import { CheckCircle2 } from 'lucide-react';

const App = () => {
  // Debug line: lets you see if your env var loads in Vercel
  console.log('Offer link:', process.env.NEXT_PUBLIC_OFFER_LINK);

  // Fallback link in case Vercel doesn't inject the variable
  const offerLink =
    process.env.NEXT_PUBLIC_OFFER_LINK ||
    'https://rwrdtrk.com/aff_c?offer_id=2596&aff_id=160776';

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <div className="max-w-2xl mx-auto px-6 py-4 relative z-10">
        <div className="text-center mb-6">
          <img
            src="/applepay-logo.png"
            alt="Apple Pay"
            className="h-48 mx-auto mb-4"
          />
          <h1 className="text-3xl font-extrabold text-white mb-2 leading-tight">
            Earn with Apple Pay
          </h1>
          <p className="text-lg text-white mb-5 font-semibold">
            Complete the steps below
          </p>

          <div
            className="border-2 border-white rounded-3xl p-8 mb-6 bg-black"
            style={{
              boxShadow:
                '0 0 40px rgba(0, 0, 0, 0.8), 0 0 80px rgba(0, 0, 0, 0.6)',
            }}
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-start gap-4 px-4">
                <CheckCircle2 className="w-8 h-8 text-white flex-shrink-0" />
                <span className="text-base font-bold text-white text-left">
                  Click the button below
                </span>
              </div>
              <div className="flex items-center justify-start gap-4 px-4">
                <CheckCircle2 className="w-8 h-8 text-white flex-shrink-0" />
                <span className="text-base font-bold text-white text-left">
                  Verify your email
                </span>
              </div>
              <div className="flex items-center justify-start gap-4 px-4">
                <CheckCircle2 className="w-8 h-8 text-white flex-shrink-0" />
                <span className="text-base font-bold text-white text-left">
                  Complete 3–5 offers
                </span>
              </div>
              <div className="flex items-center justify-start gap-4 px-4">
                <CheckCircle2 className="w-8 h-8 text-white flex-shrink-0" />
                <span className="text-base font-bold text-white text-left">
                  Cash out same day!
                </span>
              </div>
            </div>
          </div>

          {/* Main CTA Button */}
          <a href={offerLink} target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-white text-black font-semibold py-5 px-6 rounded-2xl hover:bg-gray-100 transition-all duration-200 text-lg h-auto">
              EARN HERE
            </button>
          </a>

          <div className="flex items-center justify-center gap-2 mt-3">
            <p className="text-sm text-white">Verified By TikTok</p>
            <img
              src="/tiktok-verified.png"
              alt="Verified"
              className="w-6 h-6"
            />
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-white/70">
          <p>Secure payments powered by Apple Pay</p>
        </div>
      </div>
    </div>
  );
};

export default App;
