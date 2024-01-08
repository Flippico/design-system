import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export const flippico = css`
  ${componentStyles}

  .logo__image.rounded {
    border-radius: 50%;
  }

  .logo__image.small {
    width: 75px;
  }
  .logo__image.medium {
    width: 100px;
  }
  .logo__image.large {
    width: 150px;
  }
`;