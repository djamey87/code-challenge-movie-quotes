import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

interface Quote {
  id: string;
  text: string;
}

enum ActionTypes {
  LOAD_QUOTES = "LOAD_QUOTES",
  ADD_QUOTE = "ADD_QUOTE",
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
  payload: string;
}

type ProductActions = LoadQuotesAction | AddQuotesAction;

const mockDataStore = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    text: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    text: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    text: "Third Item",
  },
];

const defaultQuoteState = {
  quotes: mockDataStore,
};

function quoteReducer(state: QuoteState, action: ProductActions) {
  switch (action.type) {
    case ActionTypes.LOAD_QUOTES: {
      return { quotes: action.payload };
    }
    case ActionTypes.ADD_QUOTE: {
      // TODO: resolve id utils
      const newQuote = { text: action.payload, id: String(Math.random()) };
      return { quotes: [...state.quotes, newQuote] };
    }
    default: {
      throw new Error(`Unhandled type`);
    }
  }
}

export function useQuotes({ reducer = quoteReducer } = {}) {
  // replace with local storage
  // const { data, error } = useFetch<ProductResponse>(PRODUCTS_URL);
  const [{ quotes }, dispatch] = React.useReducer(reducer, defaultQuoteState);

  useEffect(() => {
    if (mockDataStore) {
      dispatch({ type: ActionTypes.LOAD_QUOTES, payload: mockDataStore });
    }
  }, [mockDataStore]);

  const addQuote = (text: string) =>
    dispatch({ type: ActionTypes.ADD_QUOTE, payload: text });

  return { quotes, addQuote };
}
