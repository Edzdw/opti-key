import Swal from 'sweetalert2';

export function normalAlert(title, icon) {
    Swal.fire({
        title: title,
        icon: icon,
        timer: 3000,
        position: 'top-end',
        showConfirmButton: false
    });
};