import { useI18n } from '@/lib/i18n';

interface PricingRow {
  property: string;
  porcelain: string;
  zirconia: string;
  emax: string;
}

interface PricingTableProps {
  rows: PricingRow[];
}

export default function PricingTable({ rows }: PricingTableProps) {
  const { t } = useI18n();
  const headers = [t('Property'), t('Porcelain Crown Made in Germany'), t('Zirkonia Crown Made in Germany'), t('E-Max Crown and Veneer Made in Germany')];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-on-primary">
            {headers.map((h, i) => (
              <th
                key={i}
                className={`p-4 text-left font-label-md uppercase tracking-wider ${
                  i === 3 ? 'bg-secondary-container text-on-secondary-container' : ''
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant">
          {rows.map((row, i) => (
            <tr key={i}>
              <td className="p-4 font-semibold">{row.property}</td>
              <td className="p-4">{row.porcelain}</td>
              <td className="p-4">{row.zirconia}</td>
              <td className="p-4 font-bold text-primary">{row.emax}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
