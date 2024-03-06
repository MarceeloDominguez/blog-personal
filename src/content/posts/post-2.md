---
title: "Ejemplo de uso del hook useEffect en React"
description: "El hook useEffect de React se utiliza para manejar efectos secundarios en componentes funcionales. Los efectos secundarios son operaciones que no deben interferir con la representación del componente, como la obtención de datos de una API, la suscripción a eventos o la manipulación del DOM."
publishedAt: 2024-03-07
slug: "segundo-post"
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
        <span id="color-secondary" class="font-outfit text-sm">6 de marzo de 2024</span
      >       
</div>

# Ejemplo de uso del hook useEffect en React

<p id="color-secondary">El hook <b>useEffect</b> de React se utiliza para manejar efectos secundarios en componentes funcionales. Los efectos secundarios son operaciones que no deben interferir con la representación del componente, como la obtención de datos de una API, la suscripción a eventos o la manipulación del DOM.</p>
<p id="color-secondary">La función useEffect acepta dos argumentos: una función que contiene el código del efecto secundario y una matriz de dependencias opcional. La función del efecto secundario se ejecuta después de que el componente se haya renderizado y, opcionalmente, cada vez que las dependencias especificadas cambien.
</p>

**_Código de ejemplo:_**

```javascript
import React, { useState, useEffect } from "react";

function ComponentExample() {
  const [posts, setPosts] = useState([]);

  // Efecto secundario para cargar datos cuando el componente se monta
  useEffect(() => {
    // Llamada a una API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();

        setPosts(data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    // Llamar a la función para cargar datos
    fetchData();
  }, []); // La matriz de dependencias está vacía,

  return <div>{/* Renderizar los datos si están disponibles */}</div>;
}

export default ComponentExample;
```

<p id="color-secondary">En este ejemplo, el efecto secundario se encarga de cargar datos de una API cuando el componente se monta por primera vez. La matriz de dependencias está vacía, por lo que el efecto se ejecutará solo una vez, al montar el componente. Si se incluyen dependencias en la matriz, el efecto se ejecutará cada vez que esas dependencias cambien. Esto ayuda a manejar casos en los que necesitas actualizar el componente en respuesta a cambios específicos.</p>
