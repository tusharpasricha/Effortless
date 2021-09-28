import React from 'react'
const Allcards = ({accData})=> {

    return (
        <>
        <section className="box">

        {accData.map((curElem)=>{
            return(
        <div className="cardbox">
        <div className = "card" >
        <h3 className="name">{curElem.name}</h3>
        <h4 className="balance"> Balance:&#8377; {curElem.balance}</h4>
        </div>
        </div>
        )
        })}
        </section>

        </>
        
    )
}
export default Allcards
