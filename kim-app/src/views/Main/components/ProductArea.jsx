import React from 'react'
import { Image } from 'semantic-ui-react'

const ProductArea = ({ data }) => {
	return (
		<div className="product-area">
			<div className="product-box">
				{
					data.map(data => {
						return(
							<div className="product"  key={data.id}>
								<div className="product-img">
									<Image src={data.download_url} alt={data.id}/>
								</div>
								<div className="product-txt">
									<p className="author">{data.author}</p>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}
export default ProductArea