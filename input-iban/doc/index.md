# Input IBAN

IBAN input field Webcomponent.

```js script
import { html } from '~/core';
import { Required, Validator } from '@lion/form-core';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import '~/doc-styles';
import '../simba-input-iban.js';

loadDefaultFeedbackMessages();
```

```js preview-story
export const input = () => html`
  <simba-input-iban
    .validators=${[new Required()]}
    name="iban"
    help-text="Your bank account number"
  ></simba-input-iban>
`;
```

## Disabled

You can also prefill and disable the iban in case you don't want your user to change it.

```js preview-story
export const inputDisabled = () => html`
  <simba-input-iban
    name="iban"
    help-text="Preconfigured IBAN"
    .modelValue=${'NL91ABNA0417164300'}
    disabled
  ></simba-input-iban>
`;
```
