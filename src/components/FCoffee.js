import React, {useState, useEffect} from "react";


function FCoffee({firstName}) {
    const [coffeeList, setCoffeeList] = useState();
    const [temperature, setTemperature] = useState('iced');
    useEffect(()=>{ //listening if the temp changes not you clicking the button
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
        .then(response => response.json())
        .then(setCoffeeList) //short hand for .then(data => setCoffeeList(data))
        .catch(console.error)
    }, [temperature])
    return (
        <>
            <h1>Coffee List (F)</h1>
            <p>Hello {firstName}</p>
            <button onClick={() => setTemperature('hot')}>HOT</button>
            <button onClick={() => setTemperature('iced')}>ICED</button>
            {!coffeeList
                ? <h2>Loading...</h2>
                : <>
                    <h2>Coffees</h2>
                    {coffeeList.map(coffee => {
                        return <p key='id'>{coffee.title}</p>
                    }
                    )}
                </>
            }
            {/* <h2>Loading...</h2> While loading we need a conditional rendering */}
        </>
    )
}

export default FCoffee;