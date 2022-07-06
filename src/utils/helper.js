export const filterByCategory = (productList,filters) => {
    let updatedList = [...productList];
    if (!filters.length) return updatedList;
    return updatedList.filter((product) => {
      return filters.includes(product.category.toLowerCase());
    })
  }