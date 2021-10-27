import { LitElement, html, css } from '~/core';
import { coolGray } from '~/colors';
import { spacing } from '~/spacing';
import { setTheme } from '~/themes';

export class DocsMenu extends LitElement {
  static get styles() {
    return [
      css`
        :host {
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
          text-shadow: 0px 1px #991B1B, 0px 2px #991B1B, 0px 3px #991B1B,
            0px 4px #991B1B, 0px 5px #991B1B, 0px 6px #991B1B, 0px 7px #991B1B,
            0px 8px #991B1B, 0px 9px #991B1B, 0px 10px #991B1B, 0px 11px #991B1B,
            0px 12px #991B1B, 0px 13px #991B1B, 0px 14px #991B1B,
            0px 15px #991B1B, 0px 16px #991B1B, 0px 17px #991B1B,
            0px 18px #991B1B, 0px 19px #991B1B, 0px 20px #991B1B,
            0px 21px #991B1B, 0px 22px #991B1B, 0px 23px #991B1B,
            0px 24px #991B1B, 0px 25px #991B1B, 0px 26px #991B1B,
            0px 27px #991B1B, 0px 28px #991B1B, 0px 29px #991B1B,
            0px 30px #991B1B, 0px 31px #991B1B, 0px 32px #991B1B,
            0px 33px #991B1B, 0px 34px #991B1B, 0px 35px #991B1B,
            0px 36px #991B1B, 0px 37px #991B1B, 0px 38px #991B1B,
            0px 39px #991B1B, 0px 40px #991B1B, 0px 41px #991B1B,
            0px 42px #991B1B, 0px 43px #991B1B, 0px 44px #991B1B,
            0px 45px #991B1B, 0px 46px #991B1B, 0px 47px #991B1B,
            0px 48px #991B1B, 0px 49px #991B1B, 0px 50px #991B1B;
        }
      `,
    ];
  }

  render() {
    setTheme('purple');
    return html` <h1>🎃 Spooky 👻</h1> `;
  }
}
