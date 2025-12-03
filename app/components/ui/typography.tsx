"use client";

import { cn } from "~/lib/utils";

interface TypographyProps {
  value: string;
  className?: string;
  spanValue?: string;
}

export function TypographyH1({ value, className }: TypographyProps) {
  const combinedCN = cn(
    "scroll-m-20",
    "text-4xl",
    "font-extrabold",
    "tracking-tight",
    className,
  );
  return <h1 className={combinedCN}>{value}</h1>;
}

export function TypographyH1WithSpan({
  value,
  className,
  spanValue,
}: TypographyProps) {
  const combinedCN = cn(
    "scroll-m-20",
    "text-4xl",
    "font-extrabold",
    "tracking-tight",
    className,
  );
  return (
    <h1 className={combinedCN}>
      {value}
      <span className="text-neutral-400"> {spanValue}</span>
    </h1>
  );
}

export function TypographyH2({ value, className }: TypographyProps) {
  const combinedCN = cn(
    "scroll-m-20",
    "border-b",
    "pb-2",
    "text-3xl",
    "font-semibold",
    "tracking-tight",
    "first:mt-0",
    className,
  );
  return <h2 className={combinedCN}>{value}</h2>;
}

export function TypographyH3({ value, className }: TypographyProps) {
  const combinedCN = cn(
    "scroll-m-20",
    "text-2xl",
    "font-semibold",
    "tracking-tight",
    className,
  );
  return <h3 className={combinedCN}>{value}</h3>;
}

export function TypographyH4({ value, className }: TypographyProps) {
  const combinedCN = cn(
    "scroll-m-20",
    "text-xl",
    "font-semibold",
    "tracking-tight",
    className,
  );
  return <h4 className={combinedCN}>{value}</h4>;
}

export function TypographyP({ value, className }: TypographyProps) {
  const combinedCN = cn(
    "leading-7",
    "not-first:mt-3",
    "text-muted-foreground",
    className,
  );
  return <p className={combinedCN}>{value}</p>;
}

export function TypographyBlockquote({ value, className }: TypographyProps) {
  const combinedCN = cn("mt-6", "border-l-2", "pl-6", "italic", className);
  return <blockquote className={combinedCN}>{value}</blockquote>;
}

export function TypographyLead({ value, className }: TypographyProps) {
  const combinedCN = cn("text-muted-foreground", "text-xl", className);
  return <p className={combinedCN}>{value}</p>;
}

export function TypographyLarge({ value, className }: TypographyProps) {
  const combinedCN = cn("text-lg", "font-semibold", className);
  return <div className={combinedCN}>{value}</div>;
}

export function TypographySmall({ value, className }: TypographyProps) {
  const combinedCN = cn("text-sm", "leading-none", "font-medium", className);
  return <div className={combinedCN}>{value}</div>;
}

export function TypographyMuted({ value, className }: TypographyProps) {
  const combinedCN = cn("text-muted-foreground", "text-sm", className);
  return <p className={combinedCN}>{value}</p>;
}
