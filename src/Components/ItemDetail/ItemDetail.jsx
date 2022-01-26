import React from "react";


export default function ItemDetail({ producto }) {

    return (
        <>
            <div>
                {(producto.id) ?
                    <>{producto.id + " " + producto.nombre + " " + producto.categoria}</>
                    :
                    <>Loading...</>
                }
            </div>
        </>
    );
}