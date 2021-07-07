import React from 'react';
import {View, Text} from 'react-native';
import {render} from '@testing-library/react-native';

import {LoginSpidGrid} from '../LoginSpidGrid';
import {SpidIdp} from '../../utils/SpidIdp';

const generateIdps = (): Array<SpidIdp> => {
  return [
    {
      id: 'arubaid',
      name: 'Aruba',
      logo: 'https://raw.githubusercontent.com/pagopa/io-services-metadata/master/spid/idps/spid-idp-arubaid.png',
      profileUrl: 'http://selfcarespid.aruba.it',
    },
    {
      id: 'infocertid',
      name: 'Infocert',
      logo: 'https://raw.githubusercontent.com/pagopa/io-services-metadata/master/spid/idps/spid-idp-infocertid.png',
      profileUrl: 'https://my.infocert.it/selfcare',
    },
    {
      id: 'intesaid',
      name: 'Intesa',
      logo: 'https://raw.githubusercontent.com/pagopa/io-services-metadata/master/spid/idps/spid-idp-intesaid.png',
      profileUrl: 'https://spid.intesa.it',
    },
    {
      id: 'lepidaid',
      name: 'Lepida',
      logo: 'https://raw.githubusercontent.com/pagopa/io-services-metadata/master/spid/idps/spid-idp-lepidaid.png',
      profileUrl: 'https://id.lepida.it/',
    },
    {
      id: 'namirialid',
      name: 'Namirial',
      logo: 'https://raw.githubusercontent.com/pagopa/io-services-metadata/master/spid/idps/spid-idp-namirialid.png',
      profileUrl: 'https://idp.namirialtsp.com/idp',
    },
    {
      id: 'posteid',
      name: 'Poste',
      logo: 'https://raw.githubusercontent.com/pagopa/io-services-metadata/master/spid/idps/spid-idp-posteid.png',
      profileUrl: 'https://posteid.poste.it/private/cruscotto.shtml',
    },
    {
      id: 'sielteid',
      name: 'Sielte',
      logo: 'https://raw.githubusercontent.com/pagopa/io-services-metadata/master/spid/idps/spid-idp-sielteid.png',
      profileUrl: 'https://myid.sieltecloud.it/profile/',
    },
    {
      id: 'spiditalia',
      name: 'SPIDItalia Register.it',
      logo: 'https://raw.githubusercontent.com/pagopa/io-services-metadata/master/spid/idps/spid-idp-spiditalia.png',
      profileUrl: 'https://spid.register.it',
    },
    {
      id: 'timid',
      name: 'Telecom Italia',
      logo: 'https://raw.githubusercontent.com/pagopa/io-services-metadata/master/spid/idps/spid-idp-timid.png',
      profileUrl: 'https://id.tim.it/identity/private/',
    },
  ];
};

describe('LoginSpidGrid component', () => {
  const options = {
    idps: generateIdps(),
    cols: 2,
  };

  it('should match the snapshot', () => {
    const component = renderComponent(options);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should renders correctly with custom template', () => {
    const templateGenerator = (item: SpidIdp): React.ReactElement => {
      return (
        <View style={{padding: 10, backgroundColor: 'red'}}>
          <Text>{item.name}</Text>
        </View>
      );
    };

    const component = renderComponent({
      ...options,
      template: templateGenerator,
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});

function renderComponent(options: any) {
  return render(<LoginSpidGrid {...options} />);
}
