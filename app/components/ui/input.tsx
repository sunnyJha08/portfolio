import * as React from "react";
import { Button } from "./button";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { cn } from "~/lib/utils";

interface InputWithLabelProps {
  htmlForAndId: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}

export function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export function InputWithLabel({
  htmlForAndId,
  label,
  placeholder,
  type,
  required,
}: InputWithLabelProps) {
  return (
    <div className="grid w-full items-center gap-3">
      <Label htmlFor={htmlForAndId}>{label}</Label>
      <Input
        type={type}
        id={htmlForAndId}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-3">
      <Label htmlFor="message">Your message</Label>
      <Textarea
        placeholder="Type your message here."
        id="message"
        required
        maxLength={1000}
      />
    </div>
  );
}
