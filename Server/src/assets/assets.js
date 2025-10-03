import DM_LOGO from "./DM_LOGO.png"
import SAVORTHEFALVOR_LOGO from "./SAVORTHEFALVOR_LOGO.png"
import searsh_icon from './searsh_icon_logo.jpeg'

import logo from './logo.png'
import clos from './clos.png'
import panier from './panier.png'
import search from './search.png'
import plate from './plate.png'
import icon_espace_personnel from './icon_espace_personnel.png'
import chicken from "./chiken2.jpg"
import logo_menu_pizza   from './pizza3.avif'
import logo_menu_sandwich   from './sandwish3.jpg'
import logo_menu_lemonad   from './sprite.jpeg'
import logo_menu_jus   from './boisson.jpeg'
import logo_menu_meet   from './meet.jpeg'
import logo_menu_desert   from './dessert3.jpeg'
import logo_menu_cake   from './cake4.jpg'
import logo_menu_salade   from './salad3.jpg'
import logo_menu_tacos   from './tacos3.jpeg'

import add_icon_green from './add_icon.png'
import add_icon_white from './add_icon.png'
import remove_icon_red from './minus_icon.jpeg'
import rating_stars from './rating_stars.jpeg'


import food_1 from './milk_shake.jpeg'
import food_2 from './milk_shake_choco4.jpg'
import food_3 from './milk_shake_banana.jpg'
import food_4 from './food_4.jpeg'
import oip from './OIP.jpeg'

import salad_c from './salade_cesar6.jpg'
import salad_i from './salade_italien.jpeg'
import salad_a from './salade_americain.jpeg'

import pizza_d from './pizza_deluxe.jpeg'
import pizza_v from './pizza_vegan.jpg'
import pizza_i from './pizza_italien.png'

import tele from './tele.jpg'
import instagram from './instagram.jpeg'
import x from './x.jpeg'
import email from './email.webp'
import close from './clos.png'



import cart_icon from './cart_icon3.png'

//this file content a pictures and icons  used for project
//import a icons from source and get it a name using liste {assests}
 export const assets = {
    DM_LOGO,
    SAVORTHEFALVOR_LOGO,
    searsh_icon,
    logo,
    clos,
    search,
    panier,
    plate,
    icon_espace_personnel,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    rating_stars,
    food_1,
    food_2,
    food_3,
    food_4,
    cart_icon,
    oip,
    tele,
    instagram,
    x,
    email,
    close
};
export const assets_Menu=[
        {
                menu_item:logo_menu_desert,
                menu_name:'Dissert'
        }   ,
        {
                menu_item:logo_menu_salade,
                menu_name:'Salade'
        }   ,
        {
                menu_item:logo_menu_pizza,
                menu_name:'Pizza'
        }   ,
        { 
                menu_item:logo_menu_tacos,
                menu_name:'Tacos'
        }   ,
        {
                menu_item:logo_menu_sandwich,
                menu_name:'Sandwich'
        }  , 
        {
                menu_item:logo_menu_lemonad,
                menu_name:'Lemonade'
        }   ,
        {
                menu_item:logo_menu_jus,
                menu_name:'Jus'
        }   ,
        {
                menu_item:logo_menu_meet,
                menu_name:'Meet'
        }   ,
        {
                menu_item:logo_menu_cake,
                menu_name:'Cakes'
        }   ,
        {
                menu_item:chicken,
                menu_name:'Chiken'
        },
        

        
        

]
export const food_list =[
        {
                _id:"1",
                name:"Milk Shake Fraise",
                image:food_1,
                price:12,
                description:"food provides essential for overall health and well-being",
                category:"Dissert"
        
        },

        {
                _id:"2",
                name:"Milk Shake Choco",
                image:food_2,
                price:30,
                description:"food provides essential for overall health and well-being",
                category:"Dissert"
        
        },
        {
                _id:"3",
                name:"Greek salad",
                image:food_3,
                price:12,
                description:"food provides essential for overall health and well-being",
                category:"Dissert"
        
        }
        ,{
                _id:"4",
                name:"Salad Cesar",
                image:salad_c,
                price:25,
                description:"food provides essential for overall health and well-being",
                category:"Salade"
        
        }
        ,{
                _id:"5",
                name:"Salad Italien",
                image:salad_i,
                price:30,
                description:"food provides essential for overall health and well-being",
                category:"Salade"
        
        }
        ,{
                _id:"6",
                name:"Salad Americain",
                image:salad_a,
                price:30,
                description:"food provides essential for overall health and well-being",
                category:"Salade"
        
        }
        ,{
                _id:"7",
                name:"Pizza Deluxe",
                image:pizza_d,
                price:30,
                description:"food provides essential for overall health and well-being",
                category:"Pizza"
        
        }
        ,{
                _id:"8",
                name:"Pizza Friut-De-Mer",
                image:pizza_v,
                price:30,
                description:"food provides essential for overall health and well-being",
                category:"Pizza"
        
        }
        ,{
                _id:"9",
                name:"Pizza vegitarien",
                image:pizza_i,
                price:30,
                description:"food provides essential for overall health and well-being",
                category:"Pizza"
        
        }

]