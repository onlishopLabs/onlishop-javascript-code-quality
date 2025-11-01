# Stylelint Rules for Onlishop Administration

This package provides custom stylelint rules for Onlishop Administration development.

## Installation

Install the package and its peer dependency `stylelint`:

```bash
npm install @onlishop/admin-stylelint-rules stylelint --save-dev
```

## Usage

Add the plugin to your stylelint configuration file (e.g., `.stylelintrc.json`) and configure the rules you want to use.

```json
{
  "plugins": [
    "@onlishop/admin-stylelint-rules"
  ],
  "rules": {
    "@onlishop/admin-stylelint-rules/wrong-scss-import": true
  }
}
```

## Rules

### `@onlishop/admin-stylelint-rules/wrong-scss-import`

This rule prevents the use of the `.scss` file extension in `@import` statements that start with `~scss`. It encourages a consistent import style for shared SCSS resources.

This rule can automatically fix violations.

**Example of incorrect code for this rule:**

```scss
@import "~scss/variables.scss";
@import '~scss/mixins.scss';
```

**Example of correct code for this rule:**

```scss
@import "~scss/variables";
@import '~scss/mixins';
```