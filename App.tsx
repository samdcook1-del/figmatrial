import React, { useState } from 'react';
import { ChevronRight, Info, Zap, Shield, Clock, DollarSign, Check, Code, Users, TrendingDown, ChevronLeft, Search, Play } from 'lucide-react';

export default function SmartContractFigmaGuide() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [showTooltip, setShowTooltip] = useState(null);

  const screens = [
    {
      id: 0,
      title: "Welcome Screen",
      description: "Set context for the journey"
    },
    {
      id: 1,
      title: "Alice's Dashboard",
      description: "Prosumer view with surplus energy"
    },
    {
      id: 2,
      title: "Create Listing",
      description: "Set price and conditions"
    },
    {
      id: 3,
      title: "Bob's Marketplace",
      description: "Discover available energy"
    },
    {
      id: 4,
      title: "Purchase Confirmation",
      description: "Review and confirm trade"
    },
    {
      id: 5,
      title: "Smart Contract Execution",
      description: "The magic happens - automated trade"
    },
    {
      id: 6,
      title: "Results Dashboard",
      description: "Trade complete - both parties updated"
    },
    {
      id: 7,
      title: "System Benefits",
      description: "Summary of transformation"
    }
  ];

  const nextScreen = () => {
    if (activeScreen < screens.length - 1) {
      setActiveScreen(activeScreen + 1);
      setShowTooltip(null);
    }
  };

  const prevScreen = () => {
    if (activeScreen > 0) {
      setActiveScreen(activeScreen - 1);
      setShowTooltip(null);
    }
  };

  const WelcomeScreen = () => (
    <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white p-8 rounded-lg h-full flex flex-col justify-between">
      <div>
        <h1 className="mb-4">How Smart Contracts Power P2P Energy Trading</h1>
        <p className="mb-8 opacity-90">A 24/7 automated marketplace with no middlemen</p>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
            <h3 className="mb-3 text-red-300">Traditional</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-400/30 rounded-full flex items-center justify-center mr-3">🏢</div>
                <span>Utility company middleman</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-400/30 rounded-full flex items-center justify-center mr-3">🐌</div>
                <span>30+ day settlement</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-400/30 rounded-full flex items-center justify-center mr-3">💰</div>
                <span>High transaction fees</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur border-2 border-green-400">
            <h3 className="mb-3 text-green-300">Smart Contract</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-400/30 rounded-full flex items-center justify-center mr-3">⚡</div>
                <span>Direct peer-to-peer</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-400/30 rounded-full flex items-center justify-center mr-3">⏱️</div>
                <span>4 second settlement</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-400/30 rounded-full flex items-center justify-center mr-3">📉</div>
                <span>30-40% lower costs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-400/20 border-2 border-yellow-400 p-4 rounded-lg text-center">
          <div className="opacity-75 mb-1">Cost Reduction</div>
          <div className="text-yellow-400">30-40% Lower Transaction Costs</div>
        </div>
      </div>
      
      <div>
        <button 
          onClick={nextScreen}
          className="w-full bg-yellow-400 text-gray-900 px-8 py-4 rounded-full hover:bg-yellow-300 transition-all flex items-center justify-center"
        >
          Start Interactive Demo <ChevronRight className="ml-2" />
        </button>
        
        <div className="mt-4 text-center opacity-75">
          <Info className="inline w-4 h-4 mr-1" />
          Smart contracts are self-executing code that automatically manage trades when conditions are met
        </div>
      </div>
    </div>
  );

  const AliceDashboard = () => (
    <div className="bg-gray-50 p-6 rounded-lg h-full overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow mb-4">
        <div className="flex items-center justify-between mb-6">
          <h2>My Energy Dashboard</h2>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div>Alice Chen</div>
              <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full">
                <Check className="inline w-4 h-4 mr-1" />
                Prosumer
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white">A</div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
            <div className="text-gray-600 mb-1">Solar Generation</div>
            <div className="text-green-600">15 kWh</div>
            <div className="text-gray-500">today</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
            <div className="text-gray-600 mb-1">Home Usage</div>
            <div className="text-blue-600">10 kWh</div>
            <div className="text-gray-500">today</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400">
            <div className="text-gray-600 mb-1">Excess Available</div>
            <div className="text-yellow-600">5 kWh</div>
            <div className="text-green-600 flex items-center">
              <Check className="w-3 h-3 mr-1" /> Smart Meter ✓
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Today's Earnings</span>
            <span className="text-green-600">$2.47 (5 trades)</span>
          </div>
          <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-green-400 to-green-600 h-full w-3/4"></div>
          </div>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
          <div className="flex items-center text-blue-700 mb-2">
            <Clock className="w-5 h-5 mr-2" />
            <span>24/7 Market Active</span>
          </div>
          <div className="text-gray-600">Your energy is automatically listed when surplus is detected</div>
        </div>
        
        <button 
          onClick={nextScreen}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center"
        >
          <Zap className="mr-2" /> Sell Energy
        </button>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="flex items-center mb-3">
          <Clock className="w-5 h-5 mr-2 text-blue-600" />
          Recent Automatic Settlements
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-3 bg-green-50 rounded border border-green-200">
            <div>
              <div>3 kWh → Bob</div>
              <div className="text-gray-500">Settled instantly</div>
            </div>
            <div className="text-right">
              <div className="text-green-600">+$0.30</div>
              <div className="text-gray-500">2 min ago</div>
            </div>
          </div>
          <div className="flex justify-between items-center p-3 bg-green-50 rounded border border-green-200">
            <div>
              <div>4 kWh → Carol</div>
              <div className="text-gray-500">Settled instantly</div>
            </div>
            <div className="text-right">
              <div className="text-green-600">+$0.44</div>
              <div className="text-gray-500">15 min ago</div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => setShowTooltip(showTooltip === 'alice' ? null : 'alice')}
        className="mt-4 flex items-center text-blue-600 hover:text-blue-700"
      >
        <Info className="w-4 h-4 mr-1" />
        What is a prosumer?
      </button>
      
      {showTooltip === 'alice' && (
        <div className="mt-2 bg-blue-100 border-l-4 border-blue-600 p-4 rounded">
          <p><strong>Alice is a prosumer</strong> – she produces solar energy and can sell her excess to neighbors automatically, no utility company needed</p>
        </div>
      )}
    </div>
  );

  const CreateListing = () => (
    <div className="bg-gray-50 p-6 rounded-lg h-full overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto">
        <h2 className="mb-6">Create Energy Listing</h2>
        
        <div className="mb-6">
          <label className="block mb-2">Amount to Sell</label>
          <input type="range" min="1" max="5" defaultValue="5" className="w-full" />
          <div className="flex justify-between text-gray-600 mt-1">
            <span>1 kWh</span>
            <span className="text-blue-600">5 kWh</span>
            <span>5 kWh max</span>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block mb-2">Price per kWh</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-500">$</span>
            <input type="text" defaultValue="0.10" className="w-full border-2 border-gray-300 rounded-lg p-3 pl-8" />
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6 border-2 border-blue-200">
          <div className="text-gray-600 mb-1">Total Sale Price</div>
          <div className="text-blue-600">$0.50</div>
          <div className="text-gray-500">5 kWh × $0.10/kWh</div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg mb-6 border-2 border-purple-300">
          <div className="flex items-start mb-3">
            <Code className="w-5 h-5 mr-2 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-purple-900 mb-2">Smart Contract Logic</div>
              <div className="bg-purple-900 text-purple-100 p-3 rounded font-mono space-y-1">
                <div><span className="text-purple-300">IF:</span> Buyer accepts 5 kWh @ $0.10/kWh</div>
                <div><span className="text-purple-300">AND:</span> Smart meter confirms delivery</div>
                <div><span className="text-purple-300">THEN:</span> Transfer $0.50 to Alice automatically</div>
              </div>
            </div>
          </div>
          <div className="text-purple-700">
            <Shield className="inline w-4 h-4 mr-1" />
            Terms are immutable once published
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
          <button 
            onClick={() => setShowTooltip(showTooltip === 'contract' ? null : 'contract')}
            className="flex items-center text-gray-700 hover:text-gray-900 w-full"
          >
            <Info className="w-4 h-4 mr-2" />
            Technical Details
            <ChevronRight className={`ml-auto w-4 h-4 transition-transform ${showTooltip === 'contract' ? 'rotate-90' : ''}`} />
          </button>
          {showTooltip === 'contract' && (
            <div className="mt-3 space-y-2 text-gray-600">
              <div>• Contract deploys on Ethereum blockchain</div>
              <div>• Terms are immutable once published</div>
              <div>• Autonomous execution - no approval needed</div>
              <div>• Gas fees: ~$0.02 per transaction</div>
            </div>
          )}
        </div>
        
        <button 
          onClick={nextScreen}
          className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition-all flex items-center justify-center"
        >
          <Zap className="mr-2" /> List Energy on Blockchain
        </button>
        
        <div className="mt-4 text-center text-gray-500">
          <Info className="inline w-4 h-4 mr-1" />
          You're creating a self-executing digital agreement
        </div>
      </div>
    </div>
  );

  const BobMarketplace = () => (
    <div className="bg-gray-50 p-6 rounded-lg h-full overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow mb-4">
        <div className="flex items-center justify-between mb-6">
          <h2>Energy Marketplace</h2>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div>Bob Martinez</div>
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                Consumer
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white">B</div>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by location, price, or seller..." 
              className="w-full border-2 border-gray-300 rounded-lg p-3 pl-10"
            />
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
          <div className="text-blue-900 mb-1">Current Need: 5 kWh</div>
          <div className="text-gray-600">Bob needs energy for his electric vehicle charging tonight</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-5 rounded-lg shadow border-2 border-green-400">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white mr-3">A</div>
                <div>
                  <div>Alice Chen</div>
                  <div className="text-green-600 flex items-center">
                    <Check className="w-3 h-3 mr-1" /> Verified Seller
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-gray-600 mb-2">
                <span>📍 0.3 miles away</span>
                <span>⭐ 4.9 (47 trades)</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-gray-600">Price</div>
              <div className="text-green-600">$0.10/kWh</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 p-3 rounded">
              <div className="text-gray-600">Available</div>
              <div>5 kWh</div>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="text-gray-600">Source</div>
              <div>☀️ Solar</div>
            </div>
          </div>

          <div className="bg-green-50 p-3 rounded mb-4">
            <div className="text-gray-600 mb-1">Total Cost</div>
            <div className="text-green-600">$0.50</div>
            <div className="text-gray-500">vs. $0.85 from utility</div>
          </div>

          <button 
            onClick={nextScreen}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center"
          >
            <Zap className="mr-2" /> Purchase Energy
          </button>
        </div>

        <div className="bg-white p-5 rounded-lg shadow opacity-60">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">C</div>
              <div>
                <div>Carol Zhang</div>
                <div className="text-gray-500">3 kWh available</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-gray-600">$0.12/kWh</div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => setShowTooltip(showTooltip === 'marketplace' ? null : 'marketplace')}
        className="mt-4 flex items-center text-blue-600 hover:text-blue-700"
      >
        <Info className="w-4 h-4 mr-1" />
        How does pricing work?
      </button>
      
      {showTooltip === 'marketplace' && (
        <div className="mt-2 bg-blue-100 border-l-4 border-blue-600 p-4 rounded">
          <p><strong>Dynamic pricing:</strong> Sellers set their own prices. Smart contracts ensure fair execution. Supply and demand naturally balance the market.</p>
        </div>
      )}
    </div>
  );

  const PurchaseConfirmation = () => (
    <div className="bg-gray-50 p-6 rounded-lg h-full overflow-auto flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow max-w-2xl w-full">
        <h2 className="mb-6">Confirm Purchase</h2>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
            <div className="text-gray-600 mb-2">Seller</div>
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-2">A</div>
            <div>Alice Chen</div>
            <div className="text-green-600">Solar Prosumer</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
            <div className="text-gray-600 mb-2">Buyer</div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-2">B</div>
            <div>Bob Martinez</div>
            <div className="text-blue-600">EV Owner</div>
          </div>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg mb-6 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Energy Amount</span>
            <span>5 kWh</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Price per kWh</span>
            <span>$0.10</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Transaction Fee</span>
            <span className="text-green-600">$0.02 (gas fee)</span>
          </div>
          <div className="border-t pt-3 flex justify-between">
            <span>Total</span>
            <span>$0.52</span>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg mb-6 border-2 border-purple-300">
          <div className="flex items-start mb-3">
            <Shield className="w-5 h-5 mr-2 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-purple-900 mb-2">Smart Contract Ensures</div>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-600" />
                  Payment only releases when energy is delivered
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-600" />
                  Smart meter verification required
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-600" />
                  Automatic settlement in ~4 seconds
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
          <div className="text-blue-900 mb-1">Savings vs. Traditional Utility</div>
          <div className="text-green-600">$0.33 saved (39% cheaper)</div>
          <div className="text-gray-600">Utility would charge $0.85 for 5 kWh</div>
        </div>

        <button 
          onClick={nextScreen}
          className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center mb-3"
        >
          <Play className="mr-2" /> Execute Smart Contract
        </button>

        <div className="text-center text-gray-500">
          <Info className="inline w-4 h-4 mr-1" />
          Contract will execute automatically - no further action needed
        </div>
      </div>
    </div>
  );

  const SmartContractExecution = () => {
    const [step, setStep] = useState(0);
    const steps = [
      { label: "Contract Deployed", icon: Code, color: "purple" },
      { label: "Bob Sends Payment", icon: DollarSign, color: "blue" },
      { label: "Smart Meter Confirms Delivery", icon: Zap, color: "yellow" },
      { label: "Payment Released to Alice", icon: Check, color: "green" }
    ];

    React.useEffect(() => {
      if (step < steps.length) {
        const timer = setTimeout(() => setStep(step + 1), 1500);
        return () => clearTimeout(timer);
      }
    }, [step]);

    return (
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-6 rounded-lg h-full flex items-center justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="text-center mb-8 text-white">Smart Contract Execution</h2>
          
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg mb-8">
            <div className="space-y-6">
              {steps.map((s, index) => {
                const Icon = s.icon;
                const isActive = index <= step;
                const isComplete = index < step;
                
                return (
                  <div key={index} className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      isActive 
                        ? `bg-${s.color}-500` 
                        : 'bg-gray-600'
                    } ${isActive ? 'scale-110' : 'scale-100'}`}>
                      {isComplete ? (
                        <Check className="w-6 h-6 text-white" />
                      ) : (
                        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className={`${isActive ? 'text-white' : 'text-gray-400'} transition-all`}>
                        {s.label}
                      </div>
                      {isActive && (
                        <div className="h-1 bg-white/20 rounded-full mt-2 overflow-hidden">
                          <div className={`h-full bg-${s.color}-400 transition-all duration-1000 ${
                            isComplete ? 'w-full' : 'w-0'
                          }`}></div>
                        </div>
                      )}
                    </div>
                    {isComplete && (
                      <div className={`text-${s.color}-400`}>✓</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center text-white space-y-4">
            <div className="inline-block bg-white/10 px-6 py-3 rounded-full backdrop-blur">
              <Clock className="inline w-5 h-5 mr-2" />
              {step < steps.length ? 'Processing...' : 'Complete in 4 seconds'}
            </div>
            
            {step >= steps.length && (
              <button 
                onClick={nextScreen}
                className="block mx-auto bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all"
              >
                View Results <ChevronRight className="inline ml-2" />
              </button>
            )}
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur p-4 rounded text-white text-center">
            <Info className="inline w-4 h-4 mr-1" />
            All steps execute automatically. No intermediaries. No delays. No manual approvals.
          </div>
        </div>
      </div>
    );
  };

  const ResultsDashboard = () => (
    <div className="bg-gray-50 p-6 rounded-lg h-full overflow-auto">
      <h2 className="text-center mb-8">Trade Complete ✓</h2>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-6">
            <h3>Alice's Dashboard</h3>
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white">A</div>
          </div>

          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-400">
              <div className="text-gray-600 mb-1">Energy Sold</div>
              <div className="text-green-600">5 kWh</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-400">
              <div className="text-gray-600 mb-1">Payment Received</div>
              <div className="text-green-600">+$0.50</div>
              <div className="text-gray-500">Instant settlement</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-gray-600 mb-1">Updated Balance</div>
              <div>$2.97 today</div>
            </div>
            <div className="flex items-center text-green-600">
              <Check className="w-5 h-5 mr-2" />
              <span>Transaction confirmed on blockchain</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-6">
            <h3>Bob's Dashboard</h3>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white">B</div>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-400">
              <div className="text-gray-600 mb-1">Energy Received</div>
              <div className="text-blue-600">5 kWh</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-400">
              <div className="text-gray-600 mb-1">Amount Paid</div>
              <div className="text-blue-600">$0.52</div>
              <div className="text-gray-500">Including gas fee</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <div className="text-gray-600 mb-1">Savings</div>
              <div className="text-green-600">$0.33 (39%)</div>
              <div className="text-gray-500">vs. utility rate</div>
            </div>
            <div className="flex items-center text-blue-600">
              <Zap className="w-5 h-5 mr-2" />
              <span>EV charging in progress</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg border-2 border-purple-300 mb-6">
        <div className="text-center mb-4">
          <div className="text-gray-700 mb-2">Transaction Metrics</div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg text-center">
            <Clock className="w-6 h-6 mx-auto mb-2 text-purple-600" />
            <div className="text-purple-900">Settlement Time</div>
            <div className="text-purple-600">4 seconds</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <DollarSign className="w-6 h-6 mx-auto mb-2 text-green-600" />
            <div className="text-gray-700">Transaction Fee</div>
            <div className="text-green-600">$0.02</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <Shield className="w-6 h-6 mx-auto mb-2 text-blue-600" />
            <div className="text-gray-700">Security</div>
            <div className="text-blue-600">Blockchain</div>
          </div>
        </div>
      </div>

      <button 
        onClick={nextScreen}
        className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition-all flex items-center justify-center"
      >
        See System Benefits <ChevronRight className="ml-2" />
      </button>
    </div>
  );

  const SystemBenefits = () => (
    <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white p-6 rounded-lg h-full overflow-auto">
      <h2 className="text-center mb-8">Smart Contract Benefits</h2>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <Zap className="w-6 h-6" />
            </div>
            <h3>Speed</h3>
          </div>
          <div className="mb-2">4-second settlements vs. 30+ days</div>
          <div className="text-green-300">750x faster</div>
        </div>

        <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3">
              <TrendingDown className="w-6 h-6" />
            </div>
            <h3>Cost</h3>
          </div>
          <div className="mb-2">30-40% lower than utility rates</div>
          <div className="text-blue-300">No middleman fees</div>
        </div>

        <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-3">
              <Users className="w-6 h-6" />
            </div>
            <h3>Accessibility</h3>
          </div>
          <div className="mb-2">Anyone can participate</div>
          <div className="text-purple-300">No intermediary approval</div>
        </div>

        <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
              <Shield className="w-6 h-6" />
            </div>
            <h3>Trust</h3>
          </div>
          <div className="mb-2">Code enforces agreements</div>
          <div className="text-yellow-300">Immutable & transparent</div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur p-6 rounded-lg mb-8">
        <h3 className="mb-4 text-center">The Transformation</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <div>From centralized control to decentralized markets</div>
              <div className="text-gray-300">Utilities no longer gatekeep energy transactions</div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <div>From manual processes to autonomous execution</div>
              <div className="text-gray-300">Smart contracts work 24/7 without human intervention</div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <div>From trust in institutions to trust in code</div>
              <div className="text-gray-300">Transparent, verifiable, and unstoppable</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-400/20 border-2 border-yellow-400 p-6 rounded-lg text-center">
        <div className="mb-2">This is just one example</div>
        <div className="text-yellow-400">Smart contracts are transforming finance, real estate, supply chain, and more</div>
      </div>

      <button 
        onClick={() => setActiveScreen(0)}
        className="w-full mt-8 bg-white text-purple-900 py-4 rounded-lg hover:bg-gray-100 transition-all"
      >
        Restart Demo
      </button>
    </div>
  );

  const renderScreen = () => {
    switch (activeScreen) {
      case 0: return <WelcomeScreen />;
      case 1: return <AliceDashboard />;
      case 2: return <CreateListing />;
      case 3: return <BobMarketplace />;
      case 4: return <PurchaseConfirmation />;
      case 5: return <SmartContractExecution />;
      case 6: return <ResultsDashboard />;
      case 7: return <SystemBenefits />;
      default: return <WelcomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-white mb-6">
          <h1 className="mb-2">Smart Contract Energy Trading Demo</h1>
          <p className="text-gray-300">An interactive walkthrough of peer-to-peer energy trading powered by blockchain</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            {screens.map((screen, index) => (
              <div
                key={screen.id}
                className={`flex-1 ${index < screens.length - 1 ? 'mr-2' : ''}`}
              >
                <div className={`h-2 rounded-full transition-all ${
                  index <= activeScreen ? 'bg-blue-500' : 'bg-gray-700'
                }`}></div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-white">
            <div>
              <div className="text-gray-400">Step {activeScreen + 1} of {screens.length}</div>
              <div>{screens[activeScreen].title}</div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={prevScreen}
                disabled={activeScreen === 0}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextScreen}
                disabled={activeScreen === screens.length - 1}
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden" style={{ minHeight: '600px' }}>
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}
