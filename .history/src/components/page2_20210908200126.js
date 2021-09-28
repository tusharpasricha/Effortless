import React,{useState} from 'react';

const Page2 = ()=> {
    const [user,setUser] = useState({
        name:"",
        balance:"",
    });

let name, value;
    const getUserdata=(event)=>{
        name=event.target.name;
        value=event.target.value;   
        setUser({...user , [name]:value });
        
    };
    // const postData=async(e)=>{
    // e.preventDefault();
    // const {name,balance}=user;
    // const res = await fetch("https://auth-development-31c43-default-rtdb.firebaseio.com/form.json",{
    //     method: "POST",
    //     headers: {
    //         "Content-Type" : "application/json",
    //     },
    //     body:JSON.stringify({
    //         name,
    //         balance,
    //     }),
    //    }

    // );
    // if (res){
    //     setUser({
    //     name:"",
    //     balance:"",
    //     });
    //     alert("Done");
    // }
    // };
    const postData=async(e)=>{
    e.preventDefault();
    const {name,balance}=user;
    if(user === undefined) {
        return;
    }
    const res = await fetch("https://accountapp-b876a-default-rtdb.firebaseio.com/form.json",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body:JSON.stringify({
            name,
            balance,
        }),
       }

    );
    if (res){
        setUser({
        name:"",
        balance:"",
        });
        alert("Done");
    }
    };



    return (
        <>
    <article className="bgentry">

        <div className="add">
            <form method = "POST"> 
            <h1 className="heading">Entry</h1>

                <section className="inputbox">
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" value ={user.name} onChange={getUserdata} autoComplete="off" required/>
                
                <label>Balance</label>
                <input type="text" name="balance" placeholder="Balance"  value ={user.balance} onChange={getUserdata} autoComplete="off" required/>
                
                </section>

                <div>
                    <button  onClick={postData} className="but1">
                        <span>
                            Submit
                            <i aria-hidden="true"></i>
                        </span>
                    </button>
                </div>

            </form>
        </div>
      </article>
    </>
    )
}

export default Page2
