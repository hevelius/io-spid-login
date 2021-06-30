# io-spid-login

integrate spid login in your react-native app

## Requirements

-

## Installation

```
yarn add io-spid-login
```

## How it works

there are two main components

- LoginSpidGrid
- LoginSpidIdp

## LoginSpidGrid

It's a full customizable component used to show a list of identity providers.

ex: generate a two columns flatlist with default template

```javascript
<LoginSpidGrid
  idps={/*... your list of idps ...*/}
  cols={2}
/>
```

idps should be an Array of type SpidIdp like this:

```javascript
const idps = {
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
    ...
}
```

Also is possibile to pass a custom template

```javascript

const templateGenerator = (item:SpidIdp):React.ReactElement => {
    return (
        <View style={{padding: 10, backgroundColor: 'red'}}>
            <Text>{item.name}</Text>
        </View>
    );
};

...

<LoginSpidGrid
  idpSelected={this.onIdpSelected}
  idps={/* your idps list */}
  cols={2}
  template={templateGenerator}
/>
```
