import React, { useState, useRef, useEffect } from 'react';

const App = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [noClickMessage, setNoClickMessage] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  const containerRef = useRef(null);
  const noButtonRef = useRef(null);
  const yesButtonRef = useRef(null);

  // Date details
  const dateDetails = {
    title: "A Perfect Picnic Date with You 🌿",
    message:
      "Makanda is inviting you, Nimoh! I've planned a lovely picnic under the open sky, just for us. Your presence would make this day unforgettable.",
    when: "Saturday, July 11, 2026 · 11:00 AM – 5:00 PM",
    where: " (I'll send you the exact location)",
    dressCode: "Wear your favorite dress   you'll look absolutely radiant!",
  };

  // Web3Forms access key
  const WEB3FORMS_KEY = 'defcf369-5189-444d-9025-fbb065e13b48';

  // Create floating background elements for liveliness
  useEffect(() => {
    const emojis = ['🌸', '🌺', '🌹', '🌷', '💐', '🌻', '🌼', '✨', '💫', '⭐', '🦋', '🌈'];
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 30,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
    }));
    setFloatingElements(elements);
  }, []);

  // Vibrant celebration – burst from corners with BIG, colorful flowers & emojis
  const createCelebration = () => {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.inset = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '999';
    document.body.appendChild(container);

    // More vibrant, colorful emojis
    const flowerEmojis = ['🌸', '🌺', '🌹', '🌷', '💐', '🌻', '🌼', '🏵️', '🌺'];
    const heartEmojis = ['❤️', '💖', '💗', '💓', '💝', '💞', '💕'];
    const celebrationEmojis = ['🎉', '🥳', '🎊', '✨', '🌟', '⭐', '💫', '🌈', '🦋'];

    // Create a mix with more flowers
    const allEmojis = [
      ...flowerEmojis, ...flowerEmojis, ...flowerEmojis, // more flowers
      ...heartEmojis, ...heartEmojis,
      ...celebrationEmojis
    ];

    const corners = [
      { x: -50, y: -50 },
      { x: window.innerWidth + 50, y: -50 },
      { x: -50, y: window.innerHeight + 50 },
      { x: window.innerWidth + 50, y: window.innerHeight + 50 },
    ];

    const count = 100; // more items for bigger impact
    const items = [];

    // Colorful glow colors for each item
    const glowColors = [
      'rgba(255, 20, 147, 0.3)',
      'rgba(255, 105, 180, 0.3)',
      'rgba(255, 20, 200, 0.3)',
      'rgba(147, 112, 219, 0.3)',
      'rgba(0, 206, 209, 0.3)',
      'rgba(255, 215, 0, 0.3)',
      'rgba(255, 69, 0, 0.3)',
      'rgba(50, 205, 50, 0.3)',
    ];

    for (let i = 0; i < count; i++) {
      const corner = corners[Math.floor(Math.random() * corners.length)];
      const startX = corner.x + (Math.random() - 0.5) * 150;
      const startY = corner.y + (Math.random() - 0.5) * 150;
      
      // End position: move inward with randomness
      const targetX = window.innerWidth / 2 + (Math.random() - 0.5) * window.innerWidth * 0.6;
      const targetY = window.innerHeight / 2 + (Math.random() - 0.5) * window.innerHeight * 0.6;
      
      const emoji = allEmojis[Math.floor(Math.random() * allEmojis.length)];
      const size = 35 + Math.random() * 55; // bigger!
      const rotation = (Math.random() - 0.5) * 1080;
      const duration = 2 + Math.random() * 2.5;
      const delay = Math.random() * 1.5;
      const glowColor = glowColors[Math.floor(Math.random() * glowColors.length)];

      const el = document.createElement('span');
      el.textContent = emoji;
      el.style.position = 'fixed';
      el.style.left = startX + 'px';
      el.style.top = startY + 'px';
      el.style.fontSize = size + 'px';
      el.style.opacity = '1';
      el.style.pointerEvents = 'none';
      el.style.transform = 'scale(0) rotate(0deg)';
      el.style.textShadow = `0 0 30px ${glowColor}, 0 0 60px ${glowColor}`;
      el.style.filter = 'drop-shadow(0 0 20px rgba(255,20,147,0.5))';
      el.style.transition = 'text-shadow 0.5s';
      container.appendChild(el);

      // Animate with Web Animations API
      const keyframes = [
        { 
          transform: 'scale(0) rotate(0deg)', 
          opacity: 1 
        },
        {
          transform: `scale(1.5) rotate(${rotation}deg) translate(${targetX - startX}px, ${targetY - startY}px)`,
          opacity: 0,
        },
      ];
      const anim = el.animate(keyframes, {
        duration: duration * 1000,
        delay: delay * 1000,
        easing: 'cubic-bezier(0.1, 0.9, 0.3, 1)',
        fill: 'forwards',
      });

      items.push({ el, anim });
    }

    // Add sparkle trail effect
    for (let i = 0; i < 50; i++) {
      const sparkle = document.createElement('div');
      sparkle.textContent = '✦';
      const size = 10 + Math.random() * 20;
      sparkle.style.position = 'fixed';
      sparkle.style.left = (Math.random() * window.innerWidth) + 'px';
      sparkle.style.top = (Math.random() * window.innerHeight) + 'px';
      sparkle.style.fontSize = size + 'px';
      sparkle.style.color = ['#FF1493', '#FF69B4', '#FFD700', '#00CED1', '#FF4500', '#7B68EE'][Math.floor(Math.random() * 6)];
      sparkle.style.pointerEvents = 'none';
      sparkle.style.opacity = '0';
      sparkle.style.transform = 'scale(0)';
      container.appendChild(sparkle);

      const sparkleAnim = sparkle.animate(
        [
          { opacity: 0, transform: 'scale(0) rotate(0deg)' },
          { opacity: 1, transform: 'scale(1.5) rotate(180deg)' },
          { opacity: 0, transform: 'scale(0) rotate(360deg)' },
        ],
        {
          duration: 1500 + Math.random() * 1500,
          delay: Math.random() * 2000,
          easing: 'ease-out',
        }
      );
      items.push({ el: sparkle, anim: sparkleAnim });
    }

    // Remove all elements after animations complete
    const maxDuration = Math.max(...items.map((item) => 
      (item.anim.effect?.getComputedTiming?.()?.delay || 0) + 
      (item.anim.effect?.getComputedTiming?.()?.duration || 0)
    ));
    setTimeout(() => {
      container.remove();
    }, maxDuration + 1000);
  };

  // Handle "Yes" – send email and trigger celebration
  const handleYes = async () => {
    setLoading(true);

    // Send email via Web3Forms
    try {
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_KEY);
      formData.append('subject', '💕 Nimoh said YES to the picnic date!');
      formData.append(
        'message',
        `Nimoh has accepted the picnic date invitation from Makanda!\n\nDetails:\n${dateDetails.when}\n${dateDetails.where}\nDress code: ${dateDetails.dressCode}`
      );
      formData.append('botcheck', '');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email:', result);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }

    setLoading(false);
    setResponse('yes');
    setShowConfetti(true);

    // Start the celebration after a tiny delay
    setTimeout(() => {
      createCelebration();
    }, 200);

    // Reset confetti after a while
    setTimeout(() => {
      setShowConfetti(false);
    }, 6000);
  };

  // "No" button – moves slightly, shows playful message on click
  const handleNoMouseEnter = () => {
    if (!containerRef.current || !noButtonRef.current) return;
    const range = 35;
    const newX = Math.floor(Math.random() * range * 2) - range;
    const newY = Math.floor(Math.random() * range * 2) - range;
    setNoButtonPos({ x: newX, y: newY });
  };

  const handleNoClick = (e) => {
    e.preventDefault();
    const messages = [
      '😢 Aww, really? 💔',
      '😅 Nice try! But click the other one!',
      "😂 You can't escape my love! 💕",
      '😘 I know you want to say YES!',
      '💖 The other button is prettier!',
      '🤭 Nope! Not today!',
      '😏 Keep trying, princess!',
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setNoClickMessage(randomMsg);
    setTimeout(() => setNoClickMessage(null), 2500);
  };

  const resetAll = () => {
    setResponse(null);
    setNoButtonPos({ x: 0, y: 0 });
    setNoClickMessage(null);
    setShowConfetti(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-200 via-pink-100 to-purple-200 flex items-center justify-center p-4 relative overflow-x-hidden">
      {/* Animated background floating elements */}
      {floatingElements.map((el) => (
        <div
          key={el.id}
          className="fixed pointer-events-none z-0 animate-float"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            fontSize: `${el.size}px`,
            animationDuration: `${el.duration}s`,
            animationDelay: `${el.delay}s`,
            transform: `rotate(${el.rotation}deg)`,
            opacity: 0.3,
          }}
        >
          {el.emoji}
        </div>
      ))}

      {/* Background animated gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-300/20 via-pink-300/20 to-purple-300/20 animate-gradient-x"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-rose-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Confetti overlay */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: Math.random() * 100 + '%',
                top: '-10px',
                backgroundColor: ['#FF1493', '#FF69B4', '#FFD700', '#00CED1', '#FF4500', '#7B68EE', '#32CD32', '#FF6B6B'][Math.floor(Math.random() * 8)],
                animation: `confettiFall ${3 + Math.random() * 4}s ease-in forwards`,
                animationDelay: Math.random() * 2 + 's',
                width: 6 + Math.random() * 8 + 'px',
                height: 6 + Math.random() * 8 + 'px',
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      )}

      {/* Glamorous overlay on Yes */}
      {response === 'yes' && (
        <div className="fixed inset-0 pointer-events-none z-30">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-300/30 via-pink-300/30 to-purple-300/30 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-float-slow">
            ✨💖✨
          </div>
          <div className="absolute top-1/4 left-1/4 text-6xl animate-pulse">🌸</div>
          <div className="absolute bottom-1/4 right-1/4 text-6xl animate-pulse delay-500">🌺</div>
          <div className="absolute top-1/4 right-1/4 text-5xl animate-pulse delay-300">🌹</div>
          <div className="absolute bottom-1/4 left-1/4 text-5xl animate-pulse delay-700">🌷</div>
        </div>
      )}

      {/* Main Card */}
      <div
        ref={containerRef}
        className="relative w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/30 transition-all duration-500 hover:shadow-rose-300/50 z-10"
      >
        {/* Decorative animated hearts */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-4 text-3xl">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>💕</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💗</span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💖</span>
        </div>

        {/* Header */}
        <div className="text-center mb-2">
          <div className="relative inline-block">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 p-1 shadow-xl shadow-rose-200 animate-pulse">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl">
                🧺
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 text-4xl animate-bounce">✨</div>
            <div className="absolute -top-2 -left-2 text-3xl animate-bounce delay-300">💫</div>
          </div>
          <h1 className="mt-2 text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Makanda is inviting you, Nimoh! 💌
          </h1>
        </div>

        {/* Message */}
        <div className="text-center space-y-4 mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">{dateDetails.title}</h2>
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto text-lg">
            {dateDetails.message}
          </p>
        </div>

        {/* Date Details */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-4 mb-4 border-2 border-rose-200 shadow-lg shadow-rose-100/50">
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📅</span>
              <div>
                <p className="font-semibold text-gray-700 text-lg">When</p>
                <p className="text-gray-600 text-base">{dateDetails.when}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold text-gray-700 text-lg">Where</p>
                <p className="text-gray-600 text-base">{dateDetails.where}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">👗</span>
              <div>
                <p className="font-semibold text-gray-700 text-lg">Dress Code</p>
                <p className="text-gray-600 text-base">{dateDetails.dressCode}</p>
              </div>
            </div>
          </div>
        </div>

        {/* RSVP Section */}
        <div className="text-center relative">
          <p className="text-gray-700 font-medium mb-4 text-xl">
            {response === 'yes' && "🎉 Yay! I can't wait to see you, Nimoh! 💕"}
            {response === null && "Will you join me for this special picnic? 💝"}
          </p>
{/* nxno */}
          {response === null ? (
            <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center min-h-[60px]">
              <button
                ref={yesButtonRef}
                onClick={handleYes}
                disabled={loading}
                className={`px-12 py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white font-semibold text-lg rounded-full shadow-xl shadow-rose-200 hover:shadow-rose-300 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <span>💖</span> Yes, I'd love to!
                  </>
                )}
              </button>

              {/* Smaller moving "No" button */}
              <button
                ref={noButtonRef}
                onClick={handleNoClick}
                onMouseEnter={handleNoMouseEnter}
                className="px-5 py-2 bg-gray-200 text-gray-500 text-sm font-medium rounded-full shadow-md transition-all duration-200 select-none hover:bg-gray-300"
                style={{
                  position: 'relative',
                  transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                  transition: 'transform 0.2s ease-in-out',
                  fontSize: '0.85rem',
                }}
              >
                No, maybe next time 😜
              </button>

              {noClickMessage && (
                <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-rose-500 font-medium animate-bounce whitespace-nowrap text-lg bg-white/80 px-4 py-2 rounded-full shadow-lg">
                  {noClickMessage}
                </div>
              )}
            </div>
          ) : response === 'yes' ? (
            <div className="space-y-4">
              <div className="flex justify-center gap-4 text-5xl animate-pulse">
                <span>🎉</span>
                <span>💖</span>
                <span>🎊</span>
                <span>🧺</span>
                <span>🌸</span>
                <span>💕</span>
              </div>
              <p className="text-rose-500 font-medium text-xl">
                I've received your reply! Can't wait! 💕
              </p>
              <button
                onClick={resetAll}
                className="text-sm text-gray-400 hover:text-gray-600 underline transition-colors"
              >
                Reset
              </button>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200/50 text-center">
          <p className="text-xs text-gray-400">
            Made with ❤️ for Nimoh from Makanda ✨
          </p>
          <div className="flex justify-center gap-3 mt-2 text-sm">
            <span className="animate-bounce">💕</span>
            <span className="animate-bounce delay-100">✨</span>
            <span className="animate-bounce delay-200">🌹</span>
            <span className="animate-bounce delay-300">💫</span>
            <span className="animate-bounce delay-400">💝</span>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-30px) rotate(5deg); }
          75% { transform: translateY(30px) rotate(-5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }
        @keyframes gradient-x {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 4s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;