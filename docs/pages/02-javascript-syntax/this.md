# this

> A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this>

`this` is a messy topic, pun intented.

It is one of the main sources of confusion, frustration, and sleepless nights if you are new to JavaScript.

## When to use

You **should not** use `this`, except inside class.

```ts
// bad
function play() { this.energy-- }

// bad
const gamer = {
  energy: 100,
  play() { this.energy-- }
}

// good
class Gamer {
  energy = 100
  play() { this.energy-- }
}

// good
function createGamer() {
  let energy = 100
  return { play() { energy-- } }
}
```

> Why?

Except arrow function, which do not have its own `this`,
the value of `this` is determined by how a function is called (runtime binding).

This mean everytime you use `this`,
you are making an assumption on how the user is going to use your code.

This assumption is communicated to the user is very implicit ways:

- should this function be used as a mixin? (first function)
- is this object a coherent instance? (second object)

For class, since it is a build in syntax,
it provides a sufficient clue to the user that you should not pick out the function and use it separately.

```ts
// this will almost guaranteed to fail
const instance = new SomeClass()
const fn = instance.doSomething
fn()
```

And since `this` is the only way in a class to access its own property,
it is ok to use it.

Note that the first example does not work when you have `noImplicitThis` turned on.

With `noImplicitThis`, you need to define the `this` type:

```ts
// good
function play(this: Gamer) { this.energy-- }
```

With that information, now it is safe to use the function as mixins.

```ts

let deadMeat = { play }

// error, `deadMeat` does not have `energy`.
deadMeat.play()
```

## Alternatives
