import { useTranslation } from 'react-i18next';

export const Validations = (field: string) => {
  const { t } = useTranslation();

  return {
    validation: {
      required: {
        required: true,
        message: t('validate.require', { field }),
      },
      decimal: {
        message: t('validate.decimal', { field }),
        pattern: new RegExp(/^\d*\.?\d*$/),
      },
      number: {
        message: t('validate.number', { field }),
        pattern: new RegExp(/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/),
      },
    },
  };
};
