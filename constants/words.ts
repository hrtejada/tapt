/**
 * Constants used in multiple locations to avoid typos
 */

// IconButton
export const ACCEPT = "ACCEPT";
export const REJECT = "REJECT";

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
export enum OPTIONS {
  OFF,
  ONE_HOUR,
  THREE_HOURS,
  SIX_HOURS,
  TWELVE_HOURS,
}
