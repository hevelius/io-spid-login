/**
 * A component that show a Grid with every Identity Provider passed in the idps
 * array property. When an Identity Provider is selected a callback function is called.
 */
import * as React from 'react';
import {
  TouchableOpacity,
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from 'react-native';

import {SpidIdp} from '../utils/SpidIdp';

type Props = {
  // Array of Identity Provider to show in the grid.
  idps: ReadonlyArray<SpidIdp>;
  // A callback function called when an Identity Provider is selected
  onIdpSelected: (_: SpidIdp) => void;
  // number of columns
  cols?: number;
  // custom renderItem template
  template?: (_: SpidIdp) => React.ReactElement;
};

/**
 * To create a space within items in the same row we use the bootstrap method of adding a negative margin
 * than a padding to each item.
 */
const styles = StyleSheet.create({
  gridItem: {
    margin: 5,
    padding: 30,
    flex: 1,
  },
  idpLogo: {
    width: 120,
    height: 30,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
  },
  button: {
    padding: 10,
  },
});

const keyExtractor = (idp: SpidIdp): string => idp.id;

const renderItem =
  (props: Props) =>
  (info: ListRenderItemInfo<SpidIdp>): React.ReactElement => {
    const {onIdpSelected} = props;
    const {item} = info;
    const onPress = () => onIdpSelected(item);

    if (props.template) {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            activeOpacity={1}>
            {props.template(item)}
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            activeOpacity={1}>
            <Image source={{uri: item.logo}} style={styles.idpLogo} />
          </TouchableOpacity>
        </View>
      );
    }
  };

const IdpsGrid: React.FunctionComponent<Props> = (props: Props) => (
  <FlatList
    key={props.cols}
    bounces={false}
    data={props.idps}
    numColumns={props.cols}
    keyExtractor={keyExtractor}
    renderItem={renderItem(props)}
  />
);

export default IdpsGrid;
