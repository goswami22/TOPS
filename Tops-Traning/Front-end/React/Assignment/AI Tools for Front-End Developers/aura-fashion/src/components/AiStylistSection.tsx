import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, MessageSquare, Send, X, ArrowRight, Loader2, Check, ShoppingCart, HelpCircle } from 'lucide-react';
import { Product, ProductSize, ProductColor } from '../types';
import { PRODUCTS } from '../data';

interface AiStylistSectionProps {
  onClose: () => void;
  onAddToCart: (product: Product, size: ProductSize, color: ProductColor) => void;
  darkMode: boolean;
}

interface ChatMessage {
  sender: 'user' | 'stylist';
  content: string;
}

export default function AiStylistSection({
  onClose,
  onAddToCart,
  darkMode
}: AiStylistSectionProps) {
  const [activeTab, setActiveTab] = useState<'advisor' | 'assistant'>('advisor');
  
  // Quiz parameters
  const [occasion, setOccasion] = useState('Daily Dress Drop');
  const [vibe, setVibe] = useState('Minimalist Premium');
  const [budget, setBudget] = useState(500);
  const [extraDetails, setExtraDetails] = useState('');
  
  // Results
  const [loadingAdvice, setLoadingAdvice] = useState(false);
  const [adviceMarkdown, setAdviceMarkdown] = useState<string | null>(null);
  
  // Chat States
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      sender: 'stylist',
      content: 'Greetings. I am Aura’s Master AI Stylist. Share your styling objectives, sizing query, or desired dress code so I may curate the perfect wardrobe items for you.'
    }
  ]);
  const [loadingChat, setLoadingChat] = useState(false);
  
  // References for styling add
  const [matchedProducts, setMatchedProducts] = useState<Product[]>([]);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Auto scroll chat
  useEffect(() => {
    if (activeTab === 'assistant' && chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory, activeTab]);

  // Handle Advisor Quiz submit
  const handleQueryAdvisor = async () => {
    setLoadingAdvice(true);
    setAdviceMarkdown(null);
    setMatchedProducts([]);

    try {
      const response = await fetch('/api/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: extraDetails,
          occasion,
          vibe,
          budget
        })
      });

      if (!response.ok) throw new Error("Could not contact the Aura styling desk.");
      const data = await response.json();
      
      setAdviceMarkdown(data.recommendations);
      
      // Smart matching algorithm: scan AI response for product words and display buy buttons
      const textToScan = (data.recommendations || "").toLowerCase();
      const detected: Product[] = [];
      PRODUCTS.forEach(p => {
        const pNameLower = p.name.toLowerCase();
        // Check simple word similarities
        if (textToScan.includes(pNameLower) || 
            (pNameLower.includes("hoodie") && textToScan.includes("hoodie")) ||
            (pNameLower.includes("trench") && textToScan.includes("trench")) ||
            (pNameLower.includes("jacket") && textToScan.includes("jacket")) ||
            (pNameLower.includes("sweater") && textToScan.includes("sweater")) ||
            (pNameLower.includes("trousers") && textToScan.includes("trousers")) ||
            (pNameLower.includes("boots") && textToScan.includes("boots")) ||
            (pNameLower.includes("tote") && textToScan.includes("tote")) ||
            (pNameLower.includes("dress") && textToScan.includes("dress")) ||
            (pNameLower.includes("tee") && textToScan.includes("tee"))
        ) {
          detected.push(p);
        }
      });
      // Limit to max 3 items to avoid clutter
      setMatchedProducts(detected.slice(0, 3));
    } catch (e: any) {
      console.error(e);
      setAdviceMarkdown(`### Error Connecting to Aura Servers\n\nI encountered difficulty connecting to the recommendation models. For now, we recommend pairing our **Heavyweight Oversized Hoodie** with **Architectural Cargo Trousers** for a modern tailored streetwear silhouette.`);
    } finally {
      setLoadingAdvice(false);
    }
  };

  // Handle Assistant Chat Submit
  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || loadingChat) return;

    const userMsgMsg = chatInput;
    setChatInput('');
    setChatHistory(prev => [...prev, { sender: 'user', content: userMsgMsg }]);
    setLoadingChat(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...chatHistory, { sender: 'user', content: userMsgMsg }].map(m => ({
            role: m.sender === 'user' ? 'user' : 'model',
            content: m.content
          }))
        })
      });

      if (!response.ok) throw new Error();
      const data = await response.json();
      
      setChatHistory(prev => [...prev, { sender: 'stylist', content: data.reply }]);
    } catch {
      setChatHistory(prev => [...prev, {
        sender: 'stylist',
        content: "Drafting response failed. Our creative atelier recommends referencing his true sizing for mocknecks or chelsea boots."
      }]);
    } finally {
      setLoadingChat(false);
    }
  };

  // Render markdown parser utility simplified
  const renderAdviceHtml = (text: string) => {
    // Basic formatting parsing
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      let trimmed = line.trim();
      
      if (trimmed.startsWith('### ')) {
        return <h3 key={idx} className="text-base font-serif font-bold text-amber-600 mt-5 mb-2">{trimmed.replace('### ', '')}</h3>;
      }
      if (trimmed.startsWith('#### ')) {
        return <h4 key={idx} className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-4 mb-1.5">{trimmed.replace('#### ', '')}</h4>;
      }
      if (trimmed.startsWith('## ')) {
        return <h2 key={idx} className="text-lg font-serif font-bold text-neutral-900 dark:text-white mt-6 mb-3">{trimmed.replace('## ', '')}</h2>;
      }
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        return <p key={idx} className="font-semibold text-neutral-850 dark:text-neutral-100 my-2">{trimmed.slice(2, -2)}</p>;
      }
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        const coreText = trimmed.replace(/^[*-\s]+/, '');
        // Highlight bullet parts
        const splitBold = coreText.split('**');
        return (
          <li key={idx} className="ml-5 list-disc text-neutral-600 dark:text-neutral-400 text-xs mb-1.5 leading-relaxed">
            {splitBold.map((segment, sIdx) => 
              sIdx % 2 !== 0 ? <strong className="font-semibold text-neutral-900 dark:text-white" key={sIdx}>{segment}</strong> : segment
            )}
          </li>
        );
      }
      if (trimmed === '') {
        return <div key={idx} className="h-2" />;
      }
      
      // Paragraph styling with inner formatting support
      const splitBolds = trimmed.split('**');
      return (
        <p key={idx} className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
          {splitBolds.map((seg, sIdx) => 
            sIdx % 2 !== 0 ? <strong className="font-semibold text-neutral-900 dark:text-white" key={sIdx}>{seg}</strong> : seg
          )}
        </p>
      );
    });
  };

  // Quick helper: Fast add to cart for matched items
  const [addingId, setAddingId] = useState<string | null>(null);
  const handleQuickAdd = (p: Product) => {
    setAddingId(p.id);
    onAddToCart(p, p.sizes[0], p.colors[0]);
    setTimeout(() => setAddingId(null), 1500);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-lg shadow-2xl flex flex-col h-full border-l border-neutral-500/15 overflow-hidden font-sans">
      
      {/* Dynamic Backing Overlay with Blur */}
      <div 
        id="stylist-overlay"
        onClick={onClose} 
        className="fixed inset-0 bg-neutral-950/45 backdrop-blur-xs -z-10 cursor-pointer" 
      />

      {/* Main Body */}
      <div className={`flex-1 flex flex-col h-full overflow-hidden ${
        darkMode ? 'bg-neutral-950 text-white' : 'bg-white text-neutral-900'
      }`}>
        
        {/* Upper Brand panel & switcher */}
        <div className="p-5 border-b border-neutral-500/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-amber-600 rounded-full flex items-center justify-center">
              <Sparkles className="text-white animate-spin-slow" size={16} />
            </div>
            <div>
              <h2 className="text-sm font-serif font-bold uppercase tracking-wider">Aura Styling Atelier</h2>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">Expert Advisor Engine</span>
            </div>
          </div>
          <button
            id="close-stylist-panel"
            onClick={onClose}
            className="p-1.5 hover:bg-neutral-500/10 rounded-full text-neutral-400 hover:text-white cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Dynamic Mode Tabs */}
        <div className="grid grid-cols-2 text-center border-b border-neutral-500/10 bg-neutral-500/5 select-none text-xs">
          <button
            id="tab-advisor-btn"
            onClick={() => setActiveTab('advisor')}
            className={`py-3.5 uppercase font-medium tracking-wider flex items-center justify-center gap-2 border-b-2 hover:bg-neutral-500/5 ${
              activeTab === 'advisor'
                ? 'border-amber-600 text-amber-600 bg-white/5 font-semibold'
                : 'border-transparent text-neutral-400'
            }`}
          >
            <Sparkles size={14} />
            Outfit Curator
          </button>
          <button
            id="tab-assistant-btn"
            onClick={() => setActiveTab('assistant')}
            className={`py-3.5 uppercase font-medium tracking-wider flex items-center justify-center gap-2 border-b-2 hover:bg-neutral-500/5 ${
              activeTab === 'assistant'
                ? 'border-amber-600 text-amber-600 bg-white/5 font-semibold'
                : 'border-transparent text-neutral-400'
            }`}
          >
            <MessageSquare size={14} />
            AI Stylist Chat
          </button>
        </div>

        {/* Tab contents (Flex overflow scroll) */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-6">
          
          {activeTab === 'advisor' && (
            <div className="space-y-5">
              
              {/* Introduction Copy */}
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-amber-600 mb-1">Assemble Outfit Curation</h3>
                <p className="text-xs font-light text-neutral-400">Input your scenario characteristics below, and our advanced AI Stylist will construct a customized layered aesthetic blueprint.</p>
              </div>

              {/* Form Input fields */}
              <div className="space-y-4">
                
                {/* Occasion */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-medium text-neutral-400 mb-2 block">Occasion Criteria</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Daily Street Style', 'High Fashion Gala', 'Premium casual / Meetup', 'Jetset Loungewear'].map((o) => (
                      <button
                        key={o}
                        id={`occ-${o.replace(/\s+/g, '-')}`}
                        onClick={() => setOccasion(o)}
                        className={`text-left p-3 rounded-lg border text-xs transition-all ${
                          occasion === o
                            ? 'border-amber-600 bg-amber-600/5 text-amber-600 font-medium'
                            : 'border-neutral-500/10 hover:border-neutral-300'
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Vibe Moody */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-medium text-neutral-400 mb-2 block">Brand Aesthetic Vibe</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Minimal luxury', 'Distressed Streetwear', 'Avant-Garde Layered', 'Clean Basics'].map((v) => (
                      <button
                        key={v}
                        id={`vibe-${v.replace(/\s+/g, '-')}`}
                        onClick={() => setVibe(v)}
                        className={`text-left p-3 rounded-lg border text-xs transition-all ${
                          vibe === v
                            ? 'border-amber-600 bg-amber-600/5 text-amber-600 font-medium'
                            : 'border-neutral-500/10 hover:border-neutral-300'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[11px] uppercase tracking-wider font-medium text-neutral-400">Desired Outfit Budget</label>
                    <span className="text-xs font-mono font-semibold text-amber-600">${budget} Max</span>
                  </div>
                  <input
                    id="stylist-budget-slider"
                    type="range"
                    min="100"
                    max="1200"
                    step="50"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-655"
                  />
                  <div className="flex justify-between text-[9px] text-neutral-400 font-mono mt-1">
                    <span>$100</span>
                    <span>$600</span>
                    <span>$1200</span>
                  </div>
                </div>

                {/* Extra specifications */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-medium text-neutral-400 mb-2 block">Special Request Notes (Optional)</label>
                  <textarea
                    id="stylist-extra-notes"
                    placeholder="e.g. Needs to pair nicely with black boots; heavily oversized drape fits"
                    value={extraDetails}
                    onChange={(e) => setExtraDetails(e.target.value)}
                    rows={2}
                    className="w-full border rounded-lg p-3 text-xs bg-transparent border-neutral-500/10 focus:outline-none focus:border-amber-500 transition-colors placeholder:text-neutral-500"
                  />
                </div>

              </div>

              {/* Action Trigger */}
              <button
                id="advisor-submit-btn"
                onClick={handleQueryAdvisor}
                disabled={loadingAdvice}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-lg active:scale-95 disabled:opacity-50 transition-all font-mono"
              >
                {loadingAdvice ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Assembling Outfit Recipe...
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    Generate Bespoke Curation
                  </>
                )}
              </button>

              {/* Advice outcome view */}
              {adviceMarkdown && (
                <div className={`p-5 rounded-xl border relative transition-all animate-framer-enter ${
                  darkMode ? 'bg-neutral-900/50 border-white/5' : 'bg-amber-500/5 border-amber-600/10 shadow-xs'
                }`}>
                  <div className="stylist-markdown text-xs text-neutral-700 dark:text-neutral-300">
                    {renderAdviceHtml(adviceMarkdown)}
                  </div>

                  {/* HIGH-CONVERTING: Matches product quick add buttons list! */}
                  {matchedProducts.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-neutral-500/10 space-y-3">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-amber-600 flex items-center gap-1.5 font-mono">
                        <ShoppingCart size={12} /> Curated Apparel Catalog Items
                      </span>
                      <div className="grid grid-cols-1 gap-2.5">
                        {matchedProducts.map(p => (
                          <div
                            key={p.id}
                            id={`match-item-${p.id}`}
                            className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-500/5 border border-neutral-500/10 hover:border-neutral-500/20"
                          >
                            <div className="flex items-center gap-3">
                              <img src={p.images[0]} alt={p.name} className="w-10 h-10 rounded-md object-cover" referrerPolicy="no-referrer" />
                              <div>
                                <h4 className="text-[11px] font-medium leading-none line-clamp-1">{p.name}</h4>
                                <span className="text-[9px] font-mono text-neutral-400 mt-1 block">${p.price}</span>
                              </div>
                            </div>
                            <button
                              id={`quick-add-match-${p.id}`}
                              onClick={() => handleQuickAdd(p)}
                              disabled={addingId === p.id}
                              className={`text-[10px] uppercase font-bold px-3 py-1.5 rounded-md flex items-center gap-1 transition-all ${
                                addingId === p.id 
                                  ? 'bg-emerald-600 text-white' 
                                  : 'bg-neutral-900 border text-white dark:bg-white dark:text-neutral-900 hover:opacity-90'
                              }`}
                            >
                              {addingId === p.id ? (
                                <Check size={10} />
                              ) : (
                                "Add"
                              )}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                </div>
              )}

            </div>
          )}

          {activeTab === 'assistant' && (
            <div className="flex flex-col h-full overflow-hidden min-h-[460px]">
              
              {/* Chat history logs */}
              <div className="flex-1 space-y-4 overflow-y-auto no-scrollbar pr-1 pb-1">
                {chatHistory.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`p-3.5 max-w-[85%] rounded-xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-amber-600 text-white rounded-tr-none shadow-sm'
                        : darkMode ? 'bg-neutral-900 text-neutral-200 border border-white/5 rounded-tl-none' : 'bg-neutral-100 text-neutral-800 rounded-tl-none'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {loadingChat && (
                  <div className="flex justify-start">
                    <div className="p-3.5 rounded-xl text-xs bg-neutral-500/5 flex items-center gap-2">
                      <Loader2 size={14} className="animate-spin text-amber-500" />
                      <span className="text-neutral-400">Consulting styling guidelines...</span>
                    </div>
                  </div>
                )}
                <div ref={chatBottomRef} />
              </div>

              {/* Chat entry bar */}
              <form onSubmit={handleChatSubmit} className="mt-4 pt-4 border-t border-neutral-500/10 flex items-center gap-2">
                <input
                  id="stylist-chat-input"
                  type="text"
                  placeholder="Ask about size formulas, material details, style drops..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  disabled={loadingChat}
                  className="flex-1 rounded-lg border bg-transparent p-3 text-xs border-neutral-500/10 focus:outline-none focus:border-amber-500 text-white"
                />
                <button
                  id="stylist-send-chat"
                  type="submit"
                  disabled={!chatInput.trim() || loadingChat}
                  className="p-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-transform active:scale-95 disabled:opacity-50"
                >
                  <Send size={14} />
                </button>
              </form>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
