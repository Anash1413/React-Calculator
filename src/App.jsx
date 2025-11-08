import { useState } from "react";
import Button from "./components/Button";
import Operators from "./components/Operators";

function App() {
  const rows =[
  [{op:"ac"}, {op:"%"}, {op:"⌫"}, {op:"x"}],
  [{num:7}, {num:8}, {num:9}, {op:"÷"}],
  [{num:4}, {num:5}, {num:6}, {op:"-"}],
  [{num:1}, {num:2}, {num:3}, {op:"+"}],
  [{op:"+"}, {num:0}, {num:"."}, {op:"="}],
];
  const [number, setnumber] = useState("0");
 const [num1, setNum1] = useState(0);
 const [num2, setNum2] = useState(0);
 const [operator, setOperator] = useState("")
 
  function handelNumber(val){
    if(number === "0"){
      setnumber(String(val))
    }
    else{ 
      setnumber((prev) => `${prev}${val}`)
    }

  }
  function calculate(numboi){
    let calcVal ;
    switch(operator){
        case'x' :  calcVal = num1 *    numboi
          break;
           case'%' :  calcVal = num1 % numboi
          break;
          case'÷' :  calcVal = num1  /   numboi 
          break;
          case'-' : calcVal = num1 -   numboi
          break;
          case'+' :  calcVal = num1 +    numboi
          break;
        }
    console.log("num 1",num1)
     console.log("num 2",num2)
    console.log(calcVal)
    setnumber(String(calcVal));
    
  }
  function setSwitch(op){
                    setNum1(parseFloat(number))
                     setOperator(op)
                     setnumber("") 
  }
  function handelOperators(value){
        switch(value){
          case'⌫' : setnumber((prev) => prev.slice(0, -1))
          break;
          case'ac' :  setNum1(""); setNum2("")
                     setOperator("")
                     setnumber("0")
          break;
           case'%' :  setSwitch(value)
          break;
           case'x' :  setSwitch(value)
          break;
           case'÷' :  setSwitch(value)
          break;
           case'-' : setSwitch(value)
          break;
           case'+' : 
          setSwitch(value)
          break;
           case'=' : {
            const newnum2 = parseFloat(number) ; 
            calculate(newnum2);
            setNum2(newnum2)
           }
          
          break;
        }
   
  }
  return (
    <div className=" bg-[#000f]  p-2 h-screen  bg-no-repeat bg-cover  w-screen flex justify-center items-center">
      <div className="border-4  rounded-3xl bg-[#111] p-2 border-white h-[600px] w-[370px]">
        <div  className="text-white relative h-[30%] ">
         <div className="absolute max-w-[345px] overflow-x-hidden overflow-y-clip
          text-4xl bottom-3.5 right-2">
          <div className="w-full text-2xl">{num1} {operator} {num2}</div>
          <div> {number}</div>
          
         </div>
        </div>
        <div className="  w-full h-full bg-cover bg-no-repeat overflow-hidden">
                {rows.map(( row,item) => (
            <div key={item} className="w-full h-[14%] flex justify-center items-center gap-3 ">
                {row.map((line,j) => "num" in line?
                 (<Button key={j} value={line.num} handelNumber={handelNumber} />)
                 : (<Operators key={j} handelOperators={handelOperators} value={line.op} />))}
            </div>
          ))}
        </div>
         

        {/* <div className="  w-full h-full bg-cover bg-no-repeat overflow-hidden">
          <div  className="w-full h-[14%] flex justify-center items-center gap-3 ">
            <Operators value={"ac"} handelOperators={handelOperators}/>
            <Operators value={"%"} handelOperators={handelOperators}/>
            <Operators value={`⌫`} handelOperators={handelOperators} />
            <Operators value={"x"} handelOperators={handelOperators}/>
          </div>
          <div className="w-full h-[14%] flex justify-center items-center gap-3 ">
            <Button  value={7} handelNumber={handelNumber} />
            <Button  value={8} handelNumber={handelNumber} />
            <Button  value={9} handelNumber={handelNumber} />
            <Operators value={`÷`} />
          </div>
          <div className="w-full h-[14%] flex justify-center items-center gap-3 ">
            <Button value={4} handelNumber={handelNumber} />
            <Button value={5} handelNumber={handelNumber} />
            <Button value={6} handelNumber={handelNumber} />
            <Operators className="hover:scale-3d" value={`-`} />
          </div>
          <div className="w-full h-[14%] flex justify-center items-center gap-3 ">
            <Button value={1} handelNumber={handelNumber} />
            <Button value={2} handelNumber={handelNumber} />
            <Button value={3} handelNumber={handelNumber} />
            <Operators value={"+"} handelOperators={handelOperators}/>
          </div>
          <div className="w-full h-[14%] flex justify-center items-center gap-3 ">
            <Operators value={"+"} handelOperators={handelOperators}/>
            <Button value={0} handelNumber={handelNumber} />
            <Button value={"."} handelNumber={handelNumber} />
            <Operators value={"="} handelOperators={handelOperators}/>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
