

//sweeet alerts
function GuardarSwet(opcion)
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
            const formulario = document.getElementById(opcion);
            formulario.submit();
        }

    });
}



function eliminarservicios(opcion) {
    event.preventDefault();
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
                allowOutsideClick: false,
                allwEscapeKey: false

            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = opcion.href;
                }
            });

        }
    });
}
function eliminaratenciones(opcion) {
    event.preventDefault();
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
                allowOutsideClick: false,
                allwEscapeKey: false

            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = opcion.href;
                }
            });

        }
    });
}
function ActualizarAlert() {
    event.preventDefault();
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
        allowOutsideClick: false,
        allwEscapeKey: false
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Saved!',
                text: '',
                icon: 'success',
                allowOutsideClick: false,
                allwEscapeKey: false
            }).then((result) => {
                if (result.isConfirmed) {
                    const formulario = document.getElementById("actualizarservicios");
                    formulario.submit();
                }
            })
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    });
}
//modales 
function modal()
{
    const exampleModal = document.getElementById('modalActualizar')
    exampleModal.addEventListener('show.bs.modal', event => {

        const button = event.relatedTarget

        const id = button.getAttribute('data-bs-id');
        const nombres = button.getAttribute('data-bs-nombre');
        const precio = button.getAttribute('data-bs-precio');

        const campoId = document.getElementById('id1');
        const campoNombres = document.getElementById('nom1');
        const campoPrecio = document.getElementById('pre1');

        campoId.value = id;
        campoNombres.value = nombres;
        campoPrecio.value = precio;
    });
}


function modalAtencion()
{
    const modalAgregarAtencion = document.getElementById('modalAgregarAtencion');
    modalAgregarAtencion.addEventListener('show.bs.modal', event => {

        const button = event.relatedTarget;

        const servicio = button.getAttribute('data-bs-servicio');
        const precio = 12;//button.getAttribute('data-bs-prec');
        const igv = precio * .18;
        const total = precio + igv;

        const campoMascota = document.getElementById('masc'); // nombres de los id en el campo del modal
        const campoServicio = document.getElementById('ser');
        const campoPrecio = document.getElementById('prec2');
        const campoigv = document.getElementById('igv');
        const campototal = document.getElementById('total');

        campoServicio.value = servicio;
        //campoPrecio.value = precio;
        campoigv = igv;
        campototal = total;
    });
}

function cargarFunciones() {
    modalAtencion();
    modal();
}

