
export function FormIDs({ setter }) {
    const submit = (event) => {
        event.preventDefault();
        let inputValue = event.target.query.value.replaceAll(" ","");
        setter(inputValue);
    };

    return (
        <form className="form" onSubmit={submit} method="POST">
            <input className="form__input" type="text" name="query" placeholder="id1,id2,..." />
            <button className="form__submit" type="submit">Actualizar</button>
        </form>
    );
}
