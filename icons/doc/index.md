# Icons

Icon resolution manager. Ensures icons are bundled into iconsets and asynchronously loaded for performance.

```js script
import { html } from '~/core';
import '~/doc-styles';
import '../simba-icon.js';
```

## Adding a resolver

```js
import { icons } from '@lion/icon';

function resolveSimbaIcons(iconset, name) {
  switch (iconset) {
    case 'alerts':
      return import('./alerts/index.js').then((module) => module[name]);
    default:
      throw new Error(`Unknown iconset ${iconset}`);
  }
}

icons.addIconResolver('simba', resolveSimbaIcons);
```

Where this `index.js` re-exports svgs inside lit templates from the different `.svg.js` files.

To load an icon:

```js preview-story
export const simbaIcon = () =>
  html`<div style="color:#EF4444; display:flex; align-items:center">
      <simba-icon size="large" icon-id="simba:alerts:error"></simba-icon>
      <p style="margin-left:0.5rem">This is an error.</p>
    </div>
    <div style="color:#F59E0B; display:flex; align-items:center">
      <simba-icon size="large" icon-id="simba:alerts:warning"></simba-icon>
      <p style="margin-left:0.5rem">This is a warning.</p>
    </div>
    <div style="color:#10B981; display:flex; align-items:center">
      <simba-icon size="large" icon-id="simba:alerts:info"></simba-icon>
      <p style="margin-left:0.5rem">This is an info message.</p>
    </div>
    <div style="color:#3B82F6; display:flex; align-items:center">
      <simba-icon size="large" icon-id="simba:alerts:success"></simba-icon>
      <p style="margin-left:0.5rem">This is a success message.</p>
    </div>`;
```
