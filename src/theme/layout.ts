import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  rowSpaceBetween: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowAlignItemsCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  screenContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
});
