import Swal from 'sweetalert2';

const CustomAlertSuccess = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'success',
    confirmButtonColor: '#059742',
    confirmButtonText: 'OK'
    //showConfirmButton: false
    //timer: 2000
  });
};

export default CustomAlertSuccess;