import React, { useEffect } from "react";
import useStorage from "./useStorage";
import { array_move, generateUUID } from "../utils";

interface Quote {
  id: string;
  text: string;
  origin: string;
}

enum ActionTypes {
  LOAD_QUOTES = "LOAD_QUOTES",
  ADD_QUOTE = "ADD_QUOTE",
  UPDATE_QUOTE_POSITION = "UPDATE_QUOTE_POSITION",
}

interface QuoteState {
  quotes: Quote[];
}

interface LoadQuotesAction {
  type: ActionTypes.LOAD_QUOTES;
  payload: Quote[];
}

interface AddQuotesAction {
  type: ActionTypes.ADD_QUOTE;
  payload: Omit<Quote, "id">;
}

interface UpdateQuotePositionAction {
  type: ActionTypes.UPDATE_QUOTE_POSITION;
  payload: { currentIndex: number; targetIndex: number };
}

type ProductActions =
  | LoadQuotesAction
  | AddQuotesAction
  | UpdateQuotePositionAction;

const defaultQuoteState = {
  quotes: [],
};

function quoteReducer(state: QuoteState, action: ProductActions) {
  switch (action.type) {
    case ActionTypes.LOAD_QUOTES: {
      return { quotes: action.payload };
    }
    case ActionTypes.ADD_QUOTE: {
      const { text, origin } = action.payload;
      const newQuote = {
        text,
        origin,
        id: generateUUID(),
      };
      return { quotes: [...state.quotes, newQuote] };
    }
    case ActionTypes.UPDATE_QUOTE_POSITION: {
      const newQuoteOrder = array_move(
        state.quotes,
        action.payload.currentIndex,
        action.payload.targetIndex
      );

      return { quotes: newQuoteOrder };
    }
    default: {
      throw new Error(`Unhandled type`);
    }
  }
}

export function useQuotes({ reducer = quoteReducer } = {}) {
  const [{ quotes: storedQuotes }, updateStorage, clearStore] = useStorage(
    "@quotes_storage",
    { quotes: [] as Quote[] }
  );
  const [{ quotes }, dispatch] = React.useReducer(reducer, {
    quotes: storedQuotes,
  });

  useEffect(() => {
    if (storedQuotes) {
      dispatch({ type: ActionTypes.LOAD_QUOTES, payload: storedQuotes });
    }
  }, [storedQuotes]);

  useEffect(() => {
    updateStorage({ quotes });
  }, [quotes]);

  const addQuote = (text: string, origin: string) =>
    dispatch({ type: ActionTypes.ADD_QUOTE, payload: { text, origin } });

  const updatePosition = (currentIndex: number, targetIndex: number) =>
    dispatch({
      type: ActionTypes.UPDATE_QUOTE_POSITION,
      payload: { currentIndex, targetIndex },
    });

  return { quotes, addQuote, updatePosition };
}
