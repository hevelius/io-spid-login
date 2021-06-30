import { SessionToken } from "../utils/SessionToken";
import URLParse from "url-parse";
import { WebViewNavigation } from 'react-native-webview';

type LoginSuccess = {
    success: true;
    token: SessionToken;
};
  
type LoginFailure = {
    success: false;
    errorCode?: string;
};

const LOGIN_SUCCESS_PREFIX = "/profile.html";
const LOGIN_FAILURE_PREFIX = "/error.html";
const LOGIN_FAILURE_WITH_ERROR_CODE_PREFIX = "/error.html?errorCode=";

type LoginResult = LoginSuccess | LoginFailure;

  export const extractLoginResult = (url: string): LoginResult | undefined => {
    const test = URLParse(url, true);
    if (test.pathname === LOGIN_SUCCESS_PREFIX && test.query.token) {
      const token = test.query.token;
      if (token && token.length > 0) {
        return { success: true, token: token as SessionToken };
      } else {
        return { success: false };
      }
    }
  ​
    // Check for LOGIN_FAILURE
    if (url.indexOf(LOGIN_FAILURE_PREFIX) !== -1) {
      const failureWithErrorCodeTokenPathPos = url.indexOf(
        LOGIN_FAILURE_WITH_ERROR_CODE_PREFIX
      );
      // try to extract error code
      if (failureWithErrorCodeTokenPathPos !== -1) {
        const errCode = url.substr(
          failureWithErrorCodeTokenPathPos +
            LOGIN_FAILURE_WITH_ERROR_CODE_PREFIX.length
        );
        return {
          success: false,
          errorCode: errCode.length > 0 ? errCode : undefined
        };
      }
      return {
        success: false,
        errorCode: undefined
      };
    }
    // Url is not LOGIN related
    return undefined;
  };

  /**
 * Extract the login result from the given url.
 * Return true if the url contains login pattern & token
 */
export const onLoginUriChanged = (
    onFailure: (errorCode: string | undefined) => void,
    onSuccess: (_: SessionToken) => void
  ) => (navState: WebViewNavigation): boolean => {
    if (navState.url) {
      // If the url is not related to login this will be `null`
      const loginResult = extractLoginResult(navState.url);
      if (loginResult) {
        if (loginResult.success) {
          // In case of successful login
          onSuccess(loginResult.token);
          return true;
        } else {
          // In case of login failure
          onFailure(loginResult.errorCode);
        }
      }
    }
    return false;
  };