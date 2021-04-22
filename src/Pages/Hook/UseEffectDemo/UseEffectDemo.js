import React,{useState,useEffect} from 'react'

export default function UseEffectDemo(props) {

    const [number,setNumber] = useState(1);
    //Hook thay thế cho lifecycleComponentDidMount
    useEffect(()=>{ //Tự động kích hoạt và chạy lần đầu tiên
        //Callapi
        //Sử carousel, thư viện khác ...
        console.log('componentDidMount');
        return ()=>{
            //Hàm này sẽ thực thi trước khi component mất khỏi giao diện
            console.log('componentWillUnmount')
        }
    },[]);
    useEffect(()=>{
        //Gọi sau mỗi lần render kể cả lần đầu tiên
        console.log('Thay thế 2 lifecycle componentDidMount và ComponentDidUpdate');
        //Hạn chế setState
    })
    useEffect(()=>{
        //Gọi sau mỗi lần render kể cả lần đầu tiên
        console.log('ComponentDidUpdate bởi 1 state nào đó');
        //Hạn chế setState
    },[number]);

    return (
        <div>
            {/* useEffect */}
            <h1>{number}</h1>
            <button className="btn btn-success" onClick={()=>{
                    setNumber(number + 1);
            }}>+</button>
        </div>
    )
}
