"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { debug } from "console";
import React, {useState, useEffect, useRef} from 'react';
import MultyTitle from "./Title";
import Timer from "./Timer";
import Answers from "./Answers";


function App () {

return (
   <>
   <MultyTitle />
   <Answers />
   <Timer />
   </>
);

};


export default App;



