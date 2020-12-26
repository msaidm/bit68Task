import {
  SET_LANGUAGE,
  SET_THEME,
  SET_USER_DATA,
  SET_NAME,
  SET_EMAIL,
  SET_LOGGED_IN,
  SET_KEEP_LOGGED_IN,
  SET_PHOTO_URL,
  SET_UID,
  SET_STRIPE_CUSTOMER_ID,
  SET_SHOW_CALL_SCREEN,
  SET_CURRENT_CALL_DATA,
  SET_LOADING_CONSULTANTS,
  SET_CONSULTANTS,
  SET_ADMINS,
  SET_LOADING_APPOINTMENTS,
  SET_LOADING_SupportList,
  SET_APPOINTMENTS,
  SET_UPCOMING_APPOINTMENT_DATES,
  SET_BIO,
  SET_IS_ADMIN,
  SET_IS_CONNECTED_TO_INTERNET,
  SET_LANGUAGE_IS_SET_MANUALLY,
  SET_DEVICE_LANGUAGE,
  SET_CONSULTANT_REVIEWS,
  SET_CONSULTANT_RATINGS,
  SET_USERS,
  SET_VALUES, SET_PHONE_NUMBER,
  SET_supportMessageList
} from './ActionTypes';
import {
  fetchActiveConsultants,
  fetchAdmins,
  fetchUserAppointments,
  fetchConsultantRatings,
  fetchConsultantReviews,
  fetchAllUsers,
  fetchDynamicValues,
  fetchSupportMessageList
} from '../Networking/Firestore';
import {extractDocDataAndIdsAsObjectFromCollectionSnap} from '../Utilities/Tools';
import {reportProblem} from '../Utilities/ErrorHandlers';

export const setLanguage = language => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const setTheme = theme => ({
  type: SET_THEME,
  payload: theme,
});

export const setUserData = userData => ({
  type: SET_USER_DATA,
  payload: userData,
});

export const setName = name => ({
  type: SET_NAME,
  payload: name,
});

export const setPhoneNumber = phone => ({
  type: SET_PHONE_NUMBER,
  payload: phone,
});

export const setEmail = email => ({
  type: SET_EMAIL,
  payload: email,
});

export const setLoggedIn = loggedIn => ({
  type: SET_LOGGED_IN,
  payload: loggedIn,
});

export const setKeepLoggedIn = keepLoggedIn => ({
  type: SET_KEEP_LOGGED_IN,
  payload: keepLoggedIn,
});

export const setPhotoUrl = photoUrl => ({
  type: SET_PHOTO_URL,
  payload: photoUrl,
});

export const setUid = uid => ({
  type: SET_UID,
  payload: uid,
});

export const setStripeCustomerId = customerId => ({
  type: SET_STRIPE_CUSTOMER_ID,
  payload: customerId,
});

export const setShowCallScreen = showCallScreen => ({
  type: SET_SHOW_CALL_SCREEN,
  payload: showCallScreen,
});

export const setCurrentCallData = currentCallData => ({
  type: SET_CURRENT_CALL_DATA,
  payload: currentCallData,
});

export const setLoadingConsultants = loading => ({
  type: SET_LOADING_CONSULTANTS,
  payload: loading,
});

export const setConsultants = consultants => ({
  type: SET_CONSULTANTS,
  payload: consultants,
});
export const setAdmins = admins => ({
  type: SET_ADMINS,
  payload: admins,
});
export const setUsers = users => ({
  type: SET_USERS,
  payload: users,
});
export const setValues = dynamicValues => ({
  type: SET_VALUES,
  payload: dynamicValues,
});

export const setLoadingAppointments = loading => ({
  type: SET_LOADING_APPOINTMENTS,
  payload: loading,
});
export const setLoadingSupportList = loading => ({
  type: SET_LOADING_SupportList,
  payload: loading,
});

export const setAppointments = appointments => ({
  type: SET_APPOINTMENTS,
  payload: appointments,
});

export const setSuppList = supportMessageList => ({
  type: SET_supportMessageList,
  payload: supportMessageList,
});


export const setConsultantReviews = reviews => ({
  type: SET_CONSULTANT_REVIEWS,
  payload: reviews,
});
export const setConsultantRatings = ratings => ({
  type: SET_CONSULTANT_RATINGS,
  payload: ratings,
});

export const setUpcomingAppointmentDates = appointmentDates => ({
  type: SET_UPCOMING_APPOINTMENT_DATES,
  payload: appointmentDates,
});

export const setBio = bio => ({
  type: SET_BIO,
  payload: bio,
});

export const setIsAdmin = isAdmin => ({
  type: SET_IS_ADMIN,
  payload: isAdmin,
});

export const setIsConnectedToInternet = isConnected => ({
  type: SET_IS_CONNECTED_TO_INTERNET,
  payload: isConnected,
});

export const setDeviceLanguage = deviceLanguage => ({
  type: SET_DEVICE_LANGUAGE,
  payload: deviceLanguage,
});

export const setLanguageIsSetManually = isSetManually => ({
  type: SET_LANGUAGE_IS_SET_MANUALLY,
  payload: isSetManually,
});
export const fetchDynamicValuesAction = () => {
  return async dispatch => {
    // dispatch(setLoadingConsultants(true));

    try {
      const valuesCollectionSnap = await fetchDynamicValues();

      if (!valuesCollectionSnap || valuesCollectionSnap.empty) {
        dispatch(setValues({}));
        // dispatch(setLoadingusers(false));
        return;
      }

      const fetchedValues = extractDocDataAndIdsAsObjectFromCollectionSnap(
        valuesCollectionSnap,
      );
      //console.log('fetchedValues', {fetchedValues});
      dispatch(setValues(fetchedValues));
    } catch (error) {
      reportProblem(error);
      dispatch(setValues({}));
    }

    // dispatch(setLoadingConsultants(false));
  };
};

export const fetchUsers = () => {
  return async dispatch => {
    // dispatch(setLoadingConsultants(true));

    try {
      const usersCollectionSnap = await fetchAllUsers();

      if (!usersCollectionSnap || usersCollectionSnap.empty) {
        dispatch(setUsers({}));
        // dispatch(setLoadingusers(false));
        return;
      }

      const fetchedUsers = extractDocDataAndIdsAsObjectFromCollectionSnap(
        usersCollectionSnap,
      );
      //console.log('fetchedusers', {fetchedUsers});
      dispatch(setUsers(fetchedUsers));
    } catch (error) {
      reportProblem(error);
      dispatch(setUsers({}));
    }

    // dispatch(setLoadingConsultants(false));
  };
};

export const fetchConsultants = () => {
  return async dispatch => {
    dispatch(setLoadingConsultants(true));

    try {
      const consultantsCollectionSnap = await fetchActiveConsultants();

      if (!consultantsCollectionSnap || consultantsCollectionSnap.empty) {
        dispatch(setConsultants({}));
        dispatch(setLoadingConsultants(false));
        return;
      }

      const fetchedConsultants = extractDocDataAndIdsAsObjectFromCollectionSnap(
        consultantsCollectionSnap,
      );
      //console.log('fetchedConsultants', fetchedConsultants);
      dispatch(setConsultants(fetchedConsultants));
    } catch (error) {
      reportProblem(error);
      dispatch(setConsultants({}));
    }

    dispatch(setLoadingConsultants(false));
  };
};
export const fetchCurrentAdmins = () => {
  return async dispatch => {
    dispatch(setLoadingConsultants(true));

    try {
      const adminCollectionSnap = await fetchAdmins();
      
      if (!adminCollectionSnap || adminCollectionSnap.empty) {
        dispatch(setAdmins({}));
        
        return;
      }

      const fetchedAdmins = extractDocDataAndIdsAsObjectFromCollectionSnap(
        adminCollectionSnap,
      );
      console.log('fetchedConsultants', fetchedAdmins);
      dispatch(setAdmins(fetchedAdmins));
    } catch (error) {
      reportProblem(error);
      dispatch(setAdmins({}));
    }

    dispatch(setLoadingConsultants(false));
  };
};

export const fetchAppointments = (userType, uid) => {
  return async dispatch => {
    dispatch(setLoadingAppointments(true));

    try {
      const appointmentsCollectionSnap = await fetchUserAppointments(
        userType,
        uid,
      );

      if (!appointmentsCollectionSnap || appointmentsCollectionSnap.empty) {
        dispatch(setAppointments({}));
        dispatch(setLoadingAppointments(false));
        return;
      }

      const fetchedAppointments = extractDocDataAndIdsAsObjectFromCollectionSnap(
        appointmentsCollectionSnap,
      );

      dispatch(setAppointments(fetchedAppointments));
    } catch (error) {
      reportProblem(error);
      dispatch(setAppointments({}));
    }

    dispatch(setLoadingAppointments(false));
  };
};

export const fetchSupportList = (userType, uid) => {
  return async dispatch => {
    dispatch(setLoadingSupportList(true));

    try {
      const appointmentsCollectionSnap = await fetchSupportMessageList(
        userType,
        uid,
      );
      //console.log("snap",appointmentsCollectionSnap)

      if (!appointmentsCollectionSnap || appointmentsCollectionSnap.empty) {
       

        dispatch(setSuppList({}));
        dispatch(setLoadingSupportList(false));
        return;
      }

      const fetchedAppointments = extractDocDataAndIdsAsObjectFromCollectionSnap(
        appointmentsCollectionSnap,
      );

      dispatch(setSuppList(fetchedAppointments));
      console.log("WTF")
    } catch (error) {
      reportProblem(error);
      dispatch(setSuppList({}));
    }

    dispatch(setLoadingSupportList(false));
  };
};

export const fetchConsultantReviewsAction = () => {
  return async dispatch => {
    try {
      const consultantReviewsCollectionSnap = await fetchConsultantReviews();

      if (
        !consultantReviewsCollectionSnap ||
        consultantReviewsCollectionSnap.empty
      ) {
        dispatch(setConsultantReviews({}));
        return;
      }

      const fetchedconsultantReviews = extractDocDataAndIdsAsObjectFromCollectionSnap(
        consultantReviewsCollectionSnap,
      );
      console.log('fetchedconsultantReviews', fetchedconsultantReviews);
      dispatch(setConsultantReviews(fetchedconsultantReviews));
    } catch (error) {
      reportProblem(error);
      dispatch(setConsultantReviews({}));
    }
  };
};

export const fetchConsultantRatingsAction = () => {
  return async dispatch => {
    try {
      const consultantRatingsCollectionSnap = await fetchConsultantRatings();

      if (
        !consultantRatingsCollectionSnap ||
        consultantRatingsCollectionSnap.empty
      ) {
        dispatch(setConsultantRatings({}));
        return;
      }

      const fetchedconsultantRatings = extractDocDataAndIdsAsObjectFromCollectionSnap(
        consultantRatingsCollectionSnap,
      );
      //console.log('fetchedconsultantRatings', fetchedconsultantRatings);
      dispatch(setConsultantRatings(fetchedconsultantRatings));
    } catch (error) {
      reportProblem(error);
      dispatch(setConsultantRatings({}));
    }
  };
};
