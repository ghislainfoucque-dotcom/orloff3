"use client";

import AnimatedSection from "./AnimatedSection";

interface Row {
  label: string;
  adherent?: string;
  proprietaire?: string;
  price?: string;
}

interface Props {
  title: string;
  headers?: string[];
  rows: Row[];
  note?: string;
}

export default function PricingTable({ title, headers, rows, note }: Props) {
  const hasTwo = rows.some((r) => r.adherent && r.proprietaire);

  return (
    <AnimatedSection className="mb-10">
      <h3 className="font-display text-xl md:text-2xl font-bold text-anthracite mb-4">
        {title}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">
                {headers?.[0] || ""}
              </th>
              {hasTwo ? (
                <>
                  <th className="text-right px-4 py-3">
                    {headers?.[1] || "Adhérent"}
                  </th>
                  <th className="text-right px-4 py-3 rounded-tr-lg">
                    {headers?.[2] || "Propriétaire"}
                  </th>
                </>
              ) : (
                <th className="text-right px-4 py-3 rounded-tr-lg">
                  {headers?.[1] || "Tarif"}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gray-100 ${
                  i % 2 === 0 ? "bg-white" : "bg-cream"
                }`}
              >
                <td className="px-4 py-3 text-anthracite">{row.label}</td>
                {hasTwo ? (
                  <>
                    <td className="px-4 py-3 text-right font-semibold text-primary">
                      {row.adherent || row.price || "—"}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-secondary">
                      {row.proprietaire || "—"}
                    </td>
                  </>
                ) : (
                  <td className="px-4 py-3 text-right font-semibold text-primary">
                    {row.price || row.adherent || "—"}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <p className="text-xs text-anthracite/50 mt-2 italic">{note}</p>
      )}
    </AnimatedSection>
  );
}
