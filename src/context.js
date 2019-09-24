import React, { Component } from 'react'
import {  productosID } from './data';

//create a new context object 
const ProductContext = React.createContext();
// Contetx API comes with 2 components Provider, Consumer

class ProductProvider extends Component {
    state = { 
        products: [],
        detailProduct: {},
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        const products = [{"source":"Simple Api","uniqueID":"11792925","partNumber":"2000372107060P","name":"ACER ASPIRE 3 A315-53-54LN / INTEL® CORE™ I5 / 20GB MEMORIA (16GB INTEL® OPTANE™ + 4GB RAM)/ 1TB / 15.6\"","locals":{"outOfStockList":{"blacklist":false},"unavailableList":{"blacklist":false},"promotion":{"stock":false,"badge":false}},"fullImage":"//home.ripley.cl/store/Attachment/WOP/D113/2000372107060/2000372107060_2.jpg","images":["//home.ripley.cl/store/Attachment/WOP/D113/2000372107060/2000372107060_2.jpg","//home.ripley.cl/store/Attachment/WOP/D113/2000372107060/2000372107060-1.jpg","//home.ripley.cl/store/Attachment/WOP/D113/2000372107060/2000372107060-2.jpg","//home.ripley.cl/store/Attachment/WOP/D113/2000372107060/2000372107060-3.jpg","//home.ripley.cl/store/Attachment/WOP/D113/2000372107060/2000372107060-4.jpg"],"prices":{"priceRangeMin":379990,"priceRangeMax":419990,"offerPrice":419990,"listPrice":489990,"cardPrice":379990,"discount":110000,"discountPercentage":22,"ripleyPuntos":3800,"$$cache":{"cached":true,"created":1569201544961},"formattedPriceRangeMin":"$379.990","formattedPriceRangeMax":"$419.990","formattedOfferPrice":"$419.990","formattedListPrice":"$489.990","formattedCardPrice":"$379.990","formattedDiscount":"$110.000"},"shortDescription":"Notebook Intel® Core™ i5 4GB Ram 1TB Disco Duro 15.6\"","longDescription":"<h2>NOTEBOOK ACER ASPIRE 3</h2><p><object data=\"https://www.netnow.cl/site/review/64/aspire-3-core-i5-a315-53-54ln-ripley-37210706-?nohead=true\" width=\"100%\" height=\"6250\"><embed src=\"https://www.netnow.cl/site/review/64/aspire-3-core-i5-a315-53-54ln-ripley-37210706-?nohead=true\" width=\"100%\" height=\"6250\"></object></p><br><br><b>INCLUYE:</b><br><p>Software adicional: Microsoft Office (Trial).<br>Cable de poder + cargador.<br>Extras: BluelightShield &#x2122; / Precision Touchpad. / Teclado Isla.<br>Garant&#xED;a: 12 meses.</p><br><a href=\"/ripley-chile/minisitios/info-ripley/guias-de-compra/computadores.html\" target=\"_blank\"><div id=\"botonguiaComputacion\"></div></a>","definingAttributes":[],"attributes":[{"displayable":true,"name":"Marca","usage":"descriptive","value":"ACER"},{"displayable":true,"id":"7000000000000017275","identifier":"sist_operativo_fac","name":"Sistema Operativo","usage":"descriptive","value":"Windows 10"},{"displayable":true,"id":"7000000000000017316","identifier":"tipo_procesador","name":"Tipo Procesador","usage":"descriptive","value":"Intel® Core® i5"},{"displayable":true,"id":"7000000000000017248","identifier":"mod_procesador","name":"Modelo Procesador","usage":"descriptive","value":"Intel® Core™ i5-8250U"},{"displayable":true,"id":"7000000000000017329","identifier":"velocidad_procesador_ghz","name":"Velocidad Procesador (GHz)","usage":"descriptive","value":"4 GB"},{"displayable":true,"id":"7000000000000017212","identifier":"memoria_ram","name":"Memoria Ram","usage":"descriptive","value":"4GB"},{"displayable":true,"id":"7000000000000017307","identifier":"tipo_de_memoria_ram","name":"Tipo de Memoria Ram","usage":"descriptive","value":"DDR4 SDRAM"},{"displayable":true,"id":"7000000000000017091","identifier":"capacidad_disco_duro","name":"Capacidad Disco Duro","usage":"descriptive","value":"1 TB"},{"displayable":true,"id":"7000000000000017301","identifier":"tipo_de_disco_duro","name":"Tipo de Disco Duro","usage":"descriptive","value":"5400 RPM"},{"displayable":true,"id":"7000000000000017233","identifier":"pantalla_pulgadas","name":"Pantalla (pulgadas)","usage":"descriptive","value":"15,6"},{"displayable":true,"id":"7000000000000017289","identifier":"tarjeta_de_video","name":"Tarjeta de Video","usage":"descriptive","value":"Intel® UHD Graphics 620"},{"displayable":true,"id":"7000000000000107051","identifier":"unidad_optica","name":"Unidad Óptica","usage":"descriptive","value":"No"},{"displayable":true,"id":"7000000000000299551","identifier":"color_80","name":"Color","usage":"descriptive","value":"Negro"},{"displayable":true,"id":"7000000000000017192","identifier":"lector_tarjeta_memoria","name":"Lector Tarjeta de Memoria","usage":"descriptive","value":"Sí"},{"displayable":true,"id":"7000000000000017224","identifier":"numero_puertos_hdmi","name":"Número puertos HDMI","usage":"descriptive","value":"Sí"},{"displayable":true,"id":"7000000000000019051","identifier":"accesibilidad","name":"Conectividad","usage":"descriptive","value":"Wi-Fi / Bluetooth / LAN"},{"displayable":true,"id":"7000000000000017227","identifier":"numero_puertos_usb","name":"Número puertos USB 2.0 / 3.0","usage":"descriptive","value":"2"},{"displayable":true,"id":"7000000000000017072","identifier":"ancho_cm","name":"Ancho (cm)","usage":"descriptive","value":"38.1"},{"displayable":true,"id":"7000000000000017063","identifier":"Largo_cm","name":"Largo (cm)","usage":"descriptive","value":"2.03"},{"displayable":true,"id":"7000000000000017250","identifier":"profundidad_cm","name":"Profundidad (cm)","usage":"descriptive","value":"26.1"},{"displayable":true,"id":"7000000000000017238","identifier":"peso_kg","name":"Peso (kg)","usage":"descriptive","value":"2.1"}],"shipping":{"rTienda":true,"dDomicilio":true,"rCercano":false,"cashOnDelivery":false},"xCatEntryCategory":"D113","productString":"acer-aspire-3-a315-53-54ln-intelr-coretm-i5-20gb-memoria-16gb-intelr-optanetm-4gb-ram-1tb-156-2000372107060p","SKUs":[{"Price":[{"SKUPriceDescription":"I","SKUPriceValue":"419990.0","SKUPriceUsage":"Offer"}],"SKUUniqueID":"11792926","partNumber":"2000372107060","xCatEntryQuantity":1,"ineligible":false,"Attributes":[],"isMainProduct":true}],"isMarketplaceProduct":false,"marketplace":{},"warranties":[{"shortDescription":"Garantías de Reparaciones 1 Año","Price":[{"priceValue":49990,"priceUsage":"Offer","formattedPriceValue":"$49.990"}],"type":"EXTRAGARANTIA","name":"EG Extiende tu Garantía 1 Año                                                                                                 ","quantity":"1.0","partNumber":"2000342689817","thumbnail":"/wcsstore/ripleycl_CAT_AS/Attachment/WOP/D113/2000342689817/2000342689817.jpg","uniqueID":"571598"},{"shortDescription":"Garantías de Reparaciones 2 Años","Price":[{"priceValue":64990,"priceUsage":"Offer","formattedPriceValue":"$64.990"}],"type":"EXTRAGARANTIA","name":"EG Extiende tu Garantía 2 Años                                                                                                ","quantity":"1.0","partNumber":"2000342689985","thumbnail":"/wcsstore/ripleycl_CAT_AS/Attachment/WOP/D113/2000342689985/2000342689985.jpg","uniqueID":"571614"}],"url":"/acer-aspire-3-a315-53-54ln-intelr-coretm-i5-20gb-memoria-16gb-intelr-optanetm-4gb-ram-1tb-156-2000372107060p","thumbnailImage":"//home.ripley.cl/store/Attachment/WOP/D113/2000372107060/2000372107060_2.jpg","simple":{"lists":{"outOfStockList":{"blacklist":false},"unavailableList":{"blacklist":false},"promotion":{"stock":false,"badge":false}},"isUnavailable":false,"isOutOfStock":false,"isMarketplaceProduct":false},"single":true}];
        this.setState(() => {
            return {products}
        })
    }

    // get an item based on id 
    getItem = (id) => {
        const product = this.state.products.find(item => item.uniqueID ===id);
        return product;
    }
    
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                // use destructuring here
                ...this.state,
                handleDetail: this.handleDetail,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };