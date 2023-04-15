import i18n, { ResourceLanguage } from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      category: 'Category',
      dashboard: 'DashBoard',
      home: 'Home',
      news: 'New',
      profile: 'Profile',
      user: 'User',
      setting: 'Setting',
      id: 'NO',
      name: 'Name',
      email: 'Email',
      create_at: 'Create At',
      update_at: 'Update At',
      logout: 'Logout'
    },
  },

  vi: {},

  jp: {
    translation: {
      category: 'カテゴリー',
      dashboard: 'ダッシュボード',
      home: 'ホームページ',
      news: 'ニュース',
      profile: 'プロフィール',
      user: 'ユーザー',
      setting: '設定',
      id: '番号',
      name: '名前',
      email: 'Eメール',
      create_at: 'で作成',
      update_at: 'で更新',
      logout: 'ログアウト'
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
})
