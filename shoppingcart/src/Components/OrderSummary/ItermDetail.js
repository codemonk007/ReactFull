import React from 'react';
const ItemDetail = (props) => {
    console.log("[itemDetails]", props);

    return (
        <React.Fragment>
            <tr>
                <th>image</th>
                <th>name</th>
                <th>catagory</th>
            </tr>
                {
                    props.details.showDetails ?
                        props.details.details.map(Element => {
                            return (
                                <tr key={Element.id}>
                                    <React.Fragment key={Element.id}>
                                <td style={{ "border": "none" }}>
                                    <img 
                                    style={{"width":"25%","height":"35%"}}
                                    src={Element.imageurl} alt="No image"></img>
                                </td>
                                <td style={{ "border": "none" }}>image</td>
                                <td style={{ "border": "none" }}>image</td>
                                </React.Fragment>
                                </tr>
                            )}):null
                }
        </React.Fragment>
    )
}
export default ItemDetail;