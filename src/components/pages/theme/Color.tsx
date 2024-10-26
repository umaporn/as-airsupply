import React, { useState } from 'react';
import tailwindConfig from '../../../../tailwind.config';

const colorsConfig = tailwindConfig.theme?.colors || {};

const colors = Object.entries(colorsConfig).map(([name, variants]) => {
  if (typeof variants === 'string') {
    return { name, variants: [{ shade: 'DEFAULT', hex: variants }] };
  } else {
    return {
      name,
      variants: Object.entries(variants).map(([shade, hex]) => ({
        shade,
        hex: hex as string,
      })),
    };
  }
});

const colorGroups = colors.reduce((acc: any[], color: any) => {
  let group = acc.find((g) => g.name === color.name);
  if (!group) {
    group = { name: color.name, variants: [] };
    acc.push(group);
  }
  group.variants = group.variants.concat(color.variants);
  group.variants.sort((a: any, b: any) => (a.shade === 'DEFAULT' ? -1 : 1));
  return acc;
}, []);

const Color = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (className: string) => {
    navigator.clipboard.writeText(className).then(() => {
      setCopied(className);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div className="space-y-4">
      {colorGroups.map(
        (group: {
          name: string;
          variants: { shade: string; hex: string }[];
        }) => (
          <div
            key={group.name} // Ensure each group has a unique key
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {group.variants.map((variant: { shade: string; hex: string }) => {
              const bgClassName =
                variant.shade !== 'DEFAULT'
                  ? `bg-${group.name}-${variant.shade}`
                  : `bg-${group.name}`;
              const textClassName =
                variant.shade !== 'DEFAULT'
                  ? `text-${group.name}-${variant.shade}`
                  : `text-${group.name}`;

              return (
                <div key={`${group.name}-${variant.shade}`}>
                  {' '}
                  {/* Unique key for each variant */}
                  <div
                    className="flex cursor-pointer flex-col items-center rounded-lg p-4 shadow-md"
                    style={{
                      backgroundColor:
                        group.name !== 'white' ? variant.hex : '#F5F5F5',
                    }}
                    onClick={() => handleCopy(bgClassName)}
                  >
                    <span
                      className={
                        group.name !== 'white'
                          ? 'text-xs font-bold text-white'
                          : 'text-xs font-bold text-black'
                      }
                    >
                      {group.name} {variant.shade}
                    </span>
                    <span
                      className={
                        group.name !== 'white'
                          ? 'text-xs text-white'
                          : 'text-xs text-black'
                      }
                    >
                      {variant.hex}
                    </span>
                  </div>
                  <div className="mt-2 text-xs">
                    <span
                      className="cursor-pointer text-xs text-gray-300"
                      onClick={() => handleCopy(bgClassName)}
                    >
                      {copied === bgClassName ? 'Copied!' : `.` + bgClassName}
                    </span>
                    <br />
                    <span
                      className="cursor-pointer text-xs text-gray-300"
                      onClick={() => handleCopy(textClassName)}
                    >
                      {copied === textClassName
                        ? 'Copied!'
                        : `.` + textClassName}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
};

export default Color;
