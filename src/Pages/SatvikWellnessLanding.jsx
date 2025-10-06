import React, { useState } from 'react';
import { Leaf, Sparkles, Heart, Phone, Mail, User, Download } from 'lucide-react';

export default function SatvikWellnessLanding() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [otpSent, setOtpSent] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSendOTP = () => {
    if (formData.phone.length === 10) {
      setOtpSent(true);
      setTimeout(() => setOtpSent(false), 3000);
      alert(`OTP sent to ${formData.phone}! (Demo mode)`);
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  };

  const handleSubmit = () => {
    if (formData.name && formData.phone.length === 10 && formData.email) {
      console.log('Form submitted:', formData);
      alert('🎉 Success! Your free Satvik meal plan is being prepared. Check your email in a few minutes!');
      setFormData({ name: '', phone: '', email: '' });
    } else {
      alert('Please fill all required fields correctly');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-green-500 to-green-400 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center flex-wrap gap-3">
          <span className="text-sm md:text-base font-medium">
            🌿 Join 50,000+ people on their journey to holistic wellness
          </span>
          <button className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform">
            Start Free Trial
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[10%] text-6xl opacity-70 animate-bounce" style={{ animationDuration: '3s' }}>
            🥗
          </div>
          <div className="absolute top-[25%] left-[20%] text-5xl opacity-60 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
            🧘
          </div>
          <div className="absolute top-[60%] left-[15%] text-5xl opacity-70 animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '1s' }}>
            🌱
          </div>
          <div className="absolute top-[70%] left-[8%] text-6xl opacity-60 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '1.5s' }}>
            🍃
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 text-white text-center lg:text-left z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                Nourish Your Body with Satvik Living
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed max-w-2xl">
                Discover the ancient wisdom of Satvik nutrition. Get your personalized meal plan designed for balance, purity, and optimal health.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  100% Natural
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Leaf className="w-4 h-4" />
                  Plant-Based
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Energy Boosting
                </span>
              </div>
            </div>

            {/* Right Content - Image & Form */}
            <div className="flex-1 max-w-md w-full z-10">
              {/* Image */}
              <div className="mb-8 animate-pulse" style={{ animationDuration: '2s' }}>
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"
                  alt="Healthy Satvik Meal"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>

              {/* Form Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-3">
                  Download Your Free Meal Plan
                </h2>
                <p className="text-gray-600 text-center mb-6 text-sm">
                  Start your wellness journey today
                </p>

                <div className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter mobile number"
                          maxLength="10"
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                        />
                      </div>
                      <button
                        onClick={handleSendOTP}
                        className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 hover:scale-105 transition-all whitespace-nowrap"
                      >
                        {otpSent ? '✓ Sent' : 'Send OTP'}
                      </button>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download Free Meal Plan 🎁
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}