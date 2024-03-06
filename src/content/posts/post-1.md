---
title: "Ejemplo de uso del hook useState en React"
description: "En React, el hook useState se utiliza para agregar estado a los componentes funcionales. Este hook devuelve un array con dos elementos: el estado actual y una función para actualizar ese estado."
publishedAt: 2024-03-02
slug: "primer-post"
publish: true
---

<div class="flex items-center font-outfit gap-2 text-[14px] pb-2">
       <svg
       id="color-secondary"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
          d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"
        ></path><path d="M16 3v4"></path><path d="M8 3v4"></path><path
          d="M4 11h16"></path><path d="M11 15h1"></path><path d="M12 15v3"
        ></path></svg>  
        <span id="color-secondary" class="font-outfit text-sm">1 de marzo de 2024</span
      >       
</div>

# Ejemplo de uso del hook useState en React

<p id="color-secondary">En React, el hook <b>useState</b> se utiliza para agregar estado a los componentes funcionales. Este hook devuelve un array con dos elementos: el estado actual y una función para actualizar ese estado. La función de actualización puede recibir un nuevo valor o una función que calcula el nuevo valor basándose en el estado anterior.</p>

**_Ejemplo de cómo usar useState en un componente funcional de React:_**

```javascript
function Contador() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default Contador;
```

#### `1.` Importamos useState desde React.

#### `2.` Luego, en el componente Contador, usamos useState(0) para inicializar el estado del contador en 0. contador es el estado actual y setContador es la función que usaremos para actualizar ese estado.

#### `3.` Creamos una función incrementarContador que utiliza setContador para aumentar el valor del contador en 1 cada vez que se hace clic en el botón.

#### `4.` Finalmente, renderizamos el estado actual del contador y un botón que, al hacer clic, llamará a la función incrementarContador.

#### Cuando el botón se presiona, React actualizará automáticamente el componente y reflejará el nuevo valor del contador en la interfaz de usuario.

<br />
