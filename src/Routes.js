import React from "react";
import {Switch, Redirect} from "react-router-dom";
import {RutaPublica }from "./routers"
import {LayoutGeneral} from "./layouts/conLayout";
import SinLayout from "./layouts/SinLayout/SinLayout"
import Pagina404 from './pages/Pagina.404/Pagina404'
import GeneralInicio from "./pages/General/Inicio/Inicio"

const Routes = ()=>{
    return (
        <>
        <Switch>
          
            <RutaPublica
            component ={GeneralInicio}
            exact
            layout={LayoutGeneral}
            path="/"

            />
            {/* RUTAS NO ENCONTRADAS */}
            <RutaPublica
            component={Pagina404}
            exact
            layout={SinLayout}
            path="/pagina-no-encontrada"
            />
            <Redirect to="/pagina-no-encontrada"/>

        </Switch> 
        </>
    )
};
export default Routes