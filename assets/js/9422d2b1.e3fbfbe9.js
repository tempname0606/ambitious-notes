"use strict";(self.webpackChunkambitious_notes=self.webpackChunkambitious_notes||[]).push([[493],{8291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(4848),c=n(8453);const a={title:"Stacks in Java",description:"Java-related Set stuff for Leetcodez"},i=void 0,o={id:"stack/stacks_java",title:"Stacks in Java",description:"Java-related Set stuff for Leetcodez",source:"@site/docs/stack/stacks_java.md",sourceDirName:"stack",slug:"/stack/stacks_java",permalink:"/ambitious-notes/stack/stacks_java",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Stacks in Java",description:"Java-related Set stuff for Leetcodez"},sidebar:"tutorialSidebar",previous:{title:"Stack",permalink:"/ambitious-notes/category/stack"},next:{title:"Recursion",permalink:"/ambitious-notes/category/recursion"}},r={},l=[{value:"Initialization",id:"initialization",level:2},{value:"Which one to choose?",id:"which-one-to-choose",level:3},{value:"Operations on Stack Class",id:"operations-on-stack-class",level:2},{value:"Push to the top of the stack",id:"push-to-the-top-of-the-stack",level:3},{value:"Pop from the top of the stack",id:"pop-from-the-top-of-the-stack",level:3},{value:"Peeking",id:"peeking",level:3},{value:"Check if Stack is empty",id:"check-if-stack-is-empty",level:3}];function h(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"initialization",children:"Initialization"}),"\n",(0,s.jsx)(t.p,{children:"There are two ways of creating a Stack in Java"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["With the ",(0,s.jsx)(t.code,{children:"Stack"})," class:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"Stack<T> stack = new Stack<>();\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["With the ",(0,s.jsx)(t.code,{children:"Deque"})," interface: ",(0,s.jsx)(t.code,{children:"Deque<T> stack = new ArrayDeque();"})]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"Deque<T> stack = new ArrayDeque<>();\n"})}),"\n",(0,s.jsx)(t.h3,{id:"which-one-to-choose",children:"Which one to choose?"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"Deque"})," interface brings us more flexibility than the ",(0,s.jsx)(t.code,{children:"Stack"})," class."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"Stack"})," class is Synchronized whereas the ",(0,s.jsx)(t.code,{children:"Deque"})," interface isn't."]}),"\n",(0,s.jsx)(t.li,{}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"operations-on-stack-class",children:"Operations on Stack Class"}),"\n",(0,s.jsx)(t.h3,{id:"push-to-the-top-of-the-stack",children:"Push to the top of the stack"}),"\n",(0,s.jsxs)(t.p,{children:["Pushing is done in constant time ",(0,s.jsx)(t.code,{children:"O(1)"}),". Returns the argument back."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"Stack<T> stack = new Stack<>();\nstack.push(1); // Returns 1\n"})}),"\n",(0,s.jsx)(t.h3,{id:"pop-from-the-top-of-the-stack",children:"Pop from the top of the stack"}),"\n",(0,s.jsxs)(t.p,{children:["Popping is done in constant time ",(0,s.jsx)(t.code,{children:"O(1)"}),". It returns the top element from the ",(0,s.jsx)(t.code,{children:"Stack"})," if not empty, otherwise throws ",(0,s.jsx)(t.code,{children:"EmptyStackException"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"Stack<T> stack = new Stack<>();\nstack.push(1); // Returns 1\nstack.pop(); // Stack is now empty, pop returns number 1\n"})}),"\n",(0,s.jsx)(t.h3,{id:"peeking",children:"Peeking"}),"\n",(0,s.jsxs)(t.p,{children:["Peeking is done in constant time ",(0,s.jsx)(t.code,{children:"O(1)"}),". It returns the top element from the ",(0,s.jsx)(t.code,{children:"Stack"})," without removing it if not empty, otherwise throws ",(0,s.jsx)(t.code,{children:"EmptyStackException"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"Stack<T> stack = new Stack<>();\nstack.push(1); // Returns 1\nstack.peek(); // Returns 1 without removing from the stack\n"})}),"\n",(0,s.jsx)(t.h3,{id:"check-if-stack-is-empty",children:"Check if Stack is empty"}),"\n",(0,s.jsxs)(t.p,{children:["To check if the ",(0,s.jsx)(t.code,{children:"Stack"})," is empty"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"Stack<T> stack = new Stack<>();\nstack.isEmpty(); // Returns true\nstack.push(1); // Returns 1\nstack.isEmpty() // returns false\n"})})]})}function d(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const c={},a=s.createContext(c);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);