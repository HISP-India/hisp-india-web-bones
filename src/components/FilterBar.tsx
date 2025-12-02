import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FilterBarProps {
  onFilterChange: (filters: Record<string, string>) => void;
  filters: Record<string, string>;
  filterConfig: {
    id: string;
    label: string;
    options: { value: string; label: string }[];
  }[];
}

export function FilterBar({ onFilterChange, filters, filterConfig }: FilterBarProps) {
  const handleFilterChange = (filterId: string, value: string) => {
    onFilterChange({
      ...filters,
      [filterId]: value,
    });
  };

  const handleClearFilters = () => {
    const clearedFilters: Record<string, string> = {};
    filterConfig.forEach((config) => {
      clearedFilters[config.id] = "all";
    });
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters = Object.values(filters).some((value) => value !== "all");

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-muted rounded-lg">
      {filterConfig.map((config) => (
        <div key={config.id} className="flex-1 min-w-[200px]">
          <Select
            value={filters[config.id] || "all"}
            onValueChange={(value) => handleFilterChange(config.id, value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={config.label} />
            </SelectTrigger>
            <SelectContent>
              {config.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
      {hasActiveFilters && (
        <Button variant="outline" size="sm" onClick={handleClearFilters}>
          <X className="mr-2 h-4 w-4" />
          Clear Filters
        </Button>
      )}
    </div>
  );
}
