# Checkbox Group

Checkbox group Webcomponent.

```js script
import { html } from '~/core';
import { Required, Validator } from '@lion/form-core';
import { localize } from '@lion/localize';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import '~/doc-styles';
import '../simba-checkbox.js';
import '../simba-checkbox-indeterminate.js';
import '../simba-checkbox-group.js';

loadDefaultFeedbackMessages();
```

```js preview-story
export const input = () => html`
  <simba-checkbox-group
    name="lion_favorite"
    label="Favorite costumes"
    help-text="Don't pick none!"
  >
    <simba-checkbox label="Pumpkin" .choiceValue=${'pumpkin'}></simba-checkbox>
    <simba-checkbox
      label="Ghost"
      .choiceValue=${'ghost'}
      checked
    ></simba-checkbox>
    <simba-checkbox label="Zombie" .choiceValue=${'zombie'}></simba-checkbox>
    <simba-checkbox label="Witch" .choiceValue=${'witch'}></simba-checkbox>
    <simba-checkbox
      label="None"
      disabled
      .choiceValue=${'none'}
    ></simba-checkbox>
  </simba-checkbox-group>
`;
```

## Indeterminate

You can use indeterminate checkboxes to nest and group categories.

```js preview-story
export const indeterminate = () => html`
  <simba-checkbox-group name="scientists[]">
    <simba-checkbox-indeterminate label="Favorite scientists">
      <simba-checkbox slot="checkbox" label="Isaac Newton"></simba-checkbox>
      <simba-checkbox slot="checkbox" label="Galileo Galilei"></simba-checkbox>
      <simba-checkbox-indeterminate slot="checkbox" label="Greek scientists">
        <simba-checkbox slot="checkbox" label="Archimedes"></simba-checkbox>
        <simba-checkbox slot="checkbox" label="Plato"></simba-checkbox>
        <simba-checkbox slot="checkbox" label="Pythagoras"></simba-checkbox>
      </simba-checkbox-indeterminate>
    </simba-checkbox-indeterminate>
  </simba-checkbox-group>
`;
```

## Disabled

You can also prefill and disable the stepper in case you don't want your user to change it.

```js preview-story
export const inputDisabled = () => html`
  <simba-checkbox-group
    .validators=${[new Required()]}
    label="Best pets"
    name="best_pets"
    disabled
  >
    <simba-checkbox label="Black cat" .choiceValue=${'cat'}></simba-checkbox>
    <simba-checkbox label="Owl" .choiceValue=${'owl'}></simba-checkbox>
    <simba-checkbox label="Rat" checked .choiceValue=${'rat'}></simba-checkbox>
    <simba-checkbox label="Bat" checked .choiceValue=${'bat'}></simba-checkbox>
    <simba-checkbox label="Toad" .choiceValue=${'toad'}></simba-checkbox>
  </simba-checkbox-group>
`;
```
