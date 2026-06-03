\c dt;

-- Treatments
INSERT INTO treatments (slug, name_de, name_en, description_de, description_en, material, duration_days, lifespan_years, advantages, pricing, sort_order)
VALUES
  ('e-max', 'E-Max Veneers', 'E-Max Veneers',
   'Das Goldstandard der Zahnästhetik. Lithiumdisilikat-Zeramik für maximale Ästhetik.',
   'The gold standard of dental aesthetics. Lithium disilicate ceramic for maximum aesthetics.',
   'lithium-disilicate', 3, 15,
   '[{"icon_de":"lightbulb","title_de":"Lichtdurchlässigkeit","title_en":"Light Transmission","desc_de":"Natürliches Lichtspiel wie echte Zähne","desc_en":"Natural light play like real teeth"},{"icon_de":"brush","title_de":"Minimaler Abtrag","title_en":"Minimal Preparation","desc_de":"Schonend für den natürlichen Zahn","desc_en":"Gentle on natural teeth"},{"icon_de":"palette","title_de":"Farbanpassung","title_en":"Color Matching","desc_de":"Perfekte Anpassung an den Zahnbogen","desc_en":"Perfect adaptation to the dental arch"},{"icon_de":"shield","title_de":"Langlebigkeit","title_en":"Durability","desc_de":"Bis zu 15 Jahre Haltbarkeit","desc_en":"Up to 15 years longevity"}]',
   '{"albania_per_tooth_eur":350,"germany_avg_per_tooth_eur":1200,"package_prices":[{"name_de":"Einzelveneer","name_en":"Single Veneer","teeth_count":1,"price_eur":350},{"name_de":"Halbes Lächeln","name_en":"Half Smile","teeth_count":8,"price_eur":2600},{"name_de":"Volles Lächeln","name_en":"Full Smile","teeth_count":16,"price_eur":4800}]}',
   1),
  ('zirconia', 'Zirkonia Veneers', 'Zirconia Veneers',
   'Höchste Festigkeit bei gleichzeitig natürlicher Optik.',
   'Highest strength with natural aesthetics.',
   'zirconia', 3, 20,
   '[{"icon_de":"construction","title_de":"Maximale Festigkeit","title_en":"Maximum Strength","desc_de":"Extrem bruchfest","desc_en":"Extremely fracture resistant"},{"icon_de":"visibility","title_de":"Moderne Optik","title_en":"Modern Aesthetics","desc_de":"Natürliches Erscheinungsbild","desc_en":"Natural appearance"}]',
   '{"albania_per_tooth_eur":300,"germany_avg_per_tooth_eur":1100,"package_prices":[{"name_de":"Einzelveneer","name_en":"Single Veneer","teeth_count":1,"price_eur":300},{"name_de":"Halbes Lächeln","name_en":"Half Smile","teeth_count":8,"price_eur":2200},{"name_de":"Volles Lächeln","name_en":"Full Smile","teeth_count":16,"price_eur":4200}]}',
   2),
  ('porcelain', 'Klassische Porzellan-Veneers', 'Classic Porcelain Veneers',
   'Bewährte Technologie mit exzellenter Farbstabilität.',
   'Proven technology with excellent color stability.',
   'feldspar-porcelain', 4, 12,
   '[{"icon_de":"palette","title_de":"Farbstabilität","title_en":"Color Stability","desc_de":"Farbe bleibt über Jahre stabil","desc_en":"Color remains stable for years"}]',
   '{"albania_per_tooth_eur":280,"germany_avg_per_tooth_eur":1000,"package_prices":[{"name_de":"Einzelveneer","name_en":"Single Veneer","teeth_count":1,"price_eur":280}]}'::jsonb,
   3);

-- Gallery cases (placeholder images)
INSERT INTO gallery_cases (treatment_type, before_image, after_image, patient_flag, teeth_count, days_in_tirana, savings_eur, sort_order)
VALUES
  ('e-max', '/images/gallery/case1-before.webp', '/images/gallery/case1-after.webp', 'DE', 8, 3, 6400, 1),
  ('e-max', '/images/gallery/case2-before.webp', '/images/gallery/case2-after.webp', 'DE', 10, 3, 8000, 2),
  ('zirconia', '/images/gallery/case3-before.webp', '/images/gallery/case3-after.webp', 'DE', 6, 3, 4200, 3);

-- Pricing cities
INSERT INTO pricing_cities (city_name, price_per_tooth, sort_order)
VALUES
  ('Berlin', 1200, 1),
  ('München', 1500, 2),
  ('Hamburg', 1300, 3),
  ('Frankfurt', 1400, 4),
  ('Köln', 1250, 5),
  ('Stuttgart', 1350, 6);

-- Pricing materials (Tirana prices)
INSERT INTO pricing_materials (key, name_de, name_en, price_per_tooth, sort_order)
VALUES
  ('e-max', 'E-Max Porzellan', 'E-Max Porcelain', 350, 1),
  ('zirconia', 'Zirkonoxid', 'Zirconia', 300, 2);

-- Testimonials
INSERT INTO testimonials (patient_name, rating, comment_de, comment_en, patient_flag, treatment, days_ago, featured)
VALUES
  ('Maria S.', 5, 'Absolut fantastisches Ergebnis! Meine E-Max Veneers sehen perfekt aus. Das Team war unglaublich professionell.', 'Absolutely fantastic result! My E-Max veneers look perfect. The team was incredibly professional.', 'DE', 'e-max', 14, TRUE),
  ('Thomas K.', 5, 'Die Kostenersparnis im Vergleich zu Deutschland ist enorm. Qualität ist auf dem gleichen Niveau.', 'The cost savings compared to Germany are enormous. Quality is at the same level.', 'DE', 'e-max', 30, FALSE),
  ('Anna W.', 5, 'Ich war skeptisch, aber das Ergebnis hat alle meine Erwartungen übertroffen.', 'I was skeptical, but the result exceeded all my expectations.', 'DE', 'zirconia', 45, FALSE);

-- Doctors
INSERT INTO doctors (first_name, last_name, specialization, biography_de, biography_en, image_url, languages, credentials, is_lead, sort_order)
VALUES
  ('Dr. Marko', 'Hoxha', 'Zahnästhetik & Veneers',
   'Spezialist für ästhetische Zahnmedizin mit über 15 Jahren Erfahrung.',
   'Specialist in aesthetic dentistry with over 15 years of experience.',
   '/images/doctors/marko.jpg',
   '["Deutsch", "English", "Shqip"]',
   '[{"title":"Dr. med. dent.", "institution":"Universität Tirana", "year":2008},{"title":"Master Aesthetic Dentistry", "institution":"Universität Mailand", "year":2012}]'::jsonb,
   TRUE, 1),
  ('Dr. Elira', 'Krasniqi', 'Prothetik & Implantologie',
   'Experte für zahnärztliche Prothetik und Implantologie.',
   'Expert in dental prosthodontics and implantology.',
   '/images/doctors/elira.jpg',
   '["Deutsch", "English", "Shqip"]',
   '[{"title":"Dr. med. dent.", "institution":"Universität Tirana", "year":2010}]'::jsonb,
   FALSE, 2);
