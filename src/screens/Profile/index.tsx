import React, {useContext} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {AppContext} from '../../../App';
import ContentWrapper from '../../components/ContentWrapper';
import {Header} from '../../components/Header';
import {Text} from '../../components/Text';
import ViewWrapper from '../../components/ViewWrapper';
import {BorderRadius, Colors, Spacing} from '../../constants';
import {ScreenNames} from '../../screenenum';

export default function Profile() {
  const {user} = useContext(AppContext);
  const SECTIONS = [
    {
      title: user?.firstName,
      name: 'First Name',
    },
    {
      title: user?.lastName,
      name: 'Last Name',
    },
    {
      title: user?.email,
      name: 'Email',
    },
  ];

  const renderItems = ({item}: {item: any}) => (
    <View style={styles.menuWrapper}>
      <View style={styles.menuItem}>
        <View style={{marginHorizontal: Spacing.l}}>
          <Text size="s" weight="bold" varient="dark">
            {item.name}
          </Text>
          <Text size="s" varient="dark">
            {item.title}
          </Text>
          <Text
            numberOfLines={2}
            size="xs"
            varient="grey"
            style={{marginTop: Spacing.xs, maxWidth: 230}}>
            {item.description}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <ViewWrapper>
      <View style={styles.container}>
        <Header title={ScreenNames.Profile} />
        <View style={styles.profileInfo}>
          <Image
            style={styles.imageContainer}
            source={{
              uri: user?.image,
            }}
            resizeMode="contain"
          />
          <Text style={{marginVertical: Spacing.m}} weight="bold" size="l">
            {user?.firstName + ' ' + user?.lastName}
          </Text>
        </View>
      </View>
      <ContentWrapper>
        <FlatList data={SECTIONS} renderItem={renderItems} />
      </ContentWrapper>
    </ViewWrapper>
  );
}

const styles = StyleSheet.create({
  container: {padding: Spacing.l},
  profileInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 164,
    padding: Spacing.l,
  },
  imageContainer: {
    borderRadius: BorderRadius.l,
    height: 96,
    width: 96,

    borderWidth: 4,
    borderColor: Colors.Light,
  },
  menuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItem: {
    height: 50,
    marginVertical: Spacing.m,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
