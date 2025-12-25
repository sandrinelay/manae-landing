import { LegalSection as LegalSectionType } from '@/types/legal';

interface LegalSectionProps {
  section: LegalSectionType;
  level?: 2 | 3 | 4;
}

export function LegalSection({ section, level = 2 }: LegalSectionProps) {
  const headingClasses = {
    2: 'text-2xl font-bold text-neutral-900 mb-4',
    3: 'text-xl font-semibold text-neutral-800 mb-3',
    4: 'text-lg font-medium text-neutral-700 mb-2',
  };

  const renderHeading = () => {
    const className = headingClasses[level];
    switch (level) {
      case 2:
        return <h2 className={className}>{section.title}</h2>;
      case 3:
        return <h3 className={className}>{section.title}</h3>;
      case 4:
        return <h4 className={className}>{section.title}</h4>;
      default:
        return <h2 className={className}>{section.title}</h2>;
    }
  };

  return (
    <section id={section.id} className="mb-8 scroll-mt-24">
      {renderHeading()}

      <div className="space-y-3 text-neutral-600">
        {Array.isArray(section.content) ? (
          section.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="leading-relaxed">{section.content}</p>
        )}
      </div>

      {section.subsections && section.subsections.length > 0 && (
        <div className="mt-6 ml-4 space-y-6 border-l-2 border-[#BEE5D3] pl-6">
          {section.subsections.map((subsection) => (
            <LegalSection
              key={subsection.id}
              section={subsection}
              level={Math.min(level + 1, 4) as 2 | 3 | 4}
            />
          ))}
        </div>
      )}
    </section>
  );
}
