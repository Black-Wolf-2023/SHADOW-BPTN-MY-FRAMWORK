# What is Shadow BPTN ?

***shadow BPTN is way to make your html more clean with using tailwind and bootstrap design helpers and you can use it with css too let's make this dialogue more clear .***

>Note : **BP** => Bootstrap  / **Tn** => Tailwindcss
<hr>
<br>

>### why i made this concept ?

<br>
<br>

- when you use tailwind or bootstrap html become more and more bigger and it make the process of develop more hard .

<br>


>Look at this example (1) not using shadow concept   this example from main site it make simple figure but look at html is very bad with alot of classes and some tags at smalls media become more and more bad **so how can us fix this problem we can fix it by using Shadow BPTN concept look at example (2)**


```html

<figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
        <p class="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
        </p>
        </blockquote>
        <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
            Sarah Dayan
        </div>
        <div class="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
        </div>
        </figcaption>
    </div>
</figure>

```
<br>
<br>

>this example (2) using shadow concept with same figure but with less than classes and more clean html by using **( blocks )** of classes we make these blocks at another js file by using class at shadow.js file these blocks like compressed
classes and  It is decompressed while append nodes viewing at document


```html
<figure class="block-1">
<img class="block-2" src="https://picsuphotos/200/300" alt="" width="384height="512" />
<div class="block-3">
    <blockquote>
    <p class="block-4">
        “Tailwind CSS is the only frameworthat I've seen scale on large
        teams. It’s easy to customizeadapts to any design, and the build
        size is tiny.”
    </p>
    </blockquote>
    <figcaption class="font-medium">
    <div class="block-5">Sarah Dayan</div>
    <div class="block-6">
        Staff Engineer, Algolia
    </div>
    </figcaption>
</div>
</figure>
```
<br>
<br>

>This more inforamtion about creating these blocks .


```javascript

// If you will import this Shadow class from file to make your code more cleaner make sure your type of javascript file is module at this example we will use module

import Shadow from './shadow/shadow.js';

let shadow = new Shadow();

// Here you will make blocks and you append classes to compressed at at Shadow class there is one method call set() you will append your List of object and set() will make every thing for you 

shadow.set([
    {
        name:'block-1',
        sty: ['md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800']
    },
    {
        name:'block-2',
        sty: ['w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto']
    },
    {
        name:'block-3',
        sty: ['pt-6 md:p-8 text-center md:text-left space-y-4']
    },
        {
        name:'block-4',
        sty: ['text-lg font-medium']
    },
        {
        name:'block-5',
        sty: ['text-sky-500 dark:text-sky-400']
    },
    {
        name:'block-6',
        sty: ['text-slate-700 dark:text-slate-500']
    }
     
])

//=== > Important note you should make one space between classes if you make more it will make problem with your class so spaces is very important
```
<br>
<br>

>Don't do this again, isn't it simpler that way ?

```html
<!-- Not Using Shadow  😢 -->
<img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto">

<!-- Using Shadow  😉  -->
<img class="block-2"/>


```
<br>
<br>

``
we used this concept with tailwindcss and you can use it with bootstrap and css you just need add you class name and it will work
``
<br>
<br>

> How can you support me ? 

<br>


- ***you can support me to  make more benfite things by forke my repo and give me some satrs if you liked it***

>## Tools

<br>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

<br>

>## Contact me

<br>

![https://www.facebook.com/capo.king.7967](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)
![https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white](https://www.instagram.com/eldipabdalrhman/?fbclid=IwAR2iQZDuofTznQndP2Izy-V1JV-HAnm2CWoplRvqNXwj5_ZQVj3JbuArKCM)
![https://www.linkedin.com/in/abdalrhman-eslam-890243250](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)
