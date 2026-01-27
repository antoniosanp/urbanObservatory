import { registrarUsuario } from "../store/store.js"
import { validarUsuario } from "../store/store.js"
export function registrar() {
    return `
    <main class="auth-body">
        <section class="scl">
        <form action="" class="formm" id='registerForm'>
        <h2 class='cen' >Registra nuevo Usuario</h2>

            <div>
            <label for="email">Correo</label>
            <input id="email" type="email" placeholder="Ingresa tu correo" required>
            </div>

            <div>
            <label for="password">Contraseña</label>
            <input id="password" type="password" placeholder="••••••••" required>
            </div>

            <button type="submit">Crear Usuario</button>
        </form>
    </section>
    </main>
    `
}

document.addEventListener('submit',async (e) => {
    e.preventDefault()
    if (e.target.id == 'registerForm') {

        const form = e.target
        const name = form.querySelector('#email')
        const password = form.querySelector('#password')
        if (await validarUsuario(name.value)) {
            console.log(validarUsuario(name.value));
            
            name.value = ''
            password.value = ''
            return
        }
        registrarUsuario({ user: name.value, password: password.value });
        name.value = ''
        password.value = ''
    }
})
