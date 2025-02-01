import { afterEach, beforeAll, describe, expect, it, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Person from '@/lib/components/Person';
import { dataPersons } from '@/lib/tests/data.mock';

export function createMatchMedia(width: string) {
  window.matchMedia = (query) => ({
    matches: () => {},
    addListener: () => {},
    removeListener: () => {},
  });
}


describe('Person', () => {

  beforeAll(() => {
    createMatchMedia('576');
  });
  afterEach(() => {
    createMatchMedia('576');
  });



  it('renders button Edit', ()=> {

    render(<Person dataPerson={dataPersons.results[1]}/>);

    const buttonEdit = screen.getByRole('button');

    expect(buttonEdit).toBeInTheDocument()

  })
})