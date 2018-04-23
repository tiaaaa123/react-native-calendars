import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.calendar.main';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      // backgroundColor: appStyle.calendarBackground,
      backgroundColor: 'orange',
    },
    monthView: {
      // backgroundColor: appStyle.calendarBackground,
      backgroundColor: 'blue'
    },
    week: {
      // marginTop: 7,
      // marginBottom: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    dayContainer: {
      // width: 32
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
