import antdHe from 'antd/lib/locale-provider/he_IL';
import appLocaleData from 'react-intl/locale-data/he_IL';
import enMessages from '../locales/he_IL.json';
// import { getKeys, getValues } from '../conversion';
// getValues(enMessages);

const HeLang = {
  messages: {
    ...enMessages,
  },
  antd: antdHe,
  locale: 'he-IL',
  data: appLocaleData,
};
export default HeLang;
