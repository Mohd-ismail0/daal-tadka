
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

interface ProductSpecsAndDescriptionProps {
  longDescription?: string;
  description?: string;
  details?: { label: string; value: string }[];
}

export function ProductSpecsAndDescription({
  longDescription,
  description,
  details,
}: ProductSpecsAndDescriptionProps) {
  const isMobile = useIsMobile();
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(!isMobile);

  // Decide which text to show
  const descText = longDescription || description;

  return (
    <div className="w-full flex flex-col lg:flex-row gap-7">
      {/* Product Description */}
      <div className="w-full lg:w-1/2">
        {isMobile ? (
          <Collapsible open={isDescriptionOpen} onOpenChange={setIsDescriptionOpen}>
            <CollapsibleTrigger className="flex w-full justify-between items-center py-2 text-left font-medium text-gray-900">
              <h2 className="text-lg">Product Description</h2>
              <ChevronDown className={`h-5 w-5 transition-transform ${isDescriptionOpen ? 'transform rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="text-gray-700 text-sm leading-relaxed">
              <p className="whitespace-pre-line">{descText}</p>
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <>
            <h2 className="text-lg font-medium mb-3 text-gray-900">Product Description</h2>
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
              {descText}
            </p>
          </>
        )}
      </div>
      {/* Product Specifications */}
      <div className="w-full lg:w-1/2">
        {details && (
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h2 className="text-lg font-medium mb-3 text-gray-900">Product Specifications</h2>
            <Table>
              <TableBody>
                {details.map((row, i) => (
                  <TableRow key={i} className="border-b border-gray-100">
                    <TableCell className="py-2 font-medium text-gray-700 text-sm">{row.label}</TableCell>
                    <TableCell className="py-2 text-gray-700 text-sm">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
