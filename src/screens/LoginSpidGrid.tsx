import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {SpidIdp} from '../utils/SpidIdp';
import IdpsGrid from '../components/IdpsGrid';

interface Props {
  idps: Array<SpidIdp>;
  cols?: number;
  template?: (_: SpidIdp) => React.ReactElement;
  idpSelected?: (_: string) => void;
}

const styles = StyleSheet.create({
  gridContainer: {
    padding: 20,
    alignContent: 'center',
  },
});

export class LoginSpidGrid extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  private onIdpSelected = (idp: SpidIdp): void => {
    this.props.idpSelected ? this.props.idpSelected(idp.id) : undefined;
  };

  render() {
    return (
      <View style={styles.gridContainer}>
        <IdpsGrid
          cols={this.props.cols}
          idps={[...this.props.idps]}
          onIdpSelected={this.onIdpSelected}
          template={this.props.template}
        />
      </View>
    );
  }
}
