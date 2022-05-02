/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {AppContext} from '../../../App';
import {Button} from '../../components/Button';
import ContentWrapper from '../../components/ContentWrapper';
import {CurrencyLogo} from '../../components/CurrencyLogo';
import {Header} from '../../components/Header';
import {Text} from '../../components/Text';
import ToolTip from '../../components/ToolTip';
import ViewWrapper from '../../components/ViewWrapper';
import {
  BorderRadius,
  Colors,
  IconSize,
  MAX_LIMIT,
  Spacing,
} from '../../constants';
const {height, width} = Dimensions.get('window');

const LimitSetter = () => {
  const navigation: any = useNavigation();
  //TODO: accept only number from the input field.

  const [limit, setLimit] = useState<any>(MAX_LIMIT);
  const {setDebitSpendLimit} = useContext(AppContext);

  function handleSave() {
    setDebitSpendLimit(limit);
    navigation.goBack();
  }

  return (
    <ViewWrapper>
      <View style={{padding: Spacing.l}}>
        <Header
          rightComponent={
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assets/icons/back.png')}
                style={{...IconSize.l}}
              />
            </Pressable>
          }
          title={'Spending Limit'}
        />
      </View>
      <ContentWrapper>
        <>
          <View>
            <Text
              style={{marginVertical: Spacing.m}}
              varient="dark"
              weight="bold">
              Set a weekly debit card spending limit
            </Text>
          </View>
          <View>
            <TextInput
              value={limit}
              style={styles.textInput}
              placeholder={limit.toString()}
              onChangeText={text => {
                setLimit(text);
              }}
              keyboardType="number-pad"
            />
            <CurrencyLogo
              style={{
                position: 'absolute',
                top: Spacing.xs,
              }}
            />
          </View>

          <Text style={{marginVertical: Spacing.l}} varient="grey">
            Here weekly means the last 7 days - not the calendar week
          </Text>
        </>
      </ContentWrapper>
      <Button
        title="Save"
        disabled={Number.isInteger(limit)}
        onPress={handleSave}
      />
      {limit > MAX_LIMIT ? <ToolTip /> : <></>}
    </ViewWrapper>
  );
};

export default LimitSetter;

const styles = StyleSheet.create({
  scrollContainer: {
    height,
    width,
    top: '12%',
    backgroundColor: Colors.Light,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
  },
  textInput: {
    borderColor: Colors.Grey,
    height: 40,
    borderBottomWidth: 1,
    paddingLeft: '16%',
    color: Colors.Dark,
  },
  balanceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Secondary,
    height: 22,
    width: 40,
    borderRadius: BorderRadius.xs,
    marginRight: 10,
    position: 'absolute',
    top: Spacing.xs,
  },
  btn: {
    height: 50,
    width: width / 1.7,
    borderRadius: BorderRadius.m,
    backgroundColor: Colors.Secondary,
    position: 'absolute',
    bottom: Spacing.l,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
