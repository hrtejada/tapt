/**
 * Constants used in multiple locations to avoid typos
 */

// Email Button Actions
export enum EMAIL_ACTIONS {
  ACCEPT = "ACCEPT",
  REJECT = "REJECT",
  QUEUE = "QUEUE",
}

// BookingNumberCard, BookingStats
export const ACCEPTED = "ACCEPTED";
export const REJECTED = "REJECTED";

// BookingStatus
export const ACTIVE = "ACTIVE";
export const INACTIVE = "INACTIVE";

// Button
export const IS_FLAT = "isFlat";

/***** SETTINGS CONSTANTS *****/
export const ABOUT_TITLE = "About";
export const DATE_RANGE_TITLE = "Date Range";
export const DELETE_TITLE = "Delete Account";
export const EMAIL_LIMIT_TITLE = "Email Limit";
export const NOTIFICATION_TITLE = "Notification Cadence";
export const PARAMETERS_TITLE = "Parameters";
export const RANKING_TITLE = "Ranking";

/***** SETTINGS DETAILS *****/
export const DUMMY_DETAILS =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ex \
fuga aut quos amet libero mollitia distinctio, aliquid maiores \
voluptatum ut deleniti accusamus perferendis doloremque veniam cum. \
Illo, laudantium sint.";
export const DATE_RANGE = {
  header: "Set Date Range",
  info: DUMMY_DETAILS,
};
export const DELETE_ACCOUNT = {
  header: "Delete Account",
  info: DUMMY_DETAILS,
};
export const EMAIL_LIMIT = {
  header: "Limit accepted emails",
  info: "Change the amount of emails you would like to accept for the booking window (0 = No limit)",
};
export const NOTIFICATION_CADENCE = {
  header: "Set data retrieval cadence",
  info: "Choose how often you would like to receive an email notifying you of any new emails to work through.",
};
export const PARAMETERS = {
  header: "Set data to parse from Emails",
  info: DUMMY_DETAILS,
};
export const RANKING = {
  header: "Ranking",
  info: DUMMY_DETAILS,
};

/***** NOTIFICATION CADENCE VALUES *****/
export enum NOTIFICATION_OPTIONS {
  OFF,
  ONE_HOUR,
  THREE_HOURS,
  SIX_HOURS,
  TWELVE_HOURS,
}

/***** USER CONTEXT *****/
export enum USER_ACTION_TYPES {
  USER_ID = "SET_USER_ID",
  UNREAD_COUNT = "UPDATE_UNREAD_COUNT",
  ACCEPTED = "UPDATE_ACCEPTED",
  REJECTED = "UPDATE_REJECTED",
  LIMIT = "SET_EMAIL_LIMIT",
  START_DATE = "SET_START_DATE",
  END_DATE = "SET_END_DATE",
  HEADER = "SET_HEADER",
  ADD = "ADD_PARAMETER",
  DELETE = "DELETE_PARAMETER",
  NOTIFICATION = "NOTIFICATION_CADENCE",
  RANKING_ON = "SWITCH_RANKING_ON",
  RANKING_OFF = "SWITCH_RANKING_OFF",
  RANK_MODE_ON = "RANK_MODE_ON",
  RANK_MODE_OFF = "RANK_MODE_OFF",
}

/***** RANKED CONTEXT *****/
export enum RANKED_ACTION_TYPES {
  USER_ID = "SET_USER_ID",
  RANKED_EMAILS = "SET_RANKED_EMAILS",
  ADD_EMAIL = "ADD_RANKED_EMAIL",
}
