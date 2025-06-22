import { Routes } from '@angular/router';
import { Login } from './login/login';
import { RegisterUser } from './register-user/register-user';
import { User } from './user/user';
import { Cart } from './cart/cart';
import { Main } from './main/main';
import { Electronics } from './electronics/electronics';
import { Homefurniture } from './homefurniture/homefurniture';
import { HomeAppliance } from './home-appliance/home-appliance';
import { Toys } from './toys/toys';
import { Clothing } from './clothing/clothing';
import { Books } from './books/books';
import { CategoryList } from './category-list/category-list';
import { Profile } from './profile/profile';
import { AuthguardService } from './services/Authguard.guard';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'registeruser', component: RegisterUser },
    {
        path: 'user',
        component: User , canActivate: [AuthguardService],
        children: [
            { path: 'cart', component: Cart},
            { path: '', component: Main},
            { path: 'electronics', component: Electronics},
            { path: 'homefurniture', component: Homefurniture},
            { path: 'homeappliances', component: HomeAppliance},
            { path: 'toys', component: Toys},
            { path: 'clothing', component: Clothing },
            { path: ' books', component: Books},
            { path: 'category', component:CategoryList},
            { path: 'profile', component: Profile} ]
    }
];
