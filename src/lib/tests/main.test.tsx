import { afterEach, beforeAll, describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { dataPersons } from '@/lib/tests/data.mock';
import Main from '@/lib/components/Main';

let globalFetchSpy;


export function createMatchMedia(width: string) {
  window.matchMedia = (query) => ({
    matches: () => {},
    addListener: () => {},
    removeListener: () => {},
  });
}

jest.mock('node-fetch', () =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        dataPersons
      })
  }))

describe('Main', () => {

  beforeAll(() => {
    createMatchMedia('576');

    // globalFetchSpy = jest.spyOn(window, 'fetch')
    //   .mockImplementation(() =>
    //   Promise.resolve({
    //     json: () =>
    //       Promise.resolve({
    //         dataPersons
    //       })
    //   }));

  });

  afterEach(() => {
    createMatchMedia('576');
    jest.restoreAllMocks();
  });

    it('renders correctly', () => {

      render(<Main data={dataPersons}/>);

        const arrayData = screen.getByTestId('list-antd');

        expect(arrayData).toBeInTheDocument();
        expect(arrayData.childElementCount).toEqual(2)

      }
    )

  it('renders pagination', ()=> {

    render(<Main data={dataPersons}/>);

    const buttonArray = screen.getAllByRole('button');

    expect(buttonArray.length).toEqual(3)

  })

  // it('check fetch ', ()=> {
  //
  //   render(<Main data={dataPersons}/>);
  //
  //   const pageOne = screen.getByTitle('1');
  //   fireEvent.click(pageOne)
  //
  //   expect(globalFetchSpy).toHaveBeenCalled();
  //
  // })
  })