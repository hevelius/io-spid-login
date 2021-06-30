import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {WebViewNavigation} from 'react-native-webview';
import {onLoginUriChanged} from '../utils/login';
import {SessionToken} from '../utils/SessionToken';

interface Props {
  profile_url: string;
  onLoginSuccess: (token: SessionToken) => void;
  onLoginFailure: (error: Error) => void;
}

type State = {
  errorCode?: string;
  loginTrace?: string;
};

export class LoginSpidIdp extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loginTrace: this.props.profile_url,
    };
  }

  private handleShouldStartLoading = (event: WebViewNavigation): boolean => {
    const isLoginUrlWithToken = onLoginUriChanged(
      this.handleLoginFailure,
      this.handleLoginSuccess,
    )(event);
    // URL can be loaded if it's not the login URL containing the session token - this avoids
    // making a (useless) GET request with the session in the URL
    return !isLoginUrlWithToken;
  };

  private handleLoadingError = (): void => {
    console.log('handleLoadingError');
  };

  private handleLoginFailure = (errorCode?: string) => {
    this.props.onLoginFailure(
      new Error(`login failure with code ${errorCode || 'n/a'}`),
    );
  };

  private handleLoginSuccess = (token: SessionToken) => {
    this.props.onLoginSuccess(token);
  };

  render() {
    return (
      <WebView
        source={{uri: this.props.profile_url}}
        textZoom={100}
        onError={this.handleLoadingError}
        javaScriptEnabled={true}
        onShouldStartLoadWithRequest={this.handleShouldStartLoading}
      />
    );
  }
}
