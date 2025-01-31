import { expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Header from '@/lib/components/Header';
import Footer from '@/lib/components/Footer';

it('Footer', () => {
  render(<Footer />);
  // expect(screen.getByText('Test task Irina Lashytskaya')).toBeInTheDocument();

  const linkList = screen.getByRole('link');
 //  expect(linkList).toHaveLength(1)
})