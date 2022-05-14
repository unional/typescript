# Iterators and Generators

## Iterators

- Don't use iterators. Prefer JavaScript's higher-order functions like `map()` and `reduce()` instead of loops like `for-of`. eslint: [`no-iterator`](http://eslint.org/docs/rules/no-iterator.html)

> Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side effects.

```typescript
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
sum += num;
}

sum === 15;

// good
let sum = 0;
numbers.forEach(num => sum += num);
sum === 15;

// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;
```

## Generators

- Don't use generators for now.

> Why? They don't transpile well to ES5.
