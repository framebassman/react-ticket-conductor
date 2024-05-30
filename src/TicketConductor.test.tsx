import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TicketConductor } from './TicketConductor';

test('renders learn react link', () => {
  render(<TicketConductor disabled={false} title="some" />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
