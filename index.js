function getID(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

const allZapas = [];

class Zapatillas {
    constructor({ marca, nombre, precio, stock, image }) {
        this.ID = getID(10);
        this.marca = marca;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock || 0;
        this.image = image;
    }

    
}


const nike = new Zapatillas({
    marca: `Nike`,
    nombre: `NIKE AIR MAX 1 PRM ADM "W"`,
    precio: 40.000,
    stock: 21,
    image: `./Imagenes/nike-air-max-1-prm-adm-w.jpg`,
})
const nike2 = new Zapatillas({
    marca: `Nike`,
    nombre: `NIKE W AIR FORCE 1 '07 ESS`,
    precio: 25.499,
    stock: 11,
    image:`./Imagenes/nike-w-air-force-1-07-ess-.jpg`,
})
const nike3 = new Zapatillas({
    marca: `Nike`,
    nombre: `NIKE W AIR MAX 95 SE`,
    precio: 45.999,
    stock: 8,
    image: `./Imagenes/nike-w-air-max-95-se-.jpg`,
})
const nike4 = new Zapatillas({
    marca: `Nike`,
    nombre: `NIKE AIR MAX 90 NRG`,
    precio: 32.999,
    stock: 9,
    image: `./Imagenes/nike-air-max-90-nrg.jpg`,
})
const nike5 = new Zapatillas({
    marca: `Nike`,
    nombre: `NIKE WAFFLE ONE CRATER`,
    precio: 28.499,
    stock: 16,
    image: `./Imagenes/nike-waffle-one-crater-.jpg`,
})
const nike6 = new Zapatillas({
    marca: `Nike`,
    nombre: `NIKE X SACAI/CLOT LDWAFFLE`,
    precio: 35.999,
    stock: 14,
    image:``,
})
const nike7 = new Zapatillas({
    marca: `Nike`,
    nombre: `NIKE AIR MAX 95 SE MTZ2`,
    precio: 46.999,
    stock: 18,
    image: `./Imagenes/nike-air-max-95-se-mtz2.jpg`,
})
const nike8 = new Zapatillas({
    marca: `Nike`,
    nombre: `NIKE W BLAZER LOW PLATFORM`,
    precio: 21.499,
    stock: 15,
    image: `./Imagenes/nike-w-blazer-low-platform-.jpg`,
})
const nike9 = new Zapatillas({
    marca: `Nike`,
    nombre: `Nike Air Max 97`,
    precio: 37.999,
    stock: 7,
    image: `./Imagenes/nike-air-max-97.jpg`,
})
const nike10 = new Zapatillas({
    marca: `Nike`,
    nombre: `Nike Air Max 95 QS`,
    precio: 20.999,
    stock: 10,
    image: `./Imagenes/nike-air-max-95-qs.jpg`,
})


const adidas = new Zapatillas({
    marca: `Adidas`,
    nombre: `ADIDAS OZELIA`,
    precio: 26.999,
    stock: 14,
    image: `./Imagenes/adidas-ozelia-.jpg`,
})
const adidas2 = new Zapatillas({
    marca: `Adidas`,
    nombre: `ADIDAS SUPERSTAR W`,
    precio: 22.999,
    stock: 8,
    image: `./Imagenes/adidas-superstar-w-.jpg`,
})
const adidas3 = new Zapatillas({
    marca: `Adidas`,
    nombre: `ADIDAS NITE JOGGER`,
    precio: 23.999,
    stock: 9,
    image: `./Imagenes/adidas-nite-jogger-.jpg`,
})
const adidas4 = new Zapatillas({
    marca: `Adidas`,
    nombre: `ADIDAS NMD R1 W`,
    precio: 26.999,
    stock: 13,
    image: `./Imagenes/adidas-nmd-r1-w-.jpg`,
})
const adidas5 = new Zapatillas({
    marca: `Adidas`,
    nombre: `ADIDAS FORUM LOW`,
    precio: 26.999,
    stock: 18,
    image: `./Imagenes/adidas-forum-low-.jpg`,
})
const jordan = new Zapatillas({
    marca: `Jordan`,
    nombre: `WMNS AIR JORDAN 1 HIGH OG`,
    precio: 43.999,
    stock: 7,
    image: `./Imagenes/nike-wmns-air-jordan-1-high-og.jpg`,
})
const jordan2 = new Zapatillas({
    marca: `Jordan`,
    nombre: `JORDAN RETRO 3`,
    precio: 44.999,
    stock: 5,
    image: `./Imagenes/nike-air-jordan-retro-3-.jpg`,
})
const jordan3 = new Zapatillas({
    marca: `Jordan`,
    nombre: `JORDAN 7 RETRO BCFC`,
    precio: 39.999,
    stock: 8,
    image: `./Imagenes/nike-air-jordan-7-retro-bcfc.jpg`,
})
const jordan4 = new Zapatillas({
    marca: `Jordan`,
    nombre: `JORDAN 1 RETRO HIGH OG`,
    precio: 42.999,
    stock: 5,
    image: `./Imagenes/nike-air-jordan-1-retro-high-og.jpg`,
})
const puma = new Zapatillas({
    marca: `Puma`,
    nombre: `PUMA SUEDE CLASSIC XXI`,
    precio: 14.999,
    stock: 13,
    image: `./Imagenes/puma-suede-classic-xxi.jpg`,
})
const puma2 = new Zapatillas({
    marca: `Puma`,
    nombre: `Puma Rs-X Mono Metal WNS`,
    precio: 16.399,
    stock: 9,
    image: `./Imagenes/puma-rs-x-mono-metal-wns.jpg`,
})
const newb = new Zapatillas({
    marca: `New Balance`,
    nombre: `NEW BALANCE ML574DCH`,
    precio: 23.499,
    stock: 9,
    image: `./Imagenes/new-balance-ml574dch.jpg`,
})
const newb2 = new Zapatillas({
    marca: `New Balance`,
    nombre: `NEW BALANCE MS237SA`,
    precio: 14.699,
    stock: 12,
    image: `./Imagenes/new-balance-ms237sa.jpg`,
})




const zapas = document.getElementById(`zapatillas`);
const selectbrand = document.getElementById(`selectbrand`);
const mostrarZapas = document.getElementById(`verzapas`);
const verZapas = document.getElementById(`mostrarlas`)



const storeZapas = localStorage.setItem(Zapatillas, JSON.stringify(Zapatillas));

verZapas.addEventListener(`click`, (e) =>{
    const inputValue = selectbrand.value;
    zapasFind = Zapatillas.

})
