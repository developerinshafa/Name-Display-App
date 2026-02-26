# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


### background color
// console.log("page loaded")

    // userEffect
    // useEffect(() =>{
    //     //get users from api
    //     console.log("First mountede")

    //     setInterval(() => {
    //         console.log("Color change to", color);

    //     }, 1000);

    //     return () =>{
    //         clearInterval();
    //         console.log("FirstProject unmounted");
    //     };

    // },[color])

     { //background color change
            /* <div className={'min-h-screen p-4 text-2xl'}
            style={{backgroundColor: color}}
            > 
                <h1 className="text-black font-bold">List of Bill</h1>
                <p className="text-lg">Color: {color}</p>
               <button onClick={() => setColor(color === "#ff0000" ? "#0000ff" : "#00ff00")} className="bg-blue-500 px-4 py-2 rounded">
                Change Color
               </button>
            </div> */}