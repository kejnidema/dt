import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { priceCategories, treatmentsOf } from '@/lib/priceList';

export default function ContactForm() {
  const { t: tr, lang } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [xray, setXray] = useState<File | null>(null);
  const [fileError, setFileError] = useState(false);
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    city: '',
    treatment: '',
    message: '',
    panoramic_xray_url: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setFileError(false);
    if (xray && (xray.size > 20 * 1024 * 1024 || !/\.(jpe?g|png|tiff?|bmp|pdf|dcm)$/i.test(xray.name))) {
      setFileError(true);
      return;
    }
    setLoading(true);
    setError(false);
    try {
      const body = xray ? new FormData() : JSON.stringify(form);
      if (body instanceof FormData) {
        Object.entries(form).forEach(([key, value]) => body.append(key, value));
        body.append('panoramic_xray', xray!);
      }
      const response = await fetch('/api/leads', {
        method: 'POST',
        ...(xray ? {} : { headers: { 'Content-Type': 'application/json' } }),
        body,
      });
      if (!response.ok) throw new Error('save failed');
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-surface-container-low border border-outline-variant rounded-xl p-12 text-center">
        <span className="material-symbols-outlined text-6xl text-secondary mb-4 block">check_circle</span>
        <h3 className="font-headline-md text-headline-md text-primary mb-4">
          {tr('Thank You!')}
        </h3>
        <p className="text-on-surface-variant max-w-md mx-auto">
          {tr('Your request has been sent successfully. We will contact you within 24 hours.')}
        </p>
      </div>
    );
  }

  const label = (_de: string, en: string) => tr(en);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p role="alert" className="text-red-700">{tr('Could not send your request. Please try again later.')}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="font-label-md block mb-2 text-on-surface-variant">
            {label('Name *', 'Name *')}
          </label>
          <input
            type="text"
            name="full_name"
            required
            maxLength={150}
            value={form.full_name}
            onChange={handleChange}
            className="w-full border-b border-outline focus:border-primary focus:ring-0 py-3 bg-transparent font-body-md outline-none transition-colors"
            placeholder={label('Ihr Name', 'Your name')}
          />
        </div>

        {/* Email */}
        <div>
          <label className="font-label-md block mb-2 text-on-surface-variant">
            {label('E-Mail *', 'Email *')}
          </label>
          <input
            type="email"
            name="email"
            required
            maxLength={254}
            value={form.email}
            onChange={handleChange}
            className="w-full border-b border-outline focus:border-primary focus:ring-0 py-3 bg-transparent font-body-md outline-none transition-colors"
            placeholder="email@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="font-label-md block mb-2 text-on-surface-variant">
            {label('Telefon', 'Phone')}
          </label>
          <input
            type="tel"
            name="phone"
            maxLength={50}
            value={form.phone}
            onChange={handleChange}
            className="w-full border-b border-outline focus:border-primary focus:ring-0 py-3 bg-transparent font-body-md outline-none transition-colors"
            placeholder="+49 ..."
          />
        </div>

        {/* City */}
        <div>
          <label className="font-label-md block mb-2 text-on-surface-variant">
            {label('Stadt', 'City')}
          </label>
          <input
            type="text"
            name="city"
            maxLength={120}
            value={form.city}
            onChange={handleChange}
            className="w-full border-b border-outline focus:border-primary focus:ring-0 py-3 bg-transparent font-body-md outline-none transition-colors"
            placeholder={label('Ihre Stadt', 'Your city')}
          />
        </div>
      </div>

      {/* Treatment */}
      <div>
        <label className="font-label-md block mb-2 text-on-surface-variant">
          {label('Behandlung', 'Treatment')}
        </label>
        <select
          name="treatment"
          value={form.treatment}
          onChange={handleChange}
          className="w-full border-b border-outline focus:border-primary focus:ring-0 py-3 bg-transparent font-body-md appearance-none cursor-pointer outline-none"
        >
          <option value="">--</option>
          {priceCategories.flatMap(treatmentsOf).map((item) => (
            <option key={item.id} value={item.id}>{item.name[lang]}</option>
          ))}
          <option value="other">{label('Sonstiges', 'Other')}</option>
        </select>
      </div>

      {/* Panoramic X-ray */}
      <div>
        <label htmlFor="panoramic-xray-file" className="font-label-md block mb-2 text-on-surface-variant">
          {label('Panorama-Röntgenbild (optional)', 'Panoramic X-ray (optional)')}
        </label>
        <input
          id="panoramic-xray-file"
          type="file"
          accept=".jpg,.jpeg,.png,.tif,.tiff,.bmp,.pdf,.dcm"
          disabled={Boolean(form.panoramic_xray_url)}
          onChange={(event) => { setXray(event.target.files?.[0] ?? null); setFileError(false); }}
          className="block w-full mb-4 text-on-surface-variant disabled:opacity-50"
        />
        <p className="text-sm text-on-surface-variant mb-3">{tr('Upload a JPG, PNG, TIFF, BMP, PDF or DICOM (.dcm) file, up to 20 MB; or provide an HTTPS link below.')}</p>
        {fileError && <p role="alert" className="text-red-700">{tr('Choose a supported file no larger than 20 MB.')}</p>}
        <input
          type="url"
          name="panoramic_xray_url"
          disabled={Boolean(xray)}
          maxLength={2048}
          pattern="https://.*"
          title="Please use an HTTPS link"
          value={form.panoramic_xray_url}
          onChange={handleChange}
          className="w-full border-b border-outline focus:border-primary focus:ring-0 py-3 bg-transparent font-body-md outline-none transition-colors"
          placeholder={label('Link zu Ihrem Panorama-Röntgenbild', 'Link to your panoramic X-ray')}
        />
        <p className="text-sm text-on-surface-variant mt-2">{tr('Use an HTTPS link to your X-ray or document. Do not include passwords in the link.')}</p>
      </div>

      {/* Message */}
      <div>
        <label className="font-label-md block mb-2 text-on-surface-variant">
          {label('Nachricht', 'Message')}
        </label>
        <textarea
          name="message"
          rows={4}
          maxLength={5000}
          value={form.message}
          onChange={handleChange}
          className="w-full border-b border-outline focus:border-primary focus:ring-0 py-3 bg-transparent font-body-md outline-none transition-colors resize-none"
          placeholder={label('Ihre Nachricht...', 'Your message...')}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-on-primary px-8 py-4 font-label-md text-label-md rounded-sm hover:opacity-95 shadow-md flex items-center gap-2 disabled:opacity-50 transition-all"
      >
        {loading ? (
          <>
            <span className="material-symbols-outlined animate-spin">progress_activity</span>
            {label('Sendet...', 'Sending...')}
          </>
        ) : (
          <>
            {label('Kostenlose Beratung anfragen', 'Request Free Consultation')}
            <span className="material-symbols-outlined">arrow_forward</span>
          </>
        )}
      </button>
    </form>
  );
}
