import { css } from '~/core';
import { borderRadiusMixin } from '~/borders';
import { coolGray } from '~/colors';
import { spacing } from '~/spacing';

export default css`
  :host {
    display: inline-block;
    cursor: pointer;
    background-color: var(--simba-color-primary-700);
    color: ${coolGray[50]};
    ${borderRadiusMixin()}
    font-family: var(--simba-font-creepster);
    padding: ${spacing['2.5']} ${spacing['4']};
    transition: var(--theme-background-transition),
      var(--theme-color-transition);
  }
  :host([font='halloween']) {
    font-family: var(--simba-font-creepster);
  }

  :host(:hover) {
    background-color: var(--simba-color-primary-800);
    color: var(--simba-color-primary-300);
    box-shadow: inset 0px 0px 0px 2px var(--simba-color-primary-500);
  }

  :host(:active) {
    background-color: var(--simba-color-primary-900);
  }

  :host([variation='secondary']) {
    background-color: var(--simba-color-secondary-700);
  }

  :host([variation='secondary']:hover) {
    background-color: var(--simba-color-secondary-800);
    color: var(--simba-color-secondary-300);
    box-shadow: inset 0px 0px 0px 2px var(--simba-color-secondary-500);
  }

  :host([variation='secondary']:active) {
    background-color: var(--simba-color-secondary-900);
  }

  :host([variation='outline']),
  :host([variation='outline']) {
    background-color: transparent;
    border: var(--simba-color-primary-500) solid 1px;
  }

  :host([variation='outline']:hover) {
    box-shadow: inset 0px 0px 0px 1px var(--simba-color-primary-500);
  }

  :host([variation='outline']:active) {
    background-color: ${coolGray[200]};
  }

  :host([variation='outline']:focus) {
    box-shadow: 0 0 1px 1px ${coolGray[300]},
      0 0 0 3px var(--simba-focus-ring-color);
  }

  :host([size='small']) {
    padding: ${spacing['1.5']} ${spacing['3']};
  }

  :host([size='large']) {
    padding: ${spacing['3']} ${spacing['5']};
  }

  :host([rounded]) {
    ${borderRadiusMixin('full')}
  }

  :host([disabled]) {
    background-color: ${coolGray[800]};
    color: ${coolGray[600]};
    pointer-events: none;
  }

  ::slotted([slot='suffix']) {
    padding-left: 0.5rem;
  }

  ::slotted([slot='prefix']) {
    padding-right: 0.5rem;
  }

  :host([theme='dark'][variation='outline']) {
    color: ${coolGray[50]};
  }

  :host([theme='dark'][variation='outline']:hover) {
    background-color: ${coolGray[700]};
  }

  :host([theme='dark'][variation='outline']:active) {
    background-color: ${coolGray[600]};
  }
`;
