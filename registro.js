export function registrar() {
    return `
        <section class="scl">
        <form action="" class="formm">
        <h2 class='cen' >Registra nuevo Usuario</h2>

            <div>
            <label for="nombre">Nombre</label>
            <input id="nombre" type="text" placeholder="Ingresa tu usuario">
            </div>

            <div>
            <label for="correo">Correo</label>
            <input id="correo" type="text" placeholder="tu correo">
            </div>

            <button type="submit">Crear Usuario</button>
        </form>
    </section>
    `
}