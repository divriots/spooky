import { css } from '~/core';
import { LionIcon } from '@lion/icon';
import { ThemeMixin } from 'dark-theme-utils';
import { spacing } from '~/spacing';

export class SimbaIcon extends ThemeMixin(LionIcon) {
  static get properties() {
    return {
      size: {
        type: String, // 'small', '', 'large'
        reflect: true,
      },
    };
  }
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          fill: currentColor;
          transition: var(--theme-fill-transition);
        }
        :host([size='']) {
          height: ${spacing['6']};
          width: ${spacing['6']};
        }
        :host([size='small']) {
          height: ${spacing['4']};
          width: ${spacing['4']};
        }
        :host([size='large']) {
          height: ${spacing['8']};
          width: ${spacing['8']};
        }
      `,
    ];
  }
}
