import imgAlbum0 from "./the-velvet-underground-nico-the-velvet-underground-1967.jpg"
import imgAlbum1 from "./abbey-road-the-beatles-1969.jpg"
import imgAlbum2 from "./the-dark-side-of-the-moon-pink-floyd-1973.jpg"
import imgAlbum3 from "./unkown-pleasures-joy-division-1979.jpg"
import imgAlbum4 from "./back-in-black-ac-dc-1980.jpg"
import imgAlbum5 from "./power-corruption-lies-new-order-1983.jpg"
import imgAlbum6 from "./born-in-the-u.s.a.-bruce-sprinsteen-1984.jpg"
import imgAlbum7 from "./slave-to-the-rhythm-grace-jones-1985.jpg"
import imgAlbum8 from "./live-after-death-iron-maiden-1985.jpg"
import imgAlbum9 from "./true-blue-madonna-1986.jpg"


const getAllAlbums = () => {
    const data = {
        items : [
                { 
                    albumName: "The Velvet Underground & Nico" ,
                    typeArtist: "solista",
                    nameArtist: "The Velvet Underground",
                    year: "(1967)",
                    calification: "Chill",
                    image: imgAlbum0

                },

                { 
                    albumName: "Abbey Road" ,
                    typeArtist: "Banda",
                    nameArtist: "The Beatles",
                    year: "(1969)",
                    calification: "Pop",
                    image: imgAlbum1

                },
                { 
                    albumName: "The Dark Side of the Moon" ,
                    typeArtist: "Banfa",
                    nameArtist: "Pink Floyd",
                    year: "(1973)",
                    calification: "Rock",
                    image: imgAlbum2

                },
                { 
                    albumName: "Unkown Pleasures" ,
                    typeArtist: "solista",
                    nameArtist: "Joy Division",
                    year: "(1979)",
                    calification: "Rock",
                    image: imgAlbum3

                },
                { 
                    albumName: "Back in Black" ,
                    typeArtist: "Banda",
                    nameArtist: "AC/DC",
                    year: "(1980)",
                    calification: "Heavy metal",
                    image: imgAlbum4

                },
                { 
                    albumName: "Power, Corruption & Lies" ,
                    typeArtist: "solista",
                    nameArtist: "New Order",
                    year: "(1983)",
                    calification: "pop-punk",
                    image: imgAlbum5

                },
                { 
                    albumName: "Born in the U.S.A." ,
                    typeArtist: "solista",
                    nameArtist: "Bruce Sprinsteen",
                    year: "(1984)",
                    calification: "Rock",
                    image: imgAlbum6

                },
                { 
                    albumName: "Slave to the Rhythm" ,
                    typeArtist: "solista",
                    nameArtist: "Grace Jones",
                    year: "(1985)",
                    calification: "Electronica",
                    image: imgAlbum7

                },
                { 
                    albumName: "Live After Death" ,
                    typeArtist: "Banda",
                    nameArtist: "Iron Maiden",
                    year: "(1985)",
                    calification: "Heavy metal",
                    image: imgAlbum8

                },
                { 
                    albumName: "True Blue" ,
                    typeArtist: "solista",
                    nameArtist: "Madonna",
                    year: "(1986)",
                    calification: "Soul",
                    image: imgAlbum9

                }]
    }

    return(data)
}

export {getAllAlbums}; // LA MAYUSCULA HACE QUE REACT LO DETECTO COMO COMPONENTE O MODULO