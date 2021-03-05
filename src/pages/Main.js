import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import Header from "../components/Header";
import apiCall from "../functions/apiCall";
import Finder from "../components/Finder";
import Section from "../components/Section";
import Footer from "../components/Footer";
import useLocalStorage from "../hooks/useLocalStorage";

const Main = () => {
  const [idProducto, setIdProducto] = useLocalStorage("idProducto", []);
  const [cantidad, setCantidad] = useLocalStorage("cantidad", 0);
  const [term, setTerm] = useState("");
  const [planes, setPlanes] = useState([]);


  useEffect(() => {
    let url = `http://c1300044.ferozo.com/getListado.php`;
    apiCall(url, (dato) => setPlanes([...dato.planes]));
  }, []);


  useEffect(() => {
    setCantidad(idProducto.length);
  }, [idProducto]);


  const addInCart = async (plan, periodo) => {
    let url = `http://c1300044.ferozo.com/agregarItem.php?plan=${plan}&periodo=${periodo}`;
    apiCall(url, (dato) => {
      setIdProducto([...idProducto, dato.id_producto]);
    });
  };


  const search = (e) => {
    setTerm(e.target.value.toLowerCase());
  };


  return (
    <>
      <Header
        cantidad={cantidad}
        mensaje={"Ver Carrito"}
        switchButton="/carrito"
        onSearch={search}
      />
      <Finder/>
      
        <section  className="gray-bg border-top-gray">
          {planes.map((plan, i) => {
            return plan.periodos
              .filter(
                (element) =>
                  element.valor.toString().includes(term) ||
                  element.periodo.toString().includes(term) ||
                  plan.nombre
                    .normalize("NFD")
                    .replace(
                      /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
                      "$1"
                    )
                    .normalize()
                    .toLowerCase()
                    .includes(term)
              )
              .map((porPeriodo, i) => {
                return (
                  <div key={`tr1` + i}>
                    <div class="col-md-3 col-sm-6 col-xs-12" key={`tr1` + i}>
                      <div class="home_services_box">
                        <div class="right_arrow" key={plan.nombre + i}>{plan.nombre}</div>
                          <div class="left_arrow"></div>
                      <h4 key={plan.nombre + i}>{plan.nombre}</h4>
                      <hr class="sep"/>
                      <div class="price"><span key={porPeriodo.periodo + i}>{porPeriodo.periodo}</span>  <p key={porPeriodo.valor + i}>{porPeriodo.valor}</p> </div>
                     
                    </div>
                  </div>
                    {
                      <div key={`boton` + i}>
                        <button
                          onClick={() =>
                            addInCart(
                              plan.plan,
                              porPeriodo.periodo,
                              porPeriodo.valor
                            )
                          }
                          className="btn btn-dark "
                        >Contratar
                        </button>
                      </div>
                    }
                  </div>
                );
              });
          })}
        </ section>


      
      <Section/>
      <Footer/>
    </>
  );
};
export default Main;
