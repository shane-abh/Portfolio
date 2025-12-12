import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  ShieldCheck, 
  Server, 
  Database, 
  Brain, 
  HardDrive,
  ArrowRight,
  ArrowDown,
  Globe,
  LineChart,
  Layers,
  Cloud,
  Flame,
  GitBranch,
  Users,
  FileText,
  Cpu,
  Zap
} from 'lucide-react';

export interface Node {
  id: string;
  label: string;
  type: 'input' | 'process' | 'database' | 'service' | 'storage' | 'auth' | 'api' | 'llm';
}

export interface Edge {
  from: string;
  to: string;
  label?: string;
}

export interface FlowchartProps {
  data: {
    nodes: Node[];
    edges: Edge[];
    layout?: 'horizontal' | 'three-tier' | 'simple';
  };
}

const getIcon = (id: string) => {
  const iconClass = "w-7 h-7 mb-1.5";
  switch (id) {
    // Generic
    case 'frontend': return <Monitor className={iconClass} />;
    case 'auth': return <ShieldCheck className={iconClass} />;
    case 'backend': return <Server className={iconClass} />;
    case 'database': return <Database className={iconClass} />;
    case 'llm': return <Brain className={iconClass} />;
    case 'session': return <HardDrive className={iconClass} />;
    // Specific services
    case 'fastapi': return <Zap className={iconClass} />;
    case 'pinecone': return <Database className={iconClass} />;
    case 'gemini': return <Brain className={iconClass} />;
    case 'nextjs': return <Globe className={iconClass} />;
    case 'langchain': return <Layers className={iconClass} />;
    case 'groq': return <Brain className={iconClass} />;
    case 'alphavantage': return <LineChart className={iconClass} />;
    case 'tiingo': return <LineChart className={iconClass} />;
    case 'react': return <Monitor className={iconClass} />;
    case 'spring': return <Server className={iconClass} />;
    case 'ollama': return <Cpu className={iconClass} />;
    case 'redux': return <GitBranch className={iconClass} />;
    case 'firebase': return <Flame className={iconClass} />;
    case 'express': return <Server className={iconClass} />;
    case 'mongodb': return <Database className={iconClass} />;
    case 'graphql': return <Cloud className={iconClass} />;
    case 'nodejs': return <Server className={iconClass} />;
    case 'user': return <Users className={iconClass} />;
    default: return <FileText className={iconClass} />;
  }
};

const getGradient = (type: string) => {
  switch (type) {
    case 'input': return 'from-blue-500/20 to-blue-600/30 border-blue-500/50 shadow-blue-500/20';
    case 'auth': return 'from-cyan-500/20 to-cyan-600/30 border-cyan-500/50 shadow-cyan-500/20';
    case 'process': return 'from-emerald-500/20 to-emerald-600/30 border-emerald-500/50 shadow-emerald-500/20';
    case 'database': return 'from-violet-500/20 to-violet-600/30 border-violet-500/50 shadow-violet-500/20';
    case 'service': return 'from-amber-500/20 to-amber-600/30 border-amber-500/50 shadow-amber-500/20';
    case 'storage': return 'from-rose-500/20 to-rose-600/30 border-rose-500/50 shadow-rose-500/20';
    case 'api': return 'from-orange-500/20 to-orange-600/30 border-orange-500/50 shadow-orange-500/20';
    case 'llm': return 'from-pink-500/20 to-pink-600/30 border-pink-500/50 shadow-pink-500/20';
    default: return 'from-gray-500/20 to-gray-600/30 border-gray-500/50 shadow-gray-500/20';
  }
};

const getGlowColor = (type: string) => {
  switch (type) {
    case 'input': return 'hover:shadow-blue-500/40';
    case 'auth': return 'hover:shadow-cyan-500/40';
    case 'process': return 'hover:shadow-emerald-500/40';
    case 'database': return 'hover:shadow-violet-500/40';
    case 'service': return 'hover:shadow-amber-500/40';
    case 'storage': return 'hover:shadow-rose-500/40';
    case 'api': return 'hover:shadow-orange-500/40';
    case 'llm': return 'hover:shadow-pink-500/40';
    default: return 'hover:shadow-gray-500/40';
  }
};

const getTextColor = (type: string) => {
  switch (type) {
    case 'input': return 'text-blue-400';
    case 'auth': return 'text-cyan-400';
    case 'process': return 'text-emerald-400';
    case 'database': return 'text-violet-400';
    case 'service': return 'text-amber-400';
    case 'storage': return 'text-rose-400';
    case 'api': return 'text-orange-400';
    case 'llm': return 'text-pink-400';
    default: return 'text-gray-400';
  }
};

const NodeCard = ({ node, delay, size = 'normal' }: { node: Node; delay: number; size?: 'normal' | 'small' }) => {
  const isSmall = size === 'small';
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className={`
        relative flex flex-col items-center justify-center
        ${isSmall ? 'px-2 py-2 min-w-[85px]' : 'px-4 py-3 min-w-[110px]'}
        rounded-xl
        bg-gradient-to-br ${getGradient(node.type)}
        border backdrop-blur-sm
        shadow-lg ${getGlowColor(node.type)}
        transition-shadow duration-300
        cursor-pointer
      `}
    >
      <div className={getTextColor(node.type)}>
        {React.cloneElement(getIcon(node.id), { 
          className: isSmall ? "w-5 h-5 mb-1" : "w-7 h-7 mb-1.5" 
        })}
      </div>
      <span className={`text-white font-semibold text-center whitespace-pre-line leading-tight ${isSmall ? 'text-[10px]' : 'text-xs'}`}>
        {node.label}
      </span>
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${getGradient(node.type)} blur-xl opacity-30 -z-10`} />
    </motion.div>
  );
};

const HorizontalArrow = ({ label, delay }: { label?: string; delay: number }) => (
  <motion.div 
    className="flex flex-col items-center justify-center px-1"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    <motion.div
      animate={{ x: [0, 4, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <ArrowRight className="w-5 h-5 text-gray-500" />
    </motion.div>
    {label && (
      <span className="text-[9px] text-gray-500 font-medium mt-0.5 text-center max-w-[50px] leading-tight">
        {label}
      </span>
    )}
  </motion.div>
);

const VerticalArrow = ({ label, delay }: { label?: string; delay: number }) => (
  <motion.div 
    className="flex flex-col items-center py-1"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    {label && (
      <span className="text-[9px] text-gray-500 font-medium mb-0.5 text-center">
        {label}
      </span>
    )}
    <motion.div
      animate={{ y: [0, 3, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <ArrowDown className="w-4 h-4 text-gray-500" />
    </motion.div>
  </motion.div>
);

// Three-Tier Layout: Frontend | Backend | Database/Services
const ThreeTierLayout: React.FC<{ data: FlowchartProps['data'] }> = ({ data }) => {
  const frontendNodes = data.nodes.filter(n => ['frontend', 'react', 'nextjs', 'redux'].includes(n.id));
  const middlewareNodes = data.nodes.filter(n => ['auth', 'firebase', 'graphql', 'langchain'].includes(n.id));
  const backendNodes = data.nodes.filter(n => ['backend', 'express', 'nodejs', 'spring', 'fastapi'].includes(n.id));
  const serviceNodes = data.nodes.filter(n => ['llm', 'groq', 'ollama', 'gemini', 'alphavantage', 'tiingo', 'pinecone', 'session'].includes(n.id));
  const databaseNodes = data.nodes.filter(n => ['database', 'mongodb'].includes(n.id));

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Frontend Tier */}
      {frontendNodes.length > 0 && (
        <>
          <motion.span 
            className="text-[10px] font-bold text-blue-400/70 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Frontend
          </motion.span>
          <div className="flex items-center gap-2">
            {frontendNodes.map((node, i) => (
              <NodeCard key={node.id} node={node} delay={0.1 + i * 0.1} />
            ))}
          </div>
          <VerticalArrow delay={0.3} />
        </>
      )}

      {/* Middleware Tier (Auth, GraphQL, etc.) */}
      {middlewareNodes.length > 0 && (
        <>
          <motion.span 
            className="text-[10px] font-bold text-cyan-400/70 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {middlewareNodes.some(n => n.id === 'auth' || n.id === 'firebase') ? 'Auth / API Layer' : 'API Layer'}
          </motion.span>
          <div className="flex items-center gap-2">
            {middlewareNodes.map((node, i) => (
              <NodeCard key={node.id} node={node} delay={0.3 + i * 0.1} />
            ))}
          </div>
          <VerticalArrow delay={0.5} />
        </>
      )}

      {/* Backend Tier */}
      {backendNodes.length > 0 && (
        <>
          <motion.span 
            className="text-[10px] font-bold text-emerald-400/70 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Backend
          </motion.span>
          <div className="flex items-center gap-2">
            {backendNodes.map((node, i) => (
              <NodeCard key={node.id} node={node} delay={0.5 + i * 0.1} />
            ))}
          </div>
          <VerticalArrow delay={0.7} />
        </>
      )}

      {/* Services & Database Tier */}
      {(serviceNodes.length > 0 || databaseNodes.length > 0) && (
        <>
          <motion.span 
            className="text-[10px] font-bold text-violet-400/70 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Services & Data
          </motion.span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {[...serviceNodes, ...databaseNodes].map((node, i) => (
              <NodeCard key={node.id} node={node} delay={0.7 + i * 0.1} size="small" />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Horizontal Layout: Left to Right flow (for RAG-style projects)
const HorizontalLayout: React.FC<{ data: FlowchartProps['data'] }> = ({ data }) => {
  const findNode = (id: string) => data.nodes.find(n => n.id === id);
  
  const frontendNode = findNode('frontend') || findNode('react') || findNode('nextjs');
  const authNode = findNode('auth') || findNode('firebase');
  const backendNode = findNode('backend') || findNode('fastapi') || findNode('express') || findNode('spring') || findNode('langchain');
  const bottomNodes = data.nodes.filter(n => 
    ['pinecone', 'gemini', 'session', 'mongodb', 'database', 'llm', 'groq', 'ollama', 'alphavantage', 'tiingo'].includes(n.id)
  );

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Section Labels */}
      <div className="flex justify-between w-full px-4 mb-2">
        <motion.span 
          className="text-[10px] font-bold text-blue-400/70 uppercase tracking-wider"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Frontend
        </motion.span>
        {authNode && (
          <motion.span 
            className="text-[10px] font-bold text-cyan-400/70 uppercase tracking-wider"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Security
          </motion.span>
        )}
        <motion.span 
          className="text-[10px] font-bold text-emerald-400/70 uppercase tracking-wider"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Backend
        </motion.span>
      </div>

      {/* Main Horizontal Flow */}
      <div className="flex items-center justify-center gap-2">
        {frontendNode && <NodeCard node={frontendNode} delay={0.2} />}
        
        {authNode && (
          <>
            <HorizontalArrow label="Request" delay={0.3} />
            <NodeCard node={authNode} delay={0.4} />
          </>
        )}
        
        {backendNode && (
          <>
            <HorizontalArrow label={authNode ? "Validated" : "API Call"} delay={0.5} />
            <div className="flex flex-col items-center gap-2">
              <NodeCard node={backendNode} delay={0.6} />
              
              {bottomNodes.length > 0 && (
                <>
                  <VerticalArrow delay={0.7} />
                  <div className="flex items-center gap-2">
                    {bottomNodes.map((node, i) => (
                      <NodeCard key={node.id} node={node} delay={0.8 + i * 0.1} size="small" />
                    ))}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Simple Linear Layout
const SimpleLayout: React.FC<{ data: FlowchartProps['data'] }> = ({ data }) => {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {data.nodes.map((node, i) => (
        <React.Fragment key={node.id}>
          <NodeCard node={node} delay={0.1 + i * 0.15} />
          {i < data.nodes.length - 1 && <HorizontalArrow delay={0.2 + i * 0.15} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export const Flowchart: React.FC<FlowchartProps> = ({ data }) => {
  const layout = data.layout || 'three-tier';

  return (
    <div className="relative w-full bg-gradient-to-br from-[#0f1012] to-[#1a1b1e] rounded-2xl p-5 md:p-6 overflow-hidden border border-gray-800/50">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Glowing orbs */}
      <motion.div 
        className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />

      {/* Layout Renderer */}
      <div className="relative z-10">
        {layout === 'horizontal' && <HorizontalLayout data={data} />}
        {layout === 'three-tier' && <ThreeTierLayout data={data} />}
        {layout === 'simple' && <SimpleLayout data={data} />}
      </div>

      {/* Legend */}
      <motion.div 
        className="relative z-10 flex flex-wrap justify-center gap-3 mt-5 pt-4 border-t border-gray-800/50 text-[10px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {data.nodes.some(n => n.type === 'input') && (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-500/60" />
            <span className="text-gray-500">Frontend</span>
          </div>
        )}
        {data.nodes.some(n => n.type === 'auth') && (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-cyan-500/60" />
            <span className="text-gray-500">Auth</span>
          </div>
        )}
        {data.nodes.some(n => n.type === 'process') && (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
            <span className="text-gray-500">Server</span>
          </div>
        )}
        {data.nodes.some(n => n.type === 'api') && (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-orange-500/60" />
            <span className="text-gray-500">API</span>
          </div>
        )}
        {data.nodes.some(n => n.type === 'llm') && (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-pink-500/60" />
            <span className="text-gray-500">AI/LLM</span>
          </div>
        )}
        {data.nodes.some(n => n.type === 'database') && (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-violet-500/60" />
            <span className="text-gray-500">Database</span>
          </div>
        )}
        {data.nodes.some(n => n.type === 'service') && (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-amber-500/60" />
            <span className="text-gray-500">Service</span>
          </div>
        )}
        {data.nodes.some(n => n.type === 'storage') && (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-rose-500/60" />
            <span className="text-gray-500">Storage</span>
          </div>
        )}
      </motion.div>
    </div>
  );
};
