import React, { useState } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Check, HelpCircle } from 'lucide-react';

export const SizeGuidePage: React.FC = () => {
  const [selectedHeight, setSelectedHeight] = useState('56');

  const abayaSizes = [
    { size: '52', height: "5'0\" – 5'2\" (152–157 cm)", length: '52" (132 cm)', bust: 'Up to 44" (Loose)' },
    { size: '54', height: "5'3\" – 5'4\" (160–163 cm)", length: '54" (137 cm)', bust: 'Up to 46" (Loose)' },
    { size: '56', height: "5'5\" – 5'6\" (165–168 cm)", length: '56" (142 cm)', bust: 'Up to 48" (Loose)' },
    { size: '58', height: "5'7\" – 5'8\" (170–173 cm)", length: '58" (147 cm)', bust: 'Up to 50" (Loose)' },
    { size: '60', height: "5'9\" – 6'0\" (175–183 cm)", length: '60" (152 cm)', bust: 'Up to 52" (Loose)' },
  ];

  return (
    <div className="bg-brand-pureWhite min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Size & Height Directory' }]} />

        <div className="py-12 text-center max-w-2xl mx-auto border-b border-brand-border">
          <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 block mb-2 font-mono">
            ATELIER FIT DIRECTORY
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-brand-black font-normal tracking-tight">
            Size & Proportion Guide
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 font-light mt-3 leading-relaxed">
            Unlike Western tailoring that sizes strictly by bust and waist, traditional and haute abayas are calibrated primarily by your vertical height to achieve the quintessential floor-skimming silhouette.
          </p>
        </div>

        {/* Abaya Height Sizing */}
        <div className="py-12 space-y-8">
          <div className="p-6 bg-brand-sand/60 border border-brand-warmBeige">
            <h3 className="font-serif text-xl text-brand-black mb-2">
              How to Select Your Abaya Size
            </h3>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Abaya size numbers (52, 54, 56, 58, 60) represent the garment length in inches from the highest point of the shoulder down to the bottom hem. The width is cut relaxed and generous (oversized A-line) to ensure complete modest coverage for all body shapes.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-brand-border">
              <thead className="bg-brand-sand/50">
                <tr className="border-b border-brand-black text-[11px] uppercase tracking-wider text-brand-black">
                  <th className="py-3.5 px-4">Size Code</th>
                  <th className="py-3.5 px-4">Recommended Height</th>
                  <th className="py-3.5 px-4">Total Length</th>
                  <th className="py-3.5 px-4">Width Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {abayaSizes.map((row) => (
                  <tr key={row.size} className="hover:bg-brand-sand/30 transition-colors">
                    <td className="py-4 px-4 font-bold text-brand-black">{row.size}</td>
                    <td className="py-4 px-4">{row.height}</td>
                    <td className="py-4 px-4">{row.length}</td>
                    <td className="py-4 px-4 text-neutral-600">{row.bust}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-5 bg-white border border-brand-border flex items-start space-x-3 text-xs text-neutral-600">
            <Check className="w-4 h-4 text-brand-black flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-brand-black uppercase tracking-wider block mb-0.5">
                Heels & Footwear Advice:
              </span>
              If you plan on pairing your abaya with heels taller than 3 inches (7.5 cm), we recommend ordering one size up (e.g. size 56 instead of 54) so the hem skims the tops of your shoes gracefully.
            </div>
          </div>
        </div>

        {/* Standard Apparel Table */}
        <div className="py-12 border-t border-brand-border">
          <h2 className="font-serif text-2xl text-brand-black mb-4">
            Two-Piece Sets & Tunics (XS–XL)
          </h2>
          <p className="text-xs text-neutral-500 mb-6 leading-relaxed">
            All trousers feature an internal elasticated back waistband that comfortably accommodates waist fluctuations while keeping the front waist clean and flat.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-brand-border">
              <thead className="bg-brand-sand/50">
                <tr className="border-b border-brand-black text-[11px] uppercase tracking-wider text-brand-black">
                  <th className="py-3.5 px-4">Size</th>
                  <th className="py-3.5 px-4">Bust (inches)</th>
                  <th className="py-3.5 px-4">Waist (inches)</th>
                  <th className="py-3.5 px-4">Hips (inches)</th>
                  <th className="py-3.5 px-4">Trouser Inseam</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-brand-black">XS (US 0-2)</td>
                  <td className="py-3.5 px-4">32 - 34"</td>
                  <td className="py-3.5 px-4">25 - 27"</td>
                  <td className="py-3.5 px-4">35 - 37"</td>
                  <td className="py-3.5 px-4">31"</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-brand-black">S (US 4-6)</td>
                  <td className="py-3.5 px-4">34 - 36"</td>
                  <td className="py-3.5 px-4">27 - 29"</td>
                  <td className="py-3.5 px-4">37 - 39"</td>
                  <td className="py-3.5 px-4">31.5"</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-brand-black">M (US 8-10)</td>
                  <td className="py-3.5 px-4">36 - 38"</td>
                  <td className="py-3.5 px-4">29 - 31"</td>
                  <td className="py-3.5 px-4">39 - 41"</td>
                  <td className="py-3.5 px-4">32"</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-brand-black">L (US 12-14)</td>
                  <td className="py-3.5 px-4">39 - 41"</td>
                  <td className="py-3.5 px-4">32 - 34"</td>
                  <td className="py-3.5 px-4">42 - 44"</td>
                  <td className="py-3.5 px-4">32"</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-brand-black">XL (US 16)</td>
                  <td className="py-3.5 px-4">42 - 44"</td>
                  <td className="py-3.5 px-4">35 - 37"</td>
                  <td className="py-3.5 px-4">45 - 47"</td>
                  <td className="py-3.5 px-4">32.5"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

