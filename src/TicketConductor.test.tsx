import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TicketConductor } from './TicketConductor';

test('renders title', () => {
  render(<TicketConductor disabled={false} title="some" />);
  const linkElement = screen.getByText(/some/i);
  expect(linkElement).toBeInTheDocument();
});
