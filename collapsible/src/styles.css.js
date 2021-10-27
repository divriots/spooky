import { css } from '~/core';
import { coolGray } from '~/colors';
import { spacing } from '~/spacing';

export default css`
  ::slotted([slot='content']) {
    color: ${coolGray['400']};
    margin-top: ${spacing['0.5']};
    padding-right: ${spacing['3.5']};
    padding-left: ${spacing['3.5']};
    box-shadow: 0 0 0 1px ${coolGray['300']};
  }

  :host([theme='dark']) ::slotted([slot='content']) {
    box-shadow: 0 0 0 1px ${coolGray['50']};
  }
`;
