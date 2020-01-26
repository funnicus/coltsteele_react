//import React from 'react';
//import ReactDOM from 'react-dom';
import f from './foods';
import {choice, remove} from './helpers';
import './index.css';

    const fruit = choice(f);
    console.log("Id like one " + fruit + " ,please.");
    console.log("Here you go: " + fruit);
    console.log("Delicous! May I have another?");
    let newF = remove(f, fruit);
    console.log("I'm sorry, we're out. We have " + newF.length + " left.");