import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

export default () => {
  const { t } = useTranslation();
  return yup
    .object({
      identification: yup.string().required(t('validations.required')),
      password: yup.string().required(t('validations.required')),
    })
    .required();
};
