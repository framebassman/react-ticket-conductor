export const TicketInfo = ({ label }: any) => {
  return (
    <div id="ticket-info" className="info">
      <span>
        <b>Событие:</b> {label}
      </span>
    </div>
  );
};
