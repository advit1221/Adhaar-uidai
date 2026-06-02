import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, CheckCircle, Fingerprint } from "lucide-react";
import emblem from "@/assets/emblem.png";
import sampleId from "@/assets/sample-id.png";

const Index = () => {
  const [showId, setShowId] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowId = () => {
    if (showId) {
      setShowId(false);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowId(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Tricolor Bar */}
      <div className="tricolor-bar" />

      {/* Header */}
      <header className="gov-header px-4 py-4 sm:py-5">
        <div className="container max-w-3xl mx-auto flex items-center gap-3">
          <img src={emblem} alt="National Emblem" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 p-0.5" />
          <div>
            <h1 className="text-primary-foreground text-base sm:text-lg font-bold leading-tight tracking-tight">
              UIDAI - Digilocker 
            </h1>
            <p className="text-primary-foreground/70 text-xs sm:text-sm font-medium">
              Secure Citizen Services
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 sm:py-12">
        <div className="container max-w-lg mx-auto flex flex-col items-center gap-8">
          {/* Secure Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full"
          >
            <Shield className="w-4 h-4" />
            <span className="text-xs font-semibold tracking-wide uppercase">
              Verified & Secure Access
            </span>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center space-y-2"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              View Your ID Card
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-sm mx-auto">
              Access your Adhaar document securely with one tap.
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleShowId}
            disabled={loading}
            className="relative flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base shadow-lg shadow-primary/20 transition-colors disabled:opacity-80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            {loading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <Fingerprint className="w-5 h-5" />
                </motion.div>
                Verifying Identity…
              </>
            ) : showId ? (
              <>
                <Lock className="w-5 h-5" />
                Hide Aadhaar ID
              </>
            ) : (
              <>
                <Fingerprint className="w-5 h-5" />
                Show Aadhaar ID
              </>
            )}
          </motion.button>

          {/* ID Card Display */}
          <AnimatePresence>
            {showId && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div className="gov-card p-4 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-success">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-xs font-semibold uppercase tracking-wide">
                        Identity Verified
                      </span>
                    </div>
                    <Lock className="w-4 h-4 text-muted-foreground" />
                  </div>

                  <div className="rounded-md overflow-hidden border border-border">
                    <img
                      src={sampleId}
                      alt="Aadhaar ID Card"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    This document is digitally signed and tamper-proof.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-6">
        <div className="container max-w-3xl mx-auto text-center space-y-2">
          <p className="text-xs text-muted-foreground leading-relaxed">
            UIDAI Digilocker portal affiliated with Government of India.
          </p>
          <p className="text-xs text-muted-foreground/60">
            © 2026 UIDAI Digital Identity Portal — Digilocker.
          </p>
        </div>
      </footer>

      {/* Bottom Tricolor */}
      <div className="tricolor-bar" />
    </div>
  );
};

export default Index;
