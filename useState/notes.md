Notes while using the useState hook: 
Setting up the component or function being returned is simple => formula remains as follows:

function {name of component/page} {
    const [{task}, set{task}] = useState({initial task value; can be a number or string})

    return (
        <div>
        ** <button onClick = {()=> set{task} (modify {task} here)}></button>
        ** <input value="number, string"></input>
        </div>

    )
}
export {name of component/page}

Functionality: Counting,  