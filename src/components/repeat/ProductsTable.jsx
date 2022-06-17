import products from '../../data/product';
const product = products.map((product) => {
    return(
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>R$ {product.price.toFixed(2).replace('.', ',')}</td>
        </tr>
    );
});

export default function ListProducts(){
    return (
        <div>
           <table style={{width: '100%'}}>
            <thead>

                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                </tr>
            </thead>
                <tbody>
                    {product}
                </tbody>
           </table>
        </div>
    );
};