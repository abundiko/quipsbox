const classNames = {
    btn:{
        primaryClass: "bg-transparent rounded-lg text-center fot-semibold py-4 border border-red shadow-xl shadow-neutral-200 justify-center items-center",
        secondaryClass: "bg-black text-neutral-100 font-semibold rounded-lg text-center py-4 border border-black shadow-xl shadow-neutral-200 justify-center items-center"
    },
    input:{
        className: "px-4 py-3 rounded-lg border border-neutral-400 focus:border-blue-500"
    },
    message: {
        errorClass: "text-red-800 bg-red-50 border-red-500 px-3 py-3 rounded-lg border mb-4",
        successClass: "text-green-800 bg-green-50 border-green-500 px-3 py-3 rounded-lg border mb-4",
    }
} as const;

export const s = classNames;