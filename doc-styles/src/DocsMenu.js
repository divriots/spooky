import { LitElement, html, css } from '~/core';
import { coolGray } from '~/colors';
import { spacing } from '~/spacing';
import { setTheme } from '~/themes';
import { typographyMixin } from '~/typography';

export class DocsMenu extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          ${typographyMixin('creepster', '2xl')};
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          top: 0;
          left: 0;
          padding: ${spacing['2.5']};
        }

        h1 {
          color: ${coolGray[50]};
          padding-right: ${spacing['2']};
          transition: all 4s ease-in-out;
        }
        h1:hover {
          z-index: -10;
          text-shadow: 0px 1px #F59E0B, 0px 2px #F59E0B, 0px 3px #F59E0B,
            0px 4px #F59E0B, 0px 5px #F59E0B, 0px 6px #F59E0B, 0px 7px #F59E0B,
            0px 8px #F59E0B, 0px 9px #F59E0B, 0px 10px #F59E0B, 0px 11px #F59E0B,
            0px 12px #F59E0B, 0px 13px #F59E0B, 0px 14px #F59E0B,
            0px 15px #F59E0B, 0px 16px #F59E0B, 0px 17px #F59E0B,
            0px 18px #F59E0B, 0px 19px #F59E0B, 0px 20px #F59E0B,
            0px 21px #F59E0B, 0px 22px #F59E0B, 0px 23px #F59E0B,
            0px 24px #F59E0B, 0px 25px #F59E0B, 0px 26px #F59E0B,
            0px 27px #F59E0B, 0px 28px #F59E0B, 0px 29px #F59E0B,
            0px 30px #F59E0B, 0px 31px #F59E0B, 0px 32px #F59E0B,
            0px 33px #F59E0B, 0px 34px #F59E0B, 0px 35px #F59E0B,
            0px 36px #F59E0B, 0px 37px #F59E0B, 0px 38px #F59E0B,
            0px 39px #F59E0B, 0px 40px #F59E0B, 0px 41px #F59E0B,
            0px 42px #F59E0B, 0px 43px #F59E0B, 0px 44px #F59E0B,
            0px 45px #F59E0B, 0px 46px #F59E0B, 0px 47px #F59E0B,
            0px 48px #F59E0B, 0px 49px #F59E0B, 0px 50px #F59E0B;
        }
      `,
    ];
  }

  render() {
    setTheme('purple');
    return html` <h1>🎃 Spooky 👻</h1> `;
  }
}
