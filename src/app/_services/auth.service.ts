import { TokenStorageService } from './token-storage.service';
import { GlobalConstants } from './../global-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = GlobalConstants.apiURL;

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'auth/login', JSON.stringify({
      email: credentials.email,
      password: credentials.password,
      rememberme: 1
    }), httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'auth/signup', JSON.stringify({
      name: user.username,
      email: user.email,
      usertype: 5,
      password: user.password,
      password_confirmation: user.cpassword
    }), httpOptions);
  }

  product_insert(details): Observable<any> {
    return this.http.post(AUTH_API + 'product/insert_product', JSON.stringify ({
      username: details.username,
      email: details.email,
      product_image: details.image,
      address: details.address,
      city: details.city,
      rent_cond: details.rent_cond,
      rent_availability: details.rent_availability,
      maintenance_charge: details.maintenance_charge,
      ownership: details.ownership,
      locality: details.locality,
      possessed_by: details.possessed_by,
      price: details.price,
      deposit: details.deposit,
      available_for: details.available_for,
      type: details.type,
      bedc_oun: details.bedc_ount,
      bathroom: details.bathroom,
      garage: details.garage,
      garage_area: details.garage_area,
      balconies: details.balconies,
      add_rooms: details.add_rooms,
      addons: details.addons,
      buildyear: details.buildyear,
      amenities: details.amenities,
      equipment: details.equipment,
      features: details.features,
      nearby_places: details.nearby_places,
      area: details.area,
      description: details.description,
      registration_status: details.registration_status,
      build_name: details.build_name,
    }), httpOptions);
  }

}
