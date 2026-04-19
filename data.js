const menuData = [

  // ================= ENTRADAS =================
  {
    category: "Entradas",
    items: [
      {
        name: "Jocoque",
        description: "250 gramos acompañados de totopos y tortillas",
        price: 70,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHAqQIJaG7xNEtCxCofxNCNblqc98HKMrSA&s"
      },
      {
        name: "Frijoles refritos",
        description: "250 gramos de frijoles refritos acompañados de 60 gramos de panela",
        price: 85,
        image: "https://www.sanborns.com.mx/c/restaurante/enc/base/fotos/frijoles-refritos-sanbornsmx.webp"
      },
      {
        name: "Fruta",
        description: "300 gr de fruta de temporada",
        price: 60,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6-AQrjZiGZMSpL2I683JT5YpiJKEVk5xuA&s"
      },
      {
        name: "Yogurt con fruta",
        description: "350 gramos de fruta de temporada con granola y yogurt natural",
        price: 85,
        extras: {
          price: 15,
          label: "Ingrediente extra",
          items: ["Miel de abeja","Miel de maple","Miel de agave","Lechera","Coco rayado","Arándano","Cacahuate","Almendra"]
        },
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777"
      },
      {
        name: "Queso fundido",
        description: "200 gramos de queso gouda",
        price: 90,
        extras: {
          price: 25,
          label: "Ingrediente extra",
          items: ["Champiñones","Chorizo para freír","Tocino","Arrachera","Pollo","Chorizo corona","Chistorra","Picaña"]
        },
        image: "https://images.squarespace-cdn.com/content/v1/60d10d728559613ed2afb7a7/8466b637-e90a-418d-a49d-df4d5e3d168e/3S6A9690.jpg"
      },
      {
        name: "Guacamole",
        description: "250 gramos de aguacate con cebolla, jitomate, cilantro, pepino y limón",
        note: "Opcional con chile serrano",
        price: 90,
        image: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/mexican_restaraunt_guacomole.jpg"
      }
    ]
  },

  // ================= DE LA MILPA =================
  {
    category: "De la Milpa",
    items: [
      {
        name: "Quesadilla sencilla maíz o harina",
        description: "Tortilla grande con ensalada verde",
        price: 40,
        image: "https://i.blogs.es/1def98/1366_2000-9-/450_1000.jpg"
      },
      {
        name: "Quesadilla de guisado maíz o harina",
        description: "Tortilla grande con ensalada verde",
        options: ["Carne con chile","Lengua en salsa verde","Chicharrón en salsa roja","Chicharrón en salsa verde"],
        price: 50,
        image: "https://i.ytimg.com/vi/3ibH1Urc_NE/maxresdefault.jpg"
      },
      {
        name: "Quesadilla especial maíz o harina",
        description: "Tortilla grande con ensalada verde",
        options: ["Pollo","Arrachera","Champiñones","Chorizo corona","Picaña","Chistorra","Mixta (máx 2)"],
        price: 65,
        image: "https://www.vvsupremo.com/wp-content/uploads/2015/09/Skirt-Steak-Quesadilla-HC.jpg"
      },
      {
        name: "Huarache",
        description: "Base de maíz con frijol, lechuga, queso, crema, cebolla y cilantro",
        options: ["Chorizo","Chistorra","Bistec","Arrachera","Picaña","Pollo","Guisos de la huerta","Champiñones"],
        price: 115,
        image: "https://as2.ftcdn.net/jpg/01/22/57/83/1000_F_122578313_glgh7fbGlgOSQZyS9qRNrDsXgE2DLowr.jpg"
      },
      {
        name: "Taco torteado",
        description: "Tortilla mediana recién hecha",
        options: ["Pollo","Arrachera","Bistec","Chorizo","Picaña","Chicharrón rojo","Chicharrón verde","Champiñón"],
        price: 35,
        image: "https://elmejortaco.es/html5Upload/server/php/files/medium/02tacosmargaritacabroun1.jpg"
      },
      {
        name: "Taco de frijol refrito",
        description: "Tortilla mediana recién hecha",
        price: 25,
        image: "https://64.media.tumblr.com/2d1eabd15db979a58ae0793ceb5f9ebd/4c5b031a088e3018-5b/s1280x1920/70cbe43ccd752c78c3b6cf8dcf136882e749c1ba.jpg"
      },
      {
        name: "Pellizcada",
        description: "Tortilla gruesa con queso gratinado",
        options: ["Chorizo corona","Arrachera","Picaña","Pollo","Champiñones","Chistorra","Mixto (máx 2)"],
        price: 60,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqB5pckmfJlh3KCFNUWC2m9lsLUGD6MhuqQ&s"
      }
    ]
  },

  // ================= MOLLETES (YA DESGLOSADOS) =================
  {
    category: "Molletes",
    description: "2 mitades de bolillo grande",

    subcategories: [
{
  name: "Dulces",
  items: [
     { name: "Mollete Azucarado", description: "Mantequilla, azúcar y canela", price: 55, image: "https://img.freepik.com/fotos-premium/molletes-dulces-bolillo-mantequilla-azucar-comida-tradicional-mexicana_338367-3107.jpg" },
      { name: "Mollete Endulzado", description: "Mantequilla con mermelada, miel, cajeta, etc.", price: 65, image: "https://www.cocinadelirante.com/800x600/filters:format(webp):quality(75)/sites/default/files/images/2022/09/molletes-dulces-con-mermelada.jpg" },
      { name: "Mollete Nata", description: "Nata, azúcar y canela", price: 70, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8_OP4PR7J1hystfTY9EJq299lwO5Ra65mA&s" },
      { name: "Mollete Volcano", description: "Mantequilla, fresa y crema de avellanas", price: 80, image: "https://i0.wp.com/thehappening.com/wp-content/uploads/2018/07/receta-molletes-dulces-fruta-nutella.jpg?fit=1024%2C694&ssl=1" },
  ]

},
{
  name:"salados",
      items: [
      { name: "Mollete Sencillo", description: "Frijoles y queso", price: 55, image: "https://i.pinimg.com/736x/3f/65/be/3f65bed55cd8d46136c19d14eed49894.jpg" },
      { name: "Mollete Especial", description: "Frijol, queso y proteína", price: 80, image: "https://editorialtelevisa.brightspotcdn.com/4e/c3/253d03ab47f9b20ec754eb6ae0d9/molletes-de-chorizo-y-queso.JPG" },
      { name: "Mollete Mexa", description: "Frijol, queso, chorizo, morrón, elote y arrachera", price: 85, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y-y-u8mhDxrMi1gAJn82rkby9PriB4EaHg&s" },
      { name: "Mollete Regio", description: "Frijol, queso, tocino, chistorra y arrachera", price: 90, image: "https://bafar.com/wp-content/uploads/2023/06/recetas-featured-molletes.jpg" },
      { name: "Mollete Huerta", description: "Frijol, queso, champiñón, morrón, elote y espinaca", price: 90, image: "https://cdn.avena.io/avena-recipes-v2/2025/08/1755821812653.jpeg" }
    ]
}


    ]

  },

  {
  category: "Entre panes",
  items: [
    {
      name: "Club sándwich",
      description: "Dos sándwich de pan de masa madre, jamón, queso, lechuga, mayonesa, jitomate, aguacate y cebolla acompañado de papas a la francesa",
      price: 130,
      image: "https://images.unsplash.com/photo-1553909489-cd47e0907980"
    },
    {
      name: "Sándwich de pollo",
      description: "Pan de masa madre con 70g de pollo a la plancha, 30g de panela, espinaca, aguacate, jitomate, cebolla y aderezo, acompañado de papas a la francesa",
      price: 120,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPh5C8epThAlh8wvX2o8B8Gr8cTaIQjSlhzA&s"
    },
    {
      name: "Croissant de jamón",
      description: "Relleno de jamón, queso gouda y lechuga acompañado de ensalada verde o papas a la francesa",
      price: 100,
      image: "https://cuina.com.mx/wp-content/uploads/2024/06/croissant-jamon-y-queso.jpg"
    },
    {
      name: "Croissant de pollo",
      description: "Relleno de 70g de pechuga de pollo, panela, espinaca, aguacate y aderezo acompañado de ensalada verde o papas a la francesa",
      price: 135,
      image: "https://www.unileverfoodsolutions.es/dam/global-ufs/mcos/spain/acm/selling-story-calcmenu/Croissant%20de%20ensalada%20de%20pollo.jpg"
    },
    {
      name: "Croissant de atún",
      description: "Relleno de 70g de atún a la plancha, espinaca, aguacate y aderezo acompañado de ensalada verde o papas a la francesa",
      price: 160,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGS6jHXEIfSdzDcmyzMgHABpVVZBU1RMYOQ&s"
    },
    {
      name: "Toast de huevo",
      description: "2 piezas de pan semi tostado con cremoso de aguacate y huevo (revuelto o estrellado)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJpinhcEKtOV920KHSS3TsZiHYyaZq4TwaRQ&s"
    },
    {
      name: "Toast de panela",
      description: "2 piezas de pan semi tostado",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEPLP_lvKR9QhluiQjCzfQsSmYz_eep18HQ&s"
    },
    {
      name: "Toast de salmón",
      description: "2 piezas de pan semi tostado",
      image: "https://www.shutterstock.com/image-photo/bruschetta-salmon-on-white-background-260nw-2686420797.jpg"
    }
  ]
},
{
  category: "Chilaquiles",
  description: "100 gramos (Acompañados de frijoles refritos)",
  items: [
    {
      name: "Chilaquiles sencillos",
      image: "https://www.cardamomo.news/img/2022/10/17/chilaquiles_sin_freir.jpg?__scale=w:1200,h:600,t:2",
      options: [
        { label: "Rojos/Verde", price: 85 },
        { label: "Poblanos", price: 95 }
      ]
    },
    {
      name: "Chilaquiles con huevo (2 piezas)",
      description: "Huevo estrellado, revuelto o cocido",
      image: "https://tofuu.getjusto.com/orioneat-local/resized2/REJdYyCbdDrfueZBr-2400-x.webp",
      options: [
        { label: "Rojos/Verde", price: 115 },
        { label: "Poblanos", price: 125 }
      ]
    },
    {
      name: "Chilaquiles con huevo y preparación especial",
      description: "Jamón, a la mexicana, divorciados, rancheros, chorizo, tocino, machaca o salchicha (2 huevos)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5d9yholBf3pHhVZ1Li5O-5dHd46KpjBxzVg&s",
      options: [
        { label: "Rojos/Verde", price: 130 },
        { label: "Poblanos", price: 140 }
      ]
    },
    {
      name: "Chilaquiles con arrachera, pollo o picaña",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbM9gw6tHCRnZkFqw8FbbXuR37tVDPZDfmfw&s",
      options: [
        { label: "Rojos/Verde", price: 135 },
        { label: "Poblanos", price: 145 }
      ]
    }
  ]
},

{
  category: "Platillos La Huerta",
  description: "Acompañados de frijol refrito y chilaquiles",
  items: [
    {
      name: "Hígado encebollado",
      description: "120 gramos de hígado de res guisado con cebolla blanca",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hTK5oahmHQSmxs-PJ8yXEKvvHjpyoRvc7A&s"
    },
    {
      name: "Carne con chile",
      description: "120 gramos de fajitas de res, guisadas en salsa roja de la casa",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DTxgVDdYhcu-DHEkVcUHJWcC2R9D7al9yA&s"
    },
    {
      name: "Lengua en salsa verde",
      description: "120 gramos de lengua de cerdo, guisada en una deliciosa salsa verde",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrkQCv2F5qGg1nNoEMWMYaINY3GfyKrgz8A&s"
    },
    {
      name: "Chicharrón en salsa",
      description: "120 gramos de chicharrón en salsa roja o verde",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8FBFDJsxZEY5Dwe_l0z3BHx5BaGSAeSl5A&s",
      options: [
        { label: "Con chilaquiles rojo o verde", price: 130 },
        { label: "Con chilaquiles poblanos", price: 140 }
      ]
    }
  ]
},

{
  category: "Especialidades",
  items: [
    {
      name: "Arrachera",
      description: "250g de arrachera en fajitas acompañado de ensalada verde, frijol refrito, chorizo corona y chilaquiles (rojos o verde)",
      price: 175,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqOMAgpyevYY-R2qTvcAcSZpkPA1RyYgyiQ&s"
    },
    {
      name: "Fajitas de pollo",
      description: "250 gr de fajitas de pollo salteadas con rajas de poblano y cebolla morada, acompañados con ensalada verde, frijol refrito, panela y chilaquiles (Rojos o verdes)",
      price: 175,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJT6J2k462yocMybFyRXDwwiwVE_Hb5TTkg&s"
    },
    {
      name: "Desayuno americano",
      description: "2 piezas de hotcakes, 2 huevos estrellados o revueltos, 2 tiras de tocino, miel de maple y 150gr de fruta de temporada",
      price: 145,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2v8rvzfQVzvgSyd0B8ej1WuaAFYcbgU8Og&s"
    },
    {
      name: "Enchiladas rojas",
      description: "3 piezas rellenas de pollo bañadas en salsa roja",
      price: 115,
      image: "https://www.vvsupremo.com/wp-content/uploads/2016/02/900X570_Red-Enchiladas-Suizas.jpg"
    },
    {
      name: "Enchiladas suizas",
      description: "3 piezas de pollo gratinadas, bañadas en una salsa verde",
      price: 125,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-eqhydYfdU_hGiU2jew-TXxWtd0Om1yHucg&s"
    }
  ]
},
{
  category: "Omelettes",
  items: [
    {
      name: "Omelette de carnes frías",
      description: "2 huevos con queso, salchicha y jamón + 2 complementos",
      price: 115,
      image: "https://images.sabroson.com.mx/insecure/fit/300/300/ce/0/plain/https://sabroson-assests.s3.us-west-2.amazonaws.com/af268c/prods/bWEPP0MM0EnnB5RsuWlzq2H9Zo4WBro8FasDjPO0.jpg@webp"
    },
    {
      name: "Omelette veggie",
      description: "2 piezas de huevo, relleno de queso gratinado, salchicha y jamón, acompañado de 2 complementos (Ensalada verde, frijol refrito o chilaquil verde o rojo)",
      price: 130,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JHnNSFmCnbFiyawuN-ATy4Ru7ykS8KpYOw&s"
    },
    {
      name: "Omelette suizo",
      description: "2 piezas de huevo, relleno de pollo y queso gratinado, bañado en una salsa verde cremosa, acompañado de 2 complementos (Frijol refrito, ensalada verde o chilaquil)",
      price: 135,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRit0zZ-kIrBg29MPFriYx4WtCyHRy-P0Dg&s"
    }
  ]
},

{
  category: "Ensaladas",
  items: [
    {
      name: "Ensalada venecia",
      description: "(base lechuga, panela, cacahuate, pollo o huevo cocido, fresa, aguacate vinagreta y aderezo) ",
      price: 125,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDqqIpO107jaNZC90mjRwW3fFy1o1TZWEHA&s"
    },
    {
      name: "Ensalada griega",
      description: "(base de lechuga, espinaca, zanahoria, arandano, almendra fileteada pollo o huevo, yogurt griego)",
      price: 140,
      image: "https://veggiefestchicago.org/wp-content/uploads/2021/06/21-salad.jpg"
    },
    {
      name: "Ensalada Poseidon",
      description: "(Base de lechuga, salmon o atun a la plancha, mix de frutos secos, apio, manzana roja, aguacate vinagreta)",
      price: 290,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDzSHivPUrNeAcVA6QMfL-CLxTIKrvCnffw&s"
    }
  ]
},

{
  category: "Hotcakes",
  items: [
    {
      name: "Tradicionales con fruta",
      description: "(2 hotcakes acompañados de 100 gramos de fruta de temporada)",
      price: 120,
      image: "https://source.unsplash.com/800x600/?pancakes&sig=18"
    },
    {
      name: "Fresas con crema",
      description: "2 hotcakes bañados con fresas con crema)",
      price: 135,
      image: "https://source.unsplash.com/800x600/?pancakes,strawberry&sig=19"
    },
    {
      name: "Hotcakes de avena",
      description: "(2 hotcakes hechos con harina de avena, yogurt griego, chía, linaza, aceite de aguacate acompañados de miel de agave y 100 gramos de fruta de temporada) ",
      price: 145,
      image: "https://source.unsplash.com/800x600/?healthy,pancakes&sig=20"
    }
  ]
},
{
  category: "Pan francés",
  description: "2 rebanadas de pan de masa madre",
  items: [
    {
      name: "Frutos rojos",
      description: "Rellena de mermelada de frutos rojos de la casa, coronado con laminas de fresa, acompañado de 2 bolas de helado",
      price: 140,
      image: "https://source.unsplash.com/800x600/?french,toast&sig=21"
    },
    {
      name: "Nutella y fresas",
      description: "Rellena de crema de avellanas, coronado de laminas de fresa, acompañado de 2 bolas de helado",
      price: 140,
      image: "https://source.unsplash.com/800x600/?nutella,toast&sig=22"
    },
    {
      name: "Churro",
      description: "Espolvoreados de azúcar con canela, decorado con salsa de caramelo, chocolate kínder y dos bolas de nieve",
      price: 150,
      image: "https://source.unsplash.com/800x600/?dessert,toast&sig=23"
    },
    {
      name: "Malvavisco",
      description: "Relleno de bombón fundido, coronado con plátano, bombón flameado, cajeta y 2 bolas de nieve",
      price: 150,
      image: "https://source.unsplash.com/800x600/?marshmallow,dessert&sig=24"
    }
  ]
},







  // ================= INFANTIL =================
  {
    category: "Infantil",
    items: [
      {
        name: "Mini club sándwich",
        description: "Pan de masa madre relleno de queso fundido y jamón, opcional con verduras: lechuga, jitomate, cebolla, acompañado con papas a la francesa",
        price: 65,
        image: "https://images.unsplash.com/photo-1553909489-cd47e0907980"
      },
      {
        name: "Americano Jr",
        description: "Hotcake 1 pz, 1 huevo estrellado o revuelto y 50gr de fruta de temporada",
        price: 85,
        image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
      },
      {
        name: "Granjerito",
        description: " huevo al gusto, salchipapas, chilaquiles",
        price: 60,
        image: "https://images.unsplash.com/photo-1600891963935-c1c0d9a1f9f5"
      },
      {
        name: "Emplumado",
        description: "120gramos de Fajitas de pechuga a la plancha o empanizada) acompañado de papas a la francesa",
        price: 85,
        image: "https://images.unsplash.com/photo-1606755962773-d324e9a13086"
      }
    ]
  },


  {
  category: "Bebidas",
  items: [
    {
      name: "Café de olla refill",
      description: "Hecho con café de especialidad de origen local, piloncillo y perfumado con especias de la casa",
      price: 45,
      image: "https://source.unsplash.com/800x600/?coffee&sig=25"
    },
    {
      name: "Café americano refill",
      description: "Hecho con café de especialidad de origen local mediante método de recirculación",
      price: 40,
      image: "https://source.unsplash.com/800x600/?black,coffee&sig=26"
    },
    {
      name: "Café descafeinado refill",
      description: "Café soluble",
      price: 30,
      image: "https://source.unsplash.com/800x600/?coffee,cup&sig=27"
    },
    {
      name: "Té de sobre",
      description: "Manzanilla, hierbabuena, negro o verde",
      price: 25,
      image: "https://source.unsplash.com/800x600/?tea&sig=28"
    },
    {
      name: "Vaso de leche",
      description: "Entera o deslactosada",
      price: 28,
      image: "https://source.unsplash.com/800x600/?milk&sig=29"
    },
    {
      name: "Agua fresca del día refill",
      price: 30,
      image: "https://source.unsplash.com/800x600/?fresh,drink&sig=30"
    },
    {
      name: "Vaso de jugo (335 ml)",
      description: "Verde, naranja, zanahoria, betabel o combinado",
      price: 48,
      image: "https://source.unsplash.com/800x600/?juice&sig=31"
    },
    {
      name: "Litro de jugo",
      description: "Verde, naranja, zanahoria, betabel o combinado",
      price: 70,
      image: "https://source.unsplash.com/800x600/?juice,bottle&sig=32"
    },
    {
      name: "Licuado 500 ml",
      description: "Frutos rojos, plátano, fresa o manzana canela (leche entera o deslactosada)",
      price: 55,
      image: "https://source.unsplash.com/800x600/?smoothie&sig=33"
    },
    {
      name: "Chocomilk 500 ml",
      description: "Leche entera o deslactosada",
      price: 60,
      image: "https://source.unsplash.com/800x600/?chocolate,milk&sig=34"
    },
    {
      name: "Naranjada 500 ml",
      price: 45,
      image: "https://source.unsplash.com/800x600/?orange,drink&sig=35"
    },
    {
      name: "Limonada 500 ml",
      price: 45,
      image: "https://source.unsplash.com/800x600/?lemonade&sig=36"
    },
    {
      name: "Refresco Coca 600 ml",
      description: "Coca, Coca Zero, Coca Light, Fanta, Sprite, Sidral Mundet, Fresca",
      price: 32,
      image: "https://source.unsplash.com/800x600/?soda&sig=37"
    },
    {
      name: "Refresco Pepsi 600 ml",
      description: "Pepsi, 7Up, Mirinda, Manzanita, Squirt",
      price: 32,
      image: "https://source.unsplash.com/800x600/?soft,drink&sig=38"
    },
    {
      name: "Tonicol 600 ml",
      price: 35,
      image: "https://source.unsplash.com/800x600/?soda,bottle&sig=39"
    },
    {
      name: "Topo Chico 600 ml",
      price: 33,
      image: "https://source.unsplash.com/800x600/?mineral,water&sig=40"
    },
    {
      name: "Fuze Tea 600 ml",
      price: 31,
      image: "https://source.unsplash.com/800x600/?iced,tea&sig=41"
    },
    {
      name: "Botella de agua natural Ciel 600 ml",
      price: 15,
      image: "https://source.unsplash.com/800x600/?water,bottle&sig=42"
    },
    {
      name: "Powerade 500 ml",
      price: 37,
      image: "https://source.unsplash.com/800x600/?sports,drink&sig=43"
    },
    {
      name: "Electrolit 625 ml",
      price: 33,
      image: "https://source.unsplash.com/800x600/?electrolyte,drink&sig=44"
    }
  ]
},

  // ================= MENÚ TARDE =================
  {
    category: "Menú de la tarde",
    items: [
      {
        name: "Parrillada",
        description: "Arrachera en tasajo picaña en tasajo, chistorra, chorizo corona, quesadilla, sope, queso fundido, nopales, cebolla cambray, chile jalapeño y guacamole",
        price: 850,
        image: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee"
      },
      {
        name: "Media parrillada",
        price: 500,
        image: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee"
      }
    ]
  }
];