import React from 'react'
import AdminLayout from '../../Layouts/AdminLayout';

const Products = () => {
  return (
    <div>Products</div>
  )
}

Products.layout = page => <AdminLayout children={page} title="Products" />

export default Products