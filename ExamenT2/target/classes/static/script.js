

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
        title: 'Estas seguro de eliminar el servicio?',
        text: "No podra ser revertido!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar!'

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Eliminado!',
                text: 'Tu servicio ha sido eliminado.',
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
        title: 'Estas seguro de eliminar la atencion?',
        text: "No podra ser revertido!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar!'

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Eliminado!',
                text: 'Tu atencion ha sido eliminada',
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
        title: 'Deseas actualizar?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `No guardar`,
        allowOutsideClick: false,
        allwEscapeKey: false
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Guardado!',
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
            Swal.fire('Los cambios no se han guardado', '', 'info')
        }
    });
}
//modales 
function modal()
{
    const exampleModal = document.getElementById('modalActualizar');
    exampleModal.addEventListener('show.bs.modal', event => {

        const button = event.relatedTarget;

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
        const precio = button.getAttribute('data-bs-precio');
        const igv = (parseFloat(precio) * 0.18);
        const total = (parseFloat(precio) + igv);


        const campoServicio = document.getElementById('servicio');
        const campoPrecio = document.getElementById('precio');
        const campoigv = document.getElementById('igv');
        const campototal = document.getElementById('total');

        campoServicio.value = servicio;
        campoPrecio.value = precio;
        campoigv.value = igv;
        campototal.value = total.toFixed(2);


    });
}

function modalActualizarAtencion()
{
    const modalActualizarAtencion = document.getElementById('modalActualizarAtencion');
    modalActualizarAtencion.addEventListener('show.bs.modal', event => {

        const button = event.relatedTarget;

        const idaactual = button.getAttribute('data-bs-idactual');
        const mascotaactual = button.getAttribute('data-bs-mascotaactual');
        const servicioactual = button.getAttribute('data-bs-servicioactual');
        const precioactual = button.getAttribute('data-bs-precioactual');
        const igvactual = button.getAttribute('data-bs-igvactual');
        const totalactual = button.getAttribute('data-bs-totalactual');



        const campoidactual = document.getElementById('idatencion');
        const campomascotaactual = document.getElementById('actualmascota');
        const camposervicioactual = document.getElementById('actualservicio');
        const campoprecioactual = document.getElementById('actualprecio');
        const campoigvactual = document.getElementById('actualigv');
        const campototalactual = document.getElementById('actualtotal');

        campoidactual.value = idaactual;
        campomascotaactual.value = mascotaactual;
        camposervicioactual.value = servicioactual;
        campoprecioactual.value=precioactual;
        campoigvactual.value=igvactual;
        campototalactual.value=totalactual;

    });
}

function cargarFunciones() {
    modalAtencion();
    modal();
    modalActualizarAtencion();
    console.log("se cargaron las fuciones");
}

