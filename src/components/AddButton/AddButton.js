import React from "react"

export default function AddButton () {
    
    const [count, setCount] = React.useState(1)
    const stock = 5

    const onAdd =  () => {
        if (count < stock) {
            setCount (count + 1)
        }
    }

    const onDecrease =  () => {
        if (count > stock) {
            setCount (count - 1)
        }
    }

    const onSubmit = () => {
        alert(`Se agregaron ${count} Unidades al Carrito`)
    }

    const StockButton = ({handleOnClick, text}) => {
        return <button className="stock-button" onClick={handleOnClick}>{text}</button>
    }

    const AddButton = () => {
        return (
            <button className="add-button">Añadir al carrito</button>
        )
    }

    return(
        <div className="add-button-container">
            <StockButton text={+} handleOnClick={onAdd}/>
            <span className="add-button-count">{count}</span>
            <StockButton text={-} handleOnClick={onDecrease}/>
            <AddButton/>
        </div>
    )
}