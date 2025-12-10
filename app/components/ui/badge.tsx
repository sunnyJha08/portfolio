interface BadgeValue {
  value: string;
}

export default function Badge({ value }: BadgeValue) {
  return (
    <span className="text-muted-foreground rounded-sm border p-0.5 text-xs font-medium">
      {value}
    </span>
  );
}
