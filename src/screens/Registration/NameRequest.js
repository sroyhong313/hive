import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Button from '../../components/Button';
import { COLORS, STYLES } from '../../res';

const styles = StyleSheet.create({
  continue: {
    ...STYLES.TEXT_SECONDARY,
    color: COLORS.WHITE
  },
  continueBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginHorizontal: 30,
    marginTop: 60,
    borderRadius: 10,
    backgroundColor: COLORS.BLACK
  },
  firstName: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    padding: 0,
    paddingLeft: 20,
    minHeight: 40,
    borderColor: COLORS.WHISPER,
    backgroundColor: COLORS.WHISPER
  },
  heading: {
    ...STYLES.TEXT_PRIMARY,
    marginBottom: 10,
    marginTop: 20
  },
  introContainer: {
    marginHorizontal: 30,
    marginBottom: 50
  },
  lastName: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    padding: 0,
    paddingLeft: 20,
    height: 40,
    borderColor: COLORS.WHISPER,
    backgroundColor: COLORS.WHISPER,
    marginTop: 10
  },
  outerContainer: {
    height: '100%',
    width: '100%'
  },
  regNameContainer: {
    alignItems: 'center',
    marginHorizontal: 30
  }
});

export default class NameRequest extends React.Component {
  // TODO(roy): Replace Description text
  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.introContainer}>
          <Text style={styles.heading}>What's your name?</Text>
          <Text style={STYLES.TEXT_TERTIARY}>Let us get to know you!</Text>
        </View>
        <View style={styles.regNameContainer}>
          <TextInput
            style={styles.firstName}
            placeholder='First Name'
            placeholderTextColor={COLORS.LIGHT_GRAY}
            autoFocus
          />
          <TextInput
            style={styles.lastName}
            placeholder='Last Name'
            placeholderTextColor={COLORS.LIGHT_GRAY}
          />
        </View>
        <Button
          style={styles.continueBtn}
          onPress={() => this.props.navigation.navigate('UserInformation')}
        >
          <Text style={styles.continue}>Continue</Text>
        </Button>
      </View>
    );
  }
}
