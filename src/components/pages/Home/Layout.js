import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../inc/Header';
import Footer from '../../inc/Footer';

export default function Layout() {
    return (
        <div>
            
            <Header></Header> 
            <div style={{marginBottom:"100px"}}>
                <Outlet></Outlet>
            </div>
             <Footer></Footer>  
            
        </div>
    );
}