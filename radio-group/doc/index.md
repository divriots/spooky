# Radio Group

Radio group Webcomponent.

```js script
import { html } from '~/core';
import { Required, Validator } from '@lion/form-core';
import { localize } from '@lion/localize';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import '~/doc-styles';
import '../simba-radio.js';
import '../simba-radio-group.js';

loadDefaultFeedbackMessages();
```

```js preview-story
export const input = () => html`
  <simba-radio-group
    name="candy_favorite"
    label="Favorite candy"
    help-text="Don't pick mints!"
  >
    <simba-radio label="Caramels" .choiceValue=${'caramels'}></simba-radio>
    <simba-radio label="Licorice" .choiceValue=${'licorice'}></simba-radio>
    <simba-radio label="Gummies" .choiceValue=${'gummies'}></simba-radio>
    <simba-radio label="Mints" disabled .choiceValue=${'mints'}></simba-radio>
    <simba-radio
      label="Marshmallows"
      .choiceValue=${'marshmallows'}
      checked
    ></simba-radio>
  </simba-radio-group>
`;
```

## Disabled

You can also prefill and disable the stepper in case you don't want your user to change it.

```js preview-story
export const inputDisabled = () => html`
  <simba-radio-group
    .validators=${[new Required()]}
    label="Worst candy"
    name="candy_worst"
    disabled
  >
    <simba-radio label="Caramels" .choiceValue=${'caramels'}></simba-radio>
    <simba-radio
      label="Licorice"
      .choiceValue=${'licorice'}
      checked
    ></simba-radio>
    <simba-radio label="Gummies" .choiceValue=${'gummies'}></simba-radio>
    <simba-radio label="Mints" checked .choiceValue=${'mints'}></simba-radio>
    <simba-radio
      label="Marshmallows"
      .choiceValue=${'marshmallows'}
    ></simba-radio>
  </simba-radio-group>
`;
```
