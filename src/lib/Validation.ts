import { useTranslation } from 'react-i18next';

export const Validations = (field: string) => {
  const { t } = useTranslation();

  return {
    validation: {
      required: {
        required: true,
        message: t('validate.require', { field: field }),
      },
      decimal: {
        message: t('validate.decimal', { field: field }),
        pattern: new RegExp(/^[0-9]+$/)
      },
    },
  };
};
