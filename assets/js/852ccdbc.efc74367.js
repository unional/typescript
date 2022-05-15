"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[592],{5910:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"2022-eslint-plugin-peer-deps","metadata":{"permalink":"/typescript-guidelines/blog/2022-eslint-plugin-peer-deps","source":"@site/blog/2022-05-15-eslint-plugin-peer-deps.mdx","title":"@typescript-eslint/eslint-plugin should be a peer dependency","description":"Recently I run into this problem:","date":"2022-05-15T00:00:00.000Z","formattedDate":"May 15, 2022","tags":[{"label":"typescript","permalink":"/typescript-guidelines/blog/tags/typescript"},{"label":"eslint","permalink":"/typescript-guidelines/blog/tags/eslint"},{"label":"@typescript-eslint","permalink":"/typescript-guidelines/blog/tags/typescript-eslint"}],"readingTime":0.975,"truncated":false,"authors":[{"name":"Homa Wong (unional)","title":"A Mad Engineer","url":"https://github.com/unional","imageURL":"https://github.com/unional.png","key":"unional"}],"frontMatter":{"slug":"2022-eslint-plugin-peer-deps","title":"@typescript-eslint/eslint-plugin should be a peer dependency","authors":["unional"],"tags":["typescript","eslint","@typescript-eslint"]},"nextItem":{"title":"TypeScript is ... an abstraction","permalink":"/typescript-guidelines/blog/2022-typescript-is-abstraction"}},"content":"Recently I run into this problem:\\n\\n```sh\\nESLint couldn\'t determine the plugin \\"@typescript-eslint\\" uniquely.\\n\\n- ...\\\\node_modules\\\\@typescript-eslint\\\\eslint-plugin\\\\dist\\\\index.js (loaded in \\".eslintrc.json\\")\\n- ...\\\\node_modules\\\\eslint-config-react-app\\\\node_modules\\\\@typescript-eslint\\\\eslint-plugin\\\\dist\\\\index.js (loaded in \\".eslintrc.json \xbb eslint-config-react-app#overrides[0]\\")\\n```\\n\\nIt is caused by [eslint-config-react-app] using [@typescript-eslint/eslint-plugin] as a `dependency` instead of a `peer dependency`.\\n\\nHere is the [GitHub issue] in [eslint-config-react-app] (also [here][#11828]).\\n\\n## Plugin and dependency\\n\\nThe problem is when one plugin uses another plugin,\\nit should always declare the dependency as a `peer dependency`.\\n\\nThe reason is simple.\\n\\nThe host application (ESLint in this case) controls and loads its plugins.\\nIf the host application is not designed to support loading multiple versions of the same plugin at the same time,\\nwhich most of them don\'t, then the result is an undefined behavior.\\n\\nThat\'s why ESLint plainly detects and disallows it.\\n\\nIt also mentioned it in [its doc].\\n\\nYes, that means the consuming repository needs to add the dependency themselves.\\nAny version incompatibility in the dependency graph would lead to the [doppelg\xe4ngers] problem.\\n\\nThat is an inherited problem of NodeJS resolution algorithm, and is a topic for another day.\\n\\nHappy coding, \ud83e\uddd1\u200d\ud83d\udcbb\\n\\n[@typescript-eslint/eslint-plugin]: https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin\\n[#11828]: https://github.com/facebook/create-react-app/issues/11828\\n[doppelg\xe4ngers]: https://rushjs.io/pages/advanced/npm_doppelgangers/\\n[eslint-config-react-app]: https://github.com/facebook/create-react-app/tree/main/packages/eslint-config-react-app\\n[GitHub issue]: https://github.com/facebook/create-react-app/issues/12400\\n[its doc]: https://eslint.org/docs/developer-guide/shareable-configs#publishing-a-shareable-config"},{"id":"2022-typescript-is-abstraction","metadata":{"permalink":"/typescript-guidelines/blog/2022-typescript-is-abstraction","source":"@site/blog/2022-05-14-typescript-is-abstraction.mdx","title":"TypeScript is ... an abstraction","description":"[TypeScript 4.7] is just around the corner.","date":"2022-05-14T00:00:00.000Z","formattedDate":"May 14, 2022","tags":[{"label":"typescript","permalink":"/typescript-guidelines/blog/tags/typescript"}],"readingTime":3.395,"truncated":false,"authors":[{"name":"Homa Wong (unional)","title":"A Mad Engineer","url":"https://github.com/unional","imageURL":"https://github.com/unional.png","key":"unional"}],"frontMatter":{"slug":"2022-typescript-is-abstraction","title":"TypeScript is ... an abstraction","authors":["unional"],"tags":["typescript"]},"prevItem":{"title":"@typescript-eslint/eslint-plugin should be a peer dependency","permalink":"/typescript-guidelines/blog/2022-eslint-plugin-peer-deps"}},"content":"[TypeScript 4.7] is just around the corner.\\n\\nI feel like it is a good time for me to update this TypeScript guidelines\\nwith what I have learn over the years and how am I using it nowadays.\\n\\nAs you can see,\\nI\'ve reorganzied the repository and added this GitHub page\\nto make it easier to share the knowledge.\\n\\nIn these blog posts,\\nI\'m going to share the bits and tips that I learned every day.\\nEventually this information will be incorporated into the guidelines.\\n\\nTo kick things off, I\'m going to talk about what TypeScript is in 2022?\\n\\nNo no, not about the history of TypeScript.\\n\\nIt\'s about how I look at TypeScript and how I use it.\\n\\nIt\'s about when I follow the rules and when I break them.\\n\\n> I know all the rules, and then I know how to break \'em\\n\\n## TypeScript is an abstraction\\n\\nProgramming language is an abstraction.\\n\\nThe abstraction I\'m talking about is not the abstraction of defining an interface or class or inheritance.\\n\\nIt\'s about the code you wrote, the text you typed in the `.ts` or `.tsx` file.\\n\\nIt is an abstraction over the actual binary code executed by the JavaScript engine.\\n\\nA good abstraction emphasizes the important but sometimes has a cost of skipping over some details.\\n\\nFor example, the digital zeros and ones are an abstraction over the analog electrical currents.\\n\\nMost of the time, at least in the sense of modern computing,\\nmissing the details on the different levels of electrical currents is a good thing.\\nAnd we as a programmer don\'t ever need to think about it.\\n\\nBut to the eye of hardware engineer,\\nit is not something they can ignore because there are physical rules they have to follow,\\nand there are actual consequences when putting two wires too close to each other.\\n\\nThe abstraction of programming language is the same.\\nIt is good for most cases, but at some point it will start to breakdown.\\n\\n[rust] is a good example of this.\\nIts ownership model guarantee memory-safety and thread-safety.\\nBut there are rare cases you need to break the rules thus there is a `unsafe` keyword for it.\\n\\nFor [TypeScript], it is not designed to be a 100% sounded language.\\nThat means you will run into those \\"rare\\" cases a lot more often.\\n\\nYou can learn more about soundness [here][note-on-soundness] and [here][example-soundness].\\n\\n## Conclusion\\n\\nSo what should you do? Embrace it.\\n\\nThe `unsafe` keyword in [TypeScript] is `any`.\\nWhile you should avoid using `any` in most cases,\\nit is often enough that your tool chain should not prevent or punish you from using it.\\n\\nYou might think,\\n\\n> \\"hey, I\'m working in a team and I don\'t want my team members who are less familiar with TypeScript to abuse the usage of `any`.\\"\\n\\nYes, that is a legit concern,\\nand you can make your own judgement for your circumstances.\\n\\nMy personal experience is that the number of times I have to break the rules are common enough that making exceptions for the tools (e.g. adding `// eslint ignore` comments) clutter the code and make the code harder to read.\\n\\nMy approach is to rely on unit tests and code reviews to make sure the usage of `any` are in check.\\n\\nAlso, defining the correct type is not always easy and can take significant amount of time.\\nIf you are working under a schedule, you might not have time to do that.\\n\\nAnother point to make is that since [TypeScript] is constantly improving,\\nif you build some complex types, it might work in one version and break in another version.\\n\\nASK ME HOW I KNOW IT.\\n\\nOf course, I\'m not saying allowing your code litters with `any` and call it a day.\\nYou should keep track on those usages and clean it up when you get a chance to.\\n\\nConverting `any` back to a proper type improves efficiency.\\nAs that is why we use [TypeScript].\\n\\nAnd you may discover some bugs along the way.\\n\\n[rust]: https://www.rust-lang.org/\\n[TypeScript]: https://www.typescriptlang.org/\\n[TypeScript 4.7]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-rc/\\n[note-on-soundness]: https://www.typescriptlang.org/docs/handbook/type-compatibility.html#a-note-on-soundness\\n[example-soundness]: https://www.typescriptlang.org/play?strictFunctionTypes=false#example/soundness"}]}')}}]);