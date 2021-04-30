import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import restaurantsReducer from './restaurants/reducers'

// Test the store
describe('restaurants', () => {
  describe('loadRestaurants action', () => {
    it('stores the restaurants', async () => {

        // stub data
      const records = [
        {id: 1, name: 'Sushi Place'},
        {id: 2, name: 'Pizza Place'},
      ];

      // fake/stub api created for testing
      const api = {
          loadRestaurants: () =>  Promise.resolve(records);
      }

      const initialState = {
          records: []
      }

      // create an actual Redux store to test async/thunk/action creators/reducers
      const store = createStore(
          restaurantsReducer,
          initialState,
          //  .withExtraArgument() allows you to pass an additional argument at setup time that will be available to all thunk functions. This allows us to inject our API.
          applyMiddleware(thunk.withExtraArgument(api))
      )

      // dispatches to loadRestaurants() in actions.js, which dispatches storeRestaurants(records) using the records passed in to loadRestaurants() above.
      await store.dispatch(loadRestaurants())

      // will fail if without the appropraite reducers & actions setup because initialState record is an empty array
      expect(store.getState().records).toEqual(records);
    });
  });
});
