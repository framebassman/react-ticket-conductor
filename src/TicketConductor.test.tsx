import React from 'react';
import { render, screen } from '@testing-library/react';
import TicketConductor from './TicketConductor';

test('renders conductor', () => {
  render(<TicketConductor />);
  const linkElement = screen.getByTestId("conductor");
  expect(linkElement).toBeInTheDocument();
});
