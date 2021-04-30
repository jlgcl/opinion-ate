import {render} from '@testing-library/react';
import {RestaurantList} from '../RestaurantList';

describe('RestaurantList', () => {
  const restaurants = [
    {id: 1, name: 'Sushi Place'},
    {id: 2, name: 'Pizza Place'},
  ];
  let loadRestaurants;
  let context;

  // Before each test for both tests
  beforeEach(() => {
    // jest mock fn that has the name 'loadRestaurants'.
    loadRestaurants = jest.fn().mockName('loadRestaurnats');

    // need to pass in restaurants in this test to pass the second behavior test (restaurant-display)
    context = render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );
  });

  // *** CHECK LOADING BEHAVIOR *** //
  it('loads restaurants on first render', () => {
    expect(loadRestaurants).toHaveBeenCalled();
  });

  // *** CHECK RESTAURANT-DISPLAY BEHAVIOR *** //
  it('displays the restaurants', () => {
    // const noop = () => {}; // no-operation function; doesn't do anything, instead of using a mock fn

    // // destructure what's returned from the render to be tested
    // const {queryByText} = render(
    //   <RestaurantList loadRestaurants={noop} restaurants={restaurants} />,
    // );

    const {queryByText} = context;

    expect(queryByText('Sushi Place')).not.toBeNull();
    expect(queryByText('Pizza Place')).not.toBeNull();
  });
});
