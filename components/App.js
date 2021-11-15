
const bdd = [
    {
        id : 1,
        lastName : "STORMQUACK",
        firstName : "Ulfric",
        avatar : "ulfric.jpg",
        createdAt : "2021-11-10"
    },
    {
        id : 2,
        lastName : "DOVAH",
        firstName : "Duck",
        avatar : "dovah.jpg",
        createdAt : "2021-11-10"
    },
    {
        id : 3,
        lastName : "PRAISE",
        firstName : "TheSun",
        avatar : "solaire.jpg",
        createdAt : "2021-11-10"
    },
    {
        id : 4,
        lastName : "DRAGON",
        firstName : "Alduin",
        avatar : "alduin.jpg",
        createdAt : "2021-11-10"
    }
]

function App()
{
    const [users, setUsers] = React.useState( bdd )
    const [canards, setCanards] = React.useState( [] )

    const addCanard = (id) => {
        let newUsers = [...users]
        newUsers = users.filter( u => {
            return u.id !== id
        })

        setUsers(newUsers)
        setCanards([...canards, users.find(u => u.id === id )])
    }

    const addUser = (id) => {
        let newCanards = [...canards]
        newCanards = canards.filter( c => {
            return c.id !== id
        })

        setCanards(newCanards)
        setUsers([...users, canards.find(u => u.id === id )])
    }

    return(
        <section>
            <h1>Adopte un Canard :</h1>
            <div className="liste">
                { users.map(user => 
                    <div className="card" key={ "U"+user.id }>
                        <Canard 
                            list="users"
                            data={ user }
                            addCallback={ addCanard }
                        />
                    </div>  
                )}
            </div>
            <h1>Mes Canards :</h1>
            <div className="liste">
                { canards.map(caneton => 
                    <div className="card" key={ "C"+caneton.id }>
                        <Canard 
                            list="canards"
                            data={ caneton } 
                            addCallback={ addUser }
                        />
                    </div>
                )}
            </div>
        </section>
        
    )
}

ReactDOM.render(
    <App />, //on rend ce composant
    document.querySelector('#root')//dans cet élément du DOM
);
