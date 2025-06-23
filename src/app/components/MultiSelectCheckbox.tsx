"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
} from "@/app/components/ui/command";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MultiSelectCheckboxProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

export default function MultiSelectCheckbox({
  options,
  selected,
  onChange,
  placeholder = "Select options",
}: MultiSelectCheckboxProps) {
  const [open, setOpen] = useState(false);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selected.length > 0
            ? `${selected.length} selected`
            : placeholder}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option}
                onSelect={() => toggleOption(option)}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Checkbox checked={selected.includes(option)} />
                  <span>{option}</span>
                </div>
                {selected.includes(option) && <Check className="h-4 w-4" />}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
