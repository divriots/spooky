# Collapsible

Collapsible component, folds out content.

```js script
import { html } from '~/core';
import '~/doc-styles';
import '../simba-collapsible.js';
import '../simba-collapsible-button.js';
import '~/button/simba-button.js';
```

```js preview-story
export const collapsible = () => html`
  <simba-collapsible>
    <simba-collapsible-button variation="outline" slot="invoker"
      >More about zombies</simba-collapsible-button
    >
    <div slot="content">
      A zombie is a mythological undead corporeal revenant created through the
      reanimation of a corpse. Zombies are most commonly found in horror and
      fantasy genre works.
    </div>
  </simba-collapsible>
`;
```

## Opened

Use the `opened` property or reflected attribute to open or close declaratively or imperatively with JavaScript.

```js preview-story
import { ref, createRef } from 'lit/directives/ref.js';
const contentRef = createRef();

export const opened = () => html`
  <simba-button
    style="margin-bottom: 15px;"
    @click=${() => contentRef.value.toggle()}
    >Toggle</simba-button
  >
  <simba-collapsible ${ref(contentRef)} opened>
    <simba-collapsible-button variation="outline" slot="invoker"
      >More about zombies</simba-collapsible-button
    >
    <div slot="content">
      A zombie is a mythological undead corporeal revenant created through the
      reanimation of a corpse. Zombies are most commonly found in horror and
      fantasy genre works.
    </div>
  </simba-collapsible>
`;
```

## Focusable content

If you have focusable content in your collapsible content,
a focus state will be shown on the content node when the user tabs into the focusable content inside.

```js preview-story
export const focusable = () => html`
  <simba-collapsible opened>
    <simba-collapsible-button variation="outline" slot="invoker"
      >More about zombies</simba-collapsible-button
    >
    <div slot="content">
      A zombie is a mythological undead corporeal
      <a
        href="https://en.wikipedia.org/wiki/Revenant"
        target="_blank"
        noopener
        noreferrer
        >revenant</a
      >
      created through the reanimation of a corpse. Zombies are most commonly
      found in horror and fantasy genre works.
    </div>
  </simba-collapsible>
`;
```
