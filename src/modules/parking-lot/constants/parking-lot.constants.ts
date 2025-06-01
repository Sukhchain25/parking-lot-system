export const PARKING_LOT_CONSTANTS = {
  DEFAULT_PARKING_LOT_NAME: 'Default Parking Lot',
  DEFAULT_LOCATION: '123 Default Street, City Center',
  DEFAULT_TOTAL_SLOTS: 100,
  DEFAULT_AVAILABLE_SLOTS: 100,
  MIN_TOTAL_SLOTS: 1,
  MIN_AVAILABLE_SLOTS: 0,
  MAX_TOTAL_SLOTS: 1000,
  MAX_AVAILABLE_SLOTS: 1000,
  ERROR_MESSAGES: {
    PARKING_LOT_NOT_FOUND: 'Parking lot not found',
    PARKING_LOT_ALREADY_EXISTS: 'Parking lot already exists',
    INVALID_PARKING_LOT_DATA: 'Invalid parking lot data provided',
    PARKING_LOT_CREATION_FAILED: 'Failed to create parking lot',
    PARKING_LOT_UPDATE_FAILED: 'Failed to update parking lot',
    PARKING_LOT_DELETION_FAILED: 'Failed to delete parking lot',
    PARKING_LOT_PAGINATION_ERROR:
      'Error occurred during parking lot pagination',
  },
  API_ENDPOINTS: {
    CREATE_PARKING_LOT: '/parkingLots',
    GET_PARKING_LOT: (id: string) => `/parkingLots/${id}`,
    GET_ALL_PARKING_LOTS: '/parkingLots',
    UPDATE_PARKING_LOT: (id: string) => `/parkingLots/${id}`,
    DELETE_PARKING_LOT: (id: string) => `/parkingLots/${id}`,
  },
};
