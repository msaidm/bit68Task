import {convertLocalHourToUTC} from '../Utilities/DateAndTimeTools';

const defaultAppConfig = {
  language: 'en',
  deviceLanguage: 'en',
  languageIsSetManually: false,
  theme: 'light',
  loggedIn: false,
  keepLoggedIn: true,
  isConnectedToInternet: false,
};

export const defaultUserData = {
  uid: '',
  phoneNumber: '',
  name: '',
  userName: '',
  email: '',
  userType: '',
  photoUrl: '',
  deviceToken: '',
  deviceOS: '',
  stripeCustomerId: '',
  upcomingAppointmentDates: [],
};

export const defaultConsultantData = {
  pricePerCall: 10,
  timeAvailable: {
    from: convertLocalHourToUTC(8),
    to: convertLocalHourToUTC(20),
  },
  numberOfWeeksAppointmentMustBeWithin: 2,
  timeWindow: 20,
  rating: 0,
  numberOfRates: 0,
  accountActivated: false,
  accountReviewed: false,
  languageSpeak: '',
  available: false,
  bio: '',
  consultantReviews: {},
  consultantRatings: {},
  paymentDue: 0,
  earned:0,
  suspended:false,
  isConsultant:true,
  numberOfCalls:0,
  isAdmin: false,
  selectedDays: {},
};

// All keys put here will be blacklisted in the persistor config (ie. won't persist)
export const currentSessionState = {
  showCallScreen: false,
  currentCallData: null,
  loadingConsultants: false,
  consultants: {},
  admins: {},
  loadingAppointments: false,
  appointments: {},
  supportMessageList:{}
};

const initialState = {
  ...defaultAppConfig,
  ...defaultUserData,
  ...defaultConsultantData,
  ...currentSessionState,
};

export default initialState;
