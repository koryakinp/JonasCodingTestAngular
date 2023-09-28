import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { allPizzaOptions, allToppingOptions } from './app.consts';
import { PizzaOffer } from './models/pizza-offer.class';
import { PizzaOption } from './models/pizza-option.class';
import { ToppingOption } from './models/topping-option.class';
import { AddTopping, RemoveTopping } from './store/actions/order.actions';
import { selectOfferForPizza } from './store/selectors/order.selector';
import { IAppState } from './store/states/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly store: Store<IAppState>) {}

  public getOffer(pizzaOption: PizzaOption): Observable<PizzaOffer> {
    return this.store
      .select(q => selectOfferForPizza(q, pizzaOption))
  }

  public readonly pizzaOptions: PizzaOption[] = allPizzaOptions;
  public readonly meatOptions: ToppingOption[] = allToppingOptions.filter(q => !q.isVegan)
  public readonly veganOptions: ToppingOption[] = allToppingOptions.filter(q => q.isVegan)

  public toppingChanged($event: any, topping:ToppingOption, pizzaOption: PizzaOption):void {
    if($event.currentTarget.checked) {
      this.store.dispatch(AddTopping({ pizzaOption: pizzaOption, topping: topping}));
    } else {
      this.store.dispatch(RemoveTopping({ pizzaOption: pizzaOption, topping: topping}));
    }
  }
}
