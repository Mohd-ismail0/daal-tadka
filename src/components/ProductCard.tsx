
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  prices: {
    [key: string]: number;
  };
}

export function ProductCard({ name, description, image, prices }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Select defaultValue="500g">
            <SelectTrigger>
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(prices).map((size) => (
                <SelectItem key={size} value={size}>
                  {size} - ₹{prices[size]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button className="w-full">Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  );
}
