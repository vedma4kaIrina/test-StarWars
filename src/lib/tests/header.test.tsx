import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Header from '@/lib/components/Header';
import Footer from '@/lib/components/Footer';
import { it } from '@jest/globals';


describe('Header', () => {

  it('renders correctly', () => {
    render(<Header />);

    const linkList = screen.getAllByRole('link');
    const text = screen.getByText(/Test task Irina Lashytskaya/);

    expect(text).toBeInTheDocument();
    expect(linkList).toHaveLength(1);
  })

})
