import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.calendar.main';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      backgroundColor: appStyle.calendarBackground,
    },
    monthView: {
      backgroundColor: appStyle.calendarBackground,
    },
    week: {
      // marginTop: 7,
      // marginBottom: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    dayContainer: {
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
