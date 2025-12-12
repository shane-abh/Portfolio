import React from 'react';

interface TaxRAGPreviewProps {
  className?: string;
  compact?: boolean; // For use in ProjectCard vs ProjectDetail
}

const TaxRAGPreview: React.FC<TaxRAGPreviewProps> = ({ className = '', compact = false }) => {
  const containerHeight = compact 
    ? 'h-[350px] md:h-[400px]' 
    : 'h-[500px] md:h-[600px]';
  
  const maxWidth = compact ? 'max-w-full' : 'max-w-[950px]';

  return (
    <div className={`${className} ${containerHeight} ${maxWidth} w-full bg-gradient-to-b from-[#0D1F35] to-[#0A1628] rounded-lg md:rounded-[20px] shadow-[0_0_0_1px_#2E4A6E,0_8px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden flex flex-col mx-auto relative`}>
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D52B1E] via-[#FFB81C] to-[#D52B1E] z-10" />
      
      {/* Header */}
      <div className="bg-gradient-to-b from-[rgba(13,31,53,0.95)] to-[rgba(10,22,40,0.98)] border-b border-[#1E3A5F]">
        {/* Top Status Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0 px-3 md:px-6 py-2 bg-black/30 text-[8px] md:text-[10px] uppercase tracking-wide text-white/50 border-b border-[#1E3A5F] flex-wrap">
          <div className="font-mono text-[#FFB81C]">
            ◆ BLUEPRINT 2025
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] shadow-[0_0_4px_#2E7D32]" />
            <span>System Active</span>
          </div>
        </div>
        
        {/* Main Header Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 px-4 md:px-6 py-3 flex-wrap">
          {/* Title Section */}
          <div className="flex items-center gap-2.5">
            <span className="text-2xl md:text-4xl">🍁</span>
            <div>
              <h1 className="text-lg md:text-[26px] font-normal tracking-wide m-0 bg-gradient-to-r from-white to-[#6B8FC5] bg-clip-text text-transparent font-['Bebas_Neue','Oswald',sans-serif]">
                Budget Navigator
              </h1>
              <p className="text-[10px] md:text-xs m-0 text-white/70 tracking-wide">
                Building Tomorrow's Canada
              </p>
            </div>
          </div>
          
          {/* Header Controls */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {/* User Info */}
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[rgba(74,111,165,0.15)] border border-[#1E3A5F] rounded-lg">
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4A6FA5] to-[#2E4A6E] flex items-center justify-center text-xs">
                👤
              </span>
              <span className="hidden sm:inline text-xs font-medium text-white">Guest</span>
            </div>
            
            {/* Questions Gauge */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[rgba(255,184,28,0.08)] border border-[rgba(255,184,28,0.2)] rounded-lg">
              <span className="hidden sm:inline text-[8px] tracking-wide text-[#FFB81C] font-semibold">
                QUERIES
              </span>
              <div className="w-[60px] md:w-20 h-1.5 bg-white/10 rounded-md overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-[#D52B1E] to-[#FFB81C] rounded-md" />
              </div>
              <span className="font-mono text-[10px] md:text-xs text-white min-w-[30px]">
                15/20
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-2 md:px-6 py-4 bg-gradient-to-b from-transparent to-[rgba(10,22,40,0.5)]">
        {/* Assistant Message */}
        <div className="mb-4 text-left">
          <div className="inline-block max-w-[90%] md:max-w-[75%] px-4 py-3 rounded-xl rounded-bl-sm bg-gradient-to-b from-white to-[#F5F7FA] text-[#1A1A2E] border border-[#E5E8EC] border-l-4 border-l-[#D52B1E] text-xs md:text-sm leading-relaxed relative">
            <div className="hidden sm:block absolute -top-2 left-2.5 text-[7px] md:text-[9px] tracking-wide text-[#D52B1E] bg-white px-2 py-0.5 rounded border border-[#E5E8EC] font-semibold">
              📋 RESPONSE
            </div>
            <div>
              Welcome to the <strong>Budget 2025 Navigator</strong>! 🍁<br /><br />
              I'm here to help you understand Canada's fiscal blueprint. What would you like to explore?
            </div>
          </div>
        </div>
        
        {/* User Message */}
        <div className="mb-4 text-right">
          <div className="inline-block max-w-[90%] md:max-w-[75%] px-4 py-3 rounded-xl rounded-br-sm bg-gradient-to-br from-[#4A6FA5] to-[#2E4A6E] text-white border border-white/10 text-xs md:text-sm leading-relaxed relative">
            <div className="hidden sm:block absolute -top-2 right-2.5 text-[7px] md:text-[9px] tracking-wide text-[#FFB81C] bg-[#0A1628] px-2 py-0.5 rounded border border-[#1E3A5F] font-semibold">
              QUERY
            </div>
            <div>
              What are the key tax changes in Budget 2025?
            </div>
          </div>
        </div>
        
        {/* Assistant Message */}
        <div className="mb-4 text-left">
          <div className="inline-block max-w-[90%] md:max-w-[75%] px-4 py-3 rounded-xl rounded-bl-sm bg-gradient-to-b from-white to-[#F5F7FA] text-[#1A1A2E] border border-[#E5E8EC] border-l-4 border-l-[#D52B1E] text-xs md:text-sm leading-relaxed relative">
            <div className="hidden sm:block absolute -top-2 left-2.5 text-[7px] md:text-[9px] tracking-wide text-[#D52B1E] bg-white px-2 py-0.5 rounded border border-[#E5E8EC] font-semibold">
              📋 RESPONSE
            </div>
            <div>
              Budget 2025 introduces several significant tax changes:<br /><br />
              • <strong>Capital Gains Inclusion Rate:</strong> Increased from 50% to 67% for gains over $250,000<br />
              • <strong>Lifetime Capital Gains Exemption:</strong> Increased to $1.25 million<br />
              • <strong>Alternative Minimum Tax:</strong> Enhanced for high-income earners<br /><br />
              These changes aim to ensure tax fairness while supporting economic growth.
            </div>
          </div>
        </div>
      </div>
      
      {/* Input Area */}
      <div className="px-4 md:px-6 py-3 bg-gradient-to-b from-[rgba(13,31,53,0.95)] to-[rgba(10,22,40,0.98)] border-t border-[#1E3A5F]">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Type your question..."
            className="flex-1 px-3.5 py-2.5 bg-white/5 border-2 border-[#1E3A5F] rounded-lg text-xs md:text-sm text-white outline-none min-w-0 placeholder:text-white/50"
            readOnly
            value=""
          />
          <button className="px-5 py-2.5 bg-[#D52B1E] text-white border-none rounded-lg text-[10px] md:text-xs font-semibold uppercase tracking-wide cursor-pointer whitespace-nowrap">
            <span className="hidden sm:inline">Send </span>→
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxRAGPreview;
