import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';

import GymSettings from '../data/settings';
const settings = await GymSettings();

const AuthUserMenu = ({ intl }) => (
  <ul className="auth" role="list">
    <li key="item-1"><a
      href={`${getConfig().LMS_BASE_URL}/dashboard`}
    >
      {settings.navigation.auth.private[0].title}
    </a></li>
    <li key="item-2"><a
      href={getConfig().LOGOUT_URL}
    >
      {settings.navigation.auth.private[1].title}
    </a></li>
  </ul>
);

AuthUserMenu.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(AuthUserMenu);
