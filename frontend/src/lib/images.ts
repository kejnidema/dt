export const images = {
  heroBefore: '/images/site/hero-before.jpg',
  heroAfter: '/images/site/hero-after.jpg',
  emaxBefore: '/images/site/emax-before.jpg',
  emaxAfter: '/images/site/emax-after.jpg',
  clinic: '/images/site/clinic.jpg',
  doctor: '/images/site/doctor-male.jpg',
  doctorFemale: '/images/site/doctor-female.jpg',
  journey: '/images/site/tirana.jpg',
  tirana: '/images/site/tirana.jpg',
  patients: [
    '/images/site/patient-1.jpg',
    '/images/site/patient-2.jpg',
    '/images/site/patient-3.jpg',
    '/images/site/patient-4.jpg',
    '/images/site/patient-5.jpg',
    '/images/site/patient-6.jpg',
  ],
};

export const galleryPairs = [
  [images.heroBefore, images.heroAfter],
  [images.emaxBefore, images.emaxAfter],
  ['/images/site/gallery-1-before.jpg', '/images/site/gallery-1-after.jpg'],
  ['/images/site/gallery-2-before.jpg', '/images/site/gallery-2-after.jpg'],
  [images.heroBefore, images.emaxAfter],
  [images.emaxBefore, images.heroAfter],
] as const;
