import React from 'react';
import renderer from 'react-test-renderer';

import {LoginSpidIdp} from '../LoginSpidIdp';

it('renders correctly with defaults', () => {
  const webview = renderer
    .create(
      <LoginSpidIdp
        profile_url={'https://github.com'}
        onLoginSuccess={(_: any) => _}
        onLoginFailure={(_: Error) => _}
      />,
    )
    .toJSON();
  expect(webview).toMatchSnapshot();
});
