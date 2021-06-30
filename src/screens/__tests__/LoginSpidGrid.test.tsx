import React from 'react';
import {View, Text} from 'react-native';
import renderer from 'react-test-renderer';

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

it('renders correctly with defaults', () => {
  const idpgrid = renderer
    .create(<LoginSpidGrid idps={generateIdps()} cols={2} />)
    .toJSON();
  expect(idpgrid).toMatchSnapshot();
});

it('renders correctly with custom template', () => {
  const templateGenerator = (item: SpidIdp): React.ReactElement => {
    return (
      <View style={{padding: 10, backgroundColor: 'red'}}>
        <Text>{item.name}</Text>
      </View>
    );
  };
  const idpgridtemplate = renderer
    .create(
      <LoginSpidGrid
        idps={generateIdps()}
        cols={2}
        template={templateGenerator}
      />,
    )
    .toJSON();
  expect(idpgridtemplate).toMatchSnapshot();
});
