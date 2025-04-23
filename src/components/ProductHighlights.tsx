
interface ProductHighlightsProps {
  highlights: string[] | undefined;
}

export function ProductHighlights({ highlights }: ProductHighlightsProps) {
  if (!highlights || !highlights.length) return null;
  return (
    <ul className="space-y-2">
      {highlights.map((highlight, i) => (
        <li className="flex items-start" key={i}>
          <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
          <span className="text-gray-700 text-sm">{highlight}</span>
        </li>
      ))}
    </ul>
  );
}
