import React, { useState } from 'react'
// First function component
function MyComponent({title,content}) {
    const [blur , setBlur] = useState(false)
    const [num , setNum] = useState(null);
    return (
        <div className={`${blur ? '' : 'bg-black'}`} onMouseEnter={()=> setBlur(true)} onMouseLeave={()=>setBlur(false)}>
            <h1>{title}</h1>
            <p>{content}</p>
            {num}
            <h1 onClick={()=>setNum(num+1)}>setnum</h1>
        </div>
    );
}
function Test2() {
    const componentsData = [
        { title: "Component A", content: "Content for Component A" },
        { title: "Component B", content: "Content for Component B" },
        { title: "Component C", content: "Content for Component C" }
    ];
    return (

        <div>
            {componentsData.map((data, index) => (
                <MyComponent key={index} title={data.title} content={data.content} />
            ))}
        </div>
    )
}

export default Test2