import ShoppingCart from "../ShoppingCart/Shoppingcart"
import './NavBar.css'

const NavBar = () => {
    return (
        <nav class="nav nav-pills flex-column flex-sm-row">
             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
            
        
  <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">opcion 1</a>
  <a class="flex-sm-fill text-sm-center nav-link text-light" href="#">opcion 2</a>
  <a class="flex-sm-fill text-sm-center nav-link text-light" href="#">opcion 3</a>
  <a class="flex-sm-fill text-sm-center nav-link text-light" href="#">opcion 4</a>

  <ShoppingCart/>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
        </nav>
    )
}

export default NavBar