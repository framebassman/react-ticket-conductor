interface TicketConductorProps {
  title: string;
  disabled: boolean;
}

export function TicketConductor({ title, disabled }: TicketConductorProps) {
  return (
    <div>
      <button disabled={disabled}>{title}</button>
    </div>
  );
}
