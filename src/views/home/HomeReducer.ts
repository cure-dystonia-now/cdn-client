"use strict";

import { Action, Reducer } from 'redux';
import { HomeState, InitialHomeState } from "./HomeState";
import { LOADING } from "./HomeConstants";

/**
 * HomeReducer
 * @author Aaron J. Shapiro <aaron@shappiro.com>
 * @param state {HomeState}
 * @param action {Action}
 * @constructor
 */
export const HomeReducer: Reducer<HomeState> = (state: HomeState = InitialHomeState, action: Action): HomeState => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};