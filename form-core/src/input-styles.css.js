import { css } from '~/core';
import { borderRadiusMixin } from '~/borders';
import { coolGray } from '~/colors';
import { typographyMixin, weight } from '~/typography';
import { spacing } from '~/spacing';

export const inputStyles = css`
  :host {
    display: block;
    font-family: var(--simba-font-creepster);
  }

  ::slotted(*:not(simba-select-invoker)) {
    transition: var(--theme-color-transition),
      var(--theme-background-transition);
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    border: 1px solid ${coolGray[500]};
    ${borderRadiusMixin('md')};
    padding: ${spacing['2']} ${spacing['3']};
    margin-top: ${spacing['1']};
    width: 100%;
    background-color: ${coolGray[800]};
    font-family: var(--simba-font-creepster);
  }

  .input-group__container > .input-group__input ::slotted(.form-control:hover) {
    border: 1px solid ${coolGray[300]};
  }

  .input-group__container > .input-group__input ::slotted(.form-control:focus),
  .input-group__container
    > .input-group__input
    ::slotted(.form-control:focus-visible) {
    outline: none;
    box-shadow: 0 0 0 2px ${coolGray[300]};
  }

  ::slotted([slot='label']) {
    color: var(--simba-color-primary-500);
    font-weight: ${weight['medium']};
  }

  ::slotted([slot='help-text']) {
    color: ${coolGray[500]};
    ${typographyMixin('sans', 'sm', 'normal')}
  }

  ::slotted(.form-control) {
    color: ${coolGray[50]};
  }

  :host([theme='dark']) ::slotted([slot='label']) {
    font-size: 1.25rem;
    color: var(--simba-color-primary-500);
  }

  :host([theme='dark']) ::slotted([slot='help-text']) {
    color: ${coolGray[200]};
  }

  :host([theme='dark'])
    ::slotted(.form-control:not([type='checkbox']):not([type='radio']):not([disabled])) {
    color: ${coolGray[100]};
    background-color: ${coolGray[800]};
  }

  :host([theme='dark'])
    ::slotted(.form-control:not([type='checkbox']):not([type='radio']):not(:focus)) {
    border-color: ${coolGray[400]};
  }

  :host([theme='dark']) ::slotted(.form-control)::placeholder {
    color: ${coolGray[400]};
  }

  :host([theme='dark'][disabled]) ::slotted(.form-control) {
    background-color: ${coolGray[600]};
    color: ${coolGray[400]};
    border: none;
  }

  :host([theme='dark'][disabled]) ::slotted([slot='label']) {
    color: ${coolGray[400]};
  }

  :host([theme='dark'][disabled]) ::slotted([slot='help-text']) {
    color: ${coolGray[300]};
  }
`;
