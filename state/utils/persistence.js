import { AsyncStorage } from 'react-native';
import { APP_STORAGE_KEY } from '../../constants';

/**
 * Function to load the app state from AsyncStorage.
 * @returns {Object} Object that represents the state persisted in the device.
 */
const loadState = async () => {
  try {
    const serializedState = await AsyncStorage.getItem(APP_STORAGE_KEY);
    if (serializedState === null) return {};
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};


/**
 * Function to persist the app state into AsyncStorage.
 */
const persistState = async (state) => {
  try {
    const serializedState = JSON.stringify(state);
    await AsyncStorage.mergeItem(APP_STORAGE_KEY, serializedState);
  } catch (err){
    /* Ignore write errors */
  }
};

export {
  loadState,
  persistState,
};
