import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import axios from "axios";
import apiCall from "../functions/apiCall";
import useLocalStorage from "../hooks/useLocalStorage";
import NoCart from "../components/NoCart";

const Carrito = (props) => {
  const [idProducto, setIdProducto] = useLocalStorage("idProducto", []);
  const [cantidad, setCantidad] = useLocalStorage("cantidad", 0);
  const [term, setTerm] = useState("");
  const [bigListLocal, setBigListLocal] = useState([]);


  useEffect(() => {
    let url = `http://c1300044.ferozo.com/getListadoCarrito.php?t=${new Date().getTime()}`;

    apiCall(url, (lista) => {
      const listTemporal = lista.filter((element) =>
        idProducto.includes(parseInt(element.id_producto))
      );
      setBigListLocal(listTemporal);
      setCantidad(idProducto.length);
    });
  }, [idProducto]);


  const deleteOfCart = async (idProduct) => {
    apiCall(
      `http://c1300044.ferozo.com/removerItem.php?id_producto=${idProduct}`,
      () => {
        let listaIdsTemporal = idProducto.filter(
          (element) => !(element == idProduct)
        );
        setIdProducto(listaIdsTemporal);
      }
    );
  };


  const search = (e) => {
    setTerm(e.target.value.toLowerCase());
  };


  return (
    <>
      <Header
        cantidad={cantidad}
        mensaje={"Seguir comprando"}
        switchButton="/"
        onSearch={search}
      />
      {bigListLocal.length == 0 && <NoCart></NoCart>}{" "}
      {bigListLocal.length != 0 && (
         <div className="container">
          <div className="b-price-plan">
            {bigListLocal
              .filter(
                (element) =>
                  element.nombre
                    .normalize("NFD")
                    .replace(
                      /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
                      "$1"
                    )
                    .normalize()
                    .toLowerCase()
                    .includes(term) ||
                  element.periodo.includes(term) ||
                  element.valor.includes(term)
              )
              .map((item, indice) => {

                return (
                  <div className="col-md-4 col-sm-4" key={`tr2` + indice}>
                    
                    <div class="b-price-plan__item b-price-plan__head" key={item.nombre + indice ? item.nombre + indice : " "}>
                      <h3> {item.nombre ? item.nombre : ""}</h3> 
                    </div>
                    <div class="b-price-plan__item b-price-plan__cost stellar decennial-stellar"
                      key={item.periodo + indice ? item.periodo + indice : ""}
                    > <div class="cost-title"><span>{item.periodo ? item.periodo : ""}</span></div>
                      <div class="cost-time">Mensual</div>
                    </div>
                    <div class="b-price-plan__item b-price-plan__cost stellar quinquennial-stellar"
                     key={item.valor + indice ? item.valor + indice : ""}>
                      <div class="cost-title"><span>{item.valor ? item.valor : ""}</span></div> 
                      <div class="cost-time">Anual</div>
                              <ul class="p_plan_list">
                          <li>Host 1 Website</li>
                          <li>Free SSL Certificate </li>
                          <li>Supports 25,000 visits/mo.</li>
                          <li>2 CPU Cores </li>
                          <li>2 GB RAM</li>
                          <li>Free cPanel</li>
                        </ul>
                    </div>
                    {
                      <div key={`boton` + indice}>
                        <div class="b-price-plan__item price_foot stellar decennial-stellar"> <a href="https://donweb.com/es-ar/" 
                        class="btn btn-warning price_btn"> 
                        <span>Comprar</span> <i class="fa fa-caret-right" aria-hidden="true"></i> 
                        </a> </div>
                        
                        <div class="b-price-plan__item price_foot stellar decennial-stellar"> <a href="/" 
                        class="btn btn-warning price_btn" onClick={() => deleteOfCart(item.id_producto)}> 
                        <span>Me Arepenti</span> <i class="fa fa-caret-right" aria-hidden="true"></i> 
                        </a> </div>
                      </div>
                    }
                  </div>
                );
              })}
          </div>
          </div>
      )}
      
    </>
  );
};
export default Carrito;
