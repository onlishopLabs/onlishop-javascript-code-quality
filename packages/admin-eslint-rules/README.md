# ESLint Rules for Onlishop Administration

This package provides ESLint rules for the Onlishop Administration.

## Installation

You can install this package using npm:

```bash
npm install @onlishop/admin-eslint-rules --save-dev
```

## Usage

Add the following to your `.eslintrc.js` file:

```javascript
module.exports = {
    "plugins": [
        "@onlishop/admin-eslint-rules"
    ],
    "rules": {
        "@onlishop/admin-eslint-rules/no-snippet-import": "error",
        "@onlishop/admin-eslint-rules/no-src-import": "error",
        "@onlishop/admin-eslint-rules/no-sw-extension-override": "error",
        "@onlishop/admin-eslint-rules/require-explict-emits": "error",
        "@onlishop/admin-eslint-rules/state-import": "error"
    }
};
```

## Rules

- `no-snippet-import`: Prevents direct import of snippets.
- `no-src-import`: Prevents direct import of `src` files.
- `no-sw-extension-override`: Prevents overriding of `sw-extension` components.
- `require-explict-emits`: Requires explicit emits in components.
- `state-import`: Enforces correct import of state.