const classNames = {
    btn:{
        primaryClass: "bg-transparent rounded-lg text-center fot-semibold py-4 border border-red shadow-xl shadow-neutral-200 justify-center items-center dark:border-[#fff] dark:text-light dark:shadow-neutral-800",
        secondaryClass: "bg-black text-neutral-100 font-semibold rounded-lg text-center py-4 border border-black shadow-xl shadow-neutral-200 justify-center items-center dark:bg-light dark:text-black dark:shadow-neutral-800",
    },
    input:{
        className: "px-4 py-3 rounded-lg border border-neutral-400 focus:border-blue-500"
    },
    message: {
        errorClass: "text-red-800 bg-red-50 border-red-500 px-3 py-3 rounded-lg border mb-4",
        successClass: "text-green-800 bg-green-50 border-green-500 px-3 py-3 rounded-lg border mb-4",
    },
    bgClass: "bg-neutral-100 dark:bg-neutral-900",
    bg2Class: "bg-[#fff] darkLbg-black",
    textClass: "text-neutral-900 dark:text-neutral-100",
    textLightClass: "text-neutral-500 dark:text-neutral-200",
    dynamicBgClass(t:string){
        return t == 'dark' ? 'bg-neutral-900 dark:bg-neutral-100' : 'bg-neutral-100 dark:bg-neutral-900'
    },
    dynamicBg2Class(t:string){
        return t == 'dark' ? 'bg-[#fff] darkLbg-black' : 'bg-neutral-100 dark:bg-neutral-900'
    },
    dynamicTextClass(t:string){
        return t == 'dark' ? 'text-neutral-100 dark:text-neutral-900' : 'text-neutral-900 dark:text-neutral-100'
    },
    dynamicTextLightClass(t:string){
        return t == 'dark' ? 'text-neutral-200 dark:text-neutral-500' : 'text-neutral-500 dark:text-neutral-200'
    },
} as const;

export const s = classNames;