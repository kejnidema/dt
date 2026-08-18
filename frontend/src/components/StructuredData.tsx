export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Veneer Clinic Tirana',
    image: '/images/site/clinic.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rr. Ibrahim Rugova',
      addressLocality: 'Tirana',
      addressCountry: 'AL',
    },
    telephone: '+355690000000',
    priceRange: '€€',
    medicalSpecialty: ['Cosmetic Dentistry', 'Dental Veneers', 'Implantology'],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '312' },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
