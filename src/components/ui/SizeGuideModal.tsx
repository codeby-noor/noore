import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose, category = 'abayas' }) => {
  const [activeTab, setActiveTab] = useState<'abaya' | 'standard' | 'hijab'>(
    category === 'hijabs' ? 'hijab' : category === 'sets' || category === 'essentials' ? 'standard' : 'abaya'
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-brand-pureWhite w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-brand-border p-6 md:p-8 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-black transition-colors"
          aria-label="Close size guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <p className="text-[10px] tracking-super-wide uppercase text-neutral-500 mb-1">
            ATELIER FIT DIRECTORY
          </p>
          <h3 className="font-serif text-3xl font-normal text-brand-black tracking-tight">
            Size & Proportion Guide
          </h3>
          <p className="text-xs text-neutral-500 mt-2 max-w-md mx-auto">
            NOORÉ garments are precision-tailored to provide full modest coverage with an architectural, elongated drape.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-brand-border mb-6">
          <button
            onClick={() => setActiveTab('abaya')}
            className={`flex-1 py-3 text-xs tracking-widest uppercase font-medium transition-colors border-b-2 ${
              activeTab === 'abaya'
                ? 'border-brand-black text-brand-black'
                : 'border-transparent text-neutral-400 hover:text-black'
            }`}
          >
            Abaya Height Sizing
          </button>
          <button
            onClick={() => setActiveTab('standard')}
            className={`flex-1 py-3 text-xs tracking-widest uppercase font-medium transition-colors border-b-2 ${
              activeTab === 'standard'
                ? 'border-brand-black text-brand-black'
                : 'border-transparent text-neutral-400 hover:text-black'
            }`}
          >
            Apparel & Sets (XS–XL)
          </button>
          <button
            onClick={() => setActiveTab('hijab')}
            className={`flex-1 py-3 text-xs tracking-widest uppercase font-medium transition-colors border-b-2 ${
              activeTab === 'hijab'
                ? 'border-brand-black text-brand-black'
                : 'border-transparent text-neutral-400 hover:text-black'
            }`}
          >
            Hijab Dimensions
          </button>
        </div>

        {/* Tab 1: Abaya Sizing */}
        {activeTab === 'abaya' && (
          <div className="space-y-6">
            <div className="p-4 bg-brand-sand/70 border border-brand-warmBeige text-xs text-neutral-700 leading-relaxed">
              <span className="font-semibold text-brand-black uppercase tracking-wider block mb-1">
                How Abaya Sizing Works:
              </span>
              Abayas are sized by vertical garment length in inches (from high shoulder point to bottom hem), directly correlating to your height. The width is cut relaxed and generous to provide effortless modesty.
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-brand-black text-[11px] uppercase tracking-wider text-neutral-500">
                    <th className="py-3 px-3">Size</th>
                    <th className="py-3 px-3">Garment Length</th>
                    <th className="py-3 px-3">Recommended Height</th>
                    <th className="py-3 px-3">Bust Circumference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border">
                  <tr>
                    <td className="py-3.5 px-3 font-semibold text-brand-black">52</td>
                    <td className="py-3.5 px-3">52 inches (132 cm)</td>
                    <td className="py-3.5 px-3">5'0" – 5'2" (152–157 cm)</td>
                    <td className="py-3.5 px-3">Up to 44" (Relaxed)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-3 font-semibold text-brand-black">54</td>
                    <td className="py-3.5 px-3">54 inches (137 cm)</td>
                    <td className="py-3.5 px-3">5'3" – 5'4" (160–163 cm)</td>
                    <td className="py-3.5 px-3">Up to 46" (Relaxed)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-3 font-semibold text-brand-black">56</td>
                    <td className="py-3.5 px-3">56 inches (142 cm)</td>
                    <td className="py-3.5 px-3">5'5" – 5'6" (165–168 cm)</td>
                    <td className="py-3.5 px-3">Up to 48" (Relaxed)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-3 font-semibold text-brand-black">58</td>
                    <td className="py-3.5 px-3">58 inches (147 cm)</td>
                    <td className="py-3.5 px-3">5'7" – 5'8" (170–173 cm)</td>
                    <td className="py-3.5 px-3">Up to 50" (Relaxed)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-3 font-semibold text-brand-black">60</td>
                    <td className="py-3.5 px-3">60 inches (152 cm)</td>
                    <td className="py-3.5 px-3">5'9" – 6'0" (175–183 cm)</td>
                    <td className="py-3.5 px-3">Up to 52" (Relaxed)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-start space-x-2 text-xs text-neutral-500 pt-2">
              <Check className="w-4 h-4 text-brand-black flex-shrink-0 mt-0.5" />
              <span>
                <strong>Heel Advice:</strong> If you regularly wear heels exceeding 3 inches (7.5 cm), select one size up to ensure full floor coverage.
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Standard Apparel */}
        {activeTab === 'standard' && (
          <div className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-brand-black text-[11px] uppercase tracking-wider text-neutral-500">
                    <th className="py-3 px-3">Size</th>
                    <th className="py-3 px-3">US / UK</th>
                    <th className="py-3 px-3">Bust (in)</th>
                    <th className="py-3 px-3">Waist (in)</th>
                    <th className="py-3 px-3">Hips (in)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border">
                  <tr>
                    <td className="py-3.5 px-3 font-semibold text-brand-black">XS</td>
                    <td className="py-3.5 px-3">US 0-2 / UK 6</td>
                    <td className="py-3.5 px-3">32 - 34"</td>
                    <td className="py-3.5 px-3">25 - 27"</td>
                    <td className="py-3.5 px-3">35 - 37"</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-3 font-semibold text-brand-black">S</td>
                    <td className="py-3.5 px-3">US 4-6 / UK 8-10</td>
                    <td className="py-3.5 px-3">34 - 36"</td>
                    <td className="py-3.5 px-3">27 - 29"</td>
                    <td className="py-3.5 px-3">37 - 39"</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-3 font-semibold text-brand-black">M</td>
                    <td className="py-3.5 px-3">US 8-10 / UK 12</td>
                    <td className="py-3.5 px-3">36 - 38"</td>
                    <td className="py-3.5 px-3">29 - 31"</td>
                    <td className="py-3.5 px-3">39 - 41"</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-3 font-semibold text-brand-black">L</td>
                    <td className="py-3.5 px-3">US 12-14 / UK 14-16</td>
                    <td className="py-3.5 px-3">39 - 41"</td>
                    <td className="py-3.5 px-3">32 - 34"</td>
                    <td className="py-3.5 px-3">42 - 44"</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-3 font-semibold text-brand-black">XL</td>
                    <td className="py-3.5 px-3">US 16 / UK 18</td>
                    <td className="py-3.5 px-3">42 - 44"</td>
                    <td className="py-3.5 px-3">35 - 37"</td>
                    <td className="py-3.5 px-3">45 - 47"</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral-500">
              *All pants feature an adaptive elastic waistband at the rear to guarantee all-day comfort without sacrificing clean front tailoring.
            </p>
          </div>
        )}

        {/* Tab 3: Hijab Dimensions */}
        {activeTab === 'hijab' && (
          <div className="space-y-4">
            <div className="border border-brand-border p-4">
              <h4 className="font-semibold text-xs tracking-wider uppercase text-brand-black mb-1">
                Standard Maxi Rectangle
              </h4>
              <p className="text-xs text-neutral-600 mb-2">
                200 cm × 75 cm (approx. 79 in × 30 in)
              </p>
              <p className="text-xs text-neutral-500">
                Our signature length provides ample chest and back coverage, allowing for multi-layered draping, turban wraps, or effortless loose styling.
              </p>
            </div>

            <div className="border border-brand-border p-4">
              <h4 className="font-semibold text-xs tracking-wider uppercase text-brand-black mb-1">
                Square Silk Shayla
              </h4>
              <p className="text-xs text-neutral-600 mb-2">
                100 cm × 100 cm (approx. 40 in × 40 in)
              </p>
              <p className="text-xs text-neutral-500">
                Fold into a classic triangle for Turkish styling or neck scarf elegance.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-brand-border flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-brand-black text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};

