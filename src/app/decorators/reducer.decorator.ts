import {Reducer, ReducersMapObject, AnyAction} from 'redux';

const memorize: {[name: string]: {[name: string]: Function}} = {};

export function reducer(
  name: any
): PropertyDecorator {
  return function decorate(target: any, key: string | symbol | number, descriptor?: PropertyDescriptor): void {

    const className = target.constructor.name;
    if (!!descriptor && descriptor.value instanceof  Function) {

      if (!(className in memorize)) {
        memorize[className] = {};
      }

      memorize[className][name] = descriptor.value;
    }
  };
}

export abstract class ActionReducer<S> {

  public createReducers(): Reducer<S> {
    const className = this.constructor.name;
    return function reducer(state: S = this.getStartingState(), action: AnyAction ) {

      if (className in memorize && action.type in memorize[className]) {
        return memorize[className][action.type](state, action);
      }

      return state;
    }.bind(this);
  }

  public abstract getStartingState(): S;
}
