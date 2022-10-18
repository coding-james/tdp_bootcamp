function ListItems({ name, qty }) {
    return (
        <>
            <p>
                {`${name} (${qty})`}
            </p>
        </>
    )
}

export default ListItems;