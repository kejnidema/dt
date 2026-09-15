import { useI18n } from '@/lib/i18n';

interface PricingRow {
  property: string;
  composite: string;
  emax: string;
  zirconia: string;
}

interface PricingTableProps {
  rows: PricingRow[];
}

export default function PricingTable({ rows }: PricingTableProps) {
  const { t } = useI18n();
  const headers = [t('Property'), t('Composite'), t('E-Max Veneer'), t('Zirconia')];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-on-primary">
            {headers.map((h, i) => (
              <th
                key={i}
                className={`p-4 text-left font-label-md uppercase tracking-wider ${
                  i === 2 ? 'bg-secondary-container text-on-secondary-container' : ''
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
              <td className="p-4">{row.composite}</td>
              <td className="p-4 font-bold text-primary">{row.emax}</td>
              <td className="p-4">{row.zirconia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
