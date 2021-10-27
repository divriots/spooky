# Input Email

Email input field Webcomponent.

```js script
import { html } from '~/core';
import { Required } from '@lion/form-core';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import '~/doc-styles';
import '../simba-input-email.js';

loadDefaultFeedbackMessages();
```

```js preview-story
export const input = () => html`
  <simba-input-email
    .validators=${[new Required()]}
    autocomplete="off"
    name="email"
    help-text="Your email address"
    placeholder="simba@example.com"
  ></simba-input-email>
`;
```

## Disabled

You can also prefill and disable the email in case you don't want your user to change it.

```js preview-story
export const inputDisabled = () => html`
  <simba-input-email
    name="email"
    help-text="Preconfigured email"
    .modelValue=${'foo@example.com'}
    disabled
  ></simba-input-email>
`;
```
