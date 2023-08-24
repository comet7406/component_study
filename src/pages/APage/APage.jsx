import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MainLayout from '../../components/MainLayout/MainLayout';

function APage(props) {
    const menus = [
        {
            id: 1,
            name: "나의 프로젝트"
        },
        {
            id: 2, 
            name: "나에게 공유된 프로젝트"
        }
    ];

    const [ result, setResult ] = useState(0);
    const [ inputValueObjs, setInputValueObjs ] = useState({
        firstNum: 0,
        secondNum: 0
    });

    const [ name, setName ] = useState("");

    useEffect(
        () => {
            console.log("useEffect 실행!")
            calc(inputValueObjs.firstNum, inputValueObjs.secondNum);
            // calc(10, 20);
            return () => {
                console.log("언마운트");
            };
        }, []
    );

    const calc = (x, y) => {
        setResult(x + y);
    }

    const handleInputChange = (e) => {
        setInputValueObjs(
            {
                ...inputValueObjs,
                [e.target.name]: parseInt(e.target.value)
            }
        );
    }    

    const handleNameInputChange = (e) => {
        setName(e.target.value);
    }

    return (
        <MainLayout title={"A페이지"} menus={menus} >
            <div>{result}</div>
            <div>{name}</div>
            <div>
                <input type="text" name='firstNum' onChange={handleInputChange} placeholder='1번 값'/>
                <input type="text" name='secondNum' onChange={handleInputChange} placeholder='2번 값'/>
                <input type="text" name='name' onChange={handleNameInputChange} placeholder='이름'/>
            </div>
        </MainLayout>
    );
}

export default APage;