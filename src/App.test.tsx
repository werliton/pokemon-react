import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
// eslint-disable-next-line jest/no-mocks-import
import storeBuilder from './__mocks__/storeBuilder';
import { MemoryRouter } from 'react-router';
import Api from './request/api/Api';
jest.mock('./request/api/Api')

let mockApi = Api as jest.Mocked<typeof Api>

const setup = (initialState={}) => {
  let store = storeBuilder(initialState)
  return render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  )
}

describe('App container', () => {
  it('renders header corretly', () => {
    setup({
      pokemonList: {},
      pokemonDetail: {},
      isLoading: false,
      error: null
    })
    const linkElement = screen.getByText(/listagem de pokemons/i);
    expect(linkElement).toBeInTheDocument();
  })

  it('should list all card', async ()=>{
    mockApi.get.mockResolvedValueOnce({
      data: {
        results: [
          {
            name: 'string1',
            url: 'string1'
          },
          {
            name: 'string2',
            url: 'string2'
          }
        ]
      }
    })

    setup({
      pokemonList: {},
      pokemonDetail: {},
      isLoading: false,
      error: null
    })

    expect(mockApi.get).toHaveBeenCalledTimes(1)

    await waitFor(() => document.getElementById('container'))

    expect(document.getElementById('container')?.children).toHaveLength(2)
  })

})
