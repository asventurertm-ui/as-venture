import React, { useState, useEffect } from 'react';
import { Calculator, HelpCircle, Info, ChevronRight, CheckCircle2 } from 'lucide-react';

interface SolarCalculatorProps {
  initialBill?: number;
  compact?: boolean;
}

export default function SolarCalculator({ initialBill = 5000, compact = false }: SolarCalculatorProps) {
  const [bill, setBill] = useState(initialBill);
  const [connectionType, setConnectionType] = useState<'residential' | 'commercial'>('residential');
  
  const [systemSize, setSystemSize] = useState(5);
  const [roofArea, setRoofArea] = useState(400); 
  const [unitsMin, setUnitsMin] = useState(600);
  const [unitsMax, setUnitsMax] = useState(750);
  
  const [monthlySavings, setMonthlySavings] = useState(5000);
  const [annualSavings, setAnnualSavings] = useState(60000);
  const [paybackPeriod, setPaybackPeriod] = useState('3-4');
  const [estimatedCost, setEstimatedCost] = useState(310000);
  const [subsidy, setSubsidy] = useState(78000);
  const [netInvestment, setNetInvestment] = useState(232000);

  // Recalculate everything based strictly on the provided table metrics
  useEffect(() => {
    // 1. Calculate Recommended System Size (Load in KW)
    // Table metric: ₹1000 bill roughly equals 1 KW Load
    let calculatedSize = Math.max(1, Math.round(bill / 1000));
    calculatedSize = Math.min(calculatedSize, 50); // Clamp to max 50 KW
    setSystemSize(calculatedSize);

    // 2. Area (Sq.ft.) 
    // Table metric: Exactly 80 Sq.ft per 1 KW
    setRoofArea(calculatedSize * 80);

    // 3. Unit Generation (Kw/Month)
    // Table metric: 120 to 150 units per 1 KW
    setUnitsMin(calculatedSize * 120);
    setUnitsMax(calculatedSize * 150);

    // 4. Monthly Savings
    // Table metric: Scales at roughly ₹1000 per 1 KW
    const computedMonthlySavings = calculatedSize * 1000;
    setMonthlySavings(computedMonthlySavings);

    const computedAnnualSavings = computedMonthlySavings * 12;
    setAnnualSavings(computedAnnualSavings);

    // 5. Estimate Total Installation Cost (Standard Industry Avg)
    const costPerKW = connectionType === 'residential' ? 62000 : 55000;
    const totalCost = calculatedSize * costPerKW;
    setEstimatedCost(totalCost);

    // 6. Calculate Government Subsidy (PM Surya Ghar Yojana for residential)
    let computedSubsidy = 0;
    if (connectionType === 'residential') {
      if (calculatedSize >= 3) {
        computedSubsidy = 78000;
      } else if (calculatedSize >= 2) {
        computedSubsidy = 60000 + (calculatedSize - 2) * 18000;
      } else {
        computedSubsidy = calculatedSize * 30000;
      }
    }
    setSubsidy(computedSubsidy);

    const netCost = totalCost - computedSubsidy;
    setNetInvestment(netCost);

    // 7. Calculate payback period (Years)
    const paybackYears = netCost / computedAnnualSavings;
    if (isNaN(paybackYears) || !isFinite(paybackYears)) {
      setPaybackPeriod('2-3');
    } else if (paybackYears < 3) {
      setPaybackPeriod('2-3');
    } else if (paybackYears < 4) {
      setPaybackPeriod('3-4');
    } else if (paybackYears < 5) {
      setPaybackPeriod('4-5');
    } else {
      setPaybackPeriod('5-6');
    }

  }, [bill, connectionType]);

  if (compact) {
    return (
      <div id="compact-solar-calculator" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Inputs */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800" htmlFor="bill-range">
                  Monthly Electricity Bill (₹)
                </label>
                <span className="text-xl font-extrabold text-emerald-500 font-display">
                  ₹{bill.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                id="bill-range"
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-2 bg-yellow-50 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-2 px-1">
                <span>₹1,000</span>
                <span>₹5,000</span>
                <span>₹10,000</span>
                <span>₹20,000</span>
                <span>₹50,000+</span>
              </div>
            </div>

            <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100/50 flex items-start space-x-3">
              <Info className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-relaxed">
                Solar sizes are calculated at exactly <strong>80 Sq.ft. Area</strong> and <strong>120-150 Units Generated</strong> per 1 KW Load.
              </p>
            </div>
          </div>

          {/* Right Outputs */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            
            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between">
              <span className="text-xs font-bold text-slate-500 block mb-1">Recommended System Size</span>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">{systemSize}</span>
                <span className="text-xs font-bold text-slate-500 ml-1">KW</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-2">Requires exactly {roofArea} sq.ft. of space</p>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between">
              <span className="text-xs font-extrabold text-emerald-700 block mb-1">Estimated Monthly Savings</span>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-green-500 font-display">₹{monthlySavings.toLocaleString('en-IN')}</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-2">Generates {unitsMin}-{unitsMax} units/mo</p>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between">
              <span className="text-xs font-extrabold text-emerald-700 block mb-1">Annual Savings</span>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-green-500 font-display">₹{annualSavings.toLocaleString('en-IN')}</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-2">Calculated for 12 billing cycles</p>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between">
              <span className="text-xs font-bold text-slate-500 block mb-1">Payback Period</span>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">{paybackPeriod}</span>
                <span className="text-xs font-bold text-slate-500 ml-1">Years</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-2">Up to 25 years lifetime returns</p>
            </div>

          </div>

        </div>
      </div>
    );
  }

  // Full Expanded Calculator Section
  return (
    <div id="full-solar-calculator" className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-100/50 overflow-hidden">
      
      {/* Title Header */}
      <div className="bg-[#0b1b3d] text-white p-6 sm:p-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-emerald-500 rounded-xl">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold tracking-tight font-display">Smart Solar Savings Estimator</h3>
            <p className="text-xs text-slate-300">Accurate metrics aligned with standard load generation</p>
          </div>
        </div>
        <span className="hidden sm:inline-block px-3 py-1 bg-slate-800 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 border border-slate-700">
          Updated 2026 Policy
        </span>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Input 1: Connection Type */}
            <div>
              <label className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block mb-3">
                1. Select Connection Type
              </label>
              <div className="grid grid-cols-2 gap-3" id="calc-connection-toggle">
                <button
                  type="button"
                  onClick={() => setConnectionType('residential')}
                  className={`py-3 px-4 rounded-xl text-sm font-bold tracking-wide border transition-all ${
                    connectionType === 'residential'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-600 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  🏡 Residential
                </button>
                <button
                  type="button"
                  onClick={() => setConnectionType('commercial')}
                  className={`py-3 px-4 rounded-xl text-sm font-bold tracking-wide border transition-all ${
                    connectionType === 'commercial'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-600 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  🏢 Commercial
                </button>
              </div>
            </div>

            {/* Input 2: Monthly Bill */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block" htmlFor="expanded-bill">
                  2. Monthly Electricity Bill
                </label>
                <div className="relative">
                  <input
                    id="expanded-bill"
                    type="number"
                    value={bill}
                    onChange={(e) => setBill(Math.max(1000, Math.min(Number(e.target.value), 200000)))}
                    className="w-28 text-right bg-slate-50 font-bold text-slate-800 border border-slate-200 rounded-lg py-1 px-2.5 text-sm focus:outline-hidden focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <span className="absolute left-2.5 top-1 text-sm font-bold text-slate-400">₹</span>
                </div>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500 mt-4"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-2">
                <span>₹1,000</span>
                <span>₹25,000</span>
                <span>₹50,000</span>
                <span>₹75,000</span>
                <span>₹1,00,000+</span>
              </div>
            </div>

            {/* Help Prompt */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-3.5">
              <h5 className="font-bold text-xs text-slate-800 flex items-center space-x-2">
                <Info className="w-4 h-4 text-emerald-500" />
                <span>Space & Output Metrics</span>
              </h5>
              <p className="text-xs text-slate-500 leading-relaxed">
                A <strong>{systemSize} KW</strong> solar load requires exactly <strong className="text-slate-700">{roofArea} Sq.ft.</strong> of area, generating between <strong className="text-slate-700">{unitsMin}-{unitsMax} Units</strong> per month.
              </p>
              {connectionType === 'residential' ? (
                <div className="flex items-center space-x-2.5 text-xs text-emerald-600 font-bold bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>PM Surya Ghar Subsidy included</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2.5 text-xs text-blue-600 font-bold bg-blue-50 p-2.5 rounded-xl border border-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>Eligible for 40% Accelerated Depreciation</span>
                </div>
              )}
            </div>

          </div>

          {/* Results Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Primary outputs grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Optimum System Size</p>
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-extrabold text-slate-900 font-display">{systemSize}</span>
                  <span className="text-sm font-bold text-slate-500">KW</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-2">Unit Generation: {unitsMin}-{unitsMax} units/mo</p>
              </div>

              <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100">
                <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-1.5">Estimated Savings</p>
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-extrabold text-emerald-600 font-display">₹{monthlySavings.toLocaleString('en-IN')}</span>
                  <span className="text-xs font-bold text-emerald-500">/mo</span>
                </div>
                <p className="text-[10px] text-emerald-600/90 font-bold mt-2">₹{(annualSavings).toLocaleString('en-IN')} yearly savings</p>
              </div>

            </div>

            {/* Financial Breakdown Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
              <h4 className="font-bold text-sm text-slate-800 tracking-tight">Financial Estimates Breakdown</h4>
              
              <div className="space-y-2.5 text-xs">
                
                <div className="flex justify-between items-center text-slate-600">
                  <span>Estimated Project Cost (Turnkey)</span>
                  <span className="font-bold text-slate-800">₹{estimatedCost.toLocaleString('en-IN')}</span>
                </div>

                {connectionType === 'residential' && (
                  <div className="flex justify-between items-center text-emerald-600 bg-emerald-50/50 p-2 rounded-lg">
                    <span>Central Gov. Subsidy (Approved)</span>
                    <span className="font-extrabold">- ₹{subsidy.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="h-[1px] bg-slate-200 my-2"></div>

                <div className="flex justify-between items-center text-sm font-bold text-slate-800">
                  <span>Net System Investment</span>
                  <span className="text-slate-900 font-extrabold text-base font-display">₹{netInvestment.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span>Net Payback Period</span>
                  <span className="font-extrabold text-slate-800">{paybackPeriod} Years</span>
                </div>

              </div>

            </div>

            {/* CTA action */}
            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h5 className="font-bold text-xs text-emerald-900">Want a highly specific quotation?</h5>
                <p className="text-[11px] text-emerald-700">Schedule a free design visit with detailed 3D structure maps.</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const contactEl = document.getElementById('contact-form-section');
                  if (contactEl) {
                    contactEl.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    alert("Please request via the contact tab.");
                  }
                }}
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 px-5 rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors shadow-sm cursor-pointer"
              >
                <span>Request Survey</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}