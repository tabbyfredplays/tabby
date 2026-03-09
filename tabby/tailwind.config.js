module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                tabby: {
                    brown: '#996232',
                    terracotta: '#d39165',
                    sand: '#dea369',
                    cream: '#ead4b4',
                    taupe: '#8f7d6f',
                    charcoal: '#59564c',
                },
                note: {
                    c: '#c8a832',
                    d: '#c47830',
                    e: '#b84840',
                    f: '#7a4880',
                    g: '#4868a0',
                    a: '#3d7d6a',
                    b: '#6a8830',
                },
            },
        },
    },
    plugins: [],
}