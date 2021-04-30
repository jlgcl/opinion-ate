import {render} from '@testing-library/react';
import {RestaurantList} from '../RestaurantList';

describe('RestaurantList', () => {
  // *** CHECK LOADING BEHAVIOR *** //
  it('loads restaurants on first render', () => {
    // jest mock fn that has the name 'loadRestaurants'.
    const loadRestaurants = jest.fn().mockName('loadRestaurants');
    const restaurants = [];
    // need to pass in restaurants in this test to pass the second behavior test (restaurant-display)
    render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );

    expect(loadRestaurants).toHaveBeenCalled();
  });

  // *** CHECK RESTAURANT-DISPLAY BEHAVIOR *** //
  it('displays the restaurants', () => {
    const noop = () => {}; // no-operation function; doesn't do anything, instead of using a mock fn
    const restaurants = [
      {id: 1, name: 'Sushi Place'},
      {id: 2, name: 'Pizza Place'},
    ];

    // destructure what's returned from the render to be tested
    const {queryByText} = render(
      <RestaurantList loadRestaurants={noop} restaurants={restaurants} />,
    );

    expect(queryByText('Sushi Place')).not.toBeNull();
    expect(queryByText('Pizza Place')).not.toBeNull();
  });
});
