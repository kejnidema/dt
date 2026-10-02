import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import HomePage from '@/pages/HomePage';

const HERO_VIDEO = '/images/misc/final-home-hero-hmc-video.mp4';
const WHATSAPP_URL =
  'https://wa.me/355690000000?text=Hello%2C%20I%20would%20like%20a%20consultation%20for%20veneers.';

function VideoHero() {
  const { localized } = useI18n();

  const t = localized({
    de: {
      badge: 'Premium Zahnästhetik in Tirana',
      headlineTop: 'Ihr neues Lächeln',
      headlineAccent: 'beginnt hier.',
      subheadline:
        'Zahnmedizin nach internationalen Standards in Albanien – zu fairen Preisen. Über 5.000 Patienten aus Deutschland, Italien, Spanien und Großbritannien haben uns ihr Lächeln anvertraut.',
      cardEyebrow: 'Noch Fragen?',
      cardTitle: 'Kostenlose Online-Beratung buchen',
      cardCta: 'Jetzt buchen',
      chatPrompt: 'Noch nicht bereit zu buchen?',
      chatLink: 'Mit unserem Team chatten',
    },
    en: {
      badge: 'Premium Dental Aesthetics in Tirana',
      headlineTop: 'Your New Smile',
      headlineAccent: 'Starts Here.',
      subheadline:
        'Dental care to international standards in Albania, at fair prices. Over 5,000 patients from Germany, Italy, Spain and the UK have trusted us with their smile.',
      cardEyebrow: 'Still have questions?',
      cardTitle: 'Book your free online consultation',
      cardCta: 'Book Now',
      chatPrompt: 'Not ready to book?',
      chatLink: 'Chat with our team',
    },
  });

  return (
    <section className="relative flex items-end -mt-20 h-[100svh] min-h-[640px] bg-primary text-white overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(19, 28, 21, 0.55) 0%, transparent 22%), linear-gradient(to top, rgba(19, 28, 21, 0.88) 0%, rgba(19, 28, 21, 0.45) 40%, rgba(19, 28, 21, 0.12) 75%), linear-gradient(to right, rgba(19, 28, 21, 0.45) 0%, transparent 60%)',
        }}
      />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-12 md:pb-16 pt-32 grid lg:grid-cols-[1fr_auto] items-end gap-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-white/10 border border-white/20 backdrop-blur-md text-[12px] font-medium uppercase tracking-[0.08em]">
            <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
            {t.badge}
          </span>
          <h1 className="font-display-lg text-[40px] leading-[46px] md:text-[64px] md:leading-[68px] font-semibold tracking-[-0.03em] mt-6">
            {t.headlineTop}
            <br />
            <span className="text-aqua">{t.headlineAccent}</span>
          </h1>
          <p className="mt-6 text-[15px] md:text-body-md text-white/80 max-w-xl">{t.subheadline}</p>
        </div>

        <div className="flex flex-col items-start lg:items-end gap-3">
          <div className="flex items-center gap-4 sm:gap-6 bg-white rounded-lg p-2 pl-5 shadow-2xl max-w-full">
            <div className="min-w-0">
              <p className="text-[12px] text-on-surface-variant">{t.cardEyebrow}</p>
              <p className="text-[14px] font-semibold text-primary leading-5">{t.cardTitle}</p>
            </div>
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-6 py-3 rounded-md font-label-md text-label-md whitespace-nowrap shrink-0"
            >
              {t.cardCta}
            </Link>
          </div>
          <p className="text-[13px] text-white/75 lg:pr-4">
            {t.chatPrompt}{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-aqua transition-colors"
            >
              {t.chatLink}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home2Page() {
  return <HomePage hero={<VideoHero />} />;
}
