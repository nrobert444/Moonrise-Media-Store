import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESET,
  PRODUCT_LIST_DVD_REQUEST,
  PRODUCT_LIST_DVD_SUCCESS,
  PRODUCT_LIST_DVD_FAIL,
  PRODUCT_LIST_BLURAY_REQUEST,
  PRODUCT_LIST_BLURAY_SUCCESS,
  PRODUCT_LIST_BLURAY_FAIL,
  PRODUCT_LIST_GAMES_REQUEST,
  PRODUCT_LIST_GAMES_SUCCESS,
  PRODUCT_LIST_GAMES_FAIL,
  PRODUCT_TOP_FAIL,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_REQUEST
} from '../constants/productContstants'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: []
      }
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page
      }
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
export const productListDvdReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_DVD_REQUEST:
      return {
        loading: true,
        products: []
      }
    case PRODUCT_LIST_DVD_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page
      }
    case PRODUCT_LIST_DVD_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
export const productListBlurayReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_BLURAY_REQUEST:
      return {
        loading: true,
        products: []
      }
    case PRODUCT_LIST_BLURAY_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page
      }
    case PRODUCT_LIST_BLURAY_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
export const productListGameReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_GAMES_REQUEST:
      return {
        loading: true,
        products: []
      }
    case PRODUCT_LIST_GAMES_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page
      }
    case PRODUCT_LIST_GAMES_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state
      }
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload
      }
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
export const productDeleteReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return {
        loading: true
      }
    case PRODUCT_DELETE_SUCCESS:
      return {
        loading: false,
        success: true
      }
    case PRODUCT_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return {
        loading: true
      }
    case PRODUCT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload
      }
    case PRODUCT_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case PRODUCT_CREATE_RESET:
      return {}
    default:
      return state
  }
}
export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return {
        loading: true
      }
    case PRODUCT_UPDATE_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        success: true
      }
    case PRODUCT_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case PRODUCT_UPDATE_RESET:
      return {
        product: {}
      }
    default:
      return state
  }
}

export const productTopReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
