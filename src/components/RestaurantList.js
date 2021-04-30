import {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';

export const RestaurantList = ({loadRestaurants, restaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
};

// Need the below code to pass in the necessary props to the component, which is DIFFERENT from unit test injections
// Cypress E2E test will FAIL if these are not defined (though unit test will pass due to mock fn & injections).
const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
