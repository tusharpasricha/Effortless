import React ,{useState}from 'react'
import Allcards from './allcards';
const Card = () => {

    const [accData, setaccData] = useState([]);

    const generate = async (count) => {
        fetch("https://accountapp-b876a-default-rtdb.firebaseio.com/form.json")
        
    
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
    
                function json2array(json){
                    var result = [];
                    var keys = Object.keys(json);
                    keys.forEach(function(key){
                        result.push(json[key]);
                    });
                    console.log(result);
                    setaccData(result);
                    return result;
                }
                json2array(data);
            })
              
    };

    generate();


   
    return (
        <Allcards accData={accData}/>
        // <section className="box">
        // <div className = "card" >
        //     <h3 className="name">{info[0].name}</h3>
            
        //     <h4 className="balance"> Balance:&#8377; {info[0].amount}</h4>
        // </div>
        // <div className = "card">
        //     <h3 className="name">{info[1].name}</h3>
        //     <h4 className="balance">Balance:&#8377; { info[1].amount}</h4>
        // </div>
        
        // <div className = "card">
        //     <h3 className="name">{info[2].name}</h3>
        //     <h4 className="balance">Balance:&#8377; { info[2].amount}</h4>
        // </div>
        // <div className = "card">
        //     <h3 className="name">{info[3].name}</h3>
        //     <h4 className="balance">Balance:&#8377; { info[3].amount}</h4>
        // </div>
        // <div className = "card">
        //     <h3 className="name">{info[4].name}</h3>
        //     <h4 className="balance">Balance:&#8377; {info[4].amount}</h4>
        // </div>
        // <div className = "card">
        //     <h3 className="name">{info[5].name}</h3>
        //     <h4 className="balance">Balance:&#8377; {info[5].amount}</h4>
        // </div>
        // <div className = "card">
        //     <h3 className="name">{info[5].name}</h3>
        //     <h4 className="balance">Balance:&#8377; {info[5].amount}</h4>
        // </div>
        // <div className = "card">
        //     <h3 className="name">{info[5].name}</h3>
        //     <h4 className="balance">Balance:&#8377; {info[5].amount}</h4>
        // </div>
        // <div className = "card">
        //     <h3 className="name">{info[5].name}</h3>
        //     <h4 className="balance">Balance:&#8377; {info[5].amount}</h4>
        // </div>
        // <div className = "card">
        //     <h3 className="name">{info[5].name}</h3>
        //     <h4 className="balance">Balance =&#8377; {info[5].amount}</h4>
        // </div>
        // <div className = "card">
        //     <h3 className="name">{info[5].name}</h3>
        //     <h4 className="balance">Balance:&#8377; {info[5].amount}</h4>
        // </div>


        // </section>
    )
}

export default Card
