import { PRODUCT_URL, UPLOAD_URL } from '../constants';
import { apiSlice } from './apislice';

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ keyword }) => ({
        url: PRODUCT_URL,
        params: { keyword },
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Product'],
    }),

    getProductById: builder.query({
      query: (productId) => ({
        url: `${PRODUCT_URL}/${productId}`,
      }),
      providesTags: (result, error, productId) => [
        { type: 'Product', id: productId },
      ],
    }),

    allProducts: builder.query({
      query: () => ({
        url: `${PRODUCT_URL}/allproducts`,
      }),
    }),

    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCT_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    createProduct: builder.mutation({
      query: (formData) => ({
        url: PRODUCT_URL,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Product'],
    }),

    updateProduct: builder.mutation({
      query: ({ productId, formData }) => ({
        url: `${PRODUCT_URL}/${productId}`,
        method: 'PUT',
        body: formData,
      }),
    }),

    uploadProductImage: builder.mutation({
      query: (formData) => ({
        url: UPLOAD_URL,
        method: 'POST',
        body: formData,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCT_URL}/${productId}`,
        method: 'DELETE',
      }),
      providesTags: ['Product'],
    }),

    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/${data.productId}/reviews`,
        method: 'POST',
        body: data,
      }),
    }),

    getTopProducts: builder.query({
      query: () => ({
        url: `${PRODUCT_URL}/top`,
      }),
      keepUnusedDataFor: 5,
    }),

    getNewProducts: builder.query({
      query: () => ({
        url: `${PRODUCT_URL}/new`,
      }),
      keepUnusedDataFor: 5,
    }),

    getFilteredProducts: builder.query({
      query: ({ checked, radio }) => ({
        url: `${PRODUCT_URL}/filtered-products`,
        method: 'POST',
        body: { checked, radio },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAllProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
  useGetNewProductsQuery,
  useGetFilteredProductsQuery,
} = productApiSlice;
