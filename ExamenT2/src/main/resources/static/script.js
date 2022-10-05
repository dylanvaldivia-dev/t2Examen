function Guardarservicio()
{
    event.preventDefault();
    Swal.fire({
        title: ' Desea guardar los cambios?',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://sweetalert2.github.io/#examplesimages/trees.png)',
        backdrop: `
   rgba(0,0,123,0.4)
   url("https://gist.github.com/brudnak/aba00c9a1c92d226f68e8ad8ba1e0a40/raw/e1e4a92f6072d15014f19aa8903d24a1ac0c41a4/nyan-cat.gif")
   left top
   no-repeat
 `
    }).then((result) => {
        if (result.isConfirmed) {
            const formulario = document.getElementById("guardar");
            formulario.submit();
        }

    })
}

function modal()
{
    const exampleModal = document.getElementById('modalActualizar')
    exampleModal.addEventListener('show.bs.modal', event => {

        const button = event.relatedTarget

        const id = button.getAttribute('data-bs-id');
        const nombres = button.getAttribute('data-bs-nombre');
        const precio = button.getAttribute('data-bs-precio');

        const campoId = document.getElementById('id'); // nombres de los id en el campo del modal
        const campoNombres = document.getElementById('nom');
        const campoPrecio = document.getElementById('pre');

        campoId.value = id;
        campoNombres.value = nombres;
        campoPrecio.value = precio;

        // modalTitle.textContent = New message to ${recipient}
        // modalBodyInput.value = recipient
    })
}



