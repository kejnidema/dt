# Dental Treatment Price Comparison: Tirana Frontend vs Germany

Research date: 2026-09-15

Note: I rechecked the cited pages with Firecrawl. The German reference prices below are source-based rounded estimates for comparison/calculator use; actual patient out-of-pocket costs vary by treatment plan, insurance status, clinic, material, and required add-ons.

## German reference price sources

- dentolo, “Zahnimplantat Kosten”: implant placement about **€1,400–€2,200**; single-tooth gap with implant-supported restoration about **€2,000–€3,000**.
- dentolo, “Zahnkrone Kosten”: crown costs vary by material: metal crowns about **€250–€400**, partial-veneer crowns **€400–€600**, ceramic partial crowns **€400–€800**, and full ceramic crowns **€700–€1,000**.
- dentolo, “Veneers Kosten”: conventional veneers **€700–€1,000** per tooth; Lumineers/non-prep veneers **€900–€1,500**.
- dentolo, “Professionelle Zahnreinigung Kosten”: professional cleaning usually **€80–€150**.
- dentolo, “Bleaching Kosten”: home bleaching **€200–€400**, in-office **€30–€70 per tooth**, power bleaching about **€600–€800**.
- dentolo, “Zahnprothese”: simple/model-cast or full removable prosthesis patient share about **€400–€600 per jaw**; telescopic removable prosthesis with 2 telescopes **€1,200–€1,500**.
- kostencheck, “Zahnfüllung Kosten”: composite filling average private co-payment **€80–€160**.
- kostencheck, “Zahn ziehen Kosten”: medically necessary extraction is usually covered by statutory insurance; private/uninsured tooth extraction is about **€300**; optional anesthesia/sedation can add **€100–€800+** depending method.

## Price comparison table

German reference prices below are rounded single values selected from the researched ranges for use in the frontend calculator.

| Treatment | Unit | Tirana frontend price | Germany researched range | Germany frontend reference used | Source basis |
|---|---:|---:|---:|---:|---|
| MegaGen-Titanium Implant | implant | €500 | €1,400–€2,200 implant placement | €1,800 | dentolo implant midpoint |
| Porcelain Crown Made in Germany | crown | €100 | €700–€1,000 full ceramic crown | €850 | dentolo crown midpoint |
| Zirkonia Crown Made in Germany | crown | €200 | €700–€1,000 full ceramic crown | €850 | dentolo crown midpoint |
| E-Max Crown and Veneer Made in Germany | tooth | €300 | €700–€1,000 conventional veneer / full ceramic upper range | €1,000 | dentolo veneers/crowns upper reference |
| Removable Prosthetic | jaw | €600 | €400–€600 simple/model-cast or full removable; €1,200–€1,500 telescopic | €600 basic / €1,200 telescopic | Use €600 if frontend item means basic removable prosthetic; use €1,200 only if comparing to telescopic removable prosthesis |
| Tartar Clean | treatment | €30 | €80–€150 | €115 | dentolo cleaning midpoint |
| Professional Teeth Whitening | treatment | €150 | €200–€400 home; €600–€800 power bleaching | €600 | dentolo professional/power bleaching lower reference |
| Filling Grade 2 | filling | €50 | €80–€160 composite filling | €120 | kostencheck filling midpoint |
| Filling Grade 3 | filling | €70 | €80–€160 composite filling | €160 | kostencheck filling upper reference |
| Surgery | procedure | €200 | usually insured if medically necessary; ~€300 private/uninsured extraction, plus anesthesia extras | €300 | kostencheck private/uninsured tooth extraction reference |

## Frontend update plan

- Update `frontend/src/components/Calculator.tsx` German reference prices to match the researched values above.
- Update Germany comparison callouts in `frontend/src/pages/HomePage.tsx` for E-Max, Zirkonia, and Porcelain cards.
