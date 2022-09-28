import Shadow from './shadow/js/shadow.js';

let shadow = new Shadow();

let styles = [
    {
        name: 'block-1',
        sty: ['md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800']
    },
    {
        name: 'block-2',
        sty: ['w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto']
    },
    {
        name: 'block-3',
        sty: ['pt-6 md:p-8 text-center md:text-left space-y-4']
    },
    {
        name: 'block-4',
        sty: ['text-lg font-medium']
    },
    {
        name: 'block-5',
        sty: ['text-sky-500 dark:text-sky-400']
    },
    {
        name: 'block-6',
        sty: ['text-slate-700 dark:text-slate-500']
    }
]

shadow.set(styles);