/// action creation ///
// all these are created during E2E testing, but used with the actual API afterwards

// define an action type
export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';

// define an action
export const loadRestaurants = () => (dispatch, getState, api) => {
  api.loadRestaurants().then(records => {
    dispatch(storeRestaurants(records));
  });
};

// define an action creator (sent to the 'records' reducer in reducers.js)
const storeRestaurants = records => ({
  type: STORE_RESTAURANTS,
  records,
});
