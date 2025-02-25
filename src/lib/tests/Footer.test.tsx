import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Footer from '@/lib/components/Footer';
import { it } from '@jest/globals';


describe('Footer', () => {

  it('renders correctly', () => {
    render(<Footer />);


    const text = screen.getByText(/Test task Irina Lashytskaya/);

    expect(text).toBeInTheDocument();

  })

})
