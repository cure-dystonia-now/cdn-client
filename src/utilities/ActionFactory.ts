"use strict";

import { createAction } from "redux-actions";
import { Action, Dispatch } from "redux";

const STARTED_SUFFIX = "_STARTED";
const COMPLETED_SUFFIX = "_COMPLETED";
const SUCCESS_SUFFIX = "_SUCCESS";
const ERROR_SUFFIX = "_ERROR";

/**
 * ActionFactory
 * @author Aaron J. Shapiro <aaron@surefluence.com>
 */
export default class ActionFactory<Store> {

  public createAsyncAction<ResultType>(type: string, func: () => Promise<ResultType>) {
    const actions = this.getActions(type);
    return async (dispatch: Dispatch<Action<any>>, getState: () => Store, ...args: any[]) => {
      dispatch(actions["started"]());
      try {
        const promise: Promise<ResultType> = func.call(this, [dispatch, getState, ...args]);
        const payload = await promise;
        dispatch(actions["success"]({ payload }));
      }
      catch (error) {
        dispatch(actions["error"]({ error }));
      }
      finally {
        dispatch(actions["completed"]());
      }
    };
  }

  private getActions(type: string) {
    return {
      started: createAction(`${type}${STARTED_SUFFIX}`),
      error: createAction(`${type}${ERROR_SUFFIX}`),
      success: createAction(`${type}${SUCCESS_SUFFIX}`),
      completed: createAction(`${type}${COMPLETED_SUFFIX}`)
    }
  }

}